/* ============================================================
   Malaria-Engine – VOLLSTÄNDIG GETRENNT von der Impf-Logik.
   Liest nur MALARIA_DATA (DTG-Ländertabelle 2025) + einfache Eingaben.
   Keine Abhängigkeit zur Impfstoff-Engine.
   ============================================================ */

const MAL_STRAT_RANK = { none: 0, EP: 1, NSB: 2, P: 3 };

/* Aggregiert die Malaria-Strategie über die gewählten Reiseziele (Landesebene).
   strategy: höchste vorkommende DTG-Empfehlung (P > NSB > EP). */
function malariaAssess(codes) {
  const list = [];
  let best = 'none';
  (codes || []).forEach(c => {
    const d = (typeof MALARIA_DATA !== 'undefined') ? MALARIA_DATA[c] : null;
    if (d) {
      list.push({ code: c, strategy: d.s, species: d.sp || '', season: d.se || '' });
      if (MAL_STRAT_RANK[d.s] > MAL_STRAT_RANK[best]) best = d.s;
    }
  });
  return { strategy: best, countries: list, any: list.length > 0 };
}

/* Malarone-Tabletten pro Tag nach Körpergewicht (Erw. 250/100 mg, Kinder Junior 62,5/25 mg). */
function malaroneTabsPerDay(kg) {
  if (kg == null || isNaN(kg)) return { tabs: 1, ped: false, label: '1 Tbl. (250/100 mg)' };
  if (kg < 5)  return { tabs: 0,    ped: true,  label: 'nicht zugelassen (< 5 kg)' };
  if (kg <= 8) return { tabs: 0.5,  ped: true,  label: '½ Junior-Tbl.' };
  if (kg <= 10)return { tabs: 0.75, ped: true,  label: '¾ Junior-Tbl.' };
  if (kg <= 20)return { tabs: 1,    ped: true,  label: '1 Junior-Tbl.' };
  if (kg <= 30)return { tabs: 2,    ped: true,  label: '2 Junior-Tbl.' };
  if (kg <= 40)return { tabs: 3,    ped: true,  label: '3 Junior-Tbl.' };
  return { tabs: 1, ped: false, label: '1 Tbl. (250/100 mg)' };
}

/* Malarone-Rechner: deckt nur das Risikofenster ab (1 Tag vor + Aufenthalt + 7 Tage danach).
   Packung immer 12 Tabletten → auf ganze Packungen aufrunden. */
function malaroneCalc(kg, daysInRisk) {
  const t = malaroneTabsPerDay(kg);
  const days = Math.max(0, Math.round(+daysInRisk || 0)) + 8;
  const tablets = Math.ceil(t.tabs * days);
  const packs = Math.max(1, Math.ceil(tablets / 12));
  return { tabsPerDay: t.tabs, tabLabel: t.label, ped: t.ped, days, tablets, packs };
}

