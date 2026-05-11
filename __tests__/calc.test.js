'use strict';

const {
  toDays, fmt, addDays, fmtDate, diffDays,
  badge, dotCls, pct, calcFracoes, escapeHtml,
} = require('../lib/calc');

// ─── toDays ────────────────────────────────────────────────────────────────

describe('toDays', () => {
  test('converts years to days (1 year = 365 days)', () => {
    expect(toDays(1, 0, 0)).toBe(365);
  });

  test('converts months to days (1 month = 30 days)', () => {
    expect(toDays(0, 1, 0)).toBe(30);
  });

  test('adds years, months and days', () => {
    expect(toDays(1, 1, 1)).toBe(365 + 30 + 1); // 396
  });

  test('returns 0 when all inputs are zero', () => {
    expect(toDays(0, 0, 0)).toBe(0);
  });

  test('handles string inputs', () => {
    expect(toDays('2', '6', '15')).toBe(2 * 365 + 6 * 30 + 15);
  });

  test('handles undefined/empty inputs gracefully', () => {
    expect(toDays(undefined, undefined, undefined)).toBe(0);
  });
});

// ─── fmt ───────────────────────────────────────────────────────────────────

describe('fmt', () => {
  test('returns "0 dias" for zero or negative', () => {
    expect(fmt(0)).toBe('0 dias');
    expect(fmt(-5)).toBe('0 dias');
  });

  test('formats exactly 1 day', () => {
    expect(fmt(1)).toBe('1 dia');
  });

  test('formats plural days', () => {
    expect(fmt(2)).toBe('2 dias');
  });

  test('formats exactly 1 year', () => {
    expect(fmt(365)).toBe('1 ano');
  });

  test('formats plural years', () => {
    expect(fmt(730)).toBe('2 anos');
  });

  test('formats 1 month correctly (mês singular)', () => {
    expect(fmt(30)).toBe('1 mês');
  });

  test('formats plural months (meses)', () => {
    expect(fmt(60)).toBe('2 meses');
  });

  test('formats combined years, months and days', () => {
    expect(fmt(396)).toBe('1 ano, 1 mês, 1 dia');
  });

  test('formats combined years and months without days', () => {
    expect(fmt(395)).toBe('1 ano, 1 mês');
  });

  test('formats years and days without months', () => {
    expect(fmt(366)).toBe('1 ano, 1 dia');
  });
});

// ─── diffDays ──────────────────────────────────────────────────────────────

describe('diffDays', () => {
  test('returns 0 for same date', () => {
    const d = new Date('2024-01-01T12:00:00');
    expect(diffDays(d, d)).toBe(0);
  });

  test('returns 1 for consecutive days', () => {
    const d1 = new Date('2024-01-01T12:00:00');
    const d2 = new Date('2024-01-02T12:00:00');
    expect(diffDays(d1, d2)).toBe(1);
  });

  test('returns negative value when d2 is before d1', () => {
    const d1 = new Date('2024-01-02T12:00:00');
    const d2 = new Date('2024-01-01T12:00:00');
    expect(diffDays(d1, d2)).toBe(-1);
  });

  test('returns 365 for one year apart (non-leap)', () => {
    const d1 = new Date('2023-01-01T12:00:00');
    const d2 = new Date('2024-01-01T12:00:00');
    expect(diffDays(d1, d2)).toBe(365);
  });
});

// ─── addDays ───────────────────────────────────────────────────────────────

describe('addDays', () => {
  test('returns null for empty string', () => {
    expect(addDays('', 10)).toBeNull();
  });

  test('adds days to a date string', () => {
    const result = addDays('2024-01-01', 30);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0); // January
    expect(result.getDate()).toBe(31);
  });

  test('carries over to next month', () => {
    const result = addDays('2024-01-31', 1);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getDate()).toBe(1);
  });
});

// ─── escapeHtml ────────────────────────────────────────────────────────────

