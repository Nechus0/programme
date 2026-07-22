/* ============================================================================
   Concept B — Supabase-Zugriffe für Content-Overrides.
   Nutzt den bestehenden globalen `supabaseClient` aus js/auth.js
   (WICHTIG: NICHT window.supabaseClient — der ist ein top-level `let` und liegt
   im geteilten Lexical-Scope aller klassischen Skripte, exakt wie die übrigen
   DB-Funktionen der App). Reihenfolge: nach auth.js laden.
   ========================================================================== */

window.dbLoadContentOverrides = async function () {
  try {
    if (typeof supabaseClient === 'undefined' || !supabaseClient) return [];
    var res = await supabaseClient.from('content_overrides').select('*').eq('active', true);
    if (res.error) throw res.error;
    return res.data || [];
  } catch (e) {
    if (window.console) console.error('[content_overrides] Laden fehlgeschlagen:', e);
    return []; // Fail-safe: keine Overrides -> Basis bleibt aktiv
  }
};

window.dbUpsertContentOverride = async function (obj) {
  if (typeof supabaseClient === 'undefined' || !supabaseClient) {
    return { error: { message: 'Kein Supabase-Client (Auth deaktiviert?)' } };
  }
  try {
    var s = await supabaseClient.auth.getSession();
    var uid = s && s.data && s.data.session && s.data.session.user && s.data.session.user.id;
    if (uid) obj.updated_by = uid;
    obj.updated_at = new Date().toISOString();
    if (obj.country_iso2 == null) obj.country_iso2 = '';   // NOT-NULL-Defaults für den Unique-Index
    if (obj.disease == null) obj.disease = '';
    if (obj.active == null) obj.active = true;
    return await supabaseClient
      .from('content_overrides')
      .upsert(obj, { onConflict: 'kind,country_iso2,disease,field' })
      .select()
      .single();                     // { data, error }
  } catch (e) {
    return { error: e };
  }
};

window.dbDeleteContentOverride = async function (id) {
  if (typeof supabaseClient === 'undefined' || !supabaseClient) {
    return { error: { message: 'Kein Supabase-Client' } };
  }
  try {
    return await supabaseClient.from('content_overrides').delete().eq('id', id); // { data, error }
  } catch (e) {
    return { error: e };
  }
};
