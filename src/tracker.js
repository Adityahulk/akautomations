import './style.css';

const LEGACY_STORAGE_KEY = 'kalman-tracker-state-v1';
const STORE_KEY = 'kalman-tracker-store-v2';
const SESSION_KEY = 'kalman-tracker-session-email-v2';
const PASSWORD_SESSION_KEY = 'kalman-tracker-session-password-v2';
const API_ENDPOINT = '/api/tracker';
const SYNC_DEBOUNCE_MS = 450;

const starterProjects = [
  { id: 'startup', name: 'Startup', tone: 'Founder', icon: 'rocket' },
  { id: 'freelance', name: 'Freelance', tone: 'Clients', icon: 'briefcase' },
  { id: 'job', name: 'Job', tone: 'Work', icon: 'building' },
  { id: 'sales', name: 'Sales', tone: 'Pipeline', icon: 'phone' },
  { id: 'personal', name: 'Personal', tone: 'Life', icon: 'spark' },
  { id: 'habits', name: 'Habits', tone: 'Daily', icon: 'repeat' },
];

const starterTasks = [
  { title: 'Review co-founder call list', projectId: 'sales', status: 'today', priority: 'high', due: today(), notes: 'Sort hot leads and decide next actions.' },
  { title: 'Ship one startup milestone', projectId: 'startup', status: 'today', priority: 'high', due: today(), notes: 'Keep the main build moving.' },
  { title: 'Send freelance client update', projectId: 'freelance', status: 'upcoming', priority: 'medium', due: addDays(1), notes: 'Short progress note plus next delivery date.' },
  { title: 'Prepare job handoff notes', projectId: 'job', status: 'upcoming', priority: 'medium', due: addDays(2), notes: '' },
  { title: 'Workout and reading streak', projectId: 'habits', status: 'today', priority: 'low', due: today(), notes: 'Tiny daily win.' },
];

const icons = {
  rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/><path d="M12 12v2"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/>',
  spark: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
  circle: '<circle cx="12" cy="12" r="9"/>',
  calendar: '<path d="M8 2v4M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>',
  trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
};

let state = loadState();
let syncTimer;

document.querySelector('#app').innerHTML = `
  <div class="tracker-shell">
    <div class="hero-grid tracker-grid-bg"></div>
    <nav class="navbar tracker-nav">
      <div class="nav-inner">
        <a href="/" class="nav-brand">
          <div class="logo-icon"><img src="/kalman-mark.svg" alt="Kalman Labs logo" /></div>
          Kalman Tracker
        </a>
        <div class="nav-links tracker-nav-links">
          <a href="/" aria-label="Kalman Labs home">Home</a>
          <button class="tracker-icon-btn" id="logoutBtn" type="button" title="Logout" aria-label="Logout">${icon('logout')}</button>
        </div>
      </div>
    </nav>
    <main id="trackerRoot"></main>
  </div>
`;

const trackerRoot = document.querySelector('#trackerRoot');

