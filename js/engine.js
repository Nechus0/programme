/* --- engine.js --- */
window.EngineCtx = {
  getDob: () => { const e=document.getElementById('p-dob'); return e?e.value:''; },
  getPregnant: () => { const e=document.getElementById('p-pregnant'); return e?e.value:''; },
  getDuration: () => { const e=document.getElementById('p-duration'); return e?e.value:''; },
  getConds: () => { return typeof conds === 'function' ? conds() : []; },
  getDestinations: () => { return window.destinations || []; },
  getVaxState: () => { return window.vaxState || {}; },
  getMedsList: () => { return window.medsList || []; },
  getChronicText: () => { const e=document.getElementById('p-chronic-text'); return e?e.value:''; },
  getAllergyText: () => { const e=document.getElementById('p-allergy'); return e?e.value:''; },
  getDeparture: () => { const e=document.getElementById('p-departure'); return e?e.value:''; },
  getSerology: () => { return window.serologyState || {}; }
};

function vGaps(k){
  if(k==='rabies')return [7,14];
  if(k==='jev')return [28];
  if(k==='dengue')return [90];  // Qdenga: 0, 3 Monate
  if(k==='hepB'||k==='hepAB')return [28,150];
  if(k==='hepA')return [180];
  if(k==='hpv'){ const a=(typeof ageYears==='function')?ageYears(EngineCtx.getDob()):null; return (a!=null&&a>=9&&a<=14)?[180]:[60,120]; }  // 9–14 J.: 0,6 Mon (2 Dosen); sonst 0,2,6 Mon (3 Dosen)
  if(k==='tbe')return [30,240];  // Encepur Standard: 0, 1, 9 Monate
  if(k==='tdap_polio' || k==='tdap_combo' || k==='ipv_mono')return [28,150];
  if(k==='menacwy')return [28];
  return [28];
}
function buildOptimalSchedule(planned, departureStr) {
  let allDoses = [];
  planned.forEach(item => {
    const gaps = vGaps(item.k);
    const st = EngineCtx.getVaxState()[item.stKey];
    let doseCount = 1;
    if (item.k === 'hepB' || item.k === 'hepAB') { if (!st.bMono && !st.twin) doseCount = 3; }
    else if (item.k === 'hepA') { if (!st.aMono && !st.twin) doseCount = 2; }
    else if (item.k === 'tbe' || item.k === 'rabies') { if (st.done === '') doseCount = 3; }
    else if (item.k === 'hpv') { if (st.done === '') { const a = (typeof ageYears==='function') ? ageYears(EngineCtx.getDob()) : null; doseCount = (a!=null && a>=9 && a<=14) ? 2 : 3; } }  // STIKO: 9–14 J. → 2 Dosen, sonst 3 (0/2/6 Mon)
    else if (['jev', 'dengue', 'mpox', 'zoster', 'menb', 'varicella', 'mmr'].includes(item.k)) { if (st.done === '') doseCount = 2; }
    else if (item.k === 'tdap_combo') { const dh = st.doses_hexa==='>3'?4:parseInt(st.doses_hexa||0,10); if (!(st.gi_tdap || dh>=3)) doseCount = 3; }
    else if (item.k === 'ipv_mono') { const dh = st.doses_hexa==='>3'?4:parseInt(st.doses_hexa||0,10); if (!(st.gi_ipv || dh>=3)) doseCount = 3; }
    else if (item.k === 'menacwy') { if (st.done === '') doseCount = 1; }

    let currentMinOffset = 0;
    for (let i = 0; i < doseCount; i++) {
       if (i > 0) currentMinOffset += (gaps[i-1] || 28);
       allDoses.push({
          id: item.k + '_' + i,
          name: item.name + (doseCount > 1 ? ` - Dosis ${i+1}` : ''),
          k: item.k,
          stKey: item.stKey,
          planField: item.planField,
          live: item.live,
          doseIdx: i,
          minOffset: currentMinOffset,
          isReacto: ['chikungunya', 'dengue', 'menacwy'].includes(item.k)
       });
    }
  });

  if (!allDoses.length) return [];

  // Tage bis zur Abreise (für die Termin-Verteilung): flexible Impfungen sollen möglichst VOR der
  // Abreise erfolgen – auch wenn dadurch mehr als 3 Impfungen auf einen Tag fallen.
  const daysDep = departureStr ? Math.round((new Date(departureStr) - new Date()) / 86400000) : null;

  let bucketDays = new Set([0]);
  allDoses.forEach(d => bucketDays.add(d.minOffset));
  bucketDays = Array.from(bucketDays).sort((a,b)=>a-b);

  let buckets = bucketDays.map(offset => ({ offset, items: [], live: false, reactoCount: 0 }));

  function findValidBucket(dose, minOffset = 0) {
    for (let pass = 0; pass < 2; pass++) {
       let maxItems = pass === 0 ? 2 : 3; 
       for (let i = 0; i < buckets.length; i++) {
          let b = buckets[i];
          if (b.offset < minOffset || b.offset < dose.minOffset) continue;
          if (b.items.length > maxItems) continue; 
          if (b.items.some(it => it.k === dose.k)) continue;
          if (dose.isReacto && b.reactoCount >= 2) continue; 
          if (dose.live) {
             let conflict = false;
             for (let j = 0; j < buckets.length; j++) {
                if (i === j) continue;
                if (buckets[j].live && Math.abs(buckets[j].offset - b.offset) < 28) { conflict = true; break; }
             }
             if (conflict) continue;
          }
          return i;
       }
    }
    // Flexible, nicht-Lebendimpfung, die noch VOR der Abreise möglich wäre: lieber einen (auch vollen)
    // Vor-Abreise-Termin nehmen, als einen Termin NACH der Abreise anzulegen. >3 an einem Tag sind dann ok.
    if (daysDep != null && !dose.live && dose.minOffset <= daysDep) {
       let best = -1, bestCount = Infinity;
       for (let i = 0; i < buckets.length; i++) {
          let b = buckets[i];
          if (b.offset < minOffset || b.offset < dose.minOffset || b.offset > daysDep) continue;
          if (b.items.some(it => it.k === dose.k)) continue;
          if (dose.isReacto && b.reactoCount >= 2) continue;
          if (b.items.length < bestCount) { bestCount = b.items.length; best = i; }
       }
       if (best >= 0) return best;
    }
    let lastBucket = buckets.length > 0 ? buckets[buckets.length - 1] : null;
    let newDay = (lastBucket ? lastBucket.offset : 0) + (dose.live ? 28 : 7);
    buckets.push({ offset: newDay, items: [], live: false, reactoCount: 0 });
    return buckets.length - 1;
  }

  let sortedDoses = allDoses.filter(d => d.k !== 'typhoid').sort((a, b) => {
     if (a.k === 'yellowfever') return -1;
     if (b.k === 'yellowfever') return 1;
     const prioA = ['rabies','jev','hepB','hepAB'].includes(a.k) ? 1 : 2;
     const prioB = ['rabies','jev','hepB','hepAB'].includes(b.k) ? 1 : 2;
     if (prioA !== prioB) return prioA - prioB;
     return a.minOffset - b.minOffset;
  });

  const assignedDays = {};
  sortedDoses.forEach(dose => {
     let minStart = 0;
     if (dose.doseIdx > 0) {
        let prevDay = assignedDays[dose.k][dose.doseIdx - 1];
        let reqGap = vGaps(dose.k)[dose.doseIdx - 1] || 28;
        minStart = prevDay + reqGap;
        if (!buckets.some(b => b.offset >= minStart)) {
           buckets.push({ offset: minStart, items: [], live: false, reactoCount: 0 });
        }
     }
     
     let bIdx = findValidBucket(dose, minStart);
     buckets[bIdx].items.push(dose);
     if (dose.live) buckets[bIdx].live = true;
     if (dose.isReacto) buckets[bIdx].reactoCount++;
     
     if (!assignedDays[dose.k]) assignedDays[dose.k] = [];
     assignedDays[dose.k].push(buckets[bIdx].offset);
  });

  let typhoidDoses = allDoses.filter(d => d.k === 'typhoid');
  if (typhoidDoses.length > 0) {
     let typhoid = typhoidDoses[0];
     let targetDay = buckets[buckets.length-1].offset;
     if (departureStr) {
        let daysToDep = Math.round((new Date(departureStr) - new Date()) / 86400000);
        let idealDay = daysToDep - 14;
        if (idealDay < 0) idealDay = 0;
        let validBuckets = buckets.filter(b => b.offset <= idealDay && b.items.length < 4);
        if (validBuckets.length > 0) targetDay = validBuckets[validBuckets.length - 1].offset;
     }
     let tIdx = buckets.findIndex(b => b.offset === targetDay);
     if (tIdx === -1 || buckets[tIdx].items.length >= 5) tIdx = findValidBucket(typhoid, 0); 
     buckets[tIdx].items.push(typhoid);
  }

  for(let i=0; i<buckets.length-1; i++) {
     // Nicht entzerren, wenn der Zieltermin NACH der Abreise läge – dann lieber 4 an einem Tag vor Abreise.
     const nextAfterDep = (daysDep != null && buckets[i+1].offset > daysDep);
     if(!nextAfterDep && buckets[i].items.length === 4 && buckets[i+1].items.length === 1) {
        // Niemals eine Impfung in einen Termin verschieben, der dieselbe Impfung (k) schon enthält
        const notDup = it => !buckets[i+1].items.some(x => x.k === it.k);
        let movable = buckets[i].items.filter(it => it.k !== 'yellowfever' && !it.live && notDup(it));
        if(movable.length === 0) movable = buckets[i].items.filter(it => it.k !== 'yellowfever' && notDup(it));
        if(movable.length >= 1) {
           buckets[i+1].items.push(movable[0]);
           buckets[i].items = buckets[i].items.filter(it => it.id !== movable[0].id);
        }
     }
  }
  // Absoluter Sicherheitsgurt: keine zwei Dosen derselben Impfung am selben Termin.
  // Duplikate werden NICHT verworfen, sondern in einen späteren gültigen Termin verschoben.
  for (let bi = 0; bi < buckets.length; bi++) {
     const b = buckets[bi];
     const seen = {};
     const dups = [];
     b.items = b.items.filter(it => { if (seen[it.k]) { dups.push(it); return false; } seen[it.k] = true; return true; });
     dups.forEach(it => {
        const minGap = (vGaps(it.k)[0]) || 28;
        let target = buckets.find(bb => bb.offset >= b.offset + minGap && !bb.items.some(x => x.k === it.k));
        if (!target) { target = { offset: b.offset + minGap, items: [], live: false, reactoCount: 0 }; buckets.push(target); }
        target.items.push(it);
     });
  }
  buckets.sort((a, c) => a.offset - c.offset);

  // Nahe beieinanderliegende Termine zusammenlegen (nur VORWÄRTS-Verschiebung → Mindestabstände
  // bleiben garantiert eingehalten, siehe consolidateNearbyAppointments).
  buckets = consolidateNearbyAppointments(buckets, daysDep);

  // COVID-19 wird an der Charité nicht verimpft (Standardversorgung/Hausarzt) →
  // immer automatisch in einen externen Termin verschieben (Hausarzt/Extern).
  let covidItems = [];
  buckets.forEach(b => {
     const keep = [];
     b.items.forEach(it => { if (it.k === 'covid') covidItems.push(it); else keep.push(it); });
     b.items = keep;
  });
  let result = buckets.filter(b => b.items.length > 0);
  if (covidItems.length) {
     let lastOff = result.length ? result[result.length - 1].offset : 0;
     result.push({ offset: lastOff + 28, items: covidItems, live: false, reactoCount: 0, isExternal: true });
  }
  return result;
}

