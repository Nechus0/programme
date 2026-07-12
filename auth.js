/* ============================================================
   Supabase-Authentifizierung – Charité Reiseimpf-Assistent
   Wird von login.html und index.html geladen.
   Voraussetzung: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   ============================================================ */

// --- Konfiguration -------------------------------------------------
const SUPABASE_URL = 'https://dcvzzznfiyjnuhdaquzs.supabase.co';
// Anon public key (JWT, beginnt mit "eyJ..."). Öffentlich – darf im Frontend stehen.
// Supabase-Dashboard → Project Settings → API → Project API keys → "anon" "public".
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdnp6em5maXlqbnVoZGFxdXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MDM4MzgsImV4cCI6MjA5OTI3OTgzOH0.FPlZFgnEZljUPwwoVjID8U2YDTWOiV4aVICOaw30lQQ';

// Auth ist erst aktiv, sobald ein echter Key hinterlegt ist. So bleibt die App
// bis dahin ohne Login nutzbar (Platzhalter → Guard wird übersprungen).
const AUTH_ENABLED = !!SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.startsWith('DEIN_');

let supabaseClient = null;
if (AUTH_ENABLED && window.supabase && window.supabase.createClient) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// --- Rollen --------------------------------------------------------
const ROLES = [
  { value: 'admin',   de: 'Admin',   en: 'Admin' },
  { value: 'mfa',     de: 'MFA',     en: 'MFA' },
  { value: 'arzt',    de: 'Arzt',    en: 'Physician' },
  { value: 'patient', de: 'Patient', en: 'Patient' },
];
function roleLabel(value, lang) {
  const r = ROLES.find(x => x.value === value);
  return r ? (lang === 'en' ? r.en : r.de) : (value || '');
}

// --- Auth-Helfer ---------------------------------------------------
async function getSessionUser() {
  if (!supabaseClient) return null;
  const { data } = await supabaseClient.auth.getSession();
  return data && data.session ? data.session.user : null;
}

async function getProfile(userId) {
  if (!supabaseClient || !userId) return null;
  const { data, error } = await supabaseClient
    .from('profiles').select('*').eq('id', userId).single();
  return error ? null : data;
}

async function upsertProfile(profile) {
  if (!supabaseClient) return { error: 'auth disabled' };
  return await supabaseClient.from('profiles').upsert(profile, { onConflict: 'id' });
}

async function signInWithGitHub() {
  if (!supabaseClient) { alert('Supabase-Anon-Key fehlt noch (auth.js).'); return; }
  const redirectTo = window.location.origin + window.location.pathname; // zurück zu login.html
  await supabaseClient.auth.signInWithOAuth({ provider: 'github', options: { redirectTo } });
}

async function signOut() {
  if (supabaseClient) { await supabaseClient.auth.signOut(); }
  window.location.href = 'login.html';
}

/* Auth-Guard für die Haupt-App (index.html).
   - Auth deaktiviert (Platzhalter-Key)  → App normal anzeigen.
   - Kein Login / kein Profil            → weiter zu login.html.
   - Angemeldet + Profil vorhanden       → Header füllen, App anzeigen.
   onReady(user, profile) wird aufgerufen, wenn die App gezeigt werden soll. */
async function guardApp(onReady) {
  if (!AUTH_ENABLED) { if (onReady) onReady(null, null); return; }
  const user = await getSessionUser();
  if (!user) { window.location.href = 'login.html'; return; }
  const profile = await getProfile(user.id);
  if (!profile || !profile.role) { window.location.href = 'login.html'; return; }
  if (onReady) onReady(user, profile);
}