function render() {
  if (!state.user) {
    renderLogin();
    return;
  }

  const stats = getStats();
  const selectedProject = state.activeProject === 'all'
    ? { name: 'All lanes', tone: 'Everything' }
    : state.projects.find(project => project.id === state.activeProject) || state.projects[0];
  const visibleTasks = getVisibleTasks();

  trackerRoot.innerHTML = `
    <section class="tracker-app">
      <aside class="tracker-sidebar">
        <div class="tracker-profile">
          <span class="tracker-kicker">Workspace</span>
          <h1>${escapeHtml(state.user.name)}'s command center</h1>
          <p>${stats.open} open tasks across ${state.projects.length} lanes.</p>
        </div>

        <form class="tracker-project-form" id="projectForm">
          <label for="projectName">New lane</label>
          <div class="tracker-inline-input">
            <input id="projectName" name="projectName" type="text" maxlength="24" placeholder="Investor calls" autocomplete="off" required />
            <button class="tracker-icon-btn tracker-icon-btn--light" type="submit" title="Add lane" aria-label="Add lane">${icon('plus')}</button>
          </div>
        </form>

        <div class="tracker-data-actions">
          <button class="tracker-data-btn" id="exportDataBtn" type="button">${icon('download')} Export</button>
          <label class="tracker-data-btn" for="importDataInput">${icon('upload')} Import</label>
          <input id="importDataInput" type="file" accept="application/json,.json" />
          <p>Auto-saved locally and synced to Supabase under ${escapeHtml(state.user.email)}.</p>
        </div>

        <div class="tracker-lanes" role="list">
          ${projectButton({ id: 'all', name: 'All lanes', tone: 'Everything', icon: 'layers' })}
          ${state.projects.map(project => projectButton(project)).join('')}
        </div>
      </aside>

      <section class="tracker-main-panel">
        <header class="tracker-header">
          <div>
            <span class="tracker-kicker">${selectedProject?.tone || 'Lane'}</span>
            <h2>${selectedProject ? escapeHtml(selectedProject.name) : 'Everything'}</h2>
          </div>
          <div class="tracker-header-stats">
            <div><strong>${stats.done}</strong><span>done</span></div>
            <div><strong>${stats.today}</strong><span>today</span></div>
            <div><strong>${stats.high}</strong><span>high</span></div>
          </div>
        </header>

        <div class="tracker-controls">
          ${['all', 'today', 'upcoming', 'done'].map(filter => `
            <button class="tracker-filter ${state.filter === filter ? 'active' : ''}" type="button" data-filter="${filter}">
              ${titleCase(filter)}
            </button>
          `).join('')}
        </div>

        <form class="tracker-task-form" id="taskForm">
          <input id="taskTitle" name="title" type="text" placeholder="Add a task, habit, call, deadline..." maxlength="90" autocomplete="off" required />
          <select name="projectId" aria-label="Lane">
            ${state.projects.map((project, index) => `<option value="${project.id}" ${project.id === state.activeProject || (state.activeProject === 'all' && index === 0) ? 'selected' : ''}>${escapeHtml(project.name)}</option>`).join('')}
          </select>
          <select name="priority" aria-label="Priority">
            <option value="high">High</option>
            <option value="medium" selected>Medium</option>
            <option value="low">Low</option>
          </select>
          <input name="due" type="date" value="${today()}" aria-label="Due date" />
          <button class="btn btn-primary" type="submit">${icon('plus')} Add</button>
        </form>

        <div class="tracker-board">
          <section class="tracker-list">
            <div class="tracker-list-head">
              <h3>${state.filter === 'all' ? 'Active stack' : titleCase(state.filter)}</h3>
              <span>${visibleTasks.length} items</span>
            </div>
            <div class="tracker-tasks">
              ${visibleTasks.length ? visibleTasks.map(taskCard).join('') : emptyState()}
            </div>
          </section>

          <aside class="tracker-focus">
            <div class="tracker-focus-ring" style="--progress:${stats.progress}deg">
              <div>
                <strong>${Math.round(stats.progress / 3.6)}%</strong>
                <span>closed</span>
              </div>
            </div>
            <div class="tracker-focus-copy">
              <h3>Today matters</h3>
              <p>${stats.today ? `${stats.today} task${stats.today === 1 ? '' : 's'} need attention today.` : 'Nothing due today. Nice and calm.'}</p>
            </div>
            <div class="tracker-quick-adds">
              ${quickTemplate('Lead follow-up', 'sales', 'high')}
              ${quickTemplate('Client delivery', 'freelance', 'medium')}
              ${quickTemplate('Personal goal', 'personal', 'low')}
              ${quickTemplate('Daily habit', 'habits', 'low')}
            </div>
          </aside>
        </div>
      </section>
    </section>
  `;

  bindAppEvents();
}

