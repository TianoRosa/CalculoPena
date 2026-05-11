'use strict';

const CUTOFF = new Date('2020-01-23T12:00:00');

function toDays(a, m, d) {
  return (parseInt(a) || 0) * 365 + (parseInt(m) || 0) * 30 + (parseInt(d) || 0);
}

function fmt(totalDias) {
  if (totalDias <= 0) return '0 dias';
  const a = Math.floor(totalDias / 365);
  const r = totalDias % 365;
  const m = Math.floor(r / 30);
  const d = r % 30;
  const p = [];
  if (a) p.push(`${a} ano${a > 1 ? 's' : ''}`);
  if (m) p.push(`${m} ${m > 1 ? 'meses' : 'mês'}`);
  if (d || !p.length) p.push(`${d} dia${d !== 1 ? 's' : ''}`);
  return p.join(', ');
}

function addDays(dtStr, n) {
  if (!dtStr) return null;
  const d = new Date(dtStr + 'T12:00:00');
  d.setDate(d.getDate() + Math.round(n));
  return d;
}

function fmtDate(d) {
  if (!d) return '—';
  return d.toLocaleDateString('pt-BR');
}

function diffDays(d1, d2) {
  return Math.floor((d2 - d1) / 86400000);
}

function badge(dt, vedado) {
  if (vedado) return '<span class="badge badge-no">VEDADO</span>';
  if (!dt) return '';
  const df = diffDays(new Date(), dt);
  if (df < 0) return '<span class="badge badge-ok">✓ VENCIDO</span>';
  if (df < 180) return '<span class="badge badge-soon">⚑ PRÓXIMO</span>';
  return '<span class="badge badge-future">◷ FUTURO</span>';
}

function dotCls(dt, vedado) {
  if (vedado || !dt) return 'blocked';
  const df = diffDays(new Date(), dt);
  if (df < 0) return 'past';
  if (df < 180) return 'soon';
  return 'future';
}

function pct(f) {
  if (!f) return '—';
  const v = Math.round(f * 1000) / 10;
  const map = {
    16.7: '1/6', 16: '16%', 20: '1/5', 25: '1/4',
    30: '3/10', 33.3: '1/3', 40: '2/5', 50: '1/2',
    60: '3/5', 66.7: '2/3', 70: '7/10',
  };
  return map[v] || v + '%';
}

/**
 * Determines applicable fractions (progressão, livramento condicional, extinção)
 * based on crime nature, reinsertion category, and date of incident.
 *
 * @param {string} nat  - Crime nature: 'cv0' | 'cv1' | 'hed' | 'hmo' | 'org'
 * @param {string} rein - Reinsertion: 'P' (primário) | 'RC' (reincidente) | 'RH' (reincidente hediondo)
 * @param {string|null} dtFato - Incident date as 'YYYY-MM-DD', or null
 * @returns {{ fp1: number, fp2: number, flc: number|null, lcVed: boolean, lei: 'pre'|'pos' }}
 */
function calcFracoes(nat, rein, dtFato) {
  const fato = dtFato ? new Date(dtFato + 'T12:00:00') : null;
  const pre = fato && fato < CUTOFF;
  let fp1, fp2, flc, lcVed = false;

  if (pre) {
    if (nat === 'cv0' || nat === 'cv1') {
      fp1 = fp2 = 1 / 6;
    } else {
      fp1 = fp2 = rein === 'RH' ? 3 / 5 : 2 / 5;
    }
    if (rein === 'RH') { lcVed = true; }
    else if (nat === 'hed' || nat === 'hmo' || nat === 'org') { flc = 2 / 3; }
    else if (rein === 'RC') { flc = 1 / 2; }
    else { flc = 1 / 3; }
  } else {
    const P = rein === 'P';
    switch (nat) {
      case 'cv0': fp1 = fp2 = P ? 0.16 : 0.20; break;
      case 'cv1': fp1 = fp2 = P ? 0.25 : 0.30; break;
      case 'hed': fp1 = fp2 = P ? 0.40 : 0.60; break;
      case 'hmo': fp1 = fp2 = P ? 0.50 : 0.70; lcVed = true; break;
      case 'org': fp1 = fp2 = 0.50; break;
    }
    if (rein === 'RH') { lcVed = true; }
    else if (nat === 'hmo') { lcVed = true; }
    else if (nat === 'hed' || nat === 'org') { flc = 2 / 3; }
    else if (rein === 'RC') { flc = 1 / 2; }
    else { flc = 1 / 3; }
  }

  return { fp1, fp2, flc, lcVed, lei: pre ? 'pre' : 'pos' };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = { CUTOFF, toDays, fmt, addDays, fmtDate, diffDays, badge, dotCls, pct, calcFracoes, escapeHtml };
