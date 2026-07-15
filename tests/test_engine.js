// Mini Testing Framework
const tests = [];
function test(name, fn) {
  tests.push({ name, fn });
}

function expect(actual) {
  return {
    toEqual: (expected) => {
      if (actual !== expected) throw new Error(`Expected "${expected}", but got "${actual}"`);
    },
    toBe: (expected) => {
      if (actual !== expected) throw new Error(`Expected ${expected}, but got ${actual}`);
    }
  };
}

function getVax(k) {
  return window.VACCINES.find(v => v.k === k);
}

// Reset context before each test
function resetCtx(overrides = {}) {
  const defaultCtx = {
    dob: '1990-01-01', // 36 years old
    pregnant: 'no',
    duration: '2-4w',
    conds: [],
    destinations: ['TH'], // Thailand
    vaxState: {},
    medsList: [],
    chronicText: '',
    allergyText: '',
    departure: '2026-08-01',
    serology: {}
  };
  const ctx = { ...defaultCtx, ...overrides };
  
  // Override EngineCtx
  window.EngineCtx = {
    getDob: () => ctx.dob,
    getPregnant: () => ctx.pregnant,
    getDuration: () => ctx.duration,
    getConds: () => ctx.conds,
    getDestinations: () => ctx.destinations,
    getVaxState: () => {
      // Ensure all vaccines exist in state
      const state = {};
      window.VACCINES.forEach(v => state[v.k] = ctx.vaxState[v.k] || { done: '0' });
      return state;
    },
    getMedsList: () => ctx.medsList,
    getChronicText: () => ctx.chronicText,
    getAllergyText: () => ctx.allergyText,
    getDeparture: () => ctx.departure,
    getSerology: () => ctx.serology
  };
}

// ==========================================
// TEST SUITE
// ==========================================

test('Yellow Fever - Brazil (Endemic, Recommended)', () => {
  resetCtx({ destinations: ['BR'] });
  const res = assess(getVax('yellowfever'));
  expect(res.status).toBe('red'); // "strong" recommendation
});

test('Yellow Fever - Transit Mandatory (e.g. South Africa transit from risk zone)', () => {
  resetCtx({ destinations: ['BR', 'ZA'] });
  // Brazil is risk, ZA requires transit YF
  const res = assess(getVax('yellowfever'));
  expect(res.status).toBe('red');
});

test('Chikungunya - Outbreak (e.g. Bolivia)', () => {
  resetCtx({ destinations: ['BO'] });
  const res = assess(getVax('chikungunya'));
  expect(res.status).toBe('violet'); // "useful" / Erwägen or Aktueller Ausbruch
});

test('Chikungunya - Background Risk (e.g. Brazil)', () => {
  resetCtx({ destinations: ['BR'] });
  const res = assess(getVax('chikungunya'));
  expect(res.status).toBe('blue'); // "general"
});

test('TBE / FSME - Rural Exposure in Endemic Area (e.g. Austria/AT)', () => {
  resetCtx({ destinations: ['AT'], conds: ['rural'] });
  const res = assess(getVax('tbe'));
  expect(res.status).toBe('red'); // strong
});

test('TBE / FSME - Standard Risk (e.g. Austria without outdoor)', () => {
  resetCtx({ destinations: ['AT'] });
  const res = assess(getVax('tbe'));
  expect(res.status).toBe('blue'); // general
});

test('Typhoid - Endemic, Short stay, no risks (e.g. TH)', () => {
  resetCtx({ destinations: ['TH'], duration: '1-2w' });
  const res = assess(getVax('typhoid'));
  expect(res.status).toBe('violet'); // useful
});

test('Typhoid - Endemic, Rural (e.g. TH)', () => {
  resetCtx({ destinations: ['TH'], conds: ['rural'] });
  const res = assess(getVax('typhoid'));
  expect(res.status).toBe('red'); // strong
});

test('Rabies - Endemic, Rural/Animal (e.g. TH)', () => {
  resetCtx({ destinations: ['TH'], conds: ['animal'] });
  const res = assess(getVax('rabies'));
  expect(res.status).toBe('red'); // strong
});

test('Rabies - Endemic, Standard (e.g. TH)', () => {
  resetCtx({ destinations: ['TH'] });
  const res = assess(getVax('rabies'));
  expect(res.status).toBe('violet'); // useful
});

test('Meningitis ACWY - Meningitis Belt (e.g. Senegal/SN)', () => {
  resetCtx({ destinations: ['SN'] });
  const res = assess(getVax('menacwy'));
  expect(res.status).toBe('red'); // strong
});

test('Meningitis ACWY - Hajj (e.g. Saudi Arabia/SA)', () => {
  resetCtx({ destinations: ['SA'], conds: ['hajj'] });
  const res = assess(getVax('menacwy'));
  expect(res.status).toBe('red'); // strong (Mandatory)
});

test('Influenza - Age >= 60 (STIKO)', () => {
  resetCtx({ dob: '1950-01-01', destinations: ['US'] });
  const res = assess(getVax('influenza'));
  expect(res.status).toBe('blue'); // general STIKO
});

test('Shingrix - Age >= 60 (STIKO)', () => {
  resetCtx({ dob: '1950-01-01', destinations: ['US'] });
  const res = assess(getVax('zoster'));
  expect(res.status).toBe('blue'); // general STIKO
});

test('Varicella - Protected via serology', () => {
  resetCtx({ destinations: ['US'], serology: { vzv: true } });
  const res = assess(getVax('varicella'));
  expect(res.status).toBe('green'); // Protected
});

// ==========================================
// RUN TESTS
// ==========================================

async function runTests() {
  const resultsDiv = document.getElementById('results');
  const statsDiv = document.getElementById('stats');
  let passed = 0;
  let failed = 0;

  for (const t of tests) {
    const el = document.createElement('div');
    el.className = 'test-case';
    
    const header = document.createElement('div');
    header.className = 'test-header';
    header.innerHTML = `<span>${t.name}</span> <span class="status-indicator"></span>`;
    header.onclick = () => el.classList.toggle('open');
    
    const details = document.createElement('div');
    details.className = 'test-details';
    
    el.appendChild(header);
    el.appendChild(details);
    resultsDiv.appendChild(el);

    try {
      t.fn();
      passed++;
      header.classList.add('pass');
      header.querySelector('.status-indicator').innerHTML = '<span class="success">✓ PASS</span>';
      details.innerHTML = 'Test passed successfully.';
    } catch (e) {
      failed++;
      header.classList.add('fail');
      header.querySelector('.status-indicator').innerHTML = '<span class="error">✗ FAIL</span>';
      details.innerHTML = `<span class="error">${e.stack || e.message}</span>`;
      el.classList.add('open');
    }
  }

  statsDiv.innerHTML = `Tests: ${tests.length} | Passed: ${passed} | Failed: ${failed}`;
  if (failed === 0) {
    statsDiv.className = 'pass-all';
  } else {
    statsDiv.className = 'fail-some';
  }
}

// Run when DOM and scripts are fully loaded
window.addEventListener('load', () => {
  setTimeout(runTests, 100); // slight delay to ensure CBY etc are built
});