/* Medikamenten-Daten inkl. Patienten-Einnahmehinweise (de/en; fr → en Fallback). */
const MAL_DRUGS = {
  malarone: {
    name: 'Atovaquon-Proguanil (Malarone)',
    tag: { de: 'täglich · Standard', en: 'daily · standard' },
    dose: { de: 'Erwachsene / ≥ 40 kg: 1 Tbl. (250/100 mg) täglich. Kinder gewichtsabhängig (Junior 62,5/25 mg).', en: 'Adults / ≥ 40 kg: 1 tab (250/100 mg) daily. Children weight-based (Junior 62.5/25 mg).' },
    schedule: { de: '1–2 Tage vor Einreise ins Risikogebiet · täglich · bis 7 Tage danach.', en: '1–2 days before entering the risk area · daily · until 7 days after.' },
    intake: { de: 'Zu einer Mahlzeit oder mit einem milchhaltigen Getränk einnehmen (bessere Aufnahme), täglich zur gleichen Zeit. Bei Erbrechen innerhalb 1 Stunde erneut einnehmen.', en: 'Take with food or a milky drink (better absorption), same time each day. If vomiting within 1 h, repeat the dose.' },
    cave: { de: 'Nicht bei schwerer Niereninsuffizienz (GFR < 30 ml/min).', en: 'Avoid in severe renal impairment (GFR < 30 ml/min).' },
    pack: '12 Tbl.'
  },
  mefloquin: {
    name: 'Mefloquin (Lariam)',
    tag: { de: 'wöchentlich · Langzeit', en: 'weekly · long trips' },
    dose: { de: 'Erwachsene: 1 Tbl. (250 mg) 1× wöchentlich.', en: 'Adults: 1 tab (250 mg) once weekly.' },
    schedule: { de: '2–3 Wochen vor Abreise beginnen · wöchentlich (gleicher Wochentag) · bis 4 Wochen danach.', en: '2–3 weeks before departure · weekly (same weekday) · until 4 weeks after.' },
    intake: { de: 'Wöchentlich zu oder nach einer Mahlzeit mit reichlich Flüssigkeit, immer am selben Wochentag.', en: 'Weekly with or after a meal and plenty of fluid, always the same weekday.' },
    cave: { de: 'Nicht bei neuropsychiatrischer Vorgeschichte, Krampfleiden oder relevanten Herzrhythmusstörungen.', en: 'Avoid with neuropsychiatric history, seizure disorder or relevant cardiac arrhythmia.' },
    pack: ''
  },
  doxycyclin: {
    name: 'Doxycyclin',
    tag: { de: 'täglich · günstig', en: 'daily · low-cost' },
    dose: { de: 'Erwachsene: 1 Tbl. (100 mg) täglich.', en: 'Adults: 1 tab (100 mg) daily.' },
    schedule: { de: '1–2 Tage vor Einreise · täglich · bis 4 Wochen danach.', en: '1–2 days before entry · daily · until 4 weeks after.' },
    intake: { de: 'Mit reichlich Wasser im Sitzen oder Stehen einnehmen, nicht direkt vor dem Hinlegen (Speiseröhrenreizung), zu einer Mahlzeit.', en: 'Take with plenty of water sitting or standing, not right before lying down (oesophageal irritation), with a meal.' },
    cave: { de: 'Photosensibilität (Sonnenschutz); nicht in Schwangerschaft/Stillzeit; nicht bei Kindern < 8 Jahre.', en: 'Photosensitivity (sun protection); not in pregnancy/breastfeeding; not in children < 8 years.' },
    pack: ''
  }
};

/* Expositionsprophylaxe (Repellents nach Lupi/Schlagenhauf 2013). */
const MAL_EXPO = {
  de: 'Konsequenter Mückenschutz: Repellent mit DEET (20–30 %) oder Icaridin auf unbedeckte Haut (Anopheles v. a. dämmerungs- und nachtaktiv), lange helle Kleidung, imprägniertes Moskitonetz, klimatisierte oder vergitterte Räume.',
  en: 'Consistent bite protection: repellent with DEET (20–30 %) or Icaridin on exposed skin (Anopheles bite mainly at dusk and night), long light-coloured clothing, an impregnated bed net, air-conditioned or screened rooms.'
};

/* Standby-Notfallmedikament (nur Hinweis; Dosierung im Gespräch). */
const MAL_STANDBY = {
  de: 'Notfallselbstbehandlung (Standby): Artemether-Lumefantrin (Riamet) für die Notfallbehandlung mitgeben, wenn innerhalb von 24 h keine ärztliche Hilfe erreichbar ist. Einnahme mit fetthaltiger Mahlzeit.',
  en: 'Emergency standby treatment: carry artemether-lumefantrine (Riamet) for self-treatment if no medical help is reachable within 24 h. Take with a fatty meal.'
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { malariaAssess, malaroneTabsPerDay, malaroneCalc, MAL_DRUGS, MAL_EXPO, MAL_STANDBY, MAL_STRAT_RANK };
}
