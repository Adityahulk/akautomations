alter table public.tracker_workspaces
add column if not exists password_hash text;

