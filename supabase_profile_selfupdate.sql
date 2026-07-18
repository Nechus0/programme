-- =============================================================================
-- Eigenes Profil bearbeiten (Feature „Mein Profil")
-- Ermöglicht angemeldeten Nutzern, ihre EIGENE profiles-Zeile zu aktualisieren
-- (full_name, title, gender) – NIEMALS die Rolle. Die Rolle (und weitere geschützte
-- Felder) kann ausschließlich ein Admin ändern.
--
-- Einmalig im Supabase SQL-Editor ausführen. Idempotent (drop policy if exists …).
-- Erwartete Tabelle: public.profiles (id uuid = auth.uid(), email, full_name, title,
-- gender, role, created_at, deleted_at). Spaltennamen ggf. an das eigene Schema anpassen.
-- =============================================================================

alter table public.profiles enable row level security;

-- 1) Self-Update: jede(r) darf die EIGENE Zeile aktualisieren.
drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_update"
  on public.profiles for update
  to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

-- 2) Schutz-Trigger: Bei Nicht-Admins werden geschützte Spalten (v. a. role) auf ihren
--    bisherigen Wert zurückgesetzt – so kann sich niemand selbst eine Rolle geben.
--    Admins dürfen weiterhin alles ändern (z. B. Rollenvergabe im Admin-Board).
create or replace function public.profiles_guard_self_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  caller_is_admin boolean;
begin
  select (p.role = 'admin') into caller_is_admin
  from public.profiles p
  where p.id = auth.uid();

  if coalesce(caller_is_admin, false) then
    return NEW;                       -- Admins dürfen alle Felder ändern
  end if;

  -- Nicht-Admins: geschützte Felder unverändert lassen
  NEW.id         := OLD.id;
  NEW.role       := OLD.role;
  NEW.deleted_at := OLD.deleted_at;
  NEW.created_at := OLD.created_at;
  -- E-Mail wird über Supabase-Auth (auth.users) geändert; profiles.email bleibt hier stabil.
  NEW.email      := OLD.email;
  return NEW;
end;
$$;

drop trigger if exists trg_profiles_guard_self_update on public.profiles;
create trigger trg_profiles_guard_self_update
  before update on public.profiles
  for each row execute function public.profiles_guard_self_update();

-- Hinweis: E-Mail- und Passwort-Änderung laufen über Supabase-Auth
-- (auth.updateUser) und benötigen KEINE zusätzliche Policy. Eine E-Mail-Änderung
-- verschickt eine Bestätigungs-Mail; profiles.email wird – falls gewünscht – üblicherweise
-- per Auth-Trigger/Webhook nachgezogen (nicht Teil dieser Migration).
