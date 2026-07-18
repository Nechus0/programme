# Reiseimpf-Assistent · Reisemedizinische Ambulanz (Charité)

Klinisches Entscheidungs­unterstützungs- und Ambulanz­verwaltungs-Tool für die
reisemedizinische Beratung: Erfassung von Patientendaten & Reise, automatische
Impf­empfehlungen (STIKO/DTG-Systematik), Terminplanung, Ambulanzliste und Rollen­verwaltung.

> ⚕️ Hinweis: Unterstützt die ärztliche Beurteilung, ersetzt sie nicht. Empfehlungen sind vor
> jeder Beratung gegen aktuelle RKI-/STIKO-/DTG-Quellen zu prüfen.

## Tech-Stack
Statische Single-Page-Web-App (Vanilla HTML/CSS/JS, kein Build-Schritt) + **Supabase**
(Auth, Postgres mit Row-Level-Security, Edge Functions). Deployment über **GitHub Pages**.

## Projektstruktur
```
├── index.html          Haupt-App (Personal + Patienten-Kiosk)
├── login.html          Personal-Anmeldung
├── register.html       Selbst-Registrierung (→ Freischaltung durch Admin)
├── tablet.html         iPad-Kiosk-Einstieg (anonyme Selbstanmeldung)
├── css/
│   └── style.css       gesamtes Styling (Design-Tokens + Komponenten)
├── js/
│   ├── auth.js         Supabase-Auth, Rollen, Nutzer-/Patienten-DB-Helfer, Präsenz/Logout
│   ├── engine_rules.js aktive tabellengetriebene Impf-Engine (deriveCategory → Kategorie/Farbe)
│   ├── engine.js       Kontext-Bridge (EngineCtx/buildCtx), getRisk, Hep-A/B- & Meningo-Assessor,
│   │                   Terminplanung (buildOptimalSchedule); Fallback-Bewertung (baseLevel)
│   ├── script.js       UI, Ambulanzliste, Formulare, Rendering, Malaria-Sektion
│   ├── malaria_data.js \_ Malaria-Länderdaten (DTG) + Engine – EINE gemeinsame Quelle für
│   └── malaria_engine.js/  App (in index.html vor script.js geladen) UND tests/malaria.test.js
├── data/
│   ├── engine_data.js  Länder×Krankheits-Matrix (window.ENGINE_DATA) – AUTORITATIVE Laufzeitquelle
│   │                   der Empfehlungen (von engine.js UND engine_rules.js gelesen), handgepflegt
│   ├── country_data.js window.ALL_COUNTRY_DATA – separate Länder-Notizen/Hinweise (Anzeige)
│   └── drugs_db.js     Wirkstoff-/Immunsuppressiva-Datenbank
├── supabase_app_settings.sql  einmalige Migration: Tabelle app_settings (u. a. Tablet-Sperre)
├── supabase_presence.sql      einmalige Migration: Tabelle presence („Im Dienst", 1 Zeile/Nutzer)
├── assets/
│   └── karten/         Verbreitungskarten (PNG)
└── tests/              Engine-Unit-Tests: node tests/engine.test.js & tests/malaria.test.js;
                        zusätzlich Browser-Runner tests/test_runner.html
```

Ladereihenfolge in `index.html`:
`auth.js → country_data.js → drugs_db.js → engine_data.js → engine_rules.js → engine.js → malaria_data.js → malaria_engine.js → script.js`.
Die Skripte teilen sich den globalen Scope (klassische `<script>`-Tags, kein Modul-Bundler).

> **Datenquelle:** `data/engine_data.js` ist die **handgepflegte, autoritative** Quelle der
> Länder×Krankheits-Empfehlungen (der ursprüngliche Generator liegt nicht im Repo). Änderungen
> direkt dort vornehmen und anschließend `node tests/engine.test.js` laufen lassen. (Die früheren
> `data/countries/*.json`-Quelldateien wurden entfernt, weil sie nicht geladen wurden und vom
> Stand abwichen.)

## Lokale Entwicklung
Kein Build nötig. Wegen relativer Pfade und Supabase-Auth über einen lokalen Server öffnen:
```bash
python3 -m http.server 8000     # dann http://localhost:8000
```

## Backend / Setup
- Supabase-Schema, RLS-Policies und Migrationen liegen im übergeordneten Workspace unter
  `../tools/sql/` (u. a. `supabase_setup.sql`, `supabase_selfregister.sql`).
- Edge Functions unter `../supabase/functions/`.
- Auth: E-Mail/Passwort (Personal) + anonyme Anmeldung (Patienten-Tablet). Rollen:
  `admin`, `arzt`, `mfa`, `kasse`, `patient`; Freischaltung neuer Konten per Drag-&-Drop im Admin-Board.
  Automatische Abmeldung nach 1 h Inaktivität.
- **„Im Dienst" nach Funktion (nicht Rolle):** Beratung / Folgeimpfung / Kasse. MFA immer Folgeimpfung,
  Kasse immer Kasse, Arzt wählt in den Einstellungen (Beratung oder Folgeimpfung). Die gewählte Funktion
  liegt als `shift_func` in der `presence`-Tabelle.
- **Folgeimpfung (MFA-Standardarbeit):** Wiederkehrer werden über Name + Geburtsdatum erkannt (Abgleich
  mit letztem `done`-Besuch). Der nächste Charité-Termin wird zum Fokus: „Fällig heute"-Banner mit den
  fälligen Dosen, automatischer Prüfung der STIKO-Mindestabstände (Warnung, aber Gabe möglich) und dem
  Hinweis auf den übernächsten Termin. Abschnitt 4 (Impfstatus) und Malaria sind eingeklappt (aufklappbar),
  Abschnitt 5 (Geplante Impfungen) und 7 (Leistungen) stehen im Vordergrund; „Beratung" ist per Default
  aus, „Impfleistung" wird bei Injektionen automatisch gesetzt. Die letzte Konsultation ist read-only
  einsehbar.
- `supabase_app_settings.sql` einmalig ausführen (Tabelle `app_settings`, u. a. Sperre der
  Tablet-Selbstanmeldung).
- `supabase_presence.sql` einmalig ausführen (Tabelle `presence`, siehe unten).
- `supabase_profile_selfupdate.sql` einmalig ausführen: erlaubt „Mein Profil" (Self-Update von
  `full_name`/`title`/`gender`) und schützt per Trigger die Rolle (nur Admin ändert Rollen).
- **Präsenz „Im Dienst":** Tabelle `presence` mit genau **einer Zeile je eingeloggtem Nutzer**
  (Upsert-Heartbeat alle 60 s, `last_seen`; Löschen beim Logout) → beschränktes Wachstum.
  Im Dienst = `last_seen` < 150 s. Fehlt die Tabelle, fällt die App automatisch auf das frühere
  `audit_logs`-Heartbeat-Verfahren (`shift_login`/`shift_logout`) zurück.

## Deployment
GitHub Pages served vom Branch `main` (Repo-Root). `index.html` muss im Root bleiben.
