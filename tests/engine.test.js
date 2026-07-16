/* Headless engine tests — run with:  node tests/engine.test.js
   Loads the real app engine (engine_data + engine_rules + engine.js) in a shared
   scope with minimal browser stubs, then drives assess()/menacwyAssess() exactly
   as the app does. New category scheme (no violet):
     Pflicht=red-strong · Dringend/Empfohlen=red · Generell=blue · Erwägen=yellow
     · geschützt=green · nicht indiziert=grey
*/
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');

globalThis.window = globalThis;
globalThis.document = { getElementById: () => ({ value: '' }) };
globalThis.el = (id) => globalThis.document.getElementById(id);
globalThis.IMMUNO_DB = [];
globalThis.IMMUNODEF_KW = [];
globalThis.VACCINES = [
  {k:'yellowfever',live:true},{k:'typhoid'},{k:'rabies'},{k:'jev'},{k:'cholera'},
  {k:'tbe'},{k:'dengue',live:true,dengue:true},{k:'chikungunya'},{k:'menb'},{k:'mmr',live:true},
  {k:'varicella',live:true},{k:'influenza'},{k:'zoster'},{k:'pneumo'},{k:'hpv'},{k:'mpox'},{k:'menacwy',menacwy:true}
];
let code = '';
['data/engine_data.js','js/engine_rules.js','js/engine.js'].forEach(f => { code += fs.readFileSync(path.join(ROOT,f),'utf8') + '\n'; });
code += `
globalThis.setCtx = function(o){ window.EngineCtx = {
  getDob:()=>o.dob, getPregnant:()=>o.preg||'no', getDuration:()=>o.dur||'2-4w', getConds:()=>o.conds||[],
  getDestinations:()=>o.dest||[],
  getVaxState:()=>{ const s={}; VACCINES.forEach(v=>s[v.k]=(o.vax&&o.vax[v.k])||{done:'0'});
    s.tdap_polio=(o.vax&&o.vax.tdap_polio)||{doses_hexa:'0'}; s.hepatitis=(o.vax&&o.vax.hepatitis)||{};
    s.menacwy=(o.vax&&o.vax.menacwy)||{}; s.dengue=(o.vax&&o.vax.dengue)||{done:'0'}; return s; },
  getMedsList:()=>o.meds||[], getChronicText:()=>o.chronic||'', getAllergyText:()=>'',
  getDeparture:()=>o.departure||'2026-08-01', getSerology:()=>o.ser||{} }; };
globalThis.getVax = (k)=>VACCINES.find(v=>v.k===k);
globalThis.assess = assess; globalThis.menacwyAssess = menacwyAssess;
`;
vm.runInThisContext(code);

let pass = 0, fail = 0;
function check(name, actual, expected) {
  if (actual === expected) { pass++; console.log('  ✓ ' + name); }
  else { fail++; console.log('  ✗ ' + name + '  (got "' + actual + '", expected "' + expected + '")'); }
}
function statusOf(ctx, k) { setCtx(ctx); return assess(getVax(k)).status; }
function catOf(ctx, k) { setCtx(ctx); return assess(getVax(k)).category; }

const TH = { dob:'2005-02-11', dest:['TH'], dur:'2-4w' };
const GH = { dob:'2020-01-01', dest:['GH'], dur:'1-3m' };

console.log('Yellow fever');
check('YF Ghana (cert) = Pflicht/red-strong', statusOf(GH,'yellowfever'), 'red-strong');
check('YF Thailand = nicht indiziert', catOf(TH,'yellowfever'), 'nicht indiziert');

console.log('Rabies (never Dringend without animal)');
check('Rabies TH alone = Erwägen/yellow', statusOf(TH,'rabies'), 'yellow');
check('Rabies TH + animal = Dringend/red', statusOf({...TH,conds:['animal']},'rabies'), 'red');
check('Rabies TH + animal category = Dringend empfohlen', catOf({...TH,conds:['animal']},'rabies'), 'Dringend empfohlen');

console.log('Typhoid / JE / TBE');
check('Typhoid TH (high) = Empfohlen/red', statusOf(TH,'typhoid'), 'red');
check('JE TH short/urban = Erwägen/yellow', statusOf(TH,'jev'), 'yellow');
check('TBE Austria alone = Erwägen/yellow', statusOf({dob:'1990-01-01',dest:['AT'],dur:'2-4w'},'tbe'), 'yellow');
check('TBE Austria + rural = Empfohlen/red', statusOf({dob:'1990-01-01',dest:['AT'],dur:'2-4w',conds:['rural']},'tbe'), 'red');

console.log('MMR / protection / CAVE');
check('MMR unvaccinated (born 2005) = Dringend/red', statusOf(TH,'mmr'), 'red');
check('MMR 2 doses = geschützt/green', statusOf({...TH,vax:{mmr:{done:'2'}}},'mmr'), 'green');

console.log('Routine STIKO');
check('Influenza age 70 = Generell/blue', statusOf({dob:'1955-01-01',dest:['US'],dur:'2-4w'},'influenza'), 'blue');
check('Influenza age 30 healthy = nicht indiziert', catOf({dob:'1996-01-01',dest:['US'],dur:'2-4w'},'influenza'), 'nicht indiziert');

console.log('Meningococcus (menacwyAssess path)');
setCtx({dob:'1990-01-01',dest:['SA'],conds:['hajj'],dur:'2-4w'});
check('Meningo ACWY Hajj (SA) mandatory = red', menacwyAssess().status, 'red');

console.log('\nWorked cases');
check('Lena typhoid = Empfohlen', catOf(TH,'typhoid'), 'Empfohlen');
check('Lena MMR = Dringend empfohlen', catOf(TH,'mmr'), 'Dringend empfohlen');
check('Rufus YF = Pflicht', catOf({...GH,conds:['rural','animal'],vax:{mmr:{done:'2'}}},'yellowfever'), 'Pflicht');
check('Rufus rabies = Dringend empfohlen', catOf({...GH,conds:['rural','animal']},'rabies'), 'Dringend empfohlen');

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
