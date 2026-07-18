-- Präsenz „Im Dienst": genau EINE Zeile je eingeloggtem Nutzer (Upsert-Heartbeat),
-- statt fortlaufender audit_logs-Einträge → beschränktes Wachstum.
-- Einmalig im Supabase SQL-Editor ausführen. Solange die Tabelle fehlt, fällt die App
-- automatisch auf das audit_logs-Heartbeat-Verfahren zurück.

create table if not exists public.presence (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  name       text,
  role       text,
  gender     text,
  last_seen  timestamptz not null default now()
);

alter table public.presence enable row level security;

-- Personal darf die Präsenzliste lesen (für „Im Dienst").
drop policy if exists "presence_read" on public.presence;
create policy "presence_read"
  on public.presence for select
  using (
    exists (select 1 from public.profiles p
            where p.id = auth.uid() and p.role in ('admin','arzt','mfa','kasse'))
  );

-- Jede(r) pflegt ausschließlich die EIGENE Zeile (Upsert + Löschen beim Logout).
drop policy if exists "presence_write_own" on public.presence;
create policy "presence_write_own"
  on public.presence for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