function renderLogin() {
  trackerRoot.innerHTML = `
    <section class="tracker-login">
      <div class="tracker-login-art" aria-hidden="true">
        <div class="tracker-mini-window tracker-mini-window--one">
          <span></span><span></span><span></span>
          <div></div><div></div><div></div>
        </div>
        <div class="tracker-mini-window tracker-mini-window--two">
          <span></span><span></span><span></span>
          <div></div><div></div>
        </div>
      </div>
      <form class="tracker-login-card" id="loginForm">
        <div class="tracker-login-brand">
          <div class="logo-icon"><img src="/kalman-mark.svg" alt="Kalman Labs logo" /></div>
          <span>Kalman Tracker</span>
        </div>
        <h1>One place for every role you are playing.</h1>
        <p>Startup, job, freelance, sales calls, meetings, goals and habits in one fast workspace.</p>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Aryan" autocomplete="name" required />
        <label for="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@company.com" autocomplete="email" required />
        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="At least 6 characters" autocomplete="current-password" minlength="6" required />
        <p class="tracker-login-note" id="loginNote">New email creates a workspace. Existing email opens only with the same password.</p>
        <button class="btn btn-primary" type="submit">Enter workspace</button>
      </form>
    </section>
  `;

  document.querySelector('#loginForm').addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const submitButton = event.currentTarget.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Opening...';

    try {
      await loginUser({
        name: String(formData.get('name')).trim() || 'Builder',
        email: String(formData.get('email')).trim(),
        password: String(formData.get('password')),
      });

      render();
    } catch (error) {
      const note = document.querySelector('#loginNote');
      if (note) note.textContent = error.message || 'Could not open this workspace.';
      submitButton.disabled = false;
      submitButton.textContent = 'Enter workspace';
    }
  });
}

function bindAppEvents() {
  document.querySelector('#projectForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = event.currentTarget.projectName;
    const name = input.value.trim();
    if (!name) return;
    const project = {
      id: crypto.randomUUID(),
      name,
      tone: 'Custom',
      icon: 'spark',
    };
    state.projects.push(project);
    state.activeProject = project.id;
    input.value = '';
    saveState();
    render();
  });

  document.querySelector('#taskForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    addTask({
      title: data.title,
      projectId: data.projectId,
      priority: data.priority,
      due: data.due,
    });
  });

  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
      state.activeProject = button.dataset.project;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      state.filter = button.dataset.filter;
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-toggle-task]').forEach(button => {
    button.addEventListener('click', () => {
      const task = state.tasks.find(item => item.id === button.dataset.toggleTask);
      if (!task) return;
      task.status = task.status === 'done' ? 'today' : 'done';
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-delete-task]').forEach(button => {
    button.addEventListener('click', () => {
      state.tasks = state.tasks.filter(item => item.id !== button.dataset.deleteTask);
      saveState();
      render();
    });
  });

  document.querySelectorAll('[data-template]').forEach(button => {
    button.addEventListener('click', () => {
      const [title, projectId, priority] = button.dataset.template.split('|');
      addTask({ title, projectId, priority, due: today() });
    });
  });

  document.querySelector('#exportDataBtn').addEventListener('click', exportWorkspace);

  document.querySelector('#importDataInput').addEventListener('change', async event => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    await importWorkspace(file);
    event.currentTarget.value = '';
  });
}

document.querySelector('#logoutBtn').addEventListener('click', () => {
  saveState();
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(PASSWORD_SESSION_KEY);
  state = signedOutState();
  render();
});

function addTask(task) {
  state.tasks.unshift({
    id: crypto.randomUUID(),
    title: String(task.title).trim(),
    projectId: task.projectId,
    status: task.due === today() ? 'today' : 'upcoming',
    priority: task.priority,
    due: task.due || today(),
    notes: task.notes || '',
    createdAt: new Date().toISOString(),
  });
  saveState();
  render();
}

function getVisibleTasks() {
  return state.tasks.filter(task => {
    const projectMatch = state.activeProject === 'all' || task.projectId === state.activeProject;
    const filterMatch = state.filter === 'all' || task.status === state.filter;
    return projectMatch && filterMatch;
  });
}

function getStats() {
  const total = state.tasks.length || 1;
  const done = state.tasks.filter(task => task.status === 'done').length;
  return {
    done,
    open: state.tasks.filter(task => task.status !== 'done').length,
    today: state.tasks.filter(task => task.status === 'today').length,
    high: state.tasks.filter(task => task.priority === 'high' && task.status !== 'done').length,
    progress: (done / total) * 360,
  };
}

