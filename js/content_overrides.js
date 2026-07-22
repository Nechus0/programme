/* ============================================================================
   Concept B — Content-Override-Engine  (Charité Reiseimpf-Assistent)
   ----------------------------------------------------------------------------
   Legt in Supabase gepflegte Overrides über die im Code gebündelten Basisdaten
   (window.ENGINE_DATA / window.DRUGS_DB). GESCHICHTET & RE-MERGEBAR: die Basis
   bleibt erhalten (tiefe Kopie), jeder Merge stellt zuerst die Basis her und
   legt dann die aktuell gültigen Overrides darüber -> Ändern/Löschen wirkt live
   ohne Seiten-Reload. Ausfallsicher: bei DB-Fehler bleibt die Basis aktiv.

   Selbst-triggernd: hängt sich in window.applyRole ein (Aufruf nach Login) und
   führt zusätzlich einen Erst-Merge beim Laden aus. Reihenfolge im index.html:
   ... engine_data.js -> content_overrides_db.js -> content_overrides.js ...
   ========================================================================== */
(function () {
  'use strict';

  var _baseline = null;        // { countries:{}, countryDisease:{} }  (tiefe Kopie)
  var _drugBaseline = {};      // substance -> Original-Eintrag (lazy, nur bei Drug-Overrides)
  var _appliedCD = [];         // [{iso,disease,field}]
  var _appliedFlags = [];      // [{iso,field}]
  var _appliedDrugs = [];      // [{substance,wasNew}]
  var _running = false;
  var _didInitialApply = false;

  window.CONTENT_OVERRIDES_META = { byCountryDisease: {}, activeCount: 0, latestStand: null };

  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }

  function captureBaseline() {
    if (_baseline) return;
    var E = window.ENGINE_DATA || {};
    _baseline = {
      countries: clone(E.countries || {}),
      countryDisease: clone(E.countryDisease || {})
    };
  }

  function todayISO() { return new Date().toISOString().slice(0, 10); }
  function inWindow(row) {
    var t = todayISO();
    if (row.valid_from && String(row.valid_from) > t) return false;
    if (row.valid_to && String(row.valid_to) < t) return false;
    return true;
  }

  /* ---- Zuvor angewendete Overrides aus der Baseline zurücksetzen ---- */
  function restoreAll() {
    var E = window.ENGINE_DATA; if (!E || !_baseline) { _appliedCD = []; _appliedFlags = []; _appliedDrugs = []; return; }
    _appliedCD.forEach(function (a) {
      var base = _baseline.countryDisease[a.iso] && _baseline.countryDisease[a.iso][a.disease];
      var live = E.countryDisease[a.iso] && E.countryDisease[a.iso][a.disease];
      if (!live) return;
      if (base && has(base, a.field)) live[a.field] = clone(base[a.field]);
      else delete live[a.field];
    });
    _appliedCD = [];
    _appliedFlags.forEach(function (a) {
      var base = _baseline.countries[a.iso];
      var live = E.countries[a.iso];
      if (!live) return;
      if (base && has(base, a.field)) live[a.field] = clone(base[a.field]);
      else delete live[a.field];
    });
    _appliedFlags = [];
    if (window.DRUGS_DB) {
      _appliedDrugs.forEach(function (a) {
        var idx = window.DRUGS_DB.findIndex(function (d) { return d.substance === a.substance; });
        if (a.wasNew) { if (idx >= 0) window.DRUGS_DB.splice(idx, 1); }
        else if (_drugBaseline[a.substance] && idx >= 0) window.DRUGS_DB[idx] = clone(_drugBaseline[a.substance]);
      });
    }
    _appliedDrugs = [];
  }

  /* ---- Override-Zeilen anwenden ---- */
  function applyRows(rows) {
    var E = window.ENGINE_DATA;
    var meta = { byCountryDisease: {}, activeCount: 0, latestStand: null };
    (rows || []).forEach(function (row) {
      try {
        if (!row || row.active === false) return;
        if (!inWindow(row)) return;
        var kind = row.kind || row.type;               // rückwärtskompatibel
        var iso = row.country_iso2 || '';
        var dis = row.disease || '';

        if (kind === 'country_disease' && iso && dis && row.field) {
          if (!E.countryDisease[iso]) E.countryDisease[iso] = {};
          if (!E.countryDisease[iso][dis]) E.countryDisease[iso][dis] = {};
          E.countryDisease[iso][dis][row.field] = row.value;
          _appliedCD.push({ iso: iso, disease: dis, field: row.field });
          meta.byCountryDisease[iso + '|' + dis] = { source: row.source || '', stand: row.stand || (row.updated_at ? String(row.updated_at).slice(0, 10) : '') };
          meta.activeCount++;
          if (row.stand && (!meta.latestStand || row.stand > meta.latestStand)) meta.latestStand = row.stand;
        }
        else if (kind === 'flag' && iso && row.field) {
          if (E.countries[iso]) {
            E.countries[iso][row.field] = row.value;
            _appliedFlags.push({ iso: iso, field: row.field });
            meta.activeCount++;
            if (row.stand && (!meta.latestStand || row.stand > meta.latestStand)) meta.latestStand = row.stand;
          }
        }
        else if (kind === 'drug' && row.field && row.value && typeof row.value === 'object' && window.DRUGS_DB) {
          var idx = window.DRUGS_DB.findIndex(function (d) { return d.substance === row.field; });
          if (idx >= 0) {
            if (!has(_drugBaseline, row.field)) _drugBaseline[row.field] = clone(window.DRUGS_DB[idx]);
            window.DRUGS_DB[idx] = Object.assign({}, window.DRUGS_DB[idx], row.value);
            _appliedDrugs.push({ substance: row.field, wasNew: false });
          } else {
            window.DRUGS_DB.push(Object.assign({ substance: row.field }, row.value));
            _appliedDrugs.push({ substance: row.field, wasNew: true });
          }
          meta.activeCount++;
        }
      } catch (e) { if (window.console) console.warn('[content_overrides] Override übersprungen:', row, e); }
    });
    window.CONTENT_OVERRIDES_META = meta;
  }

  /* ---- Öffentlicher Einstieg: Basis wiederherstellen -> Overrides neu laden & anwenden ---- */
  window.applyContentOverrides = async function () {
    if (!window.ENGINE_DATA) return;
    if (_running) return;
    _running = true;
    try {
      captureBaseline();
      restoreAll();
      var rows = [];
      if (typeof window.dbLoadContentOverrides === 'function') {
        try { rows = await window.dbLoadContentOverrides(); } catch (e) { rows = []; }
      }
      if (!Array.isArray(rows)) rows = [];
      applyRows(rows);
      _didInitialApply = true;
      if (typeof window.recompute === 'function') { try { window.recompute(); } catch (e) {} }
    } finally { _running = false; }
  };

  /* Optionaler Helfer für die Transparenzanzeige im Hauptprogramm */
  window.getOverrideMeta = function (iso, disease) {
    var m = window.CONTENT_OVERRIDES_META;
    return (m && m.byCountryDisease[iso + '|' + disease]) || null;
  };

  /* ---- Selbst-Trigger ---- */
  var _hooked = false;
  function hookApplyRole() {
    if (_hooked) return;
    if (typeof window.applyRole === 'function') {
      var orig = window.applyRole;
      window.applyRole = function () {
        var r = orig.apply(this, arguments);
        try { window.applyContentOverrides(); } catch (e) {}
        return r;
      };
      _hooked = true;
    }
  }
  function boot() {
    hookApplyRole();
    window.applyContentOverrides();   // Erst-Merge (öffentlicher Lesezugriff funktioniert auch vor Login)
  }
  if (typeof document !== 'undefined' && document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    setTimeout(boot, 0);
  }
  // Fallback: applyRole ggf. erst später verfügbar -> kurz nachhaken
  var _t = 0, _iv = setInterval(function () { _t++; hookApplyRole(); if (_hooked || _t > 40) clearInterval(_iv); }, 250);
})();