// Legt nahe beieinanderliegende Termine zu einem zusammen, um dem Patienten unnötige Wege zu
// ersparen (z. B. Hep-A+B-Dosis 2 an Tag 28 und FSME-Dosis 2 an Tag 30 → ein Termin an Tag 30).
//
// Sicherheitsprinzip: Es wird AUSSCHLIESSLICH vorwärts verschoben – die Items eines früheren
// Termins wandern auf einen SPÄTEREN Tag. Dadurch kann der Abstand einer verschobenen Dosis zu
// ihrer VORHERIGEN Dosis nur größer werden (Mindestabstände sind Untergrenzen → nie verletzt).
// Der Abstand zur FOLGENDEN Dosis derselben Impfung könnte kleiner werden; das fängt der
// abschließende Repair-Pass ab, der Folgedosen bei Bedarf nach hinten schiebt.
//
// Toleranz ist offset-abhängig: in den ersten 3 Wochen wird GAR NICHT zusammengelegt (schützt die
// engen Tollwut-Abstände 0/7/21 vollständig); je weiter in der Zukunft, desto größer das Fenster
// (bei 1 Monat zählen 1–2 Tage nicht, bei 6 Monaten ohnehin nicht).
function consolidateNearbyAppointments(buckets, daysDep) {
  const MAX_PER_DAY = 3;
  const mergeTol = (off) => off < 21 ? 0 : (off < 42 ? 3 : (off < 120 ? 10 : 21));

  let bs = buckets
    .filter(b => b.items && b.items.length)
    .map(b => ({ offset: b.offset, items: b.items.slice(), reactoCount: b.reactoCount || 0 }))
    .sort((a, b) => a.offset - b.offset);

  // 1) Greedy Vorwärts-Merge: jeden Termin in den NÄCHSTGELEGENEN späteren Termin innerhalb der
  //    Toleranz zusammenlegen, sofern alle Sicherheits-/Kapazitätsbedingungen erfüllt sind.
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < bs.length; i++) {
      const A = bs[i];
      if (!A.items.length) continue;
      const tol = mergeTol(A.offset);
      if (tol <= 0) continue;
      for (let j = i + 1; j < bs.length; j++) {
        const B = bs[j];
        if (B.offset - A.offset > tol) break;            // sortiert → kein weiterer Kandidat
        if (B.offset <= A.offset) continue;
        if (A.items.length + B.items.length > MAX_PER_DAY) continue;                 // max. 3/Tag
        if (A.items.some(it => B.items.some(x => x.k === it.k))) continue;           // keine Dopplung
        const combinedReacto = A.items.filter(it => it.isReacto).length + B.items.filter(it => it.isReacto).length;
        if (combinedReacto > 2) continue;                                           // Reakto-Cap
        if (daysDep != null && A.offset <= daysDep && B.offset > daysDep) continue;  // nicht über Abreise schieben
        // Lebendimpf-Abstand (entweder selber Tag oder ≥4 Wochen zu anderen Lebend-Terminen).
        if (A.items.some(it => it.live) || B.items.some(it => it.live)) {
          let ok = true;
          for (let m = 0; m < bs.length; m++) {
            if (m === i || m === j) continue;
            if (bs[m].items.some(x => x.live)) {
              const d = Math.abs(bs[m].offset - B.offset);
              if (d > 0 && d < 28) { ok = false; break; }
            }
          }
          if (!ok) continue;
        }
        B.items = B.items.concat(A.items);
        B.reactoCount = combinedReacto;
        A.items = [];
        changed = true;
        break;
      }
    }
    bs = bs.filter(b => b.items.length);
  }

  // 2) Repair-Pass: pro Impfung die Dosen der Reihe nach durchgehen und Folgedosen bei Bedarf nach
  //    hinten schieben, damit jeder Mindestabstand garantiert eingehalten bleibt.
  let doses = [];
  bs.forEach(b => b.items.forEach(it => doses.push(Object.assign({}, it, { day: b.offset }))));
  const byK = {};
  doses.forEach(d => { (byK[d.k] = byK[d.k] || []).push(d); });
  Object.keys(byK).forEach(k => {
    const arr = byK[k].sort((a, b) => ((a.doseIdx || 0) - (b.doseIdx || 0)) || (a.day - b.day));
    const gaps = vGaps(k);
    for (let i = 1; i < arr.length; i++) {
      const need = gaps[i - 1] || 28;
      if (arr[i].day < arr[i - 1].day + need) arr[i].day = arr[i - 1].day + need;
    }
  });

  // 3) Neu nach Tag gruppieren.
  const byDay = {};
  doses.forEach(d => {
    if (!byDay[d.day]) byDay[d.day] = { offset: d.day, items: [], live: false, reactoCount: 0 };
    byDay[d.day].items.push(d);
    if (d.isReacto) byDay[d.day].reactoCount++;
  });
  const out = Object.keys(byDay).map(k => byDay[k]).sort((a, b) => a.offset - b.offset);
  out.forEach(b => { b.live = b.items.some(it => it.live); });
  return out;
}

