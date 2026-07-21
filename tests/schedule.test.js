/* Headless schedule tests — run with:  node tests/schedule.test.js
   Loads the real buildOptimalSchedule() from js/engine.js with minimal stubs and
   verifies the appointment-consolidation pass:
     - nahe Termine werden zusammengelegt (weniger Wege),
     - dabei wird KEIN Mindestabstand verletzt (nur Vorwärts-Verschiebung + Repair),
     - enge Tollwut-Abstände (0/7/21) bleiben unangetastet,
     - Lebendimpf-Abstand (selber Tag oder >=28 Tage) bleibt gewahrt.
*/
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');
globalThis.window = globalThis;
let DOB = '1994-05-01';
globalThis.document = { getElementById: (id) => ({ value: id === 'p-dob' ? DOB : '' }) };
globalThis.el = (id) => globalThis.document.getElementById(id);
vm.runInThisContext(fs.readFileSync(path.join(ROOT, 'js/engine.js'), 'utf8'));

let pass = 0, fail = 0;
const ok = (n, c) => { if (c) { pass++; console.log('  ✓ ' + n); } else { fail++; console.log('  ✗ ' + n); } };
const depIn = (d) => new Date(Date.now() + d * 86400000).toISOString().slice(0, 10);
const VG = { rabies:[7,14], jev:[28], dengue:[90], hepB:[28,150], hepAB:[28,150], hepA:[180], tbe:[30,240], menacwy:[28] };
function dayOf(s, k, idx) { for (const b of s) for (const it of b.items) if (it.k === k && (it.doseIdx || 0) === idx) return b.offset; return null; }
function gapsOk(s) { for (const k of Object.keys(VG)) { const ds = []; for (let i = 0; i < 4; i++) { const d = dayOf(s, k, i); if (d !== null) ds.push(d); } for (let i = 1; i < ds.length; i++) if (ds[i] - ds[i-1] < VG[k][i-1]) return false; } return true; }
function noDupSameDay(s) { return s.every(b => { const seen = {}; return b.items.every(it => seen[it.k] ? false : (seen[it.k] = 1)); }); }
function liveOk(s) { const ld = s.filter(b => b.items.some(it => it.live)).map(b => b.offset); for (let i = 0; i < ld.length; i++) for (let j = i+1; j < ld.length; j++) { const d = Math.abs(ld[i]-ld[j]); if (d > 0 && d < 28) return false; } return true; }

// --- Szenario 1: Nicaragua (Twinrix + Tollwut + FSME), Abreise in 79 Tagen ---
window.EngineCtx = { getDob:()=>DOB, getVaxState:()=>({ hepatitis:{}, rabies:{done:''}, tbe:{done:''} }) };
let s1 = buildOptimalSchedule([
  { name:'Hepatitis A+B (Twinrix)', k:'hepAB', live:false, stKey:'hepatitis', planField:'plannedAB' },
  { name:'Tollwut (Rabipur / Verorab)', k:'rabies', live:false, stKey:'rabies', planField:'planned' },
  { name:'FSME (Encepur)', k:'tbe', live:false, stKey:'tbe', planField:'planned' },
], depIn(79));
console.log('Szenario 1: Nicaragua (Twinrix+Tollwut+FSME)');
ok('Hep A+B Dosis2 und FSME Dosis2 am selben Tag', dayOf(s1,'hepAB',1) !== null && dayOf(s1,'hepAB',1) === dayOf(s1,'tbe',1));
ok('kein Mindestabstand verletzt', gapsOk(s1));
ok('Tollwut unveraendert 0/7/21', dayOf(s1,'rabies',0)===0 && dayOf(s1,'rabies',1)===7 && dayOf(s1,'rabies',2)===21);
ok('kein Termin mit >3 Impfungen', s1.every(b => b.items.length <= 3));
ok('keine doppelte Impfung am selben Tag', noDupSameDay(s1));

