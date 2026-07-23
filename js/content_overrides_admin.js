/* ============================================================================
   Concept B — Admin-Editor „Inhalte" (selbst-installierend).
   Reiter im Admin-Panel mit drei Unterbereichen:
     • Länder        – Land wählen → Tabelle ALLER Krankheiten + Länder-Flags,
                       direkt editierbar (Override je Feld, live).
     • Erkrankungen  – Krankheit wählen → alle Länder nach Risiko gruppiert,
                       Land anklicken → inline editierbar.
     • Medikamente   – Wirkstoff-Suche (Autodetect), alle gespeicherten Infos
                       editierbar, „zuletzt aktualisiert", neue Wirkstoffe anlegen.
   Overrides überschreiben die App-Basisdaten und wirken sofort (Re-Merge).
   Patcht window.buildSettingsTabs / window.adminTab. NACH js/script.js laden.
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
  // CURRENT_PROFILE ist in script.js top-level `let` (NICHT auf window). Klassische Skripte teilen den
  // globalen Lexical-Scope, daher greift die bloße Referenz (analog supabaseClient).
  function currentProfile() {
    try { if (typeof CURRENT_PROFILE !== 'undefined' && CURRENT_PROFILE) return CURRENT_PROFILE; } catch (e) {}
    return window.CURRENT_PROFILE || {};
  }
  function isAdmin() { return (currentProfile() || {}).role === 'admin'; }

  /* ---------- Konstanten ---------- */
  var DISEASES = ['chikungunya','cholera','dengue','diphtheria','hepatitis_a','hepatitis_b','japanese_encephalitis','measles','meningococcal','polio','rabies','tbe','tetanus','typhoid','yellow_fever'];
  var DISEASE_DE = { chikungunya:'Chikungunya', cholera:'Cholera', dengue:'Dengue-Fieber', diphtheria:'Diphtherie', hepatitis_a:'Hepatitis A', hepatitis_b:'Hepatitis B', japanese_encephalitis:'Japanische Enzephalitis', measles:'Masern', meningococcal:'Meningokokken', polio:'Polio', rabies:'Tollwut', tbe:'FSME', tetanus:'Tetanus', typhoid:'Typhus', yellow_fever:'Gelbfieber' };
  var RISK_OPTS = [['','—'],['none','Kein'],['low','Gering'],['moderate','Mittel'],['high','Hoch']];
  var RISK_DE = { '':'—', none:'Kein', low:'Gering', moderate:'Mittel', high:'Hoch' };
  var RISK_ORDER = ['high','moderate','low','none','']; // Reihenfolge der Gruppen
  var REC_OPTS = [['','—'],['not_indicated','Nicht indiziert'],['consider','Erwägen'],['recommended','Empfohlen'],['unknown','Unbekannt']];
  var DRUG_FIELDS = [
    { k:'brand_names',                  label:'Handelsnamen (Komma-getrennt)', type:'list' },
    { k:'is_immunosuppressant',         label:'Immunsuppressivum',             type:'bool' },
    { k:'live_vaccine_allowed',         label:'Lebendimpfung erlaubt',         type:'text' },
    { k:'therapy_pause_needed',         label:'Therapiepause nötig',           type:'text' },
    { k:'immune_response_dead_vaccine', label:'Totimpfstoff-Antwort',          type:'text' },
    { k:'drug_class',                   label:'Substanzklasse',                type:'text' },
    { k:'category',                     label:'Kategorie',                     type:'text' },
    { k:'atc_code',                     label:'ATC-Code',                      type:'text' },
    { k:'checkpoint',                   label:'Checkpoint-Inhibitor',          type:'bool' },
    { k:'unverified',                   label:'Unverifiziert (ungeprüft)',     type:'bool' },
    { k:'description',                  label:'Beschreibung',                  type:'textarea' },
    { k:'dtg_note',                     label:'DTG-Hinweis',                   type:'textarea' }
  ];
  var DRUG_ALLOWED = DRUG_FIELDS.map(function (f) { return f.k; });

  /* ---------- State ---------- */
  var _tab = 'countries';          // 'countries' | 'diseases' | 'drugs'
  var _selCountry = '';
  var _selDisease = '';
  var _diseaseDetail = '';         // iso, für das im Erkrankungen-Tab das Detail offen ist
  var _drugSel = null;             // aktuell gewählter Wirkstoff (String) im Medikamente-Tab
  var _drugNew = false;            // Modus „neues Medikament"
  var _ov = [];                    // Cache aller aktiven Overrides
  var _ovMap = {};                 // "kind|iso|dis|field" -> override
  var _ovDrug = {};                // substance(lower) -> drug-override

  /* ---------- Styles ---------- */
  function injectStyle() {
    if (document.getElementById('co-style')) return;
    var st = document.createElement('style'); st.id = 'co-style';
    st.textContent =
      '.co-wrap{font-size:var(--fs-sm,13px);max-width:900px;}' +
      '.co-subtabs{display:flex;gap:8px;border-bottom:1px solid var(--line,#e2e2e2);margin:6px 0 14px;}' +
      '.co-subtabs button{background:none;border:none;padding:8px 12px;cursor:pointer;font-weight:600;color:var(--grey,#666);border-bottom:2px solid transparent;font-size:var(--fs-sm,13px);}' +
      '.co-subtabs button.active{color:var(--blue,#1a73e8);border-bottom-color:var(--blue,#1a73e8);}' +
      '.co-msg{margin:8px 0;font-size:var(--fs-sm,13px);min-height:1em;}' +
      '.co-msg.ok{color:var(--green,#2e7d32);}.co-msg.err{color:var(--red,#c0392b);}' +
      '.co-note{color:var(--grey,#666);font-size:12px;margin:4px 0 10px;}' +
      '.co-inp{width:100%;padding:8px 10px;border:1px solid var(--line,#ccc);border-radius:var(--radius-md,8px);font-size:var(--fs-sm,13px);font-family:inherit;box-sizing:border-box;background:#fff;}' +
      '.co-btn{background:var(--black,#111);color:#fff;border:none;border-radius:var(--radius-md,8px);padding:9px 15px;font-weight:600;cursor:pointer;font-size:var(--fs-sm,13px);}' +
      '.co-btn.sec{background:#fff;color:#333;border:1px solid var(--line,#ccc);}' +
      '.co-btn.del{background:var(--red-bg,#fdecec);color:var(--red,#c0392b);border:1px solid #f3c9c9;padding:5px 10px;font-size:12px;}' +
      '.co-btn.sm{padding:4px 9px;font-size:12px;}' +
      '.co-tbl{width:100%;border-collapse:collapse;margin:6px 0 8px;}' +
      '.co-tbl th{text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.03em;color:var(--grey,#666);border-bottom:1px solid var(--line,#e2e2e2);padding:6px 8px;}' +
      '.co-tbl td{padding:5px 8px;border-bottom:1px solid var(--grey-xl,#f2f2f2);vertical-align:middle;}' +
      '.co-tbl tr.ov td{background:#fff8e1;}' +
      '.co-sel{padding:6px 8px;border:1px solid var(--line,#ccc);border-radius:6px;font-size:12px;background:#fff;font-family:inherit;}' +
      '.co-ovdot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#f5a623;margin-left:6px;vertical-align:middle;}' +
      '.co-secline{font-weight:700;font-size:13px;margin:14px 0 6px;display:flex;align-items:center;gap:8px;}' +
      '.co-cnt{display:inline-block;font-size:11px;font-weight:700;border-radius:10px;padding:1px 8px;background:var(--grey-xl,#eee);color:#444;}' +
      '.co-chips{display:flex;flex-wrap:wrap;gap:6px;}' +
      '.co-chip{cursor:pointer;font-size:12px;background:#fff;border:1px solid var(--line,#ddd);border-radius:12px;padding:3px 10px;}' +
      '.co-chip:hover{border-color:var(--blue,#1a73e8);}' +
      '.co-chip.ov{background:#fff8e1;border-color:#ffd54f;}' +
      '.co-grp.hi .co-secline{color:#c0392b;}.co-grp.mo .co-secline{color:#b26a00;}.co-grp.lo .co-secline{color:#2e7d32;}' +
      '.co-detail{margin-top:10px;padding:12px;border:1px solid var(--line,#e2e2e2);border-radius:var(--radius-md,8px);background:var(--grey-xl,#f6f7f9);}' +
      '.co-form{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px;}' +
      '.co-form label{display:block;font-size:11px;font-weight:600;color:#333;margin:0 0 3px;}' +
      '.co-form .full{grid-column:1 / -1;}' +
      '.co-sugg{border:1px solid var(--line,#ddd);border-radius:8px;max-height:240px;overflow:auto;margin-top:4px;background:#fff;}' +
      '.co-sugg div{padding:7px 10px;cursor:pointer;border-bottom:1px solid var(--grey-xl,#f2f2f2);font-size:13px;}' +
      '.co-sugg div:hover{background:var(--grey-xl,#f2f6ff);}' +
      '.co-updated{font-size:11px;color:var(--grey,#777);margin:2px 0 8px;}';
    document.head.appendChild(st);
  }

  /* ---------- Section + Reiter ---------- */
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
        '<h2>Epidemiologische Inhalte &amp; Medikamente</h2>' +
        '<div class="card-desc">Länderrisiken, Ausbrüche, Länder-Flags und Medikamenten-Einstufungen anpassen. Overrides überschreiben die App-Basisdaten und wirken sofort.</div>' +
        '<div id="co-body" class="co-wrap"></div>';
      // In denselben zentrierten Container (.admin-body, max 1000px) einhängen wie die übrigen
      // Einstellungs-Sektionen, damit Breite/Layout zum Rest passen (nicht ins vollbreite #admin-panel).
      var host = panel.querySelector('.admin-body') || panel;
      host.appendChild(sec);
    }
    return sec;
  }
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

  /* ---------- Daten-Helfer ---------- */
  function msg(t, kind) { var m = document.getElementById('co-msg'); if (m) { m.className = 'co-msg ' + (kind || ''); m.textContent = t || ''; } }
  function E() { return window.ENGINE_DATA || {}; }
  function countries() { return E().countries || {}; }
  function cName(iso) { var c = countries()[iso]; return (c && c.name) || iso; }
  function drugsDb() { return window.DRUGS_DB || []; }

  async function loadOverrides() {
    _ov = (typeof window.dbLoadContentOverrides === 'function') ? (await window.dbLoadContentOverrides()) : [];
    if (!Array.isArray(_ov)) _ov = [];
    _ovMap = {}; _ovDrug = {};
    _ov.forEach(function (o) {
      var kind = o.kind || o.type;
      if (kind === 'drug') { _ovDrug[String(o.field || '').toLowerCase()] = o; }
      else { _ovMap[kind + '|' + (o.country_iso2 || '') + '|' + (o.disease || '') + '|' + o.field] = o; }
    });
  }
  function ovFor(kind, iso, dis, field) { return _ovMap[kind + '|' + (iso || '') + '|' + (dis || '') + '|' + field] || null; }

  async function upsert(obj) {
    obj.active = true;
    var res = await window.dbUpsertContentOverride(obj);
    if (res && res.error) { msg('Fehler: ' + (res.error.message || JSON.stringify(res.error)), 'err'); return false; }
    await window.applyContentOverrides();
    await loadOverrides();
    return true;
  }
  async function removeOv(id) {
    var res = await window.dbDeleteContentOverride(id);
    if (res && res.error) { msg('Löschen fehlgeschlagen: ' + (res.error.message || ''), 'err'); return false; }
    await window.applyContentOverrides();
    await loadOverrides();
    return true;
  }
  function curSrc() { var e = document.getElementById('co-src'); return e ? (e.value || null) : null; }
  function curStand() { var e = document.getElementById('co-stand'); return e && e.value ? e.value : null; }

  /* ---------- Editor-Rahmen ---------- */
  async function renderEditor() {
    var body = document.getElementById('co-body'); if (!body) return;
    body.innerHTML =
      '<div class="co-subtabs">' +
        '<button data-t="countries" class="' + (_tab === 'countries' ? 'active' : '') + '">Länder</button>' +
        '<button data-t="diseases" class="' + (_tab === 'diseases' ? 'active' : '') + '">Erkrankungen</button>' +
        '<button data-t="drugs" class="' + (_tab === 'drugs' ? 'active' : '') + '">Medikamente</button>' +
      '</div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;margin-bottom:6px">' +
        '<div style="flex:1;min-width:160px"><label style="font-size:11px;font-weight:600;color:#333">Quelle (für Speicherungen)</label><input id="co-src" class="co-inp" placeholder="z. B. ECDC, RKI, CDC"></div>' +
        '<div><label style="font-size:11px;font-weight:600;color:#333">Stand</label><input id="co-stand" type="date" class="co-inp" style="width:auto"></div>' +
      '</div>' +
      '<div id="co-msg" class="co-msg"></div>' +
      '<div id="co-inner"></div>';
    body.querySelectorAll('.co-subtabs button').forEach(function (b) {
      b.onclick = function () { _tab = b.getAttribute('data-t'); _diseaseDetail = ''; _drugSel = null; _drugNew = false; renderEditor(); };
    });
    await loadOverrides();
    if (_tab === 'countries') renderCountriesTab();
    else if (_tab === 'diseases') renderDiseasesTab();
    else renderDrugsTab();
  }

  function selectHtml(id, opts, cur, cls) {
    return '<select id="' + id + '" class="' + (cls || 'co-inp') + '">' +
      opts.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (String(cur) === String(o[0]) ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select>';
  }
  function countryOptionsHtml() {
    var C = countries();
    return '<option value="">— Land wählen —</option>' + Object.keys(C).sort(function (a, b) { return (C[a].name || a).localeCompare(C[b].name || b); })
      .map(function (iso) { return '<option value="' + iso + '"' + (iso === _selCountry ? ' selected' : '') + '>' + esc(C[iso].name || iso) + ' (' + iso + ')</option>'; }).join('');
  }
  function diseaseListHtml(id, cur) {
    return '<option value="">— Krankheit wählen —</option>' + DISEASES.map(function (d) { return '<option value="' + d + '"' + (d === cur ? ' selected' : '') + '>' + esc(DISEASE_DE[d] || d) + '</option>'; }).join('');
  }

  /* ============================ LÄNDER ============================ */
  function renderCountriesTab() {
    var inner = document.getElementById('co-inner'); if (!inner) return;
    inner.innerHTML = '<div><select id="co-country" class="co-inp" style="max-width:420px">' + countryOptionsHtml() + '</select></div><div id="co-ctable" style="margin-top:12px"></div>';
    document.getElementById('co-country').onchange = function () { _selCountry = this.value; renderCountryTable(); };
    if (_selCountry) renderCountryTable();
  }

  function renderCountryTable() {
    var box = document.getElementById('co-ctable'); if (!box) return;
    var iso = _selCountry;
    if (!iso) { box.innerHTML = ''; return; }
    var C = countries()[iso] || {};
    var CD = (E().countryDisease && E().countryDisease[iso]) || {};
    // Länder-Flags
    var h = '<div class="co-secline">Länder-Flags · ' + esc(cName(iso)) + ' <span class="co-note" style="margin:0;font-weight:400">Region: ' + esc(C.region || '—') + '</span></div>';
    h += '<table class="co-tbl"><tbody>';
    h += flagRow(iso, 'yf_cert', 'Gelbfieber-Impfpflicht', 'bool', C.yf_cert);
    h += flagRow(iso, 'polio_category', 'Polio-Kategorie (WHO)', 'enum', C.polio_category, [['','—'],['1','Kat. 1'],['2','Kat. 2'],['3','Kat. 3']]);
    h += flagRow(iso, 'mening_belt', 'Meningitis-Gürtel', 'text', C.mening_belt);
    h += '</tbody></table>';
    // Krankheiten-Tabelle
    h += '<div class="co-secline" style="margin-top:16px">Krankheiten</div>';
    h += '<table class="co-tbl"><thead><tr><th>Krankheit</th><th>Risiko</th><th>Empfehlung</th><th style="text-align:center">Endemisch</th><th style="text-align:center">Ausbruch</th><th></th></tr></thead><tbody>';
    DISEASES.forEach(function (d) {
      var e = CD[d] || {};
      var hasOv = ['risk','recommendation','endemic','outbreak','schedule_note'].some(function (f) { return ovFor('country_disease', iso, d, f); });
      h += '<tr class="' + (hasOv ? 'ov' : '') + '" data-dis="' + d + '">' +
        '<td><b>' + esc(DISEASE_DE[d] || d) + '</b></td>' +
        '<td>' + selectHtml('', RISK_OPTS, e.risk == null ? '' : e.risk, 'co-sel').replace('<select', '<select data-dis="' + d + '" data-field="risk" data-type="enum"') + '</td>' +
        '<td>' + selectHtml('', REC_OPTS, e.recommendation == null ? '' : e.recommendation, 'co-sel').replace('<select', '<select data-dis="' + d + '" data-field="recommendation" data-type="enum"') + '</td>' +
        '<td style="text-align:center"><input type="checkbox" data-dis="' + d + '" data-field="endemic" data-type="bool"' + (e.endemic ? ' checked' : '') + '></td>' +
        '<td style="text-align:center"><input type="checkbox" data-dis="' + d + '" data-field="outbreak" data-type="bool"' + (e.outbreak ? ' checked' : '') + '></td>' +
        '<td>' + (hasOv ? '<button class="co-btn del co-reset" data-dis="' + d + '">↺ Reset</button>' : '') + '</td>' +
      '</tr>';
    });
    h += '</tbody></table><div class="co-note">Gelb hinterlegt = Override aktiv. „Reset" entfernt alle Overrides dieser Krankheit für dieses Land.</div>';
    box.innerHTML = h;
    // Wiring
    box.querySelectorAll('select[data-field],input[data-field]').forEach(function (el2) {
      var handler = function () {
        var d = el2.getAttribute('data-dis'), f = el2.getAttribute('data-field'), t = el2.getAttribute('data-type');
        var raw = (t === 'bool') ? el2.checked : el2.value;
        var isFlag = el2.getAttribute('data-flag') === '1';
        saveCell(iso, isFlag ? '' : d, f, t, raw);
      };
      el2.onchange = handler;
    });
    box.querySelectorAll('.co-reset').forEach(function (b) {
      b.onclick = function () {
        if (b.getAttribute('data-flag') === '1') resetFlag(iso, b.getAttribute('data-field'));
        else resetRow(iso, b.getAttribute('data-dis'));
      };
    });
  }
  async function resetFlag(iso, field) {
    var targets = _ov.filter(function (o) { return (o.kind || o.type) === 'flag' && o.country_iso2 === iso && o.field === field; });
    for (var i = 0; i < targets.length; i++) { await removeOv(targets[i].id); }
    msg('Zurückgesetzt.', 'ok');
    renderCountryTable();
  }
  function flagRow(iso, field, label, type, val, opts) {
    var hasOv = !!ovFor('flag', iso, '', field);
    var ctrl;
    if (type === 'bool') ctrl = '<input type="checkbox" data-flag="1" data-dis="" data-field="' + field + '" data-type="bool"' + (val ? ' checked' : '') + '>';
    else if (type === 'enum') ctrl = selectHtml('', opts, val == null ? '' : val, 'co-sel').replace('<select', '<select data-flag="1" data-dis="" data-field="' + field + '" data-type="enum"');
    else ctrl = '<input class="co-sel" style="min-width:200px" data-flag="1" data-dis="" data-field="' + field + '" data-type="text" value="' + esc(val == null ? '' : val) + '">';
    return '<tr class="' + (hasOv ? 'ov' : '') + '"><td style="width:220px"><b>' + esc(label) + '</b></td><td>' + ctrl + '</td><td>' + (hasOv ? '<button class="co-btn del co-reset" data-dis="" data-flag="1" data-field="' + field + '">↺</button>' : '') + '</td></tr>';
  }

  async function saveCell(iso, disease, field, type, raw) {
    var value = (type === 'bool') ? !!raw : raw;
    var kind = disease ? 'country_disease' : 'flag';
    msg('Speichere…');
    var ok = await upsert({ kind: kind, country_iso2: iso, disease: disease || '', field: field, value: value, source: curSrc(), stand: curStand() });
    if (ok) { msg('Gespeichert & angewendet.', 'ok'); renderCountryTable(); }
  }
  async function resetRow(iso, disease) {
    var targets = _ov.filter(function (o) {
      var kind = o.kind || o.type;
      if (disease) return kind === 'country_disease' && o.country_iso2 === iso && o.disease === disease;
      return false;
    });
    for (var i = 0; i < targets.length; i++) { await removeOv(targets[i].id); }
    msg('Zurückgesetzt.', 'ok');
    renderCountryTable();
  }

  /* ========================= ERKRANKUNGEN ========================= */
  function renderDiseasesTab() {
    var inner = document.getElementById('co-inner'); if (!inner) return;
    inner.innerHTML = '<div><select id="co-disease" class="co-inp" style="max-width:420px">' + diseaseListHtml('co-disease', _selDisease) + '</select></div><div id="co-dgroups" style="margin-top:12px"></div>';
    document.getElementById('co-disease').onchange = function () { _selDisease = this.value; _diseaseDetail = ''; renderDiseaseGroups(); };
    if (_selDisease) renderDiseaseGroups();
  }
  function renderDiseaseGroups() {
    var box = document.getElementById('co-dgroups'); if (!box) return;
    var d = _selDisease; if (!d) { box.innerHTML = ''; return; }
    var CD = E().countryDisease || {}; var C = countries();
    var groups = { high:[], moderate:[], low:[], none:[], '':[] };
    Object.keys(C).sort(function (a, b) { return (C[a].name || a).localeCompare(C[b].name || b); }).forEach(function (iso) {
      var e = (CD[iso] && CD[iso][d]);
      if (!e) return;
      var r = (e.risk == null ? '' : e.risk);
      if (!groups[r]) groups[r] = [];
      groups[r].push({ iso: iso, outbreak: !!e.outbreak, ov: ['risk','recommendation','endemic','outbreak'].some(function (f) { return ovFor('country_disease', iso, d, f); }) });
    });
    var h = '';
    RISK_ORDER.forEach(function (r) {
      var arr = groups[r] || []; if (!arr.length) return;
      var cls = r === 'high' ? 'hi' : (r === 'moderate' ? 'mo' : (r === 'low' ? 'lo' : ''));
      h += '<div class="co-grp ' + cls + '"><div class="co-secline">' + esc(RISK_DE[r] || '—') + ' <span class="co-cnt">' + arr.length + '</span></div><div class="co-chips">' +
        arr.map(function (x) { return '<span class="co-chip' + (x.ov ? ' ov' : '') + '" data-iso="' + x.iso + '">' + esc(cName(x.iso)) + (x.outbreak ? ' 🔥' : '') + '</span>'; }).join('') +
        '</div></div>';
    });
    h += '<div id="co-ddetail"></div>';
    box.innerHTML = h;
    box.querySelectorAll('.co-chip').forEach(function (c) { c.onclick = function () { _diseaseDetail = c.getAttribute('data-iso'); renderDiseaseDetail(); }; });
    if (_diseaseDetail) renderDiseaseDetail();
  }
  function renderDiseaseDetail() {
    var box = document.getElementById('co-ddetail'); if (!box) return;
    var iso = _diseaseDetail, d = _selDisease; if (!iso || !d) { box.innerHTML = ''; return; }
    var e = (E().countryDisease && E().countryDisease[iso] && E().countryDisease[iso][d]) || {};
    var h = '<div class="co-detail"><div class="co-secline" style="margin-top:0">' + esc(cName(iso)) + ' · ' + esc(DISEASE_DE[d] || d) + '</div>' +
      '<div class="co-form">' +
        '<div><label>Risiko</label>' + selectHtml('', RISK_OPTS, e.risk == null ? '' : e.risk).replace('<select', '<select data-dis="' + d + '" data-field="risk" data-type="enum"') + '</div>' +
        '<div><label>Empfehlung</label>' + selectHtml('', REC_OPTS, e.recommendation == null ? '' : e.recommendation).replace('<select', '<select data-dis="' + d + '" data-field="recommendation" data-type="enum"') + '</div>' +
        '<div><label>Endemisch</label>' + selectHtml('', [['false','Nein'],['true','Ja']], e.endemic ? 'true' : 'false').replace('<select', '<select data-dis="' + d + '" data-field="endemic" data-type="boolstr"') + '</div>' +
        '<div><label>Ausbruch</label>' + selectHtml('', [['false','Nein'],['true','Ja']], e.outbreak ? 'true' : 'false').replace('<select', '<select data-dis="' + d + '" data-field="outbreak" data-type="boolstr"') + '</div>' +
        '<div class="full"><label>Hinweis (schedule_note)</label><input class="co-inp" data-dis="' + d + '" data-field="schedule_note" data-type="text" value="' + esc(e.schedule_note || '') + '"></div>' +
      '</div></div>';
    box.innerHTML = h;
    box.querySelectorAll('[data-field]').forEach(function (el2) {
      el2.onchange = function () {
        var f = el2.getAttribute('data-field'), t = el2.getAttribute('data-type');
        var raw = (t === 'boolstr') ? (el2.value === 'true') : el2.value;
        var typ = (t === 'boolstr') ? 'bool' : t;
        saveCellDisease(iso, d, f, typ, raw);
      };
    });
  }
  async function saveCellDisease(iso, disease, field, type, raw) {
    var value = (type === 'bool') ? !!raw : raw;
    msg('Speichere…');
    var ok = await upsert({ kind: 'country_disease', country_iso2: iso, disease: disease, field: field, value: value, source: curSrc(), stand: curStand() });
    if (ok) { msg('Gespeichert & angewendet.', 'ok'); renderDiseaseGroups(); }
  }

  /* ========================== MEDIKAMENTE ========================= */
  function findDrug(substance) {
    var lc = String(substance || '').toLowerCase();
    return drugsDb().find(function (d) { return String(d.substance || '').toLowerCase() === lc; }) || null;
  }
  function searchDrugs(q) {
    q = String(q || '').toLowerCase().trim(); if (q.length < 2) return [];
    var out = [];
    var db = drugsDb();
    for (var i = 0; i < db.length && out.length < 25; i++) {
      var d = db[i]; var s = String(d.substance || '').toLowerCase();
      var brands = (d.brand_names || []).join(' ').toLowerCase();
      if (s.indexOf(q) >= 0 || brands.indexOf(q) >= 0) out.push(d);
    }
    return out;
  }
  function renderDrugsTab() {
    var inner = document.getElementById('co-inner'); if (!inner) return;
    inner.innerHTML =
      '<div style="display:flex;gap:8px;align-items:flex-end;flex-wrap:wrap">' +
        '<div style="flex:1;min-width:220px"><label style="font-size:11px;font-weight:600;color:#333">Wirkstoff suchen (Name oder Handelsname)</label><input id="co-drugq" class="co-inp" placeholder="z. B. Prednison, Humira…" autocomplete="off"></div>' +
        '<button class="co-btn sec" id="co-drugnew">+ Neues Medikament</button>' +
      '</div>' +
      '<div id="co-sugg"></div>' +
      '<div id="co-drugdetail" style="margin-top:12px"></div>';
    var q = document.getElementById('co-drugq');
    q.oninput = function () {
      var res = searchDrugs(this.value);
      var s = document.getElementById('co-sugg');
      if (!res.length) { s.innerHTML = ''; return; }
      s.innerHTML = '<div class="co-sugg">' + res.map(function (d) {
        var b = (d.brand_names && d.brand_names.length) ? ' <span style="color:var(--grey,#888)">(' + esc(d.brand_names.slice(0, 3).join(', ')) + ')</span>' : '';
        return '<div data-sub="' + esc(d.substance) + '"><b>' + esc(d.substance) + '</b>' + b + (d.is_immunosuppressant ? ' <span class="co-cnt" style="background:#ffebee;color:#c0392b">Immunsuppr.</span>' : '') + '</div>';
      }).join('') + '</div>';
      s.querySelectorAll('[data-sub]').forEach(function (row) { row.onclick = function () { _drugSel = row.getAttribute('data-sub'); _drugNew = false; document.getElementById('co-sugg').innerHTML = ''; q.value = _drugSel; renderDrugDetail(); }; });
    };
    document.getElementById('co-drugnew').onclick = function () { _drugNew = true; _drugSel = null; renderDrugDetail(); };
    if (_drugSel || _drugNew) renderDrugDetail();
  }
  function drugFieldInput(f, val) {
    var v = (val == null ? '' : val);
    if (f.type === 'bool') return selectHtml('', [['false','Nein'],['true','Ja']], (v === true || v === 'true') ? 'true' : 'false').replace('<select', '<select data-dk="' + f.k + '" data-type="bool"');
    if (f.type === 'list') return '<input class="co-inp" data-dk="' + f.k + '" data-type="list" value="' + esc(Array.isArray(v) ? v.join(', ') : v) + '">';
    if (f.type === 'textarea') return '<textarea class="co-inp" data-dk="' + f.k + '" data-type="text" style="height:70px">' + esc(v) + '</textarea>';
    return '<input class="co-inp" data-dk="' + f.k + '" data-type="text" value="' + esc(v) + '">';
  }
  function renderDrugDetail() {
    var box = document.getElementById('co-drugdetail'); if (!box) return;
    var isNew = _drugNew && !_drugSel;
    var base = isNew ? {} : (findDrug(_drugSel) || {});
    var subName = isNew ? '' : (base.substance || _drugSel || '');
    var ov = isNew ? null : _ovDrug[String(subName).toLowerCase()];
    var updated = ov ? (ov.updated_at || ov.stand || '') : '';
    var h = '<div class="co-detail">';
    h += '<div class="co-secline" style="margin-top:0">' + (isNew ? 'Neues Medikament anlegen' : esc(subName)) + '</div>';
    h += '<div class="co-updated">' + (isNew ? 'Neuer Eintrag' : (ov ? ('Override aktiv · zuletzt aktualisiert: ' + esc(updated ? String(updated).slice(0, 16).replace('T', ' ') : '—') + (ov.source ? ' · Quelle: ' + esc(ov.source) : '')) : 'Basisdaten (kein Override gespeichert)')) + '</div>';
    h += '<div class="co-form">';
    h += '<div class="full"><label>Wirkstoff (Name) *</label><input id="co-dk-substance" class="co-inp" value="' + esc(subName) + '"' + (isNew ? '' : ' readonly') + '></div>';
    DRUG_FIELDS.forEach(function (f) {
      var full = (f.type === 'textarea') ? ' class="full"' : '';
      h += '<div' + full + '><label>' + esc(f.label) + '</label>' + drugFieldInput(f, base[f.k]) + '</div>';
    });
    h += '<div class="full" style="display:flex;gap:8px;">' +
      '<button class="co-btn" id="co-drugsave">' + (isNew ? 'Anlegen' : 'Speichern') + '</button>' +
      (ov ? '<button class="co-btn del" id="co-drugdel">Override löschen (Basis wiederherstellen)</button>' : '') +
      '</div></div></div>';
    box.innerHTML = h;
    document.getElementById('co-drugsave').onclick = function () { saveDrug(isNew, base); };
    var del = document.getElementById('co-drugdel'); if (del) del.onclick = function () { removeOv(ov.id).then(function () { msg('Override gelöscht.', 'ok'); renderDrugDetail(); }); };
  }
  async function saveDrug(isNew, base) {
    var box = document.getElementById('co-drugdetail');
    var subEl = document.getElementById('co-dk-substance');
    var substance = subEl ? subEl.value.trim() : '';
    if (!substance) { msg('Bitte einen Wirkstoffnamen angeben.', 'err'); return; }
    var value = {};
    box.querySelectorAll('[data-dk]').forEach(function (el2) {
      var k = el2.getAttribute('data-dk'), t = el2.getAttribute('data-type');
      var raw;
      if (t === 'bool') raw = (el2.value === 'true');
      else if (t === 'list') raw = String(el2.value || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      else raw = el2.value;
      // Nur Felder ins Override, die vom Basiswert abweichen (klein halten) – bei neuem Medikament: alles Gesetzte.
      var b = base ? base[k] : undefined;
      var changed = isNew ? (t === 'list' ? raw.length : (raw !== '' && raw !== false)) : (JSON.stringify(raw) !== JSON.stringify(b == null ? (t === 'bool' ? false : (t === 'list' ? [] : '')) : b));
      if (changed) value[k] = raw;
    });
    if (isNew && !Object.keys(value).length) { msg('Bitte mindestens ein Feld ausfüllen.', 'err'); return; }
    if (!isNew && !Object.keys(value).length) { msg('Keine Änderung gegenüber den Basisdaten.', 'err'); return; }
    msg('Speichere…');
    var ok = await upsert({ kind: 'drug', country_iso2: '', disease: '', field: substance, value: value, source: curSrc(), stand: curStand() });
    if (ok) { _drugSel = substance; _drugNew = false; msg('Gespeichert & angewendet.', 'ok'); var q = document.getElementById('co-drugq'); if (q) q.value = substance; renderDrugDetail(); }
  }

  /* ---------- Installation ---------- */
  function tryInstall() { try { install(); } catch (e) {} }
  if (typeof document !== 'undefined' && document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInstall);
  else setTimeout(tryInstall, 0);
  var _t = 0, _iv = setInterval(function () {
    _t++; tryInstall();
    if ((window.buildSettingsTabs && window.buildSettingsTabs.__coPatched && window.adminTab && window.adminTab.__coPatched) || _t > 60) clearInterval(_iv);
  }, 300);
})();
