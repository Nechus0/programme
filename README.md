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
│   ├── script.js       UI, Ambulanzliste, Formulare, Rendering, inline Malaria-Engine
│   ├── malaria_data.js \_ Malaria-Länderdaten + Engine – NUR für tests/malaria.test.js;
│   └── malaria_engine.js/  im App-Betrieb ist die Malaria-Engine in script.js eingebettet
├── data/
│   ├── engine_data.js  generierte Länder×Krankheits-Matrix (window.ENGINE_DATA) – Laufzeitquelle
│   │                   der Empfehlungen (von engine.js UND engine_rules.js gelesen)
│   ├── country_data.js window.ALL_COUNTRY_DATA – separate Länder-Notizen/Hinweise (Anzeige)
│   ├── drugs_db.js     Wirkstoff-/Immunsuppressiva-Datenbank
│   └── countries/      186 Einzel-Länder-JSONs = Quellmaterial für den Generator (NICHT zur Laufzeit
│                       geladen; siehe Hinweis unten)
├── supabase_app_settings.sql  einmalige Migration: Tabelle app_settings (u. a. Tablet-Sperre)
├── assets/
│   └── karten/         Verbreitungskarten (PNG)
└── tests/              Engine-Unit-Tests: node tests/engine.test.js & tests/malaria.test.js;
                        zusätzlich Browser-Runner tests/test_runner.html
```

Ladereihenfolge in `index.html`:
`auth.js → country_data.js → drugs_db.js → engine_data.js → engine_rules.js → engine.js → script.js`.
Die Skripte teilen sich den globalen Scope (klassische `<script>`-Tags, kein Modul-Bundler).

> **Datenquelle:** `data/engine_data.js` ist auto-generiert (Header nennt `tools/build/build_engine_data.py`
> aus `tools/master_data/*.csv`; diese liegen außerhalb des Deploy-Repos). Direkte Änderungen an
> `engine_data.js` überschreibt ein erneuter Generatorlauf. Die 186 JSONs unter `data/countries/`
> sind Quellmaterial und werden zur Laufzeit **nicht** geladen – sie können vom generierten Stand
> abweichen. Für dauerhafte Datenänderungen die Generator-Quelle pflegen und neu bauen.

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
- `supabase_app_settings.sql` einmalig ausführen (Tabelle `app_settings`, u. a. Sperre der
  Tablet-Selbstanmeldung).
- **Präsenz „Im Dienst":** kein eigenes Schema – abgeleitet aus `audit_logs` (`shift_login` als
  Heartbeat alle 60 s, `shift_logout` beim Abmelden). Im Dienst = letzter Heartbeat < 150 s.
  Hinweis: erzeugt ~1 Zeile/Minute je eingeloggtem Nutzer; ggf. Retention/Cleanup einplanen.

## Deployment
GitHub Pages served vom Branch `main` (Repo-Root). `index.html` muss im Root bleiben.