// --- Szenario 2: Tollwut-only Schnellschema darf NICHT zusammengelegt werden ---
window.EngineCtx = { getDob:()=>DOB, getVaxState:()=>({ rabies:{done:''} }) };
let s2 = buildOptimalSchedule([{ name:'Tollwut', k:'rabies', live:false, stKey:'rabies', planField:'planned' }], depIn(60));
console.log('Szenario 2: Tollwut-Schnellschema');
ok('drei eigenstaendige Termine 0/7/21', s2.length===3 && s2[0].offset===0 && s2[1].offset===7 && s2[2].offset===21);
ok('kein Mindestabstand verletzt', gapsOk(s2));

// --- Szenario 3: Lebendimpfstoffe (Gelbfieber + MMR) + Twinrix ---
window.EngineCtx = { getDob:()=>DOB, getVaxState:()=>({ yellowfever:{done:''}, mmr:{done:''}, hepatitis:{} }) };
let s3 = buildOptimalSchedule([
  { name:'Gelbfieber (Stamaril)', k:'yellowfever', live:true, stKey:'yellowfever', planField:'planned' },
  { name:'MMR (MMRvaxPro)', k:'mmr', live:true, stKey:'mmr', planField:'planned' },
  { name:'Hepatitis A+B (Twinrix)', k:'hepAB', live:false, stKey:'hepatitis', planField:'plannedAB' },
], depIn(120));
console.log('Szenario 3: Lebendimpfstoffe + Twinrix');
ok('Lebendimpf-Abstand gewahrt (selber Tag oder >=28 Tage)', liveOk(s3));
ok('kein Mindestabstand verletzt', gapsOk(s3));
ok('keine doppelte Impfung am selben Tag', noDupSameDay(s3));

// --- Szenario 4: FSME-Placement bei vollem "Heute"-Termin (Fix 1) ---
// Hep B + Tollwut + TdaP-Polio + FSME: Tag 0 ist mit 3 Impfungen voll, FSME-Dosis 1 wird auf Tag 7
// verdrängt. Frueher rutschte FSME-Dosis 2 dann auf ~6 Monate (kein Termin bei ~1 Monat). Jetzt muss
// Dosis 2 nahe am Mindestabstand (~30 Tage nach Dosis 1) liegen, nicht Monate später.
window.EngineCtx = { getDob:()=>DOB, getVaxState:()=>({ hepatitis:{}, rabies:{done:''}, tdap_polio:{doses_hexa:'0'}, tbe:{done:''} }) };
let s4 = buildOptimalSchedule([
  { name:'Hepatitis B (Engerix B)', k:'hepB', live:false, stKey:'hepatitis', planField:'plannedB' },
  { name:'Tollwut (Rabipur / Verorab)', k:'rabies', live:false, stKey:'rabies', planField:'planned' },
  { name:'Tetanus Diphtherie Pertussis Polio (Repevax)', k:'tdap_combo', live:false, stKey:'tdap_polio', planField:'planned' },
  { name:'FSME (Encepur)', k:'tbe', live:false, stKey:'tbe', planField:'planned' },
], depIn(79));
let fsme1 = dayOf(s4,'tbe',0), fsme2 = dayOf(s4,'tbe',1);
console.log('Szenario 4: FSME-Placement (Fix 1)  [D1=' + fsme1 + ', D2=' + fsme2 + ']');
ok('FSME Dosis2 nicht auf Monate verschleppt (<= ~8 Wochen nach Dosis1)', fsme2 !== null && (fsme2 - fsme1) <= 56);
ok('FSME 30-Tage-Mindestabstand D1->D2 eingehalten', fsme2 - fsme1 >= 30);
ok('kein Mindestabstand verletzt', gapsOk(s4));

