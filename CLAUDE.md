# CalculoPena – Codebase Guide

Brazilian criminal-sentencing calculator for Rosa Advogados (OAB/RS 78.652).

## Architecture

| Path | Purpose |
|------|---------|
| `index.html` | Self-contained single-file web application (HTML + CSS + JS) |
| `lib/calc.js` | Pure calculation functions extracted for testing (CommonJS) |
| `__tests__/calc.test.js` | Jest unit tests for all pure functions |
| `package.json` | Dev dependencies and test script |

`index.html` is intentionally self-contained (no build step, no server required). All logic is duplicated inline so the file can be opened directly in a browser. `lib/calc.js` is the canonical source for the pure functions and is kept in sync manually.

## Running Tests

```bash
npm install
npm test          # runs Jest with coverage
npx jest          # without coverage
```

## Key Legal Concepts

| Term | Meaning |
|------|---------|
| Pena bruta | Total sentence before adjustments |
| Detração (art. 42 CP) | Deduction for pre-trial detention |
| Remição (arts. 126–128 LEP) | Sentence reduction by work/study |
| Progressão de regime | Regime progression (Closed → Semi-open → Open) |
| Livramento condicional (art. 83 CP) | Conditional release |
| Extinção da pena | Full sentence served |
| Falta grave | Serious disciplinary fault; adds days back |
| CUTOFF (2020-01-23) | Effective date of Lei 13.964/2019 (Pacote Anticrime) |

## Core Functions (`lib/calc.js`)

### `calcFracoes(nat, rein, dtFato)` — main business logic

Determines the applicable fractions based on crime nature (`nat`), reinsertion category (`rein`), and incident date (`dtFato`).

**`nat` values:**
- `cv0` — common violent crime without death
- `cv1` — common violent crime with death
- `hed` — hediondo crime without death (Lei 8.072/90)
- `hmo` — hediondo crime with homicide
- `org` — organized crime (Lei 12.850/13)

**`rein` values:**
- `P` — primário (no prior convictions)
- `RC` — reincidente common
- `RH` — reincidente em crime hediondo (always blocks LC)

**Law version:** if `dtFato` is before 2020-01-23 (or absent, defaults to post), the pre-Anticrime LEP fractions apply.

Returns `{ fp1, fp2, flc, lcVed, lei }`:
- `fp1` / `fp2` — 1st and 2nd progression fractions
- `flc` — conditional release fraction (null when blocked)
- `lcVed` — true when livramento condicional is legally prohibited
- `lei` — `'pre'` or `'pos'` (law version applied)

### Other pure functions

| Function | Description |
|----------|-------------|
| `toDays(a, m, d)` | Convert years/months/days to total days (1y=365d, 1m=30d) |
| `fmt(days)` | Format days to pt-BR string ("1 ano, 2 meses, 3 dias") |
| `addDays(dtStr, n)` | Add `n` days to a `'YYYY-MM-DD'` string; returns `Date` |
| `fmtDate(d)` | Format `Date` to pt-BR locale string |
| `diffDays(d1, d2)` | Integer day difference between two `Date` objects |
| `badge(dt, vedado)` | HTML badge: VENCIDO / PRÓXIMO / FUTURO / VEDADO |
| `dotCls(dt, vedado)` | CSS class for timeline dot: past / soon / future / blocked |
| `pct(f)` | Format fraction as human-readable string ("1/6", "2/5", etc.) |
| `escapeHtml(s)` | Escape `&`, `<`, `>`, `"` before inserting into innerHTML |

## UI Functions (inline in `index.html` only)

| Function | Description |
|----------|-------------|
| `calc()` | Master calculation; reads form inputs, computes all dates, renders report to `#r-content` |
| `renderTimeline(params)` | Generates the visual execution timeline HTML |
| `addPena()` / `addFalta()` | Append concurrent crime / serious fault input cards |
| `rmEl(id)` | Remove an input card and recalculate |
| `totalPenaDias()` | Sum all sentence days from current crime cards |
| `totalFaltaDias()` | Sum all fault days from current fault cards |
| `resetAll()` | Clear all inputs and hide the report |

## Art. 75 CP Cap

If `dtFato` is before 2020-01-23, the maximum sentence is **30 years**; otherwise it is **40 years**. `calc()` applies this cap to `penaFinal` before computing benefit dates.

## Editing Guidelines

- Keep `index.html` self-contained. Do not add external script tags or build steps.
- When changing pure function logic in `index.html`, mirror the same change in `lib/calc.js` and update the tests.
- `toDays` uses 365 days/year and 30 days/month (not calendar arithmetic) — this is intentional per LEP practice.
- Dates are constructed as `'YYYY-MM-DD' + 'T12:00:00'` to avoid UTC midnight timezone shift issues.
