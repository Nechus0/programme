-- App-weite Einstellungen (Key/Value). Wird u.a. für die Sperre der
-- Patienten-Selbstanmeldung am Tablet genutzt (key = 'patient_input_locked').
-- Einmalig im Supabase SQL-Editor ausführen.

create table if not exists public.app_settings (
  key         text primary key,
  value       jsonb,
  updated_at  timestamptz not null default now()
);

alter table public.app_settings enable row level security;

-- Jede(r) darf lesen (auch das anonyme Tablet-Konto), damit die Sperre greift.
drop policy if exists "app_settings_read" on public.app_settings;
create policy "app_settings_read"
  on public.app_settings for select
  using (true);

-- Nur Admins dürfen schreiben.
drop policy if exists "app_settings_admin_write" on public.app_settings;
create policy "app_settings_admin_write"
  on public.app_settings for all
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Startwert: Selbstanmeldung freigegeben.
insert into public.app_settings (key, value)
  values ('patient_input_locked', 'false'::jsonb)
  on conflict (key) do nothing;
