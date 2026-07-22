/* ============================================================================
   Concept B — Admin-Editor (selbst-installierend).
   Fügt im Einstellungs-/Admin-Panel einen Reiter „Inhalte" (nur Admin) ein,
   ohne das Hauptprogramm zu verändern: patcht window.buildSettingsTabs /
   window.adminTab und injiziert die eigene <section>. Nutzt App-Konventionen
   (_esc, uiAlert/uiConfirm, CSS-Variablen). Live-Re-Merge nach jeder Änderung.
   Reihenfolge: NACH js/script.js laden.
   ========================================================================== */
(function () {
  'use strict';

  var esc = window._esc || function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  function uiAlert(m) { return (window.uiAlert ? window.uiAlert(m) : (alert(m), Promise.resolve())); }
  function uiConfirm(m, o) { return (window.uiConfirm ? window.uiConfirm(m, o) : Promise.resolve(confirm(m))); }
  function isAdmin() { return (window.CURRENT_PROFILE || {}).role === 'admin'; }

  var DISEASE_FIELDS = [
    { v: 'outbreak',        label: 'Ausbruch (outbreak)',            type: 'bool' },
    { v: 'risk',            label: 'Risiko (risk)',                  type: 'enum', opts: [['high','Hoch'],['moderate','Mittel'],['low','Gering'],['none','Kein']] },
    { v: 'endemic',         label: 'Endemisch (endemic)',            type: 'bool' },
    { v: 'recommendation',  label: 'Empfehlung (recommendation)',    type: 'enum', opts: [['recommended','Empfohlen'],['consider','Erwägen'],['not_indicated','Nicht indiziert'],['unknown','Unbekannt']] },
    { v: 'schedule_note',   label: 'Hinweis (schedule_note)',        type: 'text' }
  ];
  var FLAG_FIELDS = [
    { v: 'polio_category',  label: 'Polio-Kategorie (WHO)',          type: 'enum', opts: [['1','Kat. 1'],['2','Kat. 2'],['3','Kat. 3'],['','—']] },
    { v: 'mening_belt',     label: 'Meningitis-Gürtel',              type: 'text' },
    { v: 'yf_cert',         label: 'Gelbfieber-Impfpflicht (yf_cert)', type: 'bool' }
  ];
  var DRUG_ALLOWED = ['is_immunosuppressant','live_vaccine_allowed','therapy_pause_needed','immune_response_dead_vaccine','drug_class','description','category','checkpoint','unverified'];

  var _tab = 'countries';   // 'countries' | 'drugs'
  var _edit = null;         // aktuell bearbeitete Zeile (oder null)

  /* ---------- Styles (einmalig, App-Tokens mit Fallbacks) ---------- */
  function injectStyle() {
    if (document.getElementById('co-style')) return;
    var st = document.createElement('style'); st.id = 'co-style';
    st.textContent =
      '.co-wrap{font-size:var(--fs-sm,13px);}' +
      '.co-subtabs{display:flex;gap:8px;border-bottom:1px solid var(--line,#e2e2e2);margin:6px 0 14px;}' +
      '.co-subtabs button{background:none;border:none;padding:8px 12px;cursor:pointer;font-weight:600;color:var(--grey,#666);border-bottom:2px solid transparent;font-size:var(--fs-sm,13px);}' +
      '.co-subtabs button.active{color:var(--blue,#1a73e8);border-bottom-color:var(--blue,#1a73e8);}' +
      '.co-table{width:100%;border-collapse:collapse;margin-bottom:8px;}' +
      '.co-table th{text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.03em;color:var(--grey,#666);border-bottom:1px solid var(--line,#e2e2e2);padding:6px 8px;}' +
      '.co-table td{padding:7px 8px;border-bottom:1px solid var(--grey-xl,#f2f2f2);vertical-align:top;}' +
      '.co-badge{display:inline-block;font-size:11px;font-weight:700;background:var(--blue-bg,#e8f0fe);color:var(--blue,#1a73e8);border-radius:10px;padding:1px 8px;}' +
      '.co-form{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px;}' +
      '.co-form label{display:block;font-size:11px;font-weight:600;color:#333;margin:0 0 3px;}' +
      '.co-form .full{grid-column:1 / -1;}' +
      '.co-inp{width:100%;padding:9px 10px;border:1px solid var(--line,#ccc);border-radius:var(--radius-md,8px);font-size:var(--fs-sm,13px);font-family:inherit;box-sizing:border-box;}' +
      '.co-btn{background:var(--black,#111);color:#fff;border:none;border-radius:var(--radius-md,8px);padding:10px 16px;font-weight:600;cursor:pointer;font-size:var(--fs-sm,13px);}' +
      '.co-btn.sec{background:#fff;color:#333;border:1px solid var(--line,#ccc);}' +
      '.co-btn.del{background:var(--red-bg,#fdecec);color:var(--red,#c0392b);border:1px solid #f3c9c9;padding:5px 10px;font-size:12px;}' +
      '.co-btn.edit{background:#fff;color:var(--blue,#1a73e8);border:1px solid var(--line,#ccc);padding:5px 10px;font-size:12px;margin-right:4px;}' +
      '.co-msg{margin:8px 0;font-size:var(--fs-sm,13px);}' +
      '.co-msg.ok{color:var(--green,#2e7d32);}.co-msg.err{color:var(--red,#c0392b);}' +
      '.co-note{color:var(--grey,#666);font-size:12px;margin:4px 0 10px;}';
    document.head.appendChild(st);
  }

  /* ---------- Section injizieren ---------- */
  function ensureSection() {
    var panel = document.getElementById('admin-panel');
    if (!panel) return null;
    var sec = document.getElementById('co-sec');
    if (!sec) {
      sec = document.createElement('section');
      sec.className = 'card'; sec.id = 'co-sec';
      sec.setAttribute('data-atab', 'content');
      sec.style.display = 'none';
      sec.innerHTML =
        '<h2>Epidemiologische Inhalte & Medikamente</h2>' +
        '<div class="card-desc">Länderrisiken, Ausbrüche, Länder-Flags (Polio/Meningitis/Gelbfieber) und Medikamenten-Einstufungen anpassen. Diese Overrides überschreiben die App-Basisdaten und wirken sofort.</div>' +
        '<div id="co-body" class="co-wrap"></div>';
      panel.appendChild(sec);
    }
    return sec;
  }

  /* ---------- Reiter-Button in #admin-tabs ergänzen ---------- */
  function ensureTabButton() {
    if (!isAdmin()) return;
    var bar = document.getElementById('admin-tabs');
    if (!bar) return;
    if (bar.querySelector('button[data-atab="content"]')) return;
    var btn = document.createElement('button');
    btn.setAttribute('data-atab', 'content');
    btn.textContent = 'Inhalte';
    btn.onclick = function () { if (typeof window.adminTab === 'function') window.adminTab('content'); };
    bar.appendChild(btn);
    if (bar.style.display === 'none') bar.style.display = '';
  }

  /* ---------- Patch buildSettingsTabs + adminTab ---------- */
  function install() {
    injectStyle();
    if (typeof window.buildSettingsTabs === 'function' && !window.buildSettingsTabs.__coPatched) {
      var origBuild = window.buildSettingsTabs;
      window.buildSettingsTabs = function () {
        var r = origBuild.apply(this, arguments);
        try { ensureSection(); ensureTabButton(); } catch (e) {}
        return r;
      };
      window.buildSettingsTabs.__coPatched = true;
    }
    if (typeof window.adminTab === 'function' && !window.adminTab.__coPatched) {
      var origTab = window.adminTab;
      window.adminTab = function (name) {
        var r = origTab.apply(this, arguments);
        try { if (name === 'content') { ensureSection(); renderEditor(); } } catch (e) {}
        return r;
      };
      window.adminTab.__coPatched = true;
    }
  }

  /* ---------- Rendering ---------- */
  function msg(t, kind) { var m = document.getElementById('co-msg'); if (m) m.className = 'co-msg ' + (kind || ''); if (m) m.textContent = t || ''; }

  async function renderEditor() {
    var body = document.getElementById('co-body'); if (!body) return;
    body.innerHTML =
      '<div class="co-subtabs">' +
        '<button data-t="countries" class="' + (_tab === 'countries' ? 'active' : '') + '">Länder & Krankheiten</button>' +
        '<button data-t="drugs" class="' + (_tab === 'drugs' ? 'active' : '') + '">Medikamente</button>' +
      '</div>' +
      '<div id="co-msg" class="co-msg"></div>' +
      '<div id="co-inner"></div>';
    body.querySelectorAll('.co-subtabs button').forEach(function (b) {
      b.onclick = function () { _tab = b.getAttribute('data-t'); _edit = null; renderEditor(); };
    });
    if (_tab === 'countries') await renderCountries();
    else await renderDrugs();
  }

  function overridesList() {
    return (typeof window.dbLoadContentOverrides === 'function') ? window.dbLoadContentOverrides() : Promise.resolve([]);
  }

  function countryOptions() {
    var C = (window.ENGINE_DATA && window.ENGINE_DATA.countries) || {};
    return Object.keys(C).sort(function (a, b) { return (C[a].name || a).localeCompare(C[b].name || b); })
      .map(function (iso) { return '<option value="' + iso + '">' + esc(C[iso].name || iso) + ' (' + iso + ')</option>'; }).join('');
  }
  function diseaseOptions() {
    var CD = (window.ENGINE_DATA && window.ENGINE_DATA.countryDisease) || {};
    var set = {}; Object.keys(CD).forEach(function (iso) { Object.keys(CD[iso]).forEach(function (d) { set[d] = 1; }); });
    return Object.keys(set).sort().map(function (d) { return '<option value="' + d + '">' + esc(d) + '</option>'; }).join('');
  }
  function cName(iso) { var C = (window.ENGINE_DATA && window.ENGINE_DATA.countries) || {}; return (C[iso] && C[iso].name) || iso; }

  async function renderCountries() {
    var inner = document.getElementById('co-inner'); if (!inner) return;
    inner.innerHTML = '<div class="co-note">Lade Overrides…</div>';
    var all = await overridesList();
    var rows = all.filter(function (o) { return (o.kind || o.type) === 'country_disease' || (o.kind || o.type) === 'flag'; });
    var meta = window.CONTENT_OVERRIDES_META || {};
    var h = '<div class="co-note">Aktive Overrides: <b>' + (rows.length) + '</b>' + (meta.latestStand ? ' · Datenstand: ' + esc(meta.latestStand) : '') + '</div>';
    h += '<table class="co-table"><thead><tr><th>Land</th><th>Krankheit/Flag</th><th>Feld</th><th>Wert</th><th>Quelle</th><th>Gültig bis</th><th></th></tr></thead><tbody>';
    if (!rows.length) h += '<tr><td colspan="7" style="color:var(--grey,#888)">Keine aktiven Länder-Overrides.</td></tr>';
    rows.forEach(function (o) {
      h += '<tr><td>' + esc(cName(o.country_iso2)) + '</td><td>' + esc(o.disease || '(Länder-Flag)') + '</td><td>' + esc(o.field) + '</td>' +
        '<td><b>' + esc(JSON.stringify(o.value)) + '</b></td><td>' + esc(o.source || '') + (o.stand ? ' <span class="co-badge">' + esc(o.stand) + '</span>' : '') + '</td>' +
        '<td>' + esc(o.valid_to || '') + '</td>' +
        '<td><button class="co-btn edit" data-id="' + esc(o.id) + '">Bearbeiten</button><button class="co-btn del" data-id="' + esc(o.id) + '">Löschen</button></td></tr>';
    });
    h += '</tbody></table>';
    h += countryForm();
    inner.innerHTML = h;
    wireCountry(inner, rows);
  }

  function countryForm() {
    var e = _edit || {};
    return '<h3 style="margin-top:18px;font-size:15px;">' + (_edit ? 'Override bearbeiten' : 'Neuen Override anlegen') + '</h3>' +
      '<div class="co-form">' +
        '<div><label>Land *</label><select id="co-country" class="co-inp"><option value="">— wählen —</option>' + countryOptions() + '</select></div>' +
        '<div><label>Krankheit (leer = Länder-Flag)</label><select id="co-disease" class="co-inp"><option value="">— keine (Flag) —</option>' + diseaseOptions() + '</select></div>' +
        '<div><label>Feld *</label><select id="co-field" class="co-inp"></select></div>' +
        '<div><label>Wert *</label><span id="co-value-wrap"></span></div>' +
        '<div><label>Quelle</label><input id="co-source" class="co-inp" placeholder="z. B. ECDC, RKI, CDC"></div>' +
        '<div><label>Stand (Datum der Info)</label><input id="co-stand" type="date" class="co-inp"></div>' +
        '<div><label>Gültig ab</label><input id="co-from" type="date" class="co-inp"></div>' +
        '<div><label>Gültig bis (für Ausbrüche)</label><input id="co-to" type="date" class="co-inp"></div>' +
        '<div class="full"><label>Notiz</label><input id="co-note" class="co-inp" placeholder="interne Notiz"></div>' +
        '<div class="full" style="display:flex;gap:8px;">' +
          '<button id="co-save" class="co-btn">' + (_edit ? 'Aktualisieren' : 'Speichern') + '</button>' +
          (_edit ? '<button id="co-cancel" class="co-btn sec">Abbrechen</button>' : '') +
        '</div>' +
      '</div>';
  }

  function fieldsFor(hasDisease) { return hasDisease ? DISEASE_FIELDS : FLAG_FIELDS; }

  function renderFieldSelect() {
    var disease = document.getElementById('co-disease').value;
    var sel = document.getElementById('co-field');
    var fields = fieldsFor(!!disease);
    sel.innerHTML = fields.map(function (f) { return '<option value="' + f.v + '">' + esc(f.label) + '</option>'; }).join('');
    if (_edit && _edit.field) { sel.value = _edit.field; }
    renderValueInput();
  }
  window.coRenderValueInput = renderValueInput;
  function renderValueInput() {
    var disease = document.getElementById('co-disease').value;
    var fieldV = document.getElementById('co-field').value;
    var f = fieldsFor(!!disease).find(function (x) { return x.v === fieldV; }) || { type: 'text' };
    var wrap = document.getElementById('co-value-wrap');
    var cur = _edit ? _edit.value : undefined;
    if (f.type === 'bool') {
      wrap.innerHTML = '<select id="co-value" class="co-inp"><option value="true">Ja (true)</option><option value="false">Nein (false)</option></select>';
      if (cur === false) document.getElementById('co-value').value = 'false';
    } else if (f.type === 'enum') {
      wrap.innerHTML = '<select id="co-value" class="co-inp">' + f.opts.map(function (o) { return '<option value="' + esc(o[0]) + '">' + esc(o[1]) + ' (' + esc(o[0]) + ')</option>'; }).join('') + '</select>';
      if (cur != null) document.getElementById('co-value').value = String(cur);
    } else {
      wrap.innerHTML = '<input id="co-value" class="co-inp" value="' + (cur != null ? esc(cur) : '') + '">';
    }
  }

  function wireCountry(root, rows) {
    root.querySelectorAll('.co-btn.del').forEach(function (b) { b.onclick = function () { doDelete(b.getAttribute('data-id')); }; });
    root.querySelectorAll('.co-btn.edit').forEach(function (b) {
      b.onclick = function () { _edit = rows.find(function (o) { return String(o.id) === b.getAttribute('data-id'); }) || null; renderCountries().then(prefillCountry); };
    });
    var dsel = document.getElementById('co-disease'), fsel = document.getElementById('co-field');
    if (dsel) dsel.onchange = renderFieldSelect;
    if (fsel) fsel.onchange = renderValueInput;
    renderFieldSelect();
    if (!_edit) { /* leere Form */ }
    var save = document.getElementById('co-save'); if (save) save.onclick = saveCountry;
    var cancel = document.getElementById('co-cancel'); if (cancel) cancel.onclick = function () { _edit = null; renderCountries(); };
  }
  function prefillCountry() {
    if (!_edit) return;
    var set = function (id, v) { var e = document.getElementById(id); if (e) e.value = v == null ? '' : v; };
    set('co-country', _edit.country_iso2 || '');
    set('co-disease', _edit.disease || '');
    renderFieldSelect();
    set('co-source', _edit.source); set('co-stand', _edit.stand); set('co-from', _edit.valid_from); set('co-to', _edit.valid_to); set('co-note', _edit.note);
  }

  function typedValue(fieldV, hasDisease, raw) {
    var f = fieldsFor(hasDisease).find(function (x) { return x.v === fieldV; }) || { type: 'text' };
    if (f.type === 'bool') return raw === 'true';
    return raw; // enum/text -> String
  }

  async function saveCountry() {
    var iso = document.getElementById('co-country').value;
    var disease = document.getElementById('co-disease').value;
    var field = document.getElementById('co-field').value;
    var raw = (document.getElementById('co-value') || {}).value;
    if (!iso || !field || raw == null || raw === '') { msg('Bitte Land, Feld und Wert ausfüllen.', 'err'); return; }
    var kind = disease ? 'country_disease' : 'flag';
    var obj = {
      kind: kind, country_iso2: iso, disease: disease || '', field: field,
      value: typedValue(field, !!disease, raw),
      source: document.getElementById('co-source').value || null,
      stand: document.getElementById('co-stand').value || null,
      valid_from: document.getElementById('co-from').value || null,
      valid_to: document.getElementById('co-to').value || null,
      note: document.getElementById('co-note').value || null,
      active: true
    };
    msg('Speichere…');
    // Falls beim Bearbeiten das Ziel geändert wurde: alten Eintrag entfernen
    if (_edit && _edit.id && (String(_edit.country_iso2 || '') !== iso || String(_edit.disease || '') !== (disease || '') || _edit.field !== field || (_edit.kind || _edit.type) !== kind)) {
      await window.dbDeleteContentOverride(_edit.id);
    }
    var res = await window.dbUpsertContentOverride(obj);
    if (res && res.error) { msg('Fehler: ' + (res.error.message || JSON.stringify(res.error)), 'err'); return; }
    _edit = null;
    await window.applyContentOverrides();          // live re-merge, kein Reload
    await renderCountries();
    msg('Gespeichert und angewendet.', 'ok');
  }

  /* ---------- Medikamente ---------- */
  async function renderDrugs() {
    var inner = document.getElementById('co-inner'); if (!inner) return;
    inner.innerHTML = '<div class="co-note">Lade Overrides…</div>';
    var all = await overridesList();
    var rows = all.filter(function (o) { return (o.kind || o.type) === 'drug'; });
    var h = '<div class="co-note">Aktive Medikamenten-Overrides: <b>' + rows.length + '</b>. Erlaubte Felder: ' + DRUG_ALLOWED.join(', ') + '</div>';
    h += '<table class="co-table"><thead><tr><th>Wirkstoff</th><th>Änderung (JSON)</th><th>Quelle</th><th></th></tr></thead><tbody>';
    if (!rows.length) h += '<tr><td colspan="4" style="color:var(--grey,#888)">Keine aktiven Medikamenten-Overrides.</td></tr>';
    rows.forEach(function (o) {
      h += '<tr><td>' + esc(o.field) + '</td><td><code>' + esc(JSON.stringify(o.value)) + '</code></td><td>' + esc(o.source || '') + '</td>' +
        '<td><button class="co-btn edit" data-id="' + esc(o.id) + '">Bearbeiten</button><button class="co-btn del" data-id="' + esc(o.id) + '">Löschen</button></td></tr>';
    });
    h += '</tbody></table>';
    var e = _edit || {};
    h += '<h3 style="margin-top:18px;font-size:15px;">' + (_edit ? 'Medikament bearbeiten' : 'Medikament anpassen') + '</h3>' +
      '<div class="co-form">' +
        '<div class="full"><label>Wirkstoff (exakter Name) *</label><input id="co-drug" class="co-inp" placeholder="z. B. Prednison" value="' + esc(e.field || '') + '"></div>' +
        '<div class="full"><label>Änderung als JSON *</label><textarea id="co-drug-json" class="co-inp" style="height:90px;" placeholder=\'{"is_immunosuppressant": true, "live_vaccine_allowed": "Nein"}\'>' + esc(e.value ? JSON.stringify(e.value, null, 2) : '') + '</textarea></div>' +
        '<div><label>Quelle</label><input id="co-drug-source" class="co-inp" value="' + esc(e.source || '') + '"></div>' +
        '<div><label>Stand</label><input id="co-drug-stand" type="date" class="co-inp" value="' + esc(e.stand || '') + '"></div>' +
        '<div class="full" style="display:flex;gap:8px;">' +
          '<button id="co-drug-save" class="co-btn">' + (_edit ? 'Aktualisieren' : 'Speichern') + '</button>' +
          (_edit ? '<button id="co-drug-cancel" class="co-btn sec">Abbrechen</button>' : '') +
        '</div>' +
      '</div>';
    inner.innerHTML = h;
    inner.querySelectorAll('.co-btn.del').forEach(function (b) { b.onclick = function () { doDelete(b.getAttribute('data-id')); }; });
    inner.querySelectorAll('.co-btn.edit').forEach(function (b) { b.onclick = function () { _edit = rows.find(function (o) { return String(o.id) === b.getAttribute('data-id'); }) || null; renderDrugs(); }; });
    var s = document.getElementById('co-drug-save'); if (s) s.onclick = saveDrug;
    var c = document.getElementById('co-drug-cancel'); if (c) c.onclick = function () { _edit = null; renderDrugs(); };
  }

  async function saveDrug() {
    var name = document.getElementById('co-drug').value.trim();
    var jsonStr = document.getElementById('co-drug-json').value;
    if (!name || !jsonStr.trim()) { msg('Bitte Wirkstoff und JSON angeben.', 'err'); return; }
    var val;
    try { val = JSON.parse(jsonStr); } catch (e) { msg('Ungültiges JSON.', 'err'); return; }
    if (!val || typeof val !== 'object' || Array.isArray(val)) { msg('JSON muss ein Objekt sein.', 'err'); return; }
    var unknown = Object.keys(val).filter(function (k) { return DRUG_ALLOWED.indexOf(k) < 0; });
    if (unknown.length) {
      var ok = await uiConfirm('Unbekannte Felder: ' + unknown.join(', ') + '. Trotzdem speichern?', { title: 'Ungewöhnliche Felder', ok: 'Speichern' });
      if (!ok) return;
    }
    msg('Speichere…');
    var obj = { kind: 'drug', country_iso2: '', disease: '', field: name, value: val,
      source: document.getElementById('co-drug-source').value || null,
      stand: document.getElementById('co-drug-stand').value || null, active: true };
    if (_edit && _edit.id && _edit.field !== name) await window.dbDeleteContentOverride(_edit.id);
    var res = await window.dbUpsertContentOverride(obj);
    if (res && res.error) { msg('Fehler: ' + (res.error.message || JSON.stringify(res.error)), 'err'); return; }
    _edit = null;
    await window.applyContentOverrides();
    await renderDrugs();
    msg('Gespeichert und angewendet.', 'ok');
  }

  async function doDelete(id) {
    var ok = await uiConfirm('Diesen Override wirklich löschen?', { title: 'Löschen', ok: 'Löschen', danger: true });
    if (!ok) return;
    var res = await window.dbDeleteContentOverride(id);
    if (res && res.error) { msg('Löschen fehlgeschlagen: ' + (res.error.message || ''), 'err'); return; }
    await window.applyContentOverrides();
    if (_tab === 'drugs') await renderDrugs(); else await renderCountries();
    msg('Gelöscht und angewendet.', 'ok');
  }

  /* ---------- Installation (robust, auch wenn script.js noch nicht fertig) ---------- */
  function tryInstall() { try { install(); } catch (e) {} }
  if (typeof document !== 'undefined' && document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInstall);
  else setTimeout(tryInstall, 0);
  var _t = 0, _iv = setInterval(function () {
    _t++; tryInstall();
    if ((window.buildSettingsTabs && window.buildSettingsTabs.__coPatched && window.adminTab && window.adminTab.__coPatched) || _t > 60) clearInterval(_iv);
  }, 300);
})();
