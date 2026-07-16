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

// New category scheme (no violet): Pflicht=red-strong, Dringend/Empfohlen=red,
// Generell=blue, Erwägen=yellow, geschützt=green, nicht indiziert=grey.
test('Yellow Fever - Ghana (certificate required) = Pflicht/red-strong', () => {
  resetCtx({ destinations: ['GH'] });
  expect(assess(getVax('yellowfever')).status).toBe('red-strong');
});
test('Yellow Fever - Thailand (no risk) = nicht indiziert/grey', () => {
  resetCtx({ destinations: ['TH'] });
  expect(assess(getVax('yellowfever')).status).toBe('grey');
});
test('Rabies - Thailand alone = Erwägen/yellow (never Dringend without animal)', () => {
  resetCtx({ destinations: ['TH'] });
  expect(assess(getVax('rabies')).status).toBe('yellow');
});
test('Rabies - Thailand + animal contact = Dringend empfohlen/red', () => {
  resetCtx({ destinations: ['TH'], conds: ['animal'] });
  expect(assess(getVax('rabies')).status).toBe('red');
});
test('Typhoid - Thailand (high risk) = Empfohlen/red', () => {
  resetCtx({ destinations: ['TH'] });
  expect(assess(getVax('typhoid')).status).toBe('red');
});
test('JE - Thailand short/urban = Erwägen/yellow', () => {
  resetCtx({ destinations: ['TH'] });
  expect(assess(getVax('jev')).status).toBe('yellow');
});
test('TBE - Austria alone = Erwägen/yellow', () => {
  resetCtx({ destinations: ['AT'] });
  expect(assess(getVax('tbe')).status).toBe('yellow');
});
test('TBE - Austria + rural = Empfohlen/red', () => {
  resetCtx({ destinations: ['AT'], conds: ['rural'] });
  expect(assess(getVax('tbe')).status).toBe('red');
});
test('MMR - unvaccinated (born 2005) = Dringend empfohlen/red', () => {
  resetCtx({ dob: '2005-02-11', destinations: ['TH'] });
  expect(assess(getVax('mmr')).status).toBe('red');
});
test('MMR - 2 doses = geschützt/green', () => {
  resetCtx({ destinations: ['TH'], vaxState: { mmr: { done: '2' } } });
  expect(assess(getVax('mmr')).status).toBe('green');
});
test('Influenza - Age >= 60 (STIKO) = Generell/blue', () => {
  resetCtx({ dob: '1955-01-01', destinations: ['US'] });
  expect(assess(getVax('influenza')).status).toBe('blue');
});
test('Meningitis ACWY - Hajj (Saudi Arabia) = mandatory/red', () => {
  resetCtx({ destinations: ['SA'], conds: ['hajj'] });
  expect(menacwyAssess().status).toBe('red');
});
test('Varicella - Protected via serology = green', () => {
  resetCtx({ destinations: ['US'], serology: { vzv: true } });
  expect(assess(getVax('varicella')).status).toBe('green');
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
