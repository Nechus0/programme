/* Tests für die Malaria-Engine (unabhängig von der Impf-Engine). */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ctx = { module: { exports: {} }, console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../js/malaria_data.js'), 'utf8'), ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../js/malaria_engine.js'), 'utf8'), ctx);
const { malariaAssess, malaroneCalc, malaroneTabsPerDay, MAL_DRUGS } = ctx.module.exports;

let pass = 0, fail = 0;
function ok(name, cond) { if (cond) { pass++; console.log('  ✓ ' + name); } else { fail++; console.log('  ✗ ' + name); } }

ok('Frankreich = kein Malariarisiko (Sektion bleibt verborgen)', malariaAssess(['FR']).any === false);
ok('Brasilien = Chemoprophylaxe (P)', malariaAssess(['BR']).strategy === 'P');
ok('Thailand = Standby (NSB)', malariaAssess(['TH']).strategy === 'NSB');
ok('Südafrika = Standby (NSB)', malariaAssess(['ZA']).strategy === 'NSB');
ok('Aggregation nimmt höchste Stufe (BR+FR = P)', malariaAssess(['BR', 'FR']).strategy === 'P');
ok('Malarone 70 kg / 7 Tage = 15 Tabletten', malaroneCalc(70, 7).tablets === 15);
ok('Malarone 70 kg / 7 Tage = 2 Packungen (à 12)', malaroneCalc(70, 7).packs === 2);
ok('Malarone deckt Risikofenster + 8 Tage', malaroneCalc(70, 20).days === 28);
ok('Kinderdosis unter 40 kg gekennzeichnet', malaroneTabsPerDay(15).ped === true);
ok('Malarone hat Einnahmehinweis', !!(MAL_DRUGS.malarone.intake && MAL_DRUGS.malarone.intake.de));
ok('Doxycyclin-Cave enthält Schwangerschaft', /Schwangerschaft/.test(MAL_DRUGS.doxycyclin.cave.de));

console.log('\n' + pass + ' passed, ' + fail + ' failed');
if (fail > 0) process.exit(1);
