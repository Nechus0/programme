/* ============================================================
   Supabase-Auth & Datenzugriff – Charité Reiseimpf-Assistent
   E-Mail/Passwort, Admin-Nutzerverwaltung, geteilte Patienten (Ambulanzliste).
   Geladen von login.html, register.html und index.html.
   Voraussetzung: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   ============================================================ */

const SUPABASE_URL = 'https://dcvzzznfiyjnuhdaquzs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdnp6em5maXlqbnVoZGFxdXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MDM4MzgsImV4cCI6MjA5OTI3OTgzOH0.FPlZFgnEZljUPwwoVjID8U2YDTWOiV4aVICOaw30lQQ';

const AUTH_ENABLED = !!SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.startsWith('DEIN_');
let supabaseClient = null;
if (AUTH_ENABLED && window.supabase && window.supabase.createClient) {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// --- Stammdaten für Auswahllisten --------------------------------
const ROLES = [
  { value: 'arzt',    de: 'Arzt / Ärztin', en: 'Physician' },
  { value: 'mfa',     de: 'MFA',           en: 'MFA' },
  { value: 'admin',   de: 'Admin',         en: 'Admin' },
  { value: 'kasse',   de: 'Kasse',         en: 'Reception/Billing' },
  { value: 'patient', de: 'Patientenaccount', en: 'Patient account' },
];
// Rollen, die der Admin manuell anlegt (Patient = anonymer Tablet-Zugang, nicht anlegbar)
const CREATABLE_ROLES = ROLES.filter(r => r.value !== 'patient');
const TITLES  = ['', 'Dr.', 'Dr. med.', 'Prof.', 'Prof. Dr.', 'PD Dr.'];
const GENDERS = [ {value:'w',de:'weiblich',en:'female'}, {value:'m',de:'männlich',en:'male'}, {value:'d',de:'divers',en:'diverse'} ];

function roleLabel(value, lang) {
  const r = ROLES.find(x => x.value === value);
  return r ? (lang === 'en' ? r.en : r.de) : (value || '');
}
function genderLabel(value, lang) {
  const g = GENDERS.find(x => x.value === value);
  return g ? (lang === 'en' ? g.en : g.de) : (value || '');
}
// Klinische Voll-Ansicht (Ambulanzliste, Impfstatus …)
function roleSeesClinic(role){ return role === 'arzt' || role === 'mfa' || role === 'admin'; }

// --- Auth --------------------------------------------------------
async function getSessionUser() {
  if (!supabaseClient) return null;
  const { data } = await supabaseClient.auth.getSession();
  return data && data.session ? data.session.user : null;
}
async function getProfile(userId) {
  if (!supabaseClient || !userId) return null;
  const { data, error } = await supabaseClient.from('profiles').select('*').eq('id', userId).single();
  return error ? null : data;
}
async function signInWithPassword(email, password) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  return await supabaseClient.auth.signInWithPassword({ email: email.trim(), password });
}
async function signUpWithPassword(email, password) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  return await supabaseClient.auth.signUp({ email: email.trim(), password });
}
async function signInAnonymously() {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  return await supabaseClient.auth.signInAnonymously();
}
async function sendPasswordReset(email) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  const redirectTo = window.location.origin + window.location.pathname.replace(/[^/]*$/, 'register.html');
  return await supabaseClient.auth.resetPasswordForEmail(email.trim(), { redirectTo });
}
async function signOut() {
  if (supabaseClient) { await supabaseClient.auth.signOut(); }
  window.location.href = 'login.html';
}

/* Guard für index.html.
   - Auth deaktiviert  → Demo-Vollzugriff (role 'arzt').
   - kein Login/Profil → weiter zu login.html.
   - sonst onReady(user, profile). */
async function guardApp(onReady) {
  if (!AUTH_ENABLED) { if (onReady) onReady(null, { role: 'arzt', full_name: 'Demo', title:'', gender:'' }); return; }
  const user = await getSessionUser();
  if (!user) { window.location.href = 'login.html'; return; }
  const profile = await getProfile(user.id);
  if (!profile || !profile.role) {
    // Angemeldet, aber (noch) nicht freigeschaltet
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html?denied=1';
    return;
  }
  if (onReady) onReady(user, profile);
}

// --- Admin: Nutzerverwaltung (allowed_users) ---------------------
async function adminListUsers() {
  if (!supabaseClient) return { data: [], error: null };
  const [{ data: allowed, error: e1 }, { data: profs }] = await Promise.all([
    supabaseClient.from('allowed_users').select('*').order('created_at', { ascending: true }),
    supabaseClient.from('profiles').select('email'),
  ]);
  if (e1) return { data: [], error: e1 };
  const registered = new Set((profs || []).map(p => (p.email || '').toLowerCase()));
  (allowed || []).forEach(u => { u.registered = registered.has((u.email || '').toLowerCase()); });
  return { data: allowed || [], error: null };
}
async function adminCreateUser({ email, full_name, title, gender, role }) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  return await supabaseClient.from('allowed_users')
    .upsert({ email: email.trim().toLowerCase(), full_name, title, gender, role }, { onConflict: 'email' });
}
async function adminDeleteUser(email) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  return await supabaseClient.from('allowed_users').delete().eq('email', email.trim().toLowerCase());
}

// --- Patienten (Ambulanzliste) ----------------------------------
async function dbListPatients() {
  if (!supabaseClient) return { data: null, error: { message: 'offline' } };
  return await supabaseClient.from('patients').select('*').order('created_at', { ascending: true });
}
async function dbInsertPatient(rec) {
  if (!supabaseClient) return { data: null, error: { message: 'offline' } };
  // Kein .select(): Patienten-Kioskaccount darf die eigene Zeile nicht zurücklesen (RLS).
  return await supabaseClient.from('patients')
    .insert({ name: rec.name || null, dob: rec.dob || null, data: rec });
}
async function dbUpdatePatient(id, rec) {
  if (!supabaseClient) return { data: null, error: { message: 'offline' } };
  return await supabaseClient.from('patients')
    .update({ name: rec.name || null, dob: rec.dob || null, data: rec }).eq('id', id);
}
async function dbDeletePatient(id) {
  if (!supabaseClient) return { error: { message: 'offline' } };
  return await supabaseClient.from('patients').delete().eq('id', id);
}
