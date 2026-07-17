/* =====================================================================
   engine_rules.js — table-driven recommendation core
   ---------------------------------------------------------------------
   Pure logic. Reads window.ENGINE_DATA (generated from tools/master_data
   CSVs by tools/build/build_engine_data.py). No DOM access.

   Public API:
     EngineRules.deriveCategory(vaccineKey, ctx) -> { category, de, en }
     EngineRules.CATEGORY_COLOR   (category -> status colour)
     EngineRules.CATEGORY_RANK    (category -> priority rank)

   Categories (highest priority first):
     Pflicht · Dringend empfohlen · Empfohlen  -> red   (label distinguishes)
     Generell empfohlen                        -> blue
     Erwägen                                   -> yellow
     geschützt                                 -> green
     nicht indiziert                           -> grey

   ctx shape (built by engine.js from the form; the test harness passes it
   directly):
     { ageMonths, destinations:[iso_a2], conds:[..], durIdx, pregnant,
       immuno:{high,low,def}, vaxState:{}, serology:{}, dengueHad }
   ===================================================================== */
(function (root) {
  "use strict";

  var CAT = {
    PFLICHT: "Pflicht",
    DRINGEND: "Dringend empfohlen",
    EMPF: "Empfohlen",
    GENERELL: "Generell empfohlen",
    ERWAEGEN: "Erwägen",
    PROT: "geschützt",
    NONE: "nicht indiziert"
  };
  var CATEGORY_COLOR = {
    "Pflicht": "red-strong",
    "Dringend empfohlen": "red",
    "Empfohlen": "red",
    "Generell empfohlen": "blue",
    "Erwägen": "yellow",
    "geschützt": "green",
    "nicht indiziert": "grey"
  };
  var CATEGORY_RANK = {
    "Pflicht": 1, "Dringend empfohlen": 2, "Empfohlen": 3,
    "Generell empfohlen": 4, "Erwägen": 5, "geschützt": 6, "nicht indiziert": 9
  };

  // vaccine key (app) -> disease_code (foundation)
  var DISEASE = {
    yellowfever: "yellow_fever", typhoid: "typhoid", jev: "japanese_encephalitis",
    rabies: "rabies", cholera: "cholera", tbe: "tbe", dengue: "dengue",
    chikungunya: "chikungunya", polio: "polio", mmr: "measles",
    menacwy: "meningococcal", menb: "meningococcal"
  };
  var RISKORD = { none: 0, unknown: 0, low: 1, moderate: 2, high: 3 };

  function D() { return root.ENGINE_DATA || {}; }
  function has(ctx, c) { return (ctx.conds || []).indexOf(c) !== -1; }
  function longStay(ctx) { return (ctx.durIdx != null) && ctx.durIdx >= 3; }   // >= ~4 weeks
  function ageM(ctx) { return ctx.ageMonths; }
  function ageY(ctx) { return ctx.ageMonths == null ? null : ctx.ageMonths / 12; }

  // aggregate a disease across all selected destinations (worst case wins)
  function destAgg(ctx, code) {
    var out = { risk: 0, endemic: false, outbreak: false, yfCert: false, belt: null, polio: {} };
    (ctx.destinations || []).forEach(function (a2) {
      var cm = (D().countries || {})[a2];
      if (cm) {
        if (cm.yf_cert) out.yfCert = true;
        if (cm.mening_belt) out.belt = cm.mening_belt;
        if (cm.polio_category) String(cm.polio_category).split("|").forEach(function (x) { out.polio[x] = true; });
      }
      var cd = (D().countryDisease || {})[a2];
      if (cd && code && cd[code]) {
        var d = cd[code];
        out.risk = Math.max(out.risk, RISKORD[d.risk] || 0);
        if (d.endemic) out.endemic = true;
        if (d.outbreak) out.outbreak = true;
      }
    });
    return out;
  }

  // does any STIKO row apply to this patient for a given vaccine code(s)?
  function stikoApplies(ctx, codes) {
    var groups = riskGroupsOf(ctx);
    var am = ageM(ctx);
    var rows = (D().stiko || []).filter(function (r) { return codes.indexOf(r.code) !== -1; });
    var hit = null;
    rows.forEach(function (r) {
      var ageOk = true;
      if (r.age_from_m != null && am != null && am < r.age_from_m) ageOk = false;
      if (r.age_to_m != null && am != null && am > r.age_to_m) ageOk = false;
      var groupOk;
      if (r.group === "all") groupOk = true;
      else if (r.group === "age_infant" || /^age_/.test(r.group)) groupOk = ageOk; // age-window standard
      else groupOk = groups.indexOf(r.group) !== -1;                                // indication group
      if (ageOk && groupOk) { if (!hit || CATEGORY_RANK[CAT.GENERELL] <= 4) hit = r; }
    });
    return hit;
  }

  // map patient context to STIKO risk-group codes
  function riskGroupsOf(ctx) {
    var g = [], am = ageM(ctx);
    if (ctx.pregnant === "pregnant") g.push("pregnancy");
    if (ctx.pregnant === "planned") g.push("pregnancy_planned");
    if (ctx.immuno && ctx.immuno.def) { g.push("immunodeficiency"); g.push("immunosuppression"); }
    if (ctx.immuno && ctx.immuno.high) g.push("immunosuppression");
    if (am != null && am >= 60 * 12) g.push("age_60plus");
    if (am != null && am >= 75 * 12) g.push("age_75plus");
    (ctx.chronic || []).forEach(function (c) { g.push(c); }); // e.g. diabetes, chronic_*
    if (has(ctx, "health")) g.push("hcw");
    return g;
  }

  function firstNote(de, en) { return { de: de || "", en: en || "" }; }

  // ---- per-vaccine rules --------------------------------------------------
  function rule(k, ctx) {
    var a, am = ageM(ctx), ay = ageY(ctx), ls = longStay(ctx);

    switch (k) {
      case "yellowfever": {
        a = destAgg(ctx, "yellow_fever");
        if (a.yfCert) return mk(CAT.PFLICHT, "Impfnachweis bei Einreise gefordert (IHR)", "Proof of vaccination required on entry (IHR)");
        if (a.risk >= RISKORD.moderate || a.endemic) return mk(CAT.DRINGEND, "Gelbfieber-Endemiegebiet – Impfung dringend empfohlen", "Yellow-fever endemic area — strongly recommended");
        return mk(CAT.NONE, "Kein Gelbfieber-Risiko/keine Nachweispflicht", "No yellow-fever risk / no proof required");
      }
      case "hepatitis": { // combined Hep A + B vaccine (Twinrix) or mono
        var hA = destAgg(ctx, "hepatitis_a"), hB = destAgg(ctx, "hepatitis_b");
        var deA, enA, deB, enB, cat = CAT.NONE;
        if (hA.endemic || hA.risk >= RISKORD.low) { cat = CAT.EMPF; deA = "Hep A: Reiseimpfung für Endemiegebiet"; enA = "Hep A: travel vaccine for endemic area"; }
        if (hB.risk >= RISKORD.moderate && (ls || has(ctx, "health"))) { cat = CAT.EMPF; deB = "Hep B: Langzeit/med. Tätigkeit"; enB = "Hep B: long-term / medical activity"; }
        else if (hB.risk >= RISKORD.low && hB.endemic) { if (cat === CAT.NONE) cat = CAT.ERWAEGEN; deB = "Hep B: Endemiegebiet – erwägen"; enB = "Hep B: endemic area — consider"; }
        var de = [deA, deB].filter(Boolean).join(" | "), en = [enA, enB].filter(Boolean).join(" | ");
        var fr = [deA, deB].filter(Boolean).map(function (s) { return NOTE_FR[s] || s; }).join(" | ");
        return mk(cat, de || "Kein erhöhtes Hepatitis-Risiko", en || "No elevated hepatitis risk", fr || "Pas de risque hépatite accru");
      }
      case "typhoid": {
        a = destAgg(ctx, "typhoid");
        if (a.risk >= RISKORD.high) return mk(CAT.EMPF, "Hohes Typhus-Risiko", "High typhoid risk");
        if (a.risk >= RISKORD.low && a.endemic) {
          if (has(ctx, "rural") || ls) return mk(CAT.EMPF, "Endemiegebiet + ländlich/Langzeit", "Endemic area + rural/long stay");
          return mk(CAT.ERWAEGEN, "Endemiegebiet, kurzer/urbaner Aufenthalt – erwägen", "Endemic area, short/urban stay — consider");
        }
        return mk(CAT.NONE, "Kein relevantes Typhus-Risiko", "No relevant typhoid risk");
      }
      case "rabies": {
        // Never "Dringend empfohlen". Empfohlen only when animal contact is marked AND the
        // country has rabies risk; otherwise it may be considered (Erwägen).
        a = destAgg(ctx, "rabies");
        if (a.risk >= RISKORD.low && has(ctx, "animal"))
          return mk(CAT.DRINGEND, "Tierkontakt + Tollwutrisiko im Land – präexpositionell dringend empfohlen", "Animal contact + rabies risk in country — pre-exposure strongly recommended");
        if (a.risk >= RISKORD.low || a.endemic)
          return mk(CAT.ERWAEGEN, "Tollwut im Land präsent – erwägen (v.a. ländlich/Langzeit/Kind/Folgereisen)", "Rabies present — consider (esp. rural/long stay/child/repeat travel)");
        return mk(CAT.NONE, "Kein relevantes Tollwut-Risiko", "No relevant rabies risk");
      }
      case "jev": {
        a = destAgg(ctx, "japanese_encephalitis");
        if (a.endemic && has(ctx, "rural") && ls) return mk(CAT.EMPF, "Endemiegebiet + ländlich + Langzeit", "Endemic area + rural + long stay");
        if (a.endemic || a.risk >= RISKORD.low) return mk(CAT.ERWAEGEN, "Endemiegebiet, aber Expositions-/Dauerkriterium grenzwertig – erwägen", "Endemic, but exposure/duration borderline — consider");
        return mk(CAT.NONE, "Kein JE-Risiko", "No JE risk");
      }
      case "cholera": {
        a = destAgg(ctx, "cholera");
        if ((a.risk >= RISKORD.high || a.outbreak) && (has(ctx, "health") || ls))
          return mk(CAT.EMPF, "Ausbruch/Hochrisiko + Helfer/Langzeit", "Outbreak/high risk + aid/long stay");
        if (a.risk >= RISKORD.low && a.endemic) return mk(CAT.ERWAEGEN, "Cholera-Gebiet – bei einfachen Bedingungen erwägen", "Cholera area — consider under basic conditions");
        return mk(CAT.NONE, "Kein relevantes Cholera-Risiko", "No relevant cholera risk");
      }
      case "tbe": {
        a = destAgg(ctx, "tbe");
        if ((a.risk >= RISKORD.moderate || a.endemic) && (has(ctx, "rural") || has(ctx, "outdoor")))
          return mk(CAT.EMPF, "FSME-Gebiet + Outdoor-Exposition", "TBE area + outdoor exposure");
        if (a.endemic) return mk(CAT.ERWAEGEN, "FSME-Gebiet, ohne Outdoor-Exposition – erwägen", "TBE area, no outdoor exposure — consider");
        return mk(CAT.NONE, "Kein FSME-Risiko", "No TBE risk");
      }
      case "menacwy": {
        a = destAgg(ctx, "meningococcal");
        if (has(ctx, "hajj")) return mk(CAT.PFLICHT, "Nachweispflicht (Hajj/Umrah, Saudi-Arabien)", "Mandatory (Hajj/Umrah, Saudi Arabia)");
        if (a.belt) {
          if (ls || has(ctx, "health") || has(ctx, "rural")) return mk(CAT.EMPF, "Meningitisgürtel + enger Kontakt/Langzeit (Saison " + a.belt + ")", "Meningitis belt + close contact/long stay (season " + a.belt + ")", "Ceinture de la méningite + contact étroit/long séjour (saison " + a.belt + ")");
          return mk(CAT.ERWAEGEN, "Meningitisgürtel, kurzer Aufenthalt – erwägen", "Meningitis belt, short stay — consider");
        }
        return mk(CAT.NONE, "Kein erhöhtes Meningokokken-Risiko", "No elevated meningococcal risk");
      }
      case "menb": {
        if (am != null && am < 24) return mk(CAT.GENERELL, "STIKO-Standard für Säuglinge", "STIKO standard for infants");
        // Indikation (Immundefizienz/Asplenie): kein Altersstandard, daher „Erwägen" – konsistent mit MenACWY.
        if (ctx.immuno && (ctx.immuno.def || ctx.immuno.high)) return mk(CAT.ERWAEGEN, "Indikation (Immundefizienz/Asplenie)", "Indication (immunodeficiency/asplenia)");
        return mk(CAT.NONE, "Keine generelle MenB-Indikation", "No general MenB indication");
      }
      case "polio": {
        a = destAgg(ctx, "polio");
        // CAVE: routine protection first — if not up to date, always recommend regardless of travel risk
        var pst = vax(ctx, "polio");
        if (!pst.gi && doseNum(pst.done) < 3) return mk(CAT.DRINGEND, "Keine/unvollständige Grundimmunisierung Polio – nachholen", "No/incomplete polio basic immunisation — catch up");
        if (a.polio["1"] && ls) return mk(CAT.PFLICHT, "Polio Kat. 1: Impfnachweis bei >4 Wochen Aufenthalt", "Polio cat 1: proof required if stay >4 weeks");
        if (a.polio["1"] || a.polio["2"] || a.polio["3"]) return mk(CAT.EMPF, "Polio-Auffrischung für Risikoregion", "Polio booster for risk region");
        if (boosterDue(ctx, pst, 10)) return mk(CAT.EMPF, "Polio-Auffrischung fällig", "Polio booster due");
        return mk(CAT.GENERELL, "Polio: STIKO-Standard", "Polio: STIKO standard");
      }
      case "tdap": case "td": case "tetanus": {
        // CAVE: Tetanus/Diphtheria/Pertussis always relevant if not up to date, even without travel risk
        var tst = vax(ctx, "tdap");
        if (!tst.gi && doseNum(tst.done) < 3) return mk(CAT.DRINGEND, "Keine/unvollständige Grundimmunisierung Tdap-IPV – nachholen", "No/incomplete Tdap-IPV basic immunisation — catch up");
        if (boosterDue(ctx, tst, 10)) return mk(CAT.EMPF, "Td/Tdap-Auffrischung fällig (>10 Jahre)", "Td/Tdap booster due (>10 years)");
        return mk(CAT.PROT, "Tetanus/Diphtherie/Pertussis aktuell", "Tetanus/diphtheria/pertussis up to date");
      }
      case "mmr": {
        var doses = doseNum(vax(ctx, "mmr").done);
        if (am != null && am < 9) return mk(CAT.NONE, "Vor 9 Monaten nicht empfohlen", "Not recommended before 9 months");
        if (protectedMMR(ctx)) return mk(CAT.PROT, "Masern-Schutz vorhanden", "Measles protection present");
        if (doses === 0) return mk(CAT.DRINGEND, "Keine Grundimmunisierung – 2 Dosen (Lebendimpfstoff)", "No basic immunisation — 2 doses (live vaccine)");
        return mk(CAT.GENERELL, "Impfschutz vervollständigen (STIKO)", "Complete protection (STIKO)");
      }
      case "dengue": {
        a = destAgg(ctx, "dengue");
        var done = doseNum(vax(ctx, "dengue").done);
        if (done >= 1) return mk(CAT.DRINGEND, "Impfserie (2 Dosen) komplettieren", "Complete series (2 doses)");
        if (ctx.dengueHad && a.endemic) return mk(CAT.DRINGEND, "Nach durchgemachter Dengue-Infektion + Endemiegebiet", "After prior dengue infection + endemic area");
        return mk(CAT.NONE, "Nur nach durchgemachter Dengue-Infektion", "Only after prior dengue infection");
      }
      case "chikungunya": {
        // Only CDC-declared current outbreaks -> "Dringend empfohlen".
        // Elevated-risk areas (CDC list) -> at most "Erwägen"; escalate to "Empfohlen"
        // only for a risk group (chronic illness / immunodeficiency / immunosuppression)
        // staying >= ~1 month.
        a = destAgg(ctx, "chikungunya");
        if (a.outbreak) return mk(CAT.DRINGEND, "Aktueller Ausbruch am Zielort", "Active outbreak at destination", "Épidémie active à destination");
        var chikElevated = a.risk >= RISKORD.moderate;
        var chikRiskGroup = ctx.anyChronic || (ctx.immuno && (ctx.immuno.high || ctx.immuno.def));
        if (chikElevated && ls && chikRiskGroup)
          return mk(CAT.EMPF, "Risikogruppe + Langzeit (≥1 Monat) in Region mit erhöhtem Risiko", "Risk group + long stay (≥1 month) in elevated-risk area", "Groupe à risque + long séjour (≥1 mois) en zone à risque accru");
        if (chikElevated) return mk(CAT.ERWAEGEN, "Erhöhtes Hintergrundrisiko – erwägen", "Elevated background risk — consider", "Risque de fond élevé – à envisager");
        return mk(CAT.NONE, "Kein relevantes Chikungunya-Risiko", "No relevant chikungunya risk", "Pas de risque chikungunya pertinent");
      }
      // ---- routine / STIKO (no travel component) ----
      case "influenza": return stikoRoutine(ctx, ["influenza"], "Influenza");
      case "zoster":    return stikoRoutine(ctx, ["zoster"], "Herpes zoster");
      case "pneumo":    return stikoRoutine(ctx, ["pneumococcal_pcv20"], "Pneumokokken");
      case "covid":     return stikoRoutine(ctx, ["covid"], "COVID-19");
      case "hpv": {
        var hd = doseNum(vax(ctx, "hpv").done);
        if (am != null && am >= 9 * 12 && am <= 17 * 12) return mk(CAT.GENERELL, "STIKO-Standard/Nachhol 9–17 J.", "STIKO standard/catch-up 9–17 yrs");
        if (hd > 0) return mk(CAT.GENERELL, "Begonnene Serie vervollständigen", "Complete started series");
        return mk(CAT.NONE, "Keine generelle STIKO-Indikation ab 18 J.", "No general STIKO indication from 18 yrs");
      }
      case "varicella": {
        var wish = ctx.pregnant === "planned" && ay != null && ay >= 13 && ay <= 50;
        if (ctx.serology && ctx.serology.vzv) return mk(CAT.PROT, "VZV-Immunität serologisch", "VZV immunity (serology)");
        if (wish) return mk(CAT.DRINGEND, "Kinderwunsch ohne Immunität – 2 Dosen", "Planned pregnancy without immunity — 2 doses");
        if (has(ctx, "health")) return mk(CAT.EMPF, "Med. Personal ohne Immunität", "Medical staff without immunity");
        return mk(CAT.NONE, "Nur bei Risiko/Kinderwunsch indiziert", "Only indicated with risk / planned pregnancy");
      }
      case "mpox": {
        if (has(ctx, "health") && (has(ctx, "rural") || ls)) return mk(CAT.ERWAEGEN, "Ausbruchsregion, enger Kontakt – erwägen", "Outbreak region, close contact — consider");
        return mk(CAT.NONE, "Keine generelle Mpox-Indikation", "No general Mpox indication");
      }
    }
    return mk(CAT.NONE, "", "");
  }

  function stikoRoutine(ctx, codes, label) {
    var hit = stikoApplies(ctx, codes);
    if (hit) return mk(CAT.GENERELL, "STIKO: " + (hit.note || label), "STIKO: " + label, "STIKO : " + label);
    return mk(CAT.NONE, "Keine STIKO-Indikation für diese Person", "No STIKO indication for this person");
  }

  // helpers on ctx.vaxState
  function vax(ctx, k) { return (ctx.vaxState && ctx.vaxState[k]) || {}; }
  function doseNum(v) { var d = parseInt(v || "0", 10); return isNaN(d) ? 0 : d; }
  function protectedMMR(ctx) {
    if (ctx.serology && ctx.serology.measles) return true;
    if (ctx.birthYear != null && ctx.birthYear <= 1970) return true;
    return doseNum(vax(ctx, "mmr").done) >= 2;
  }

  function yearsSince(ctx, yr) { if (!yr) return null; var now = ctx.nowYear || new Date().getFullYear(); return now - parseInt(yr, 10); }
  function boosterDue(ctx, st, years) { var ys = yearsSince(ctx, st && st.year); return ys == null || ys >= years; }

  var NOTE_FR = {
    "Impfnachweis bei Einreise gefordert (IHR)": "Certificat de vaccination exigé à l'entrée (RSI)",
    "Gelbfieber-Endemiegebiet – Impfung dringend empfohlen": "Zone d'endémie de fièvre jaune – vaccination fortement recommandée",
    "Kein Gelbfieber-Risiko/keine Nachweispflicht": "Pas de risque de fièvre jaune / aucun certificat requis",
    "Hep A: Reiseimpfung für Endemiegebiet": "Hép A : vaccin de voyage pour zone d'endémie",
    "Hep B: Langzeit/med. Tätigkeit": "Hép B : long séjour / activité médicale",
    "Hep B: Endemiegebiet – erwägen": "Hép B : zone d'endémie – à envisager",
    "Kein erhöhtes Hepatitis-Risiko": "Pas de risque hépatite accru",
    "Hohes Typhus-Risiko": "Risque typhoïde élevé",
    "Endemiegebiet + ländlich/Langzeit": "Zone d'endémie + rural/long séjour",
    "Endemiegebiet, kurzer/urbaner Aufenthalt – erwägen": "Zone d'endémie, séjour court/urbain – à envisager",
    "Kein relevantes Typhus-Risiko": "Pas de risque typhoïde pertinent",
    "Tierkontakt + Tollwutrisiko im Land – präexpositionell dringend empfohlen": "Contact animalier + risque rabique dans le pays – préexposition fortement recommandée",
    "Tollwut im Land präsent – erwägen (v.a. ländlich/Langzeit/Kind/Folgereisen)": "Rage présente dans le pays – à envisager (surtout rural/long séjour/enfant/voyages répétés)",
    "Kein relevantes Tollwut-Risiko": "Pas de risque rabique pertinent",
    "Endemiegebiet + ländlich + Langzeit": "Zone d'endémie + rural + long séjour",
    "Endemiegebiet, aber Expositions-/Dauerkriterium grenzwertig – erwägen": "Zone d'endémie, mais critère d'exposition/durée limite – à envisager",
    "Kein JE-Risiko": "Pas de risque d'EJ",
    "Ausbruch/Hochrisiko + Helfer/Langzeit": "Épidémie/risque élevé + secouriste/long séjour",
    "Cholera-Gebiet – bei einfachen Bedingungen erwägen": "Zone de choléra – à envisager en conditions sommaires",
    "Kein relevantes Cholera-Risiko": "Pas de risque choléra pertinent",
    "FSME-Gebiet + Outdoor-Exposition": "Zone d'encéphalite à tiques + exposition en plein air",
    "FSME-Gebiet, ohne Outdoor-Exposition – erwägen": "Zone d'encéphalite à tiques, sans exposition en plein air – à envisager",
    "Kein FSME-Risiko": "Pas de risque d'encéphalite à tiques",
    "Nachweispflicht (Hajj/Umrah, Saudi-Arabien)": "Certificat obligatoire (Hajj/Omra, Arabie saoudite)",
    "Meningitisgürtel, kurzer Aufenthalt – erwägen": "Ceinture de la méningite, séjour court – à envisager",
    "Kein erhöhtes Meningokokken-Risiko": "Pas de risque méningococcique accru",
    "STIKO-Standard für Säuglinge": "Standard STIKO pour les nourrissons",
    "Indikation (Immundefizienz/Asplenie)": "Indication (immunodéficience/asplénie)",
    "Keine generelle MenB-Indikation": "Pas d'indication générale MenB",
    "Keine/unvollständige Grundimmunisierung Polio – nachholen": "Primovaccination polio absente/incomplète – à rattraper",
    "Polio Kat. 1: Impfnachweis bei >4 Wochen Aufenthalt": "Polio cat. 1 : certificat requis pour un séjour >4 semaines",
    "Polio-Auffrischung für Risikoregion": "Rappel polio pour région à risque",
    "Polio-Auffrischung fällig": "Rappel polio dû",
    "Polio: STIKO-Standard": "Polio : standard STIKO",
    "Keine/unvollständige Grundimmunisierung Tdap-IPV – nachholen": "Primovaccination Tdap-IPV absente/incomplète – à rattraper",
    "Td/Tdap-Auffrischung fällig (>10 Jahre)": "Rappel Td/Tdap dû (>10 ans)",
    "Tetanus/Diphtherie/Pertussis aktuell": "Tétanos/diphtérie/coqueluche à jour",
    "Vor 9 Monaten nicht empfohlen": "Non recommandé avant 9 mois",
    "Masern-Schutz vorhanden": "Protection contre la rougeole présente",
    "Keine Grundimmunisierung – 2 Dosen (Lebendimpfstoff)": "Pas de primovaccination – 2 doses (vaccin vivant)",
    "Impfschutz vervollständigen (STIKO)": "Compléter la protection vaccinale (STIKO)",
    "Impfserie (2 Dosen) komplettieren": "Compléter la série (2 doses)",
    "Nach durchgemachter Dengue-Infektion + Endemiegebiet": "Après infection dengue antérieure + zone d'endémie",
    "Nur nach durchgemachter Dengue-Infektion": "Uniquement après une infection dengue antérieure",
    "Aktueller Ausbruch am Zielort": "Épidémie en cours à destination",
    "Erhöhtes Hintergrundrisiko – erwägen": "Risque de fond accru – à envisager",
    "Kein relevantes Chikungunya-Risiko": "Pas de risque chikungunya pertinent",
    "STIKO-Standard/Nachhol 9–17 J.": "Standard/rattrapage STIKO 9–17 ans",
    "Begonnene Serie vervollständigen": "Compléter la série commencée",
    "Keine generelle STIKO-Indikation ab 18 J.": "Pas d'indication STIKO générale à partir de 18 ans",
    "VZV-Immunität serologisch": "Immunité VZV (sérologie)",
    "Kinderwunsch ohne Immunität – 2 Dosen": "Désir de grossesse sans immunité – 2 doses",
    "Med. Personal ohne Immunität": "Personnel médical sans immunité",
    "Nur bei Risiko/Kinderwunsch indiziert": "Indiqué uniquement en cas de risque/désir de grossesse",
    "Ausbruchsregion, enger Kontakt – erwägen": "Région épidémique, contact étroit – à envisager",
    "Keine generelle Mpox-Indikation": "Pas d'indication générale Mpox",
    "Keine STIKO-Indikation für diese Person": "Pas d'indication STIKO pour cette personne"
  };
  function mk(category, de, en, fr) {
    return { category: category, de: de, en: en, fr: (fr != null ? fr : (NOTE_FR[de] != null ? NOTE_FR[de] : en)) };
  }

  function deriveCategory(k, ctx) { return rule(k, ctx || {}); }

  root.EngineRules = {
    deriveCategory: deriveCategory,
    CATEGORY_COLOR: CATEGORY_COLOR,
    CATEGORY_RANK: CATEGORY_RANK,
    CAT: CAT,
    _destAgg: destAgg
  };
})(typeof window !== "undefined" ? window : globalThis);