describe('escapeHtml', () => {
  test('escapes ampersand', () => {
    expect(escapeHtml('a & b')).toBe('a &amp; b');
  });

  test('escapes less-than', () => {
    expect(escapeHtml('<script>')).toBe('&lt;script&gt;');
  });

  test('escapes double quote', () => {
    expect(escapeHtml('"quoted"')).toBe('&quot;quoted&quot;');
  });

  test('leaves plain text untouched', () => {
    expect(escapeHtml('João da Silva')).toBe('João da Silva');
  });

  test('coerces non-string input to string', () => {
    expect(escapeHtml(42)).toBe('42');
  });
});

// ─── pct ───────────────────────────────────────────────────────────────────

describe('pct', () => {
  test('returns "—" for falsy value', () => {
    expect(pct(0)).toBe('—');
    expect(pct(null)).toBe('—');
  });

  test('maps 1/6 to "1/6"', () => {
    expect(pct(1 / 6)).toBe('1/6');
  });

  test('maps 1/3 to "1/3"', () => {
    expect(pct(1 / 3)).toBe('1/3');
  });

  test('maps 2/5 to "2/5"', () => {
    expect(pct(2 / 5)).toBe('2/5');
  });

  test('maps 2/3 to "2/3"', () => {
    expect(pct(2 / 3)).toBe('2/3');
  });

  test('maps 3/5 to "3/5"', () => {
    expect(pct(3 / 5)).toBe('3/5');
  });
});

// ─── calcFracoes ───────────────────────────────────────────────────────────

describe('calcFracoes – pre-Anticrime (before 2020-01-23)', () => {
  const dtPre = '2019-01-01';

  test('cv0/primário: 1/6 progression, 1/3 LC', () => {
    const r = calcFracoes('cv0', 'P', dtPre);
    expect(r.lei).toBe('pre');
    expect(r.fp1).toBeCloseTo(1 / 6);
    expect(r.fp2).toBeCloseTo(1 / 6);
    expect(r.flc).toBeCloseTo(1 / 3);
    expect(r.lcVed).toBe(false);
  });

  test('cv1/primário: 1/6 progression, 1/3 LC', () => {
    const r = calcFracoes('cv1', 'P', dtPre);
    expect(r.fp1).toBeCloseTo(1 / 6);
    expect(r.flc).toBeCloseTo(1 / 3);
  });

  test('hed/primário: 2/5 progression, 2/3 LC', () => {
    const r = calcFracoes('hed', 'P', dtPre);
    expect(r.fp1).toBeCloseTo(2 / 5);
    expect(r.flc).toBeCloseTo(2 / 3);
    expect(r.lcVed).toBe(false);
  });

  test('hed/reincidente: 2/5 progression, 2/3 LC (hediondo nature takes priority)', () => {
    const r = calcFracoes('hed', 'RC', dtPre);
    expect(r.fp1).toBeCloseTo(2 / 5);
    expect(r.flc).toBeCloseTo(2 / 3);
  });

  test('hed/reincidente hediondo (RH): 3/5 progression, LC vedado', () => {
    const r = calcFracoes('hed', 'RH', dtPre);
    expect(r.fp1).toBeCloseTo(3 / 5);
    expect(r.lcVed).toBe(true);
  });

  test('cv0/reincidente: 1/6 progression, 1/2 LC', () => {
    const r = calcFracoes('cv0', 'RC', dtPre);
    expect(r.fp1).toBeCloseTo(1 / 6);
    expect(r.flc).toBeCloseTo(1 / 2);
  });
});