function projectButton(project) {
  const count = project.id === 'all'
    ? state.tasks.filter(task => task.status !== 'done').length
    : state.tasks.filter(task => task.projectId === project.id && task.status !== 'done').length;
  return `
    <button class="tracker-lane ${state.activeProject === project.id ? 'active' : ''}" type="button" data-project="${project.id}">
      <span>${icon(project.icon)}</span>
      <strong>${escapeHtml(project.name)}</strong>
      <em>${count}</em>
    </button>
  `;
}

function taskCard(task) {
  const project = state.projects.find(item => item.id === task.projectId);
  return `
    <article class="tracker-task ${task.status === 'done' ? 'is-done' : ''}">
      <button class="tracker-task-check" type="button" data-toggle-task="${task.id}" title="Toggle done" aria-label="Toggle done">
        ${icon(task.status === 'done' ? 'check' : 'circle')}
      </button>
      <div class="tracker-task-body">
        <div class="tracker-task-topline">
          <span>${project ? escapeHtml(project.name) : 'General'}</span>
          <span class="tracker-priority tracker-priority--${task.priority}">${task.priority}</span>
        </div>
        <h4>${escapeHtml(task.title)}</h4>
        <div class="tracker-task-meta">
          <span>${icon('calendar')} ${formatDue(task.due)}</span>
          <span>${titleCase(task.status)}</span>
        </div>
      </div>
      <button class="tracker-icon-btn tracker-task-delete" type="button" data-delete-task="${task.id}" title="Delete task" aria-label="Delete task">
        ${icon('trash')}
      </button>
    </article>
  `;
}

function quickTemplate(title, projectId, priority) {
  return `
    <button class="tracker-template" type="button" data-template="${title}|${projectId}|${priority}">
      ${title}
    </button>
  `;
}

function emptyState() {
  return `
    <div class="tracker-empty">
      <div>${icon('check')}</div>
      <h4>Clear lane</h4>
      <p>Add the next thing worth doing.</p>
    </div>
  `;
}

function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
}

function loadState() {
  migrateLegacyState();
  const store = loadStore();
  const sessionEmail = localStorage.getItem(SESSION_KEY);
  const sessionPassword = sessionStorage.getItem(PASSWORD_SESSION_KEY);
  if (sessionEmail && sessionPassword && store.accounts[sessionEmail]) {
    return normalizeWorkspace(store.accounts[sessionEmail], sessionEmail);
  }

  return signedOutState();
}

async function loginUser(user) {
  const email = normalizeEmail(user.email);
  if (!email) return;
  if (!user.password || user.password.length < 6) {
    throw new Error('Password must be at least 6 characters.');
  }
  const store = loadStore();
  const localWorkspace = store.accounts[email];
  const remoteWorkspace = await openRemoteWorkspace(email, user.password, user.name);
  const existing = remoteWorkspace || localWorkspace;

  state = normalizeWorkspace(existing || createWorkspace(user), email);
  state.user = { name: user.name || state.user.name || 'Builder', email };
  localStorage.setItem(SESSION_KEY, email);
  sessionStorage.setItem(PASSWORD_SESSION_KEY, user.password);
  saveState();
}

function signedOutState() {
  return {
    user: null,
    accountKey: null,
    activeProject: 'startup',
    filter: 'all',
    projects: [],
    tasks: [],
  };
}

function createWorkspace(user) {
  return {
    user: {
      name: user.name || 'Builder',
      email: normalizeEmail(user.email),
    },
    activeProject: 'startup',
    filter: 'all',
    projects: cloneStarterProjects(),
    tasks: cloneStarterTasks(),
    updatedAt: new Date().toISOString(),
  };
}

