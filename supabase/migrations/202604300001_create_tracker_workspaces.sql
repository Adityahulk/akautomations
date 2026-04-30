create table if not exists public.tracker_workspaces (
  email text primary key,
  name text not null default 'Builder',
  workspace jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_tracker_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists tracker_workspaces_updated_at on public.tracker_workspaces;

create trigger tracker_workspaces_updated_at
before update on public.tracker_workspaces
for each row
execute function public.set_tracker_updated_at();