// --- Szenario 5: manueller Plan kollabiert korrekt statt zu "ratchten" (Fix 2, computeManualOffsets) ---
// Nach dem Entfernen einer frühen Ankerimpfung bleiben veraltete (hohe) DOM-Offsets stehen. Ein
// Auto-Termin (userSet=false) muss auf sein medizinisches Minimum zurückfallen; frueher liess
// Math.max(origOffset, ...) den Plan "aufblähen" (Termin 1 -> "1 Monat" usw.).
console.log('Szenario 5: manueller Plan / Offset-Ratchet (Fix 2)');
let ratchet = computeManualOffsets([
  { origOffset:30, offset:30, isExternal:false, userSet:false, items:[{k:'tbe',live:false},{k:'tdap_combo',live:false}] },
  { origOffset:60, offset:60, isExternal:false, userSet:false, items:[{k:'tbe',live:false},{k:'tdap_combo',live:false}] },
]);
ok('erster Auto-Termin kollabiert auf Tag 0 (kein Ratchet)', ratchet[0].offset === 0);
ok('zweiter Termin haelt nur den medizinischen Mindestabstand (Tag 30)', ratchet[1].offset === 30);
// Manuell gesetzter Offset wird weiterhin respektiert (>= Minimum).
let manual = computeManualOffsets([
  { origOffset:0, offset:0, isExternal:false, userSet:false, items:[{k:'tbe',live:false}] },
  { origOffset:56, offset:56, isExternal:false, userSet:true, userOffset:56, items:[{k:'tbe',live:false}] },
]);
ok('manuell gesetzter Offset (8 Wochen) bleibt erhalten', manual[1].offset === 56);
// Externer Termin behaelt seine Position.
let ext = computeManualOffsets([
  { origOffset:0, offset:0, isExternal:false, userSet:false, items:[{k:'hepAB',live:false}] },
  { origOffset:90, offset:90, isExternal:true, userSet:false, items:[{k:'covid',live:false}] },
]);
ok('externer Termin behaelt Position (Tag 90)', ext[1].offset === 90);

// --- Szenario 6: Bündelung im MANUELL bearbeiteten Plan (consolidateManualSchedule) ---
// Nach dem Entfernen von Dosen bleiben getrennte Karten am selben/nahen Tag stehen; die muessen
// zusammengelegt werden (Video: zwei "In 1 Monat"-Termine bzw. "Heute"+"Flexibel" an Tag 0).
console.log('Szenario 6: Buendelung im manuellen Plan (Fix 3)');
// (a) gleicher Tag -> ein Termin
let m1 = consolidateManualSchedule([
  { offset:0, items:[{k:'tdap_combo'}] },
  { offset:0, items:[{k:'tbe'}] },
]);
ok('gleicher Tag: 2 Karten -> 1 Termin', m1.length === 1 && m1[0].items.length === 2);
// (b) nahe Tage (28 & 30) -> ein Termin am spaeteren Tag
let m2 = consolidateManualSchedule([
  { offset:28, items:[{k:'hepA'},{k:'tdap_combo'}] },
  { offset:30, items:[{k:'tbe'}] },
]);
ok('nahe Tage 28/30 -> 1 Termin an Tag 30', m2.length === 1 && m2[0].offset === 30 && m2[0].items.length === 3);
// (c) externer Termin wird NICHT zusammengelegt
let m3 = consolidateManualSchedule([
  { offset:0, items:[{k:'tbe'}] },
  { offset:0, isExternal:true, items:[{k:'covid'}] },
]);
ok('externer Termin bleibt getrennt', m3.length === 2);
// (d) manuell gesetzter Termin wird NICHT zusammengelegt
let m4 = consolidateManualSchedule([
  { offset:0, items:[{k:'tbe'}] },
  { offset:0, userSet:true, items:[{k:'tdap_combo'}] },
]);
ok('manuell gesetzter Termin bleibt getrennt', m4.length === 2);
// (e) enge Tollwut-Fenster: nahe Tage in den ersten 3 Wochen werden NICHT zusammengelegt
let m5 = consolidateManualSchedule([
  { offset:7, items:[{k:'rabies'}] },
  { offset:9, items:[{k:'tbe'}] },
]);
ok('nahe Tage <21 (Tollwut-Fenster) bleiben getrennt', m5.length === 2);
// (f) keine zwei Dosen derselben Impfung an einem Tag
let m6 = consolidateManualSchedule([
  { offset:0, items:[{k:'rabies'}] },
  { offset:0, items:[{k:'rabies'}] },
]);
ok('zwei Tollwut-Dosen werden NICHT auf einen Tag gelegt', m6.length === 2);
// (g) GLEICHER Tag: 3+1 wird trotzdem zusammengelegt (ist ohnehin derselbe Besuch – Video Frame 5)
let m7 = consolidateManualSchedule([
  { offset:0, items:[{k:'a'},{k:'b'},{k:'c'}] },
  { offset:0, items:[{k:'d'}] },
]);
ok('gleicher Tag: 3+1 -> 1 Termin (kein 3/Tag-Limit am selben Tag)', m7.length === 1 && m7[0].items.length === 4);
// (h) NAHER Tag: 2+2 wird NICHT zusammengelegt (dabei wuerde eine Dosis auf einen anderen, dann vollen Tag wandern)
let m8 = consolidateManualSchedule([
  { offset:28, items:[{k:'a'},{k:'b'}] },
  { offset:30, items:[{k:'c'},{k:'d'}] },
]);
ok('nahe Tage: 2+2 bleiben getrennt (3/Tag-Limit gilt beim Verschieben)', m8.length === 2);
// (i) GLEICHER Tag mit Lebendimpfstoff: 1 + 3 (inkl. MMR live) -> 1 Termin (Video Frame 5)
let m9 = consolidateManualSchedule([
  { offset:0, items:[{k:'hepA'}] },
  { offset:0, items:[{k:'tbe'},{k:'tdap_combo'},{k:'mmr',live:true}] },
]);
ok('gleicher Tag: Hep A + FSME/TdaP/MMR(live) -> 1 Termin mit 4', m9.length === 1 && m9[0].items.length === 4);

