/* ============================================================
   Supabase-Auth & Datenzugriff – Charité Reiseimpf-Assistent
   E-Mail/Passwort, Admin-Nutzerverwaltung, geteilte Patienten (Ambulanzliste).
   Geladen von login.html, register.html und index.html.
   Voraussetzung: <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   ============================================================ */

const SUPABASE_URL = 'https://dcvzzznfiyjnuhdaquzs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdnp6em5maXlqbnVoZGFxdXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MDM4MzgsImV4cCI6MjA5OTI3OTgzOH0.FPlZFgnEZljUPwwoVjID8U2YDTWOiV4aVICOaw30lQQ';

let supabaseClient = null;

// Auth aktivieren, wenn konfiguriert
const AUTH_ENABLED = !!SUPABASE_URL && !SUPABASE_ANON_KEY.startsWith('DEIN_');
if (AUTH_ENABLED && window.supabase && window.supabase.createClient) {
  // Sitzung explizit persistieren + Token automatisch erneuern, damit ein Seiten-Reload
  // (oder ein länger geöffneter Tab) nicht zur ungewollten Abmeldung führt.
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
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
  // Präsenz sofort beenden, damit die Person umgehend aus „Im Dienst" verschwindet.
  try{ await dbPresenceClear(); }catch(e){}   // Präsenztabelle (falls vorhanden)
  try{ if(typeof CURRENT_PROFILE!=='undefined' && CURRENT_PROFILE && CURRENT_PROFILE.role && CURRENT_PROFILE.role!=='admin' && typeof dbAuditLog==='function'){ await dbAuditLog('shift_logout', {name:CURRENT_PROFILE.full_name||'', role:CURRENT_PROFILE.role}); } }catch(e){}
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
    .order('created_at', { ascending: true });
  if (error) return { data: [], error };
  // Kiosk-/Patienten-Konten (anonym) gehören nicht ins Personal-Board
  const list = (data || []).filter(u => u.role !== 'patient');
  return { data: list, error: null };
}
// Rolle setzen / Nutzer freischalten (role='' → Pending/NULL)
async function adminSetRole(id, role) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  dbAuditLog('admin_set_role', { target_user_id: id, new_role: role });
  return await supabaseClient.from('profiles').update({ role: role || null }).eq('id', id);
}
// Soft-Delete: sofort kein Zugriff, Datensatz bleibt 30 Tage erhalten
async function adminSoftDeleteUser(id) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  dbAuditLog('admin_soft_delete', { target_user_id: id });
  return await supabaseClient.from('profiles').update({ deleted_at: new Date().toISOString() }).eq('id', id);
}
// Hard-Delete: komplett löschen via Edge Function
async function adminHardDeleteUser(id) {
  if (!supabaseClient) return { error: { message: 'Auth nicht konfiguriert' } };
  dbAuditLog('admin_hard_delete', { target_user_id: id });
  const { data, error } = await supabaseClient.functions.invoke('delete-user', { body: { userId: id } });
  if (error) {
    let msg = error.message || 'Löschen fehlgeschlagen';
    try { const j = await error.context?.json?.(); if (j?.error) msg = j.error; } catch (_) {}
    return { error: { message: msg } };
  }
  if (data && data.error) return { error: { message: data.error } };
  return { data: data || { ok: true } };
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
  if (!supabaseClient) return { data: null, error: { message: 'offline' } };
  return await supabaseClient.from('patients').delete().eq('id', id);
}

// --- App-Einstellungen (key/value) ----------------------------------
// Globale Einstellungen in Tabelle app_settings (siehe supabase_app_settings.sql).
// Fällt bei fehlender Tabelle/Verbindung leise auf localStorage zurück (nur lokal wirksam).
async function dbGetSetting(key) {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient.from('app_settings').select('value').eq('key', key).maybeSingle();
      if (!error) return data ? data.value : null;
    } catch (e) { /* fällt unten auf localStorage zurück */ }
  }
  try { const v = localStorage.getItem('setting_' + key); return v == null ? null : JSON.parse(v); } catch (e) { return null; }
}
async function dbSetSetting(key, value) {
  try { localStorage.setItem('setting_' + key, JSON.stringify(value)); } catch (e) {}
  if (!supabaseClient) return { data: { ok: true }, error: null };
  return await supabaseClient.from('app_settings')
    .upsert({ key: key, value: value, updated_at: new Date().toISOString() }, { onConflict: 'key' });
}
// Patienteneingabe (Tablet-Selbstanmeldung) sperren/entsperren
async function isPatientInputLocked() {
  const v = await dbGetSetting('patient_input_locked');
  return v === true || v === 'true';
}
async function setPatientInputLocked(locked) {
  return await dbSetSetting('patient_input_locked', !!locked);
}