function normalizeWorkspace(workspace, accountKey) {
  const projects = Array.isArray(workspace?.projects) && workspace.projects.length ? workspace.projects : cloneStarterProjects();
  const projectIds = new Set(projects.map(project => project.id));
  return {
    accountKey,
    user: {
      name: workspace?.user?.name || 'Builder',
      email: normalizeEmail(workspace?.user?.email || accountKey),
    },
    activeProject: workspace?.activeProject || projects[0].id,
    filter: workspace?.filter || 'all',
    projects,
    tasks: Array.isArray(workspace?.tasks)
      ? workspace.tasks.filter(task => task?.title && projectIds.has(task.projectId))
      : [],
    updatedAt: workspace?.updatedAt || new Date().toISOString(),
  };
}

function loadStore() {
  try {
    const store = JSON.parse(localStorage.getItem(STORE_KEY));
    if (store?.accounts && typeof store.accounts === 'object') {
      return store;
    }
  } catch (error) {
    console.warn('Tracker store reset', error);
  }

  return { version: 2, accounts: {} };
}

function saveState() {
  if (!state.user || !state.accountKey) return;
  saveLocalWorkspace();
  queueRemoteSave();
}

function saveLocalWorkspace() {
  const store = loadStore();
  store.accounts[state.accountKey] = {
    user: state.user,
    activeProject: state.activeProject,
    filter: state.filter,
    projects: state.projects,
    tasks: state.tasks,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
}

function migrateLegacyState() {
  if (localStorage.getItem(STORE_KEY)) return;
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));
    if (!legacy?.user?.email || !Array.isArray(legacy.tasks)) return;
    const email = normalizeEmail(legacy.user.email);
    const store = { version: 2, accounts: {} };
    store.accounts[email] = normalizeWorkspace(legacy, email);
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
    localStorage.setItem(SESSION_KEY, email);
  } catch (error) {
    console.warn('Legacy tracker migration skipped', error);
  }
}

function exportWorkspace() {
  saveState();
  const payload = {
    app: 'kalman-tracker',
    version: 2,
    exportedAt: new Date().toISOString(),
    workspace: loadStore().accounts[state.accountKey],
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `kalman-tracker-${state.accountKey}-${today()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importWorkspace(file) {
  try {
    const payload = JSON.parse(await file.text());
    const imported = payload.workspace || payload;
    if (!Array.isArray(imported.projects) || !Array.isArray(imported.tasks)) {
      throw new Error('Invalid tracker backup');
    }
    const merged = normalizeWorkspace(
      {
        ...imported,
        user: state.user,
        activeProject: imported.activeProject || state.activeProject,
      },
      state.accountKey,
    );
    state = merged;
    saveState();
    render();
  } catch (error) {
    window.alert('Could not import this backup file.');
    console.warn(error);
  }
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function queueRemoteSave() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    saveRemoteWorkspace().catch(error => console.warn('Supabase sync skipped', error));
  }, SYNC_DEBOUNCE_MS);
}

async function openRemoteWorkspace(email, password, name) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (response.status === 401) {
      throw new Error('Incorrect email or password.');
    }

    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    return payload.workspace?.workspace || null;
  } catch (error) {
    if (error.message === 'Incorrect email or password.') throw error;
    console.warn('Supabase load skipped', error);
    return null;
  }
}

async function saveRemoteWorkspace() {
  if (!state.user || !state.accountKey) return;

  const workspace = loadStore().accounts[state.accountKey];
  const password = sessionStorage.getItem(PASSWORD_SESSION_KEY);
  if (!workspace) return;
  if (!password) return;

  const response = await fetch(API_ENDPOINT, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: state.accountKey,
      password,
      name: state.user.name,
      workspace,
    }),
  });

  if (!response.ok) {
    throw new Error(`Supabase sync failed: ${response.status}`);
  }
}

function cloneStarterProjects() {
  return starterProjects.map(project => ({ ...project }));
}

function cloneStarterTasks() {
  return starterTasks.map(task => ({ ...task, id: crypto.randomUUID(), createdAt: new Date().toISOString() }));
}

function today() {
  return toDateInputValue(new Date());
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return toDateInputValue(date);
}

function toDateInputValue(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

function formatDue(value) {
  if (!value) return 'No date';
  const due = new Date(`${value}T00:00:00`);
  return due.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

render();
