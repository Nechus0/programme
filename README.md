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
│   ├── auth.js         Supabase-Auth, Rollen, Nutzer-/Patienten-DB-Helfer
│   ├── engine.js       klinische Empfehlungs-Engine (Impf-Bewertung, Terminplanung)
│   └── script.js       UI, Ambulanzliste, Formulare, Rendering
├── data/
│   ├── country_data.js Länder-/Krankheits-Daten
│   └── drugs_db.js     Wirkstoff-/Immunsuppressiva-Datenbank
├── assets/
│   └── karten/         Verbreitungskarten (PNG)
└── tests/              Engine-Unit-Tests (im Browser via test_runner.html)
```

Ladereihenfolge in `index.html`: `auth.js → country_data.js → drugs_db.js → engine.js → script.js`.
Die Skripte teilen sich den globalen Scope (klassische `<script>`-Tags, kein Modul-Bundler).

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

## Deployment
GitHub Pages served vom Branch `main` (Repo-Root). `index.html` muss im Root bleiben.