// --- Präsenz „Im Dienst" (Tabelle presence, siehe supabase_presence.sql) ----------
// Eine Zeile je Nutzer (Upsert-Heartbeat). Fehlt die Tabelle, geben die Aufrufe einen Fehler
// zurück und script.js fällt auf das audit_logs-Verfahren zurück.
async function dbPresenceUpsert() {
  if (!supabaseClient || !CURRENT_PROFILE || !CURRENT_PROFILE.id) return { error: { message: 'no-user' } };
  // Funktion im Dienst (Beratung/Folgeimpfung/Kasse) aus script.js, falls verfügbar.
  const func = (typeof myShiftFunction === 'function') ? myShiftFunction() : null;
  return await supabaseClient.from('presence').upsert({
    user_id: CURRENT_PROFILE.id,
    name: CURRENT_PROFILE.full_name || '',
    role: CURRENT_PROFILE.role || '',
    gender: CURRENT_PROFILE.gender || '',
    shift_func: func,
    last_seen: new Date().toISOString()
  }, { onConflict: 'user_id' });
}
async function dbPresenceClear() {
  if (!supabaseClient || !CURRENT_PROFILE || !CURRENT_PROFILE.id) return;
  try { return await supabaseClient.from('presence').delete().eq('user_id', CURRENT_PROFILE.id); } catch (e) {}
}
async function dbPresenceList(withinMs) {
  if (!supabaseClient) return { data: null, error: { message: 'offline' } };
  const since = new Date(Date.now() - (withinMs || 150000)).toISOString();
  return await supabaseClient.from('presence').select('user_id,name,role,gender,shift_func,last_seen').gte('last_seen', since);
}

// --- Eigenes Profil bearbeiten (Rolle NICHT – die kann nur der Admin ändern) ---------------
async function dbUpdateOwnProfile(fields) {
  if (!supabaseClient || !CURRENT_PROFILE || !CURRENT_PROFILE.id) return { error: { message: 'no-user' } };
  // Bewusst NUR unkritische Felder – niemals role. RLS sollte Self-Update auf die eigene Zeile beschränken.
  const patch = {};
  ['full_name', 'title', 'gender'].forEach(k => { if (fields && typeof fields[k] !== 'undefined') patch[k] = fields[k]; });
  if (!Object.keys(patch).length) return { data: null, error: null };
  const res = await supabaseClient.from('profiles').update(patch).eq('id', CURRENT_PROFILE.id).select('id,email,full_name,title,gender,role').single();
  if (res && res.data) { CURRENT_PROFILE = Object.assign({}, CURRENT_PROFILE, res.data); }
  return res;
}
async function authUpdateEmail(email) {
  if (!supabaseClient) return { error: { message: 'offline' } };
  return await supabaseClient.auth.updateUser({ email: (email || '').trim().toLowerCase() });
}
async function authUpdatePassword(password) {
  if (!supabaseClient) return { error: { message: 'offline' } };
  return await supabaseClient.auth.updateUser({ password: password });
}

// --- Audit Log ----------------------------------
// Alle Login-/Aktivitäts-Einträge von HEUTE lesen (für „Im Dienst"). Fällt bei fehlender Leseberechtigung leise aus.
async function dbListAuditToday() {
  if (!supabaseClient) return { data: [], error: null };
  const start = new Date(); start.setHours(0,0,0,0);
  try {
    return await supabaseClient.from('audit_logs')
      .select('user_id,user_role,action,details,created_at')
      .gte('created_at', start.toISOString());
  } catch (e) { return { data: [], error: e }; }
}
async function dbAuditLog(action, details) {
  if (!supabaseClient) return;
  const user_id = CURRENT_PROFILE ? CURRENT_PROFILE.id : null;
  const user_email = CURRENT_PROFILE ? CURRENT_PROFILE.email : 'anonym';
  const user_role = CURRENT_PROFILE ? CURRENT_PROFILE.role : 'patient';
  
  try {
    await supabaseClient.from('audit_logs').insert({
      user_id,
      user_email,
      user_role,
      action,
      details
    });
  } catch (e) {
    console.warn("Audit Log failed", e);
  }
}

