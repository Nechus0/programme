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
const TITLES  = ['', 'Dr.', 'Dr. med.', 'Dr. med. univ.', 'Prof.', 'Prof. Dr.', 'PD Dr.'];
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
function roleSeesClinic(role){ return role === 'arzt' || role === 'mfa' || role === 'admin' || role === 'kasse'; }

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
async function signUpWithPassword(email, password, meta) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  return await supabaseClient.auth.signUp({ email: email.trim(), password, options: { data: meta || {} } });
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
  try{ localStorage.removeItem('charite_seccollapse'); }catch(e){}   // Sektionszustand auf Standard zurücksetzen
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
  if (profile && profile.deleted_at) {
    // Konto wurde deaktiviert
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html?deleted=1';
    return;
  }
  if (!profile || !profile.role) {
    // Angemeldet, aber (noch) nicht freigeschaltet → wartet auf Admin
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html?pending=1';
    return;
  }
  if (onReady) onReady(user, profile);
}

// --- Admin: Nutzerverwaltung (profiles) --------------------------
// Registrierte Konten; role NULL = „Pending" (noch nicht freigeschaltet).
async function adminListUsers() {
  if (!supabaseClient) return { data: [], error: null };
  const { data, error } = await supabaseClient.from('profiles')
    .select('id,email,full_name,title,gender,role,created_at,deleted_at')
    .is('deleted_at', null)
    .order('created_at', { ascending: true });
  if (error) return { data: [], error };
  // Kiosk-/Patienten-Konten (anonym) gehören nicht ins Personal-Board
  const list = (data || []).filter(u => u.role !== 'patient');
  return { data: list, error: null };
}
// Rolle setzen / Nutzer freischalten (role='' → Pending/NULL)
async function adminSetRole(id, role) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  return await supabaseClient.from('profiles').update({ role: role || null }).eq('id', id);
}
// Soft-Delete: sofort kein Zugriff, Datensatz bleibt 30 Tage erhalten
async function adminSoftDeleteUser(id) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  return await supabaseClient.from('profiles').update({ deleted_at: new Date().toISOString() }).eq('id', id);
}
// Einladungs-E-Mail über die Supabase Edge Function 'send-invite' (MailerSend) versenden
async function sendInviteEmail({ email, full_name, title, role }) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  const registerUrl = location.origin + location.pathname.replace(/[^/]*$/, '') + 'register.html';
  const { data, error } = await supabaseClient.functions.invoke('send-invite', {
    body: { email: (email || '').trim().toLowerCase(), full_name, title, role, registerUrl }
  });
  if (error) {
    // FunctionsHttpError liefert den Body im context; versuchen, die Server-Meldung zu lesen
    let msg = error.message || 'Versand fehlgeschlagen';
    try { const j = await error.context?.json?.(); if (j?.error) msg = j.error; } catch (_) {}
    return { error: { message: msg } };
  }
  if (data && data.error) return { error: { message: data.error } };
  return { data: data || { ok: true } };
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