describe('calcFracoes – post-Anticrime (2020-01-23 or later)', () => {
  const dtPos = '2021-06-15';

  test('cv0/primário: 16% progression, 1/3 LC', () => {
    const r = calcFracoes('cv0', 'P', dtPos);
    expect(r.lei).toBe('pos');
    expect(r.fp1).toBeCloseTo(0.16);
    expect(r.flc).toBeCloseTo(1 / 3);
    expect(r.lcVed).toBe(false);
  });

  test('cv0/reincidente: 20% progression, 1/2 LC', () => {
    const r = calcFracoes('cv0', 'RC', dtPos);
    expect(r.fp1).toBeCloseTo(0.20);
    expect(r.flc).toBeCloseTo(1 / 2);
  });

  test('cv1/primário: 25% progression, 1/3 LC', () => {
    const r = calcFracoes('cv1', 'P', dtPos);
    expect(r.fp1).toBeCloseTo(0.25);
    expect(r.flc).toBeCloseTo(1 / 3);
  });

  test('hed/primário: 40% progression, 2/3 LC', () => {
    const r = calcFracoes('hed', 'P', dtPos);
    expect(r.fp1).toBeCloseTo(0.40);
    expect(r.flc).toBeCloseTo(2 / 3);
    expect(r.lcVed).toBe(false);
  });

  test('hed/reincidente: 60% progression, 2/3 LC (hediondo nature takes priority)', () => {
    const r = calcFracoes('hed', 'RC', dtPos);
    expect(r.fp1).toBeCloseTo(0.60);
    expect(r.flc).toBeCloseTo(2 / 3);
  });

  test('hmo/primário: 50% progression, LC vedado', () => {
    const r = calcFracoes('hmo', 'P', dtPos);
    expect(r.fp1).toBeCloseTo(0.50);
    expect(r.lcVed).toBe(true);
  });

  test('hmo/reincidente: 70% progression, LC vedado', () => {
    const r = calcFracoes('hmo', 'RC', dtPos);
    expect(r.fp1).toBeCloseTo(0.70);
    expect(r.lcVed).toBe(true);
  });

  test('org/primário: 50% progression, 2/3 LC', () => {
    const r = calcFracoes('org', 'P', dtPos);
    expect(r.fp1).toBeCloseTo(0.50);
    expect(r.flc).toBeCloseTo(2 / 3);
  });

  test('any/RH: LC always vedado', () => {
    const r = calcFracoes('cv0', 'RH', dtPos);
    expect(r.lcVed).toBe(true);
  });
});

describe('calcFracoes – no date defaults to post-Anticrime', () => {
  test('null date uses post-Anticrime frações', () => {
    const r = calcFracoes('cv0', 'P', null);
    expect(r.lei).toBe('pos');
    expect(r.fp1).toBeCloseTo(0.16);
  });

  test('empty string date uses post-Anticrime frações', () => {
    const r = calcFracoes('cv0', 'P', '');
    expect(r.lei).toBe('pos');
  });
});

// ─── badge ─────────────────────────────────────────────────────────────────

describe('badge', () => {
  test('returns VEDADO badge when vedado=true regardless of date', () => {
    const future = new Date(Date.now() + 1000 * 86400 * 365);
    expect(badge(future, true)).toContain('VEDADO');
  });

  test('returns empty string for null date (not vedado)', () => {
    expect(badge(null, false)).toBe('');
  });

  test('returns VENCIDO for past date', () => {
    const past = new Date(Date.now() - 1000 * 86400 * 10);
    expect(badge(past, false)).toContain('VENCIDO');
  });

  test('returns PRÓXIMO for date within 180 days', () => {
    const soon = new Date(Date.now() + 1000 * 86400 * 90);
    expect(badge(soon, false)).toContain('PRÓXIMO');
  });

  test('returns FUTURO for date beyond 180 days', () => {
    const far = new Date(Date.now() + 1000 * 86400 * 400);
    expect(badge(far, false)).toContain('FUTURO');
  });
});

// ─── dotCls ────────────────────────────────────────────────────────────────

describe('dotCls', () => {
  test('returns "blocked" when vedado', () => {
    expect(dotCls(new Date(), true)).toBe('blocked');
  });

  test('returns "blocked" for null date', () => {
    expect(dotCls(null, false)).toBe('blocked');
  });

  test('returns "past" for past date', () => {
    const past = new Date(Date.now() - 1000 * 86400 * 10);
    expect(dotCls(past, false)).toBe('past');
  });

  test('returns "soon" for date within 180 days', () => {
    const soon = new Date(Date.now() + 1000 * 86400 * 90);
    expect(dotCls(soon, false)).toBe('soon');
  });

  test('returns "future" for date beyond 180 days', () => {
    const far = new Date(Date.now() + 1000 * 86400 * 400);
    expect(dotCls(far, false)).toBe('future');
  });
});
