const { Client } = require('pg');
const crypto = require('crypto');

const HASH_ITERATIONS = 120000;
const HASH_LENGTH = 32;
const HASH_DIGEST = 'sha256';

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
  },
  body: JSON.stringify(body),
});

const normalizeEmail = (email) => String(email || '').trim().toLowerCase();
const normalizePassword = (password) => String(password || '');

const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, HASH_ITERATIONS, HASH_LENGTH, HASH_DIGEST)
    .toString('hex');

  return `${HASH_ITERATIONS}:${salt}:${hash}`;
};

const verifyPassword = (password, storedHash) => {
  if (!storedHash) return false;

  const [iterations, salt, hash] = storedHash.split(':');
  if (!iterations || !salt || !hash) return false;

  const attemptedHash = crypto
    .pbkdf2Sync(password, salt, Number(iterations), HASH_LENGTH, HASH_DIGEST)
    .toString('hex');

  return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(attemptedHash, 'hex'));
};

const getClient = () => {
  const connectionString = process.env.SUPABASE_DATABASE_URL;
  if (!connectionString) {
    throw new Error('SUPABASE_DATABASE_URL is not configured');
  }

  return new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
};

exports.handler = async (event) => {
  if (!['POST', 'PUT'].includes(event.httpMethod)) {
    return json(405, { error: 'Method not allowed' });
  }

  const payload = JSON.parse(event.body || '{}');
  const email = normalizeEmail(payload.email || event.queryStringParameters?.email);
  const password = normalizePassword(payload.password);

  if (!email) {
    return json(400, { error: 'Email is required' });
  }

  if (password.length < 6) {
    return json(400, { error: 'Password must be at least 6 characters' });
  }

  const client = getClient();

  try {
    await client.connect();

    if (event.httpMethod === 'POST') {
      const result = await client.query(
        'select email, name, workspace, password_hash, updated_at from public.tracker_workspaces where email = $1 limit 1',
        [email],
      );

      const row = result.rows[0];
      if (!row) {
        return json(200, { workspace: null, isNew: true });
      }

      if (!row.password_hash) {
        const passwordHash = hashPassword(password);
        await client.query(
          'update public.tracker_workspaces set password_hash = $1 where email = $2',
          [passwordHash, email],
        );
        return json(200, { workspace: { email: row.email, name: row.name, workspace: row.workspace, updated_at: row.updated_at } });
      }

      if (!verifyPassword(password, row.password_hash)) {
        return json(401, { error: 'Incorrect email or password' });
      }

      return json(200, { workspace: { email: row.email, name: row.name, workspace: row.workspace, updated_at: row.updated_at } });
    }

    const workspace = payload.workspace;
    const name = String(payload.name || workspace?.user?.name || 'Builder').trim() || 'Builder';

    if (!workspace || !Array.isArray(workspace.projects) || !Array.isArray(workspace.tasks)) {
      return json(400, { error: 'Valid workspace is required' });
    }

    const existing = await client.query(
      'select password_hash from public.tracker_workspaces where email = $1 limit 1',
      [email],
    );

    const row = existing.rows[0];
    if (row?.password_hash && !verifyPassword(password, row.password_hash)) {
      return json(401, { error: 'Incorrect email or password' });
    }

    const passwordHash = row?.password_hash || hashPassword(password);

    await client.query(
      `insert into public.tracker_workspaces (email, name, workspace, password_hash)
       values ($1, $2, $3::jsonb, $4)
       on conflict (email)
       do update set name = excluded.name, workspace = excluded.workspace, password_hash = coalesce(tracker_workspaces.password_hash, excluded.password_hash)`,
      [email, name, JSON.stringify(workspace), passwordHash],
    );

    return json(200, { ok: true });
  } catch (error) {
    console.error(error);
    return json(500, { error: 'Tracker database request failed' });
  } finally {
    await client.end().catch(() => {});
  }
};