function ageExact(dob){
  if(!dob)return null;
  const a = (new Date()-new Date(dob))/(1000*60*60*24*365.25);
  return a < 0 ? 0 : a;
}
function ageYears(dob){const e=ageExact(dob);return e===null?null:Math.floor(e);}
function birthYear(){const v=EngineCtx.getDob();return v?new Date(v).getFullYear():null;}
function ageDetail(dob){
  if(!dob)return null;const b=new Date(dob),n=new Date();let y=n.getFullYear()-b.getFullYear(),m=n.getMonth()-b.getMonth(),d=n.getDate()-b.getDate();
  if(d<0){m--;const pm=new Date(n.getFullYear(),n.getMonth(),0).getDate();d+=pm;}if(m<0){y--;m+=12;}return {y,m,d};
}
function yearsSince(yr){if(!yr)return null;return (new Date().getFullYear())-parseInt(yr,10);}
function doseNum(v){const d=parseInt(v||'0',10);return isNaN(d)?0:d;}
function durIndex(v){return ['<1w','1-2w','2-4w','1-3m','3-6m','>6m'].indexOf(v);}
function longStay(){return durIndex(EngineCtx.getDuration())>=3;}
function conds(){return EngineCtx.getConds();}
function regionsSelected(){return new Set((EngineCtx.getDestinations()||[]).map(c=>CBY[c].region));}
function isChild(){const a=ageExact(EngineCtx.getDob());return a!==null&&a<18;}
function childhoodOn(){const a=ageYears(EngineCtx.getDob());return a!==null&&a<18;}
function immunoText(){return el('p-immuno').value.trim().toLowerCase();}
function matchedDrugs(){const s=immunoText();if(!s)return [];return IMMUNO_DB.filter(d=>s.includes(d.n));}
function hasHighImmuno(){return matchedDrugs().some(d=>d.g==='high'||d.g==='dose');}
function hasLowImmuno(){return matchedDrugs().some(d=>d.g==='low');}
function drugRecognized(){return matchedDrugs().length>0;}
function isLowGradeOnly(){return hasLowImmuno()&&!hasHighImmuno();}
function isPregnant(){return EngineCtx.getPregnant()==='pregnant';}
function isBreastfeeding(){return EngineCtx.getPregnant()==='breastfeeding';}
function chronicTextVal(){const e=({value: EngineCtx.getChronicText()});return e?e.value.trim().toLowerCase():'';}
function hasChronic(){return chronicTextVal().length>0;}
function hasImmuneDef(){const s=chronicTextVal();return s?IMMUNODEF_KW.some(k=>s.includes(k)):false;}
function allergyEgg(){const s=(EngineCtx.getAllergyText()||'').toLowerCase();return /h(ü|ue)hnerei|hühnereiwei|huehnereiwei|\begg\b|eiwei|ovalbumin|eiklar/.test(s);}
function allergyNote(v){
  if(v.k==='yellowfever'&&allergyEgg())return {de:'Hühnereiweißallergie: Gelbfieber ist hühnerei-basiert – bei schwerer Allergie kontraindiziert, Rücksprache.',en:'Egg allergy: yellow fever is egg-based — contraindicated if severe; seek advice.',fr:"Allergie à l'œuf : le vaccin fièvre jaune est à base d'œuf — contre-indiqué si allergie sévère ; demander avis."};
  if(v.k==='influenza'&&allergyEgg())return {de:'Bei schwerer Hühnereiweißallergie Vorsicht (Influenza).',en:'Caution in severe egg allergy (influenza).',fr:"Prudence en cas d'allergie sévère à l'œuf (grippe)."};
  return null;
}
function departureMonth(){const d=EngineCtx.getDeparture();return d?new Date(d).getMonth():null;}
function staySpansDrySeason(){
  const dep=EngineCtx.getDeparture(); if(!dep) return null;
  const start=new Date(dep+'T00:00:00'); if(isNaN(start.getTime())) return null;
  const durDays={'<1w':6,'1-2w':13,'2-4w':27,'1-3m':75,'3-6m':150,'>6m':240}[EngineCtx.getDuration()]||14;
  const dry=[11,0,1,2,3,4,5];
  for(let d=0; d<=durDays; d+=5){ if(dry.includes(new Date(start.getTime()+d*86400000).getMonth())) return true; }
  return false;
}
function serMeasles(){return EngineCtx.getSerology().measles;}
function serVZV(){return EngineCtx.getSerology().vzv;}
function serHBs(){return EngineCtx.getSerology().hbs;}
function immunocompromised(){return hasHighImmuno()||hasImmuneDef()||(typeof dbImmunoBlocking==='function'&&dbImmunoBlocking());}
function livesBlocked(){return isPregnant()||immunocompromised();}
function lookupDrug(name){
  const DB=window.DRUGS_DB; if(!DB||!name) return null;
  const s=String(name).trim().toLowerCase(); if(!s) return null;
  for(const d of DB){ if((d.substance||'').toLowerCase()===s) return d; if((d.brand_names||[]).some(b=>b.toLowerCase()===s)) return d; }
  if(s.length>=3){ for(const d of DB){ if((d.substance||'').toLowerCase().includes(s)) return d; if((d.brand_names||[]).some(b=>b.toLowerCase().includes(s))) return d; } }
  return null;
}
function medIsImmuno(name){ const d=lookupDrug(name); if(d) return !!d.is_immunosuppressant; const s=(name||'').toLowerCase(); return IMMUNO_DB.some(k=>s.includes(k.n)); }
function dbImmunoBlocking(){ return EngineCtx.getMedsList().some(m=>{const d=lookupDrug(m); return d && d.is_immunosuppressant && !/^\s*ja/i.test(d.live_vaccine_allowed||''); }); }
function availability(v){
  const a=AVAIL[v.k];const age=ageExact(EngineCtx.getDob());
  if(!a)return {flag:'ok',noteDe:'',noteEn:'',noteFr:''};
  if(a.avail===false)return {flag:'na',badgeDe:'nicht vorrätig',badgeEn:'not stocked',badgeFr:'non disponible',noteDe:a.de,noteEn:a.en,noteFr:a.en};
  if(age!==null&&a.min!==undefined&&age<a.min)return {flag:'age',badgeDe:'Alter zu jung',badgeEn:'below min. age',badgeFr:'âge trop jeune',noteDe:'Noch nicht zugelassen. '+a.de,noteEn:'Not yet licensed. '+a.en,noteFr:'Pas encore autorisé. '+a.en};
  if(v.k==='yellowfever'&&age!==null&&age>60)return {flag:'caution',badgeDe:'>60 J.',badgeEn:'>60 yrs',badgeFr:'>60 ans',noteDe:a.de,noteEn:a.en,noteFr:a.en};
  if(v.k==='jev'&&age!==null&&age<3)return {flag:'caution',badgeDe:'0,25 ml',badgeEn:'0.25 ml',badgeFr:'0,25 ml',noteDe:a.de,noteEn:a.en,noteFr:a.en};
  if(v.k==='jev'&&age!==null&&age>65)return {flag:'caution',badgeDe:'>65 J.',badgeEn:'>65 yrs',badgeFr:'>65 ans',noteDe:a.de,noteEn:a.en,noteFr:a.en};
  return {flag:'ok',noteDe:a.de,noteEn:a.en,noteFr:a.en};
}
function liveAdvice(v){
  if(!v.live)return null;
  if(isPregnant())return {level:'block',de:'In Schwangerschaft/Stillzeit Vorsicht – Lebendimpfstoff (Gelbfieber: Nutzen-Risiko abwägen).',en:'Caution in pregnancy/breastfeeding — live vaccine (yellow fever: weigh risk-benefit).',fr:'Prudence pendant la grossesse/allaitement — vaccin vivant (fièvre jaune : évaluer le rapport bénéfice-risque).'};
  if(hasHighImmuno()||hasImmuneDef())return {level:'block',de:'Bei relevanter Immunsuppression/Immundefizienz kontraindiziert. Falls möglich ≥4 Wochen vor Therapiebeginn impfen.',en:'Contraindicated under relevant immunosuppression/immune deficiency. If feasible, vaccinate ≥4 weeks before therapy.',fr:'Contre-indiqué en cas d\'immunosuppression/immunodéficience pertinente. Si possible, vacciner ≥4 semaines avant le début du traitement.'};
  if(isLowGradeOnly())return {level:'caution',de:'Niedriggradige Immunsuppression – i.d.R. möglich; ≥4 Wochen vor Therapiebeginn.',en:'Low-grade immunosuppression — usually possible; ≥4 weeks before therapy.',fr:'Immunosuppression de bas grade — généralement possible ; ≥4 semaines avant le début du traitement.'};
  return null;
}
function getRisk(dKey) {
  // Reads the verified foundation (window.ENGINE_DATA). Translates the new vocabulary
  // (risk high/moderate/low/none + endemic + outbreak + yf_cert) into the legacy levels
  // that the combined assessors (hepAssess / menacwyAssess) still consume.
  const CODE = { yellow_fever:'yellow_fever', hepatitis_a:'hepatitis_a', hepatitis_b:'hepatitis_b',
    typhoid:'typhoid', meningitis:'meningococcal', je:'japanese_encephalitis', rabies:'rabies',
    cholera:'cholera', tbe:'tbe', dengue:'dengue', chikungunya:'chikungunya', polio:'polio', mmr:'measles' };
  const code = CODE[dKey] || dKey;
  const D = window.ENGINE_DATA || { countries:{}, countryDisease:{} };
  const ord = { none:0, unknown:0, low:1, moderate:2, high:3 };
  let best = 0, endemic = false, outbreak = false, highRisk = false, cert = false;
  for (const c of EngineCtx.getDestinations()) {
    const cm = D.countries[c]; if (cm && cm.yf_cert) cert = true;
    const cd = D.countryDisease[c]; if (!cd || !cd[code]) continue;
    const d = cd[code];
    best = Math.max(best, ord[d.risk] || 0);
    if (d.endemic) endemic = true;
    if (d.outbreak) outbreak = true;
    if (d.risk === 'high') highRisk = true;
  }
  let level = 'none';
  if (code === 'yellow_fever') { if (cert) level = 'mandatory_all'; else if (best >= 2 || endemic) level = 'recommended'; }
  else if (code === 'meningococcal') { if (best >= 3) level = 'recommended'; }   // travel-relevant = high (belt)
  else if (best >= 3) level = 'recommended';
  else if (best >= 1 || endemic) level = 'risk_based';
  return { level: level, transit: false, highRisk: highRisk, outbreak: outbreak };
}
function baseLevel(v){
  const age=ageExact(EngineCtx.getDob());const c=conds();const ls=longStay();const k=v.k;const di=durIndex(EngineCtx.getDuration());
  let level='none',mand=false,noteDe='',noteEn='';
  
  const dMap = {
    'yellowfever': 'yellow_fever', 'mmr': 'mmr', 'typhoid': 'typhoid', 
    'menb': 'meningitis', 'jev': 'je', 'rabies': 'rabies', 'cholera': 'cholera',
    'tbe': 'tbe', 'hpv': 'hpv', 'influenza': 'influenza', 'covid': 'covid',
    'mpox': 'mpox', 'dengue': 'dengue', 'chikungunya': 'chikungunya',
    'hepatitis': null, 'polio': 'polio', 'zoster': 'zoster', 'pneumo': 'pneumokokken'
  };
  
  const dKey = dMap[k];
  const risk = dKey ? getRisk(dKey) : null;
  const rl = risk ? risk.level : 'none';

  switch(k){
   case 'yellowfever':
     let yfNoteDe = []; let yfNoteEn = [];
     if(rl === 'mandatory_all'){
         level='strong';mand=true;
         yfNoteDe.push('Impfnachweis Pflicht');yfNoteEn.push('Proof required');
     }
     
     if(risk && risk.transit){
         yfNoteDe.push('Nachweis bei Einreise aus Endemiegebiet / Transit');
         yfNoteEn.push('Proof if arriving from endemic area / transit');
     }
     
     let fallbackYF = false;
     for(let dest of EngineCtx.getDestinations()) { if(window.countryData[dest] && window.countryData[dest].YF_RECOMMENDED) fallbackYF = true; }
     if(rl === 'recommended' || rl === 'risk_based' || fallbackYF){
         level='strong';
         yfNoteDe.push('Dringend empfohlen (Endemiegebiet)');
         yfNoteEn.push('Strongly recommended (Endemic area)');
     }
     
     if(age !== null && age < 2) {
         yfNoteDe.push('Hinweis: Bei Erstimpfung unter 2 Jahren ist bei fortgesetztem Risiko eine spätere Auffrischung nötig (DTG)');
         yfNoteEn.push('Note: If first dose < 2 years, a later booster is needed for ongoing risk (DTG)');
     }
     if(isBreastfeeding()) {
         yfNoteDe.push('Stillzeit: Gelbfieber (Lebendimpfstoff) nur nach individueller Nutzen-Risiko-Abwägung');
         yfNoteEn.push('Breastfeeding: yellow fever (live vaccine) only after individual risk-benefit assessment');
     }
     if(yfNoteDe.length > 0) { noteDe = yfNoteDe.join(' / '); noteEn = yfNoteEn.join(' / '); }
     break;
   case 'hepatitis':
     const hepa = getRisk('hepatitis_a');
     const hepb = getRisk('hepatitis_b');
     let hDe = []; let hEn = [];
     if(hepa.level === 'recommended' || hepa.level === 'risk_based') { hDe.push('Hep A: Empfohlen'); hEn.push('Hep A: Recommended'); level='strong'; }
     if(hepb.level === 'risk_based' && (ls || c.includes('health'))) { hDe.push('Hep B: Langzeit/Med.Personal'); hEn.push('Hep B: Long-term/Med'); level='strong'; }
     else if(hepb.level === 'recommended' || hepb.level === 'risk_based') { hDe.push('Hep B: Endemiegebiet'); hEn.push('Hep B: Endemic area'); if(level!=='strong') level='useful'; }
     noteDe = hDe.join(' | '); noteEn = hEn.join(' | ');
     break;
   case 'polio': {
      const pCat1 = ['AF','PK','DE','DZ','CD','DJ','IL','LA','CM','GN','TD'];
      const pCat2 = ['AO','ET','BJ','BF','CI','YE','NA','NE','NG','PS','PG','PL','SN','SO','SD','SS','TZ','GB','CF'];
      const pCat3 = ['EG','GQ','FI','GF','GM','GH','ID','KE','LR','ML','MR','MZ','SL','CG','ZW','ES','UG','HT','SY'];
      let isC1=false, isC2=false, isC3=false;
      EngineCtx.getDestinations().forEach(d => { if(pCat1.includes(d)) isC1=true; else if(pCat2.includes(d)) isC2=true; else if(pCat3.includes(d)) isC3=true; });
      
      if(isC1){level='strong';mand=true;noteDe='Polio Kat. 1: Impfnachweis Pflicht bei >4 Wo';noteEn='Cat 1: Proof required if >4 wks';}
      else if(isC2){level='general';noteDe='Polio Kat. 2: Auffrischung (alle 10J)';noteEn='Cat 2: Booster (q 10y)';}
      else if(isC3){level='general';noteDe='Polio Kat. 3: Vulnerabel (alle 10J)';noteEn='Cat 3: Vulnerable (q 10y)';}
      else {level='general';noteDe='STIKO-Standard';noteEn='STIKO standard';}
      break;
   }
   case 'mmr':
     const mmrDone = doseNum(EngineCtx.getVaxState().mmr.done);
     const mths = age !== null ? age * 12 : null;
     
     if (mths !== null && mths < 9) {
         level = 'none';
     } else if (mths !== null && mths >= 9 && mths < 11) {
         level = 'useful';
         noteDe = 'Erwägen ab 9 Monaten (z.B. vor Reise/Kita)'; noteEn = 'Consider from 9 mo (e.g. before travel/daycare)';
     } else {
         if (mmrDone === 0) {
             level = 'strong';
         } else {
             level = 'general';
         }
         
         if(age!==null && age<18){
             noteDe='Kinder: STIKO-Standard 2 Dosen (1. ab 11 Mon, 2. ab 15 Mon)';noteEn='Children: STIKO standard 2 doses (1st 11mo, 2nd 15mo)';
         } else if(age!==null && age>=18 && birthYear() && birthYear()>1970){
             if(serMeasles()){noteDe='Nach 1970 geb. + immun. '+(serVZV()?'(VZV immun)':'(VZV unklar)');noteEn='Born >1970 + immune. '+(serVZV()?'(VZV immune)':'(VZV unclear)');}
             else{noteDe='Nach 1970 geb: 1-2 Dosen MMR. '+(serVZV()?'(VZV immun)':'(VZV unklar)');noteEn='Born >1970: 1-2 doses MMR. '+(serVZV()?'(VZV immune)':'(VZV unclear)');}
         } else {
             noteDe='Vor 1970 geb. (Masern-immun). STIKO-Standard.';noteEn='Born <1970 (Measles-immune). STIKO standard.';
         }
     }
     break;
   case 'typhoid':
     const isHighRiskTyph = (risk && risk.highRisk) || EngineCtx.getDestinations().some(d => ['IN', 'PK', 'BD', 'NP', 'AF'].includes(d));
     if(isHighRiskTyph) {
       if(di >= 1) { level='strong'; noteDe='Hohes Risiko (Südasien) – ab 1 Woche Aufenthalt'; noteEn='High risk (South Asia) - from 1 week stay'; }
       else { level='none'; }
     }
     else if(rl === 'risk_based' || rl === 'recommended') {
       if(di >= 4) { level='strong'; noteDe='Langzeitaufenthalt im Endemiegebiet (>1 Monat)'; noteEn='Long-term stay in endemic area (>1 month)'; }
       else if (di >= 1) { level='useful'; noteDe='Endemiegebiet / ländlich – erwägen bei <1 Monat'; noteEn='Endemic area / rural - consider for <1 month'; }
       else { level='none'; }
     }
     break;
   case 'menb':
     if(age!==null&&age<2){level='general';noteDe='STIKO-Standard für Säuglinge/Kleinkinder';noteEn='STIKO standard for infants/toddlers';}
     else if(immunocompromised()){level='general';noteDe='Indikationsimpfung (Risiko/Asplenie)';noteEn='Indication vaccination (risk/asplenia)';}
     break;
   case 'jev':
     if((rl === 'risk_based' || rl === 'recommended') &&(ls||c.includes('rural'))){level='strong';noteDe='Langzeit / ländlich in Endemiegebiet';noteEn='Langzeit / ländlich in Endemiegebiet';}
     else if(rl === 'risk_based' || rl === 'recommended'){level='useful';noteDe='Endemiegebiet, kurzer Stadtaufenthalt';noteEn='Endemic area, short urban stay';}
     break;
   case 'rabies':{
     const rabies6mCountries = ['MX']; // Specific countries where Rabies is only > 6 months
     let hasNormalRisk = false;
     let has6mRisk = false;
     
     EngineCtx.getDestinations().forEach(d => {
         if(rabies6mCountries.includes(d)) has6mRisk = true;
         else {
             const cData = window.countryData[d];
             if(cData && cData.diseases && cData.diseases.rabies) {
                 const lvl = cData.diseases.rabies.risk_level;
                 if(lvl === 'risk_based' || lvl === 'recommended' || lvl === 'mandatory_all') hasNormalRisk = true;
             } else {
                 const safeZones = ['US','CA','AU','NZ','JP','SG','GB','IE','IS','MT','CY','CH','NO','SE','FI','DK','DE','FR','IT','ES','PT','NL','BE','AT','PL','CZ','SK','HU','RO','BG','GR','HR','SI','EE','LV','LT'];
                 if(!safeZones.includes(d)) hasNormalRisk = true;
             }
         }
     });

     const youngChild=age!==null&&age>=1&&age<=12;
     
     if(hasNormalRisk) {
         if(di>=4||c.includes('rural')||c.includes('animal')||youngChild){level='strong';noteDe=youngChild?'Kind: erhöhtes Bissrisiko – präexpositionell empfohlen':'Präexpositionell (Langzeitreise / ländlich / Tierkontakt)';noteEn=youngChild?'Child: higher bite risk — pre-exposure recommended':'Pre-exposure (long stay / rural / animal contact)';}
         else {level='useful';noteDe='Risikoabwägung (Reisedauer ≤ 4 Wochen) – bei Langzeitreise generell empfohlen';noteEn='Risk assessment (trip ≤ 4 weeks) — generally advised for long stays';}
     } else if (has6mRisk) {
         if(di>=6) { level='strong'; noteDe='Präexpositionell (Langzeitreise > 6 Monate)'; noteEn='Pre-exposure (long stay > 6 months)'; }
         else { level='none'; }
     } else {
         level='none';
     }
     break;}
   case 'cholera':
     if((rl==='risk_based'||rl==='recommended')&&(c.includes('health')||ls)){level='useful';noteDe='Ausbruchsland + Helfer/Langzeit – erwägen (Dukoral)';noteEn='Outbreak country + aid/long-term — consider (Dukoral)';}
     else if(rl==='risk_based'||rl==='recommended'){level='useful';noteDe='Ausbruchsland – nur bei erhöhtem Expositionsrisiko';noteEn='Outbreak country — only with elevated exposure';}
     break;
   case 'tbe':
     if(rl === 'risk_based' || rl === 'recommended') {
         if(c.includes('rural')){level='strong';noteDe='Endemiegebiet, Outdoor-Exposition';noteEn='Endemic area, outdoor exposure';}
         else{level='general';noteDe='Endemiegebiet (generell empfohlen)';noteEn='Endemic area (generally recommended)';}
     }
     break;
    case 'hpv': {
      const hpvDone = doseNum(EngineCtx.getVaxState()['hpv'].done);
      if (hpvDone > 0 && !isProtected(v)) {
        level='general'; noteDe='Begonnene Impfserie vervollständigen (STIKO)'; noteEn='Complete started series (STIKO)';
      }
      else if(age!==null&&age>=9&&age<=14){level='general';noteDe='STIKO-Standard 9-14 J.';noteEn='STIKO standard 9-14 yrs';}
      else if(age!==null&&age>14&&age<=17){level='general';noteDe='STIKO: Nachholimpfung bis 17 J.';noteEn='STIKO: catch-up until 17 yrs';}
      else {level='none';noteDe='Keine generelle STIKO-Empfehlung ab 18 J.';noteEn='No general STIKO recommendation from 18 yrs';}
      break;
    }
   case 'influenza':
     if(age!==null&&age>=60){level='general';noteDe='STIKO-Standard ab 60 J. (saisonal)';noteEn='STIKO standard from 60 (seasonal)';}
     else if(isPregnant()){level='general';noteDe='In der Schwangerschaft empfohlen';noteEn='Recommended in pregnancy';}
     else if(hasChronic()||immunocompromised()){level='general';noteDe='Indikation bei chron. Erkrankung/Immunschwäche';noteEn='Indicated in chronic illness/immunocompromise';}
     else if(rl==='standard'){level='useful';noteDe='STIKO Standard / Menschenansammlungen';noteEn='STIKO Standard / crowds';}
     break;
   case 'covid':
     if(age!==null&&age>=60){level='general';noteDe='Auffrischung ab 60 J. / Risikogruppen';noteEn='Booster from 60 / risk groups';}
     else if(hasChronic()||immunocompromised()||isPregnant()){level='general';noteDe='Risikogruppe – Auffrischung nach STIKO';noteEn='Risk group — booster per STIKO';}
     break;
   case 'zoster':
     if(age!==null&&age>=60){level='general';noteDe='STIKO-Standard ab 60 J.';noteEn='STIKO standard from 60';}
     else if(age!==null&&age>=50&&(immunocompromised()||hasChronic())){level='general';noteDe='Ab 50 J. bei Grundkrankheit/Immunschwäche';noteEn='From 50 if comorbidity/immunocompromised';}
     break;
   case 'pneumo':
     if(age!==null&&age>=60){level='general';noteDe='STIKO-Standard ab 60 J. (PCV20)';noteEn='STIKO standard from 60 (PCV20)';}
     else if(immunocompromised()||hasChronic()){level='general';noteDe='Indikation bei Grundkrankheit/Immunschwäche';noteEn='Indicated in comorbidity/immunocompromise';}
     break;
   case 'mpox':
     if((rl==='risk_based'||rl==='recommended')&&(ls||c.includes('health'))){level='useful';noteDe='Ausbruchsregion, enger Kontakt';noteEn='Outbreak region, close contact';}
     break;
   case 'dengue':{
     const had=EngineCtx.getVaxState().dengue.dengueHad;const endemic=(rl==='risk_based'||rl==='recommended');const done=doseNum(EngineCtx.getVaxState().dengue.done);
     if(done >= 1){level='strong';noteDe='Impfserie (2 Dosen) komplettieren';noteEn='Complete vaccination series (2 doses)';}
     else if(!had){level='none';noteDe='Nur nach durchgemachter Dengue-Infektion empfohlen';noteEn='Only recommended after prior dengue infection';}
     else if(endemic){level='strong';noteDe='Nach durchgemachter Dengue-Infektion bei Reise in Endemiegebiet empfohlen';noteEn='Recommended after prior dengue infection for travel to endemic area';}
     else{level='none';}
     break;}
   case 'chikungunya':
     if (rl === 'outbreak') {
         level = 'useful'; noteDe = 'Aktueller Ausbruch'; noteEn = 'Active outbreak';
     } else if (rl === 'risk_based' || rl === 'recommended') {
         level = 'general'; noteDe = 'Erhöhtes Hintergrundrisiko'; noteEn = 'Elevated background risk';
     }
     break;
   case 'varicella':
     let isWish = EngineCtx.getPregnant() === 'planned';
     if(isWish && age !== null && (age < 13 || age > 50)) isWish = false;
     
     if(c.includes('health') || isWish){level='strong';noteDe='Indiziert bei med. Personal oder Kinderwunsch im gebärfähigen Alter (falls ungeschützt)';noteEn='Indicated for medical staff or planned pregnancy in childbearing age (if unprotected)';}
     else{level='none';noteDe='Nur bei Risiko oder Kinderwunsch indiziert';noteEn='Only indicated with risk/planned pregnancy';}
     break;
  }
  return {level,mand,noteDe,noteEn};
}
function isProtected(v){
  const st=EngineCtx.getVaxState()[v.k];
  if(v.disease&&st.disease)return true;
  if(v.k==='mmr'&&(serMeasles()||(birthYear()!==null&&birthYear()<=1970)))return true;
  if(v.k==='varicella'&&serVZV())return true;
  const done=doseNum(st.done);const yrs=yearsSince(st.year);
  if(v.k==='influenza')return yrs!==null&&yrs<1;
  if(v.k==='covid')return yrs!==null&&yrs<1;
  if(v.k==='typhoid')return yrs!==null&&yrs<3;
  if(v.k==='yellowfever'){
    const yfDone=doseNum(st.done);
    if(yfDone>=2) return true; // ≥2 doses = lifelong (WHO/STIKO)
    if(yfDone===1 && yrs!==null && yrs<10) return true;
    return false;
  }
  if(v.k==='pneumo')return yrs!==null;
  if(v.k==='chikungunya')return yrs!==null;
  if(!done)return false;
  switch(v.k){
    case 'mmr':return done>=2;
    case 'jev':return (done>=3&&yrs!==null&&yrs<10)||(done>=2&&yrs!==null&&yrs<2);
    case 'rabies':return done>=2;
    case 'tbe':return done>=3&&yrs!==null&&yrs<5;
    case 'hpv':{
      if(done>=3)return true;
      if(done===2){
        const by=birthYear();const st=EngineCtx.getVaxState().hpv;
        if(by!==null&&st.year){
          const ageAtLast=parseInt(st.year,10)-by;
          return ageAtLast<=15;
        }
        return true;
      }
      return false;
    }
    case 'influenza':return yrs!==null&&yrs<1;
    case 'covid':return done>=1&&yrs!==null&&yrs<1;
    case 'zoster':return done>=2;
    case 'pneumo':return done>=1;
    case 'mpox':return done>=2;
    case 'dengue':return done>=2;
    case 'chikungunya':return done>=1;
    case 'menb':return done>=2;
    case 'cholera':return done>=2&&yrs!==null&&yrs<2;
    case 'varicella':return done>=2||serVZV();
  }
  return false;
}
// Bridge the app form/state into the pure EngineRules context object.
function buildCtx(){
  const ay = ageExact(EngineCtx.getDob());
  const ax = (ay==null) ? null : Math.round(ay*12);
  const vs = EngineCtx.getVaxState() || {};
  const anyChronic = (typeof hasChronic==='function' && hasChronic()) ||
                     (typeof immunocompromised==='function' && immunocompromised());
  return {
    ageMonths: ax,
    birthYear: birthYear(),
    destinations: EngineCtx.getDestinations() || [],
    conds: conds() || [],
    durIdx: durIndex(EngineCtx.getDuration()),
    pregnant: EngineCtx.getPregnant(),
    immuno: { high: (hasHighImmuno()||hasImmuneDef()), low: isLowGradeOnly(), def: hasImmuneDef() },
    anyChronic: anyChronic,
    vaxState: vs,
    serology: EngineCtx.getSerology() || {},
    dengueHad: !!(vs.dengue && vs.dengue.dengueHad),
    nowYear: new Date().getFullYear()
  };
}