// --- Szenario 7: Entfernen einer Impfung erhoeht NIE die Dosen anderer (reconcileRemovedVaccines, Fix 4) ---
// "Beim Loeschen werden es wieder mehr": frueher setzte das Entfernen der letzten Dosis einer Impfung
// customSchedule auf null -> buildOptimalSchedule regenerierte die vollen Dosen-Serien aller uebrigen.
console.log('Szenario 7: Entfernen erhoeht keine Dosen (Fix 4)');
function countK(cs, k){ let n=0; (cs||[]).forEach(b=>b.items.forEach(it=>{ if(it.k===k) n++; })); return n; }
// Plan mit teilweise manuell reduzierten Dosen: FSME nur noch 2 (statt 3), TdaP 1, dazu Typhus (1).
let planBefore = [
  { offset:0,  items:[{k:'tbe',doseIdx:0},{k:'tdap_combo',doseIdx:0},{k:'typhoid',doseIdx:0}] },
  { offset:30, items:[{k:'tbe',doseIdx:1}] },
];
let tbeBefore = countK(planBefore,'tbe'), tdapBefore = countK(planBefore,'tdap_combo');
// Typhus entfernen -> verbleibende Schluessel {tbe, tdap_combo}
let after = reconcileRemovedVaccines(planBefore, new Set(['tbe','tdap_combo']));
ok('Typhus ist entfernt', countK(after,'typhoid') === 0);
ok('FSME-Dosen bleiben gleich (nicht regeneriert)', countK(after,'tbe') === tbeBefore);
ok('TdaP-Dosen bleiben gleich (nicht regeneriert)', countK(after,'tdap_combo') === tdapBefore);
let totalBefore = tbeBefore + tdapBefore, totalAfter = countK(after,'tbe') + countK(after,'tdap_combo');
ok('Gesamtzahl der verbleibenden Dosen nimmt NICHT zu', totalAfter <= totalBefore);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