// Table-driven assessment. Category from EngineRules; colour from the category map
// (Pflicht=red-strong, Dringend/Empfohlen=red, Generell=blue, Erwaegen=yellow,
// geschuetzt=green, nicht indiziert=grey). No violet.
function assess(v){
  const ctx = buildCtx();
  if(isProtected(v)) return {status:'green', category:'gesch\u00fctzt', mand:false, noteDe:'', noteEn:'', noteFr:''};
  if(v.k==='yellowfever'){
    const yfSt=EngineCtx.getVaxState()[v.k]||{};
    const yfDone=doseNum(yfSt.done);
    const yfYrs=yearsSince(yfSt.year);
    if(yfDone>=1 && yfYrs!==null && yfYrs>=10){
      return {status:'yellow', category:'Erw\u00e4gen', mand:false,
        noteDe:'WHO: Einmaldosis gilt als lebenslanger Schutz. STIKO empfiehlt Auffrischung nach 10 J. \u2013 erw\u00e4gen.',
        noteEn:'WHO: single dose considered lifelong. STIKO recommends booster after 10 yrs \u2014 consider.',
        noteFr:'OMS : une dose unique est consid\u00e9r\u00e9e comme une protection \u00e0 vie. La STIKO recommande un rappel apr\u00e8s 10 ans \u2013 \u00e0 envisager.'};
    }
  }
  const R = window.EngineRules;
  if(!R){ const b=baseLevel(v); return {status:(b.level==='strong'?'red':b.level==='general'?'blue':b.level==='consider'?'yellow':'grey'),mand:b.mand,noteDe:b.noteDe,noteEn:b.noteEn,noteFr:b.noteEn}; }
  const r = R.deriveCategory(v.k, ctx);
  const status = R.CATEGORY_COLOR[r.category] || 'grey';
  return {status:status, category:r.category, mand:(r.category==='Pflicht'), noteDe:r.de, noteEn:r.en, noteFr:r.fr};
}
function tdapPolioAssess(){
  const st = EngineCtx.getVaxState().tdap_polio;
  const cy = new Date().getFullYear();
  const preg = isPregnant();
  const age = ageExact(EngineCtx.getDob());
  const infant = age !== null && age < 5;
  const adult = age !== null && age >= 18;
  
  const y_td = st.y_td ? parseInt(st.y_td, 10) : null;
  const y_ap = st.y_ap ? parseInt(st.y_ap, 10) : null;
  const y_ipv = st.y_ipv ? parseInt(st.y_ipv, 10) : null;
  
  const yrs_td = y_td ? cy - y_td : null;
  const yrs_ap = y_ap ? cy - y_ap : null;
  const yrs_ipv = y_ipv ? cy - y_ipv : null;
  
  const d_hexa = st.doses_hexa === '>3' ? 4 : parseInt(st.doses_hexa || 0, 10);
  const gi_tdap = st.gi_tdap || d_hexa >= 3;
  const gi_ipv = st.gi_ipv || d_hexa >= 3;

  let T = 'grey', D = 'grey', aP = 'grey', IPV = 'grey';
  let unvaxxed = false, infantOngoing = false;
  let ipvNote = {de:'', en:'', fr:''};

  if (infant && !gi_tdap && d_hexa > 0) { infantOngoing = true; T='blue'; D='blue'; aP='blue'; IPV='blue'; }
  else if (!gi_tdap && d_hexa === 0 && !y_td && !y_ap && !y_ipv) { unvaxxed = true; T='red'; D='red'; aP='red'; IPV='red'; }
  else {
    if (!gi_tdap) { T='red'; D='red'; }
    else if (yrs_td !== null && yrs_td < 10) { T='green'; D='green'; }
    else { T='red'; D='red'; }
    
    if (!gi_tdap) { aP='red'; }
    else if (preg) { aP = (yrs_ap !== null && yrs_ap < 10) ? 'yellow' : 'red'; }
    else if (yrs_ap !== null && y_ap !== null) {
      const dob = new Date(EngineCtx.getDob()).getFullYear();
      if (adult && (y_ap >= dob + 18)) aP='green';
      else if (yrs_ap < 10) aP='green';
      else aP='blue';
    } else { aP='blue'; }

    const polioCat1 = ['AF','PK','DE','DZ','CD','DJ','IL','LA','CM','GN','TD'];
    const polioCat2 = ['AO','ET','BJ','BF','CI','YE','NA','NE','NG','PS','PG','PL','SN','SO','SD','SS','TZ','GB','CF'];
    const polioCat3 = ['EG','GQ','FI','GF','GM','GH','ID','KE','LR','ML','MR','MZ','SL','CG','ZW','ES','UG'];
    let isCat1 = false, isCat2 = false, isCat3 = false;
    EngineCtx.getDestinations().forEach(d => {
        if(polioCat1.includes(d)) isCat1 = true;
        else if(polioCat2.includes(d)) isCat2 = true;
        else if(polioCat3.includes(d)) isCat3 = true;
    });
    const risk = isCat1 || isCat2 || isCat3;
    const longM = longStay();

    if (!gi_ipv) { IPV = risk ? 'red' : 'blue'; ipvNote = risk ? {de:'Grundimmunisierung unvollständig – für Polio-Risikoland zwingend',en:'Primary series incomplete — mandatory for polio-risk country',fr:'Primovaccination incomplète – obligatoire pour un pays à risque de polio'} : {de:'Grundimmunisierung/Auffrischung nach STIKO',en:'Primary series/booster per STIKO',fr:'Primovaccination/rappel selon la STIKO'}; }
    else if (isCat1) {
      if (longM) { if (yrs_ipv !== null && yrs_ipv < 1) { IPV='green'; ipvNote={de:'Aktuell (Kat-1, ≥4 Wo: Impfung <12 Mon.)',en:'Current (cat 1, ≥4 wks stay: dose <12 mo)',fr:'À jour (cat. 1, ≥4 sem. : dose <12 mois)'}; } else { IPV='red'; ipvNote={de:'ZWINGEND: Aufenthalt ≥4 Wochen in Kat-1-Land – Impfung 4 Wo–12 Mon vor Ausreise!',en:'MANDATORY: ≥4 wks stay in cat 1 — dose 4 wks–12 mo before exit required',fr:'OBLIGATOIRE : séjour ≥4 semaines en pays cat. 1 – dose 4 sem.–12 mois avant le départ !'}; } }
      else { if (yrs_ipv !== null && yrs_ipv < 10) { IPV='green'; ipvNote={de:'Aktuell (Kat-1: letzte <10 J.)',en:'Current (cat 1: last <10 yrs)',fr:'À jour (cat. 1 : dernière <10 ans)'}; } else { IPV='red'; ipvNote={de:'Auffrischung nötig (Kat-1: letzte >10 J. / unbekannt)',en:'Booster needed (cat 1: last >10 yrs/unknown)',fr:'Rappel nécessaire (cat. 1 : dernière >10 ans / inconnue)'}; } }
    }
    else if (isCat2) {
      if (yrs_ipv !== null && yrs_ipv < 10) { IPV='green'; ipvNote={de:'Aktuell (Kat-2: letzte <10 J.)',en:'Current (cat 2: last <10 yrs)',fr:'À jour (cat. 2 : dernière <10 ans)'}; } else { IPV='red'; ipvNote={de:'Auffrischung empfohlen (Kat-2: letzte >10 J.)',en:'Booster recommended (cat 2: last >10 yrs)',fr:'Rappel recommandé (cat. 2 : dernière >10 ans)'}; }
    }
    else if (isCat3) {
      if (yrs_ipv !== null && yrs_ipv < 10) { IPV='green'; ipvNote={de:'Aktuell (Kat-3: letzte <10 J.)',en:'Current (cat 3: last <10 yrs)',fr:'À jour (cat. 3 : dernière <10 ans)'}; } else { IPV='yellow'; ipvNote={de:'Auffrischung erwägen (Kat-3: letzte >10 J.)',en:'Consider booster (cat 3: last >10 yrs)',fr:'Envisager un rappel (cat. 3 : dernière >10 ans)'}; }
    }
    else { IPV='green'; ipvNote={de:'Grundimmunisierung komplett: lebenslanger Schutz (STIKO)',en:'Primary series complete: lifelong protection (STIKO)',fr:'Primovaccination complète : protection à vie (STIKO)'}; }
  }

  return { T, D, aP, IPV, infantOngoing, unvaxxed, ipvNote };
}
function hepAssess(){
  const st=EngineCtx.getVaxState().hepatitis;const a=doseNum(st.aMono),b=doseNum(st.bMono),tw=doseNum(st.twin);
  const hexaB=EngineCtx.getVaxState().tdap_polio.doses_hexa === '>3' ? 4 : parseInt(EngineCtx.getVaxState().tdap_polio.doses_hexa || 0, 10);
  const ls=longStay();const c=conds();const age=ageExact(EngineCtx.getDob());const cy=new Date().getFullYear();
  const aYs=[];if(a>=1&&st.aYear)aYs.push(cy-parseInt(st.aYear,10));if(tw>=1&&st.twYear)aYs.push(cy-parseInt(st.twYear,10));
  const yrsA=aYs.length?Math.min(...aYs):null;
  let A,aNote;const aFull=(a>=2)||(tw>=2)||(a>=1&&tw>=1);
  if(aFull){ if(yrsA!==null&&yrsA>10){A='yellow';aNote={de:'Serie vollständig, aber letzte Dosis >10 J. – Auffrischung bei fortbestehender Exposition',en:'Series complete but last dose >10 yrs — booster if ongoing exposure'};} else {A='green';aNote={de:'Langzeitschutz (vollständige Serie)',en:'Long-term protection (complete series)'};} }
  else if(a===1){ if(yrsA!==null&&yrsA>1){A='yellow';aNote={de:'2. Dosis überfällig (Erstschutz ~1 Jahr)',en:'2nd dose overdue (initial ~1 yr)'};} else {A='green';aNote={de:'1 Dosis: ~1 Jahr Schutz; 2. Dosis für Langzeitschutz',en:'1 dose: ~1 yr; 2nd dose for long-term'};} }
  else if(tw===1){A='yellow';aNote={de:'1× Twinrix reicht für Hep A NICHT (halbe Antigenmenge) – Serie vervollständigen',en:'1× Twinrix insufficient for Hep A (half antigen) — complete series'};}
  else {
    const hepaR = getRisk('hepatitis_a');
    const destEndemic = hepaR ? (hepaR.level === 'recommended' || hepaR.level === 'risk_based' || hepaR.level === 'mandatory_all') : false;
    A=destEndemic?'red':'grey';aNote={de:destEndemic?'Für die meisten Reiseziele empfohlen':'',en:destEndemic?'Recommended for most destinations':''};
  }
  const bDoses=b+tw+hexaB;let B,bNote,bTier='';
  if(serHBs()){B='green';bTier='immune';bNote={de:'Immun – Anti-HBs ausreichend, keine weitere Impfung nötig',en:'Immune — anti-HBs sufficient, no further vaccination needed'};}
  else if(bDoses>=3){B='green';bTier='complete';bNote={de:'Grundimmunisierung komplett ('+bDoses+' Dosen; STIKO: keine Auffrischung bei Anti-HBs >100)',en:'Primary series complete ('+bDoses+' doses; STIKO: no booster if anti-HBs >100)'};}
  else if(bDoses>=1){B='yellow';bTier='incomplete';bNote={de:'Grundimmunisierung unvollständig ('+bDoses+' von 3 Dosen) – vervollständigen',en:'Primary series incomplete ('+bDoses+' of 3 doses) — complete it'};}
  else {
    // STIKO-orientierte Reise-Graduierung Hep B:
    //  – niedriges Risiko/Endemiegebiet → Erwägen
    //  – Hochprävalenzland, keine Risikogruppe → Empfohlen
    //  – Risikogruppe (chron. Erkrankung/Immunschwäche/berufl. Exposition) + Langzeit (>4 Wo) → Dringend empfohlen
    //  – ohne Reise-Risiko: STIKO-Standardimpfung (Grundimmunisierung nachholen)
    const hepbR = getRisk('hepatitis_b');
    const lvl = hepbR ? hepbR.level : 'none';
    const highRisk = (lvl==='recommended' || lvl==='mandatory_all');
    const someRisk = highRisk || lvl==='risk_based';
    const hbRiskGroup = (typeof hasChronic==='function'&&hasChronic()) || (typeof immunocompromised==='function'&&immunocompromised()) || c.includes('health') || c.includes('animal');
    if(someRisk && hbRiskGroup && ls){ B='red'; bTier='dringend'; bNote={de:'Dringend empfohlen: Risikogruppe + Langzeitaufenthalt (>4 Wochen)',en:'Strongly recommended: risk group + long stay (>4 weeks)'}; }
    else if(highRisk){ B='red'; bTier='empfohlen'; bNote={de:'Empfohlen: Hochprävalenz-/Hochrisikoland',en:'Recommended: high-prevalence / high-risk country'}; }
    else if(someRisk){ B='yellow'; bTier='erwaegen'; bNote={de:'Erwägen: Endemiegebiet mit niedrigem Risiko',en:'Consider: low-risk endemic area'}; }
    else { B='blue'; bTier='standard'; bNote={de:'STIKO-Standardimpfung – Grundimmunisierung empfohlen',en:'STIKO standard vaccination – complete primary series'}; }
  }
  const needA=(A!=='green'),needB=(B!=='green');const childForm=age!==null&&age<16;const infant=age!==null&&age<1;
  function form(kind){
    if(kind==='a')return childForm?(infant?'Havrix (Säugling – FI prüfen)':'Havrix 720 Kinder'):'Avaxim (Erw.)';
    if(kind==='b')return childForm?'Engerix-B Kinder':'Engerix-B Erwachsene';
    return childForm?(infant?'<1 J.: Einzelimpfstoffe':'Twinrix Kinder'):'Twinrix Erwachsene';
  }
  let rec=null;
  if(needA&&needB)rec={de:'→ Heute: '+form('ab')+' (Hep A+B)',en:'→ Today: '+form('ab')+' (Hep A+B)'};
  else if(needA)rec={de:'→ Heute: '+form('a')+' (Hep A)',en:'→ Today: '+form('a')+' (Hep A)'};
  else if(needB)rec={de:'→ Heute: '+form('b')+' (Hep B)',en:'→ Today: '+form('b')+' (Hep B)'};
  return {A,B,aNote,bNote,bTier,rec,childForm};
}
function hepTodayWarn(){
  const st=EngineCtx.getVaxState().hepatitis;const age=ageExact(EngineCtx.getDob());if(age===null)return null;
  const planned=(st.apptsA||[]).length||(st.apptsAB||[]).length;
  if(planned&&age<1)return {de:'Twinrix/Havrix Kinder erst ab 1 Jahr – bei <1 J. Hep B als Einzelimpfstoff.',en:'Twinrix/Havrix paediatric from 1 year — under 1 yr use monovalent Hep B.'};
  return null;
}
function menacwyAssess(){
  const st=EngineCtx.getVaxState().menacwy;const done=doseNum(st.done);const yrs=yearsSince(st.year);const age=ageExact(EngineCtx.getDob());const c=conds();
  let status,mand=false,note;
  const protectedNow=(st.type==='acwy'&&done>=1&&yrs!==null&&yrs<10);
  
  if(EngineCtx.getDestinations().includes('SA')){ if(protectedNow){status='green';note={de:'ACWY aktuell – Nachweis für Hajj/Umrah',en:'ACWY current — proof for Hajj/Umrah'};} else {status='red';mand=true;note={de:'ACWY Pflicht für Hajj/Umrah',en:'ACWY mandatory for Hajj/Umrah'};} }
  else {
    const menR = getRisk('meningitis');
    if(menR && (menR.level === 'recommended' || menR.level === 'risk_based')){
        const spans=staySpansDrySeason();
        const dm=departureMonth();
        const dry = spans===null ? (dm!==null&&[11,0,1,2,3,4,5].includes(dm)) : spans;
        if(dry) {
            status=protectedNow?'green':'red';
            note={de:'Meningitisgürtel – Reise fällt in die Epidemiesaison (Trockenzeit Dez–Jun, höchstes Risiko): dringend empfohlen.',en:'Meningitis belt — travel falls in the epidemic season (dry season Dec–Jun, highest risk): strongly recommended.'};
        } else {
            status=protectedNow?'green':'yellow';
            note={de:'Meningitisgürtel – nur erwogen: gesamter Aufenthalt außerhalb der Epidemiesaison (Trockenzeit Dez–Jun). In der Trockenzeit dringend empfohlen.',en:'Meningitis belt — optional only: entire stay outside the epidemic season (dry season Dec–Jun). Strongly recommended during the dry season.'};
        }
    }
    else if(st.type==='acwy'&&done>=1&&yrs!==null&&yrs>=10){status='grey';note={de:'Früher ACWY geimpft (>10 J.) – Auffrischung nur bei Reiseindikation nötig',en:'ACWY given >10 yrs ago — booster only needed with travel indication'};}
    else if(st.type==='c'){status='yellow';note={de:'Nur MenC dokumentiert – ACWY empfohlen',en:'Only MenC documented — ACWY recommended'};}
    else if(st.type==='poly'){status='yellow';note={de:'Alte Polysaccharid-Impfung – Konjugat (ACWY) empfohlen',en:'Old polysaccharide vaccine — conjugate (ACWY) recommended'};}
    else if(age!==null&&age>=12&&age<15){ status=protectedNow?'green':'blue';note={de:'STIKO: Standardimpfung 12–14 J.',en:'STIKO: standard 12–14 yrs'}; }
    else if(age!==null&&age>=15&&age<25){ status=protectedNow?'green':'blue';note={de:'STIKO: Nachholimpfung bis <25 J.',en:'STIKO: catch-up until <25 yrs'}; }
    else if(age!==null&&age<12){ status=protectedNow?'green':'yellow';note={de:'STIKO-Standard (ab 12 J.) – vorgezogene Impfung erwägen',en:'STIKO standard (from 12) — consider early vaccination'}; }
    else if(immunocompromised()){ status=protectedNow?'green':'yellow';note={de:'Indikation (Immundefizienz/Asplenie)',en:'Indication (immunodeficiency/asplenia)'}; }
    else{status=protectedNow?'green':'grey';note={de:'',en:''};}
  }
  return {status,noteDe:note.de,noteEn:note.en,mand};
}