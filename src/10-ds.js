// ===== GoFarm design system helpers: every screen is built from these =====
const IC = {
 home:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
 grid:"M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z",
 bag:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0",
 repeat:"M17 1l4 4-4 4 M3 11V9a4 4 0 0 1 4-4h14 M7 23l-4-4 4-4 M21 13v2a4 4 0 0 1-4 4H3",
 menu:"M3 12h18 M3 6h18 M3 18h18",
 orders:"M9 3h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V4a1 1 0 0 1 1-1zM9 12h6M9 16h6",
 people:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
 user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
 truck:"M1 3h15v13H1z M16 8h4l3 3v5h-7z M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
 box:"M16.5 9.4l-9-5.19 M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.3 7l8.7 5 8.7-5 M12 22V12",
 calendar:"M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3 10h18M8 3v4M16 3v4",
 card:"M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z M1 10h22",
 wallet:"M3 7a2 2 0 0 1 2-2h14v4 M3 7v11a2 2 0 0 0 2 2h16V9H5a2 2 0 0 1-2-2z M17 14.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z",
 invoice:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
 plane:"M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z",
 lock:"M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z M7 11V7a5 5 0 0 1 10 0v4",
 plus:"M12 5v14 M5 12h14", minus:"M5 12h14",
 search:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.3-4.3",
 chevron:"M9 18l6-6-6-6", down:"M6 9l6 6 6-6",
 close:"M18 6L6 18 M6 6l12 12",
 gear:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z",
 globe:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
 logout:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
 chat:"M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z",
 phone:"M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
 history:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2",
 sun:"M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 1v2 M12 21v2 M4.2 4.2l1.4 1.4 M18.4 18.4l1.4 1.4 M1 12h2 M21 12h2 M4.2 19.8l1.4-1.4 M18.4 5.6l1.4-1.4",
 bell:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0",
 check:"M20 6L9 17l-5-5",
 ok:"M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3",
 xc:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M15 9l-6 6 M9 9l6 6",
 camera:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
 pin:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
 alert:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01",
 download:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
 share:"M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8.59 13.51l6.83 3.98 M15.41 6.51l-6.82 3.98",
 edit:"M12 20h9 M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
 trash:"M3 6h18 M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6 M10 11v6 M14 11v6 M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2",
 filter:"M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
 qr:"M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h3v3h-3z M20 14v3 M14 20h3 M20 20h1",
 back:"M19 12H5 M12 19l-7-7 7-7",
 more:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
 drop:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
 wifioff:"M1 1l22 22 M16.72 11.06A10.94 10.94 0 0 1 19 12.55 M5 12.55a10.94 10.94 0 0 1 5.17-2.39 M10.71 5.05A16 16 0 0 1 22.58 9 M1.42 9a15.91 15.91 0 0 1 4.7-2.88 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01",
 nav:"M3 11l19-9-9 19-2-8-8-2z",
 chart:"M3 3v18h18 M7 15l4-4 3 3 5-6",
 star:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
 swap:"M16 3l4 4-4 4 M20 7H4 M8 21l-4-4 4-4 M4 17h16",
 shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
 clock:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2",
};
const ic = (n, s = 24, c = 'currentColor') => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${IC[n] || IC.drop}"/></svg>`;
const go = (g) => g ? ` data-go="${g}"` : '';
// buttons, pills, chips
const btn = (l, st = 'primary', g, ex = '') => `<div class="btn ${st}"${go(g)} ${ex}>${l}</div>`;
const pill = (l, t = '') => `<span class="pill ${t}">${l}</span>`;
const chip = (l, on, g) => `<span class="chip${on ? ' on' : ''}"${go(g)}>${l}</span>`;
const chips = (arr, on) => `<div class="chips">${arr.map((x, i) => chip(x, i === on)).join('')}</div>`;
// inputs
const fld = (l, v = '', st = '', icon) => `<div class="fld ${st}"><label>${l}</label><div class="${v ? '' : 'ph'}">${icon ? ic(icon, 18, '#6A7885') : ''}<span class="f1">${v || 'Type here'}</span></div>${st === 'err' ? '<em>This does not look right.</em>' : ''}</div>`;
const sel = (l, v) => `<div class="fld"><label>${l}</label><div><span class="f1">${v}</span>${ic('down', 18, '#6A7885')}</div></div>`;
// containers
const card = (inner, cls = '', g) => `<div class="card ${cls}"${go(g)}>${inner}</div>`;
const lc = (title, sub, icon = 'invoice', g, trail, tone = '') => `<div class="lc"${go(g)}><span class="ib ${tone}">${ic(icon, 22)}</span><div class="col f1"><b>${title}</b><small>${sub || ''}</small></div>${trail !== undefined ? trail : ic('chevron', 22, '#6A7885')}</div>`;
const pc = (name, detail, price, g, tag) => `<div class="pc"${go(g)}><span class="im">${ic('drop', 32)}</span><div class="col f1"><b>${name}</b><small>${detail}</small><span class="pr">${price}</span></div>${tag || '<span class="go">View</span>'}</div>`;
const pcImg = (name, detail, price, g, img) => `<div class="pc"${go(g)}><span class="im photo"><img src="${img}" alt="${name}"></span><div class="col f1"><b>${name}</b><small>${detail}</small><span class="pr">${price}</span></div><span class="go">View</span></div>`;
const bannerPics = (t, s, cta, g) => `<div class="banner pics"${go(g)}><b>${t}</b><span>${s}</span>${cta ? `<i>${cta}</i>` : ''}<img class="ph1" src="${IMG.ghee}" alt="GoFarm Gir cow ghee"><img class="ph2" src="${IMG.milk}" alt="GoFarm cow milk"></div>`;
const stat = (l, v, h, cls = '', g) => `<div class="stat ${cls}"${go(g)}><small>${l}</small><b class="num">${v}</b><span>${h || ''}</span></div>`;
const al = (tone, t, m, icon) => `<div class="al ${tone}">${ic(icon || (tone === 'warn' ? 'alert' : tone === 'locked' ? 'lock' : 'bell'), 24)}<div><b>${t}</b><span>${m}</span></div></div>`;
const banner = (t, s, cta, g) => `<div class="banner"${go(g)}><b>${t}</b><span>${s}</span>${cta ? `<i>${cta}</i>` : ''}</div>`;
const dots = (n = 3, on = 0) => `<div class="dots">${Array.from({ length: n }, (_, i) => `<i class="${i === on ? 'on' : ''}"></i>`).join('')}</div>`;
const stepper = (n) => `<div class="stp"><i>${ic('minus', 22)}</i><b>${n}</b><i class="pl">${ic('plus', 22, '#fff')}</i></div>`;
const sec = (t, link, g) => `<div class="sec"><b>${t}</b>${link ? `<span${go(g)}>${link}</span>` : ''}</div>`;
const kv = (a, b, cls = '') => `<div class="kv"><span>${a}</span><b class="${cls}">${b}</b></div>`;
const hr = () => '<div class="hr"></div>';
const circ = (icon, tone = '', s = 44) => `<div class="circ ${tone}">${ic(icon, s)}</div>`;
const tog = (on) => `<span class="tog${on ? ' on' : ''}"></span>`;
const cb = (on) => `<span class="cb${on ? ' on' : ''}">${on ? ic('check', 14, '#fff') : ''}</span>`;
const rad = (on) => `<span class="rad${on ? ' on' : ''}"></span>`;
const avatar = (n) => `<span class="avatar">${n.split(' ').map(x => x[0]).slice(0, 2).join('')}</span>`;
const grow = () => '<div class="grow"></div>';
const prog = (p) => `<div class="prog"><i style="width:${p}%"></i></div>`;
const wm = (s = 44) => `<img class="logoimg" src="${IMG.logo}" alt="GoFarm" style="width:${Math.round(s*3.6)}px">`;
const hero = (inner) => `<div class="hero">${inner}</div>`;
const row = (inner, cls = '') => `<div class="row ${cls}">${inner}</div>`;
const col = (inner, cls = '') => `<div class="col ${cls}">${inner}</div>`;
const g2 = (a, b) => `<div class="grid2">${a}${b}</div>`;
const tbl = (head, rows) => `<div class="tbl"><div class="r h">${head.map((h, i) => `<span class="${i === 0 ? 'c1' : 'cw'}">${h}</span>`).join('')}</div>${rows.map(r => `<div class="r">${r.map((x, i) => `<span class="${i === 0 ? 'c1' : 'cw num'}">${x}</span>`).join('')}</div>`).join('')}</div>`;
// screens
const TABSETS = {
  cus: [['home', 'Home', 'cus-home'], ['grid', 'Products', 'cus-products'], ['bag', 'Orders', 'cus-calendar'], ['repeat', 'Plans', 'cus-plans'], ['menu', 'Menu', 'cus-menu']],
  own: [['home', 'Home', 'own-home'], ['people', 'Customers', 'own-customers'], ['box', 'Stock', 'own-stockhub'], ['invoice', 'Billing', 'own-bills'], ['menu', 'Menu', 'own-menu']],
  mgr: [['home', 'Home', 'own-home'], ['people', 'Customers', 'own-customers'], ['truck', 'Boys', 'own-boys'], ['invoice', 'Billing', 'own-bills'], ['menu', 'Menu', 'own-menu']],
  del: [['truck', 'Today', 'del-today'], ['box', 'Stock', 'del-loadout'], ['history', 'Records', 'del-records'], ['user', 'Account', 'del-account']],
};
const tabbar = (set, on) => `<div class="tb">${TABSETS[set].map(([i, l, g]) => `<div class="${l === on ? 'on' : ''}"${go(g)}>${ic(i, 24)}${l}</div>`).join('')}</div>`;
const sbar = () => '<div class="sb"><span>9:41</span><i><s></s><u></u></i></div>';
function screen(o) {
  const ab = o.title ? `<div class="ab"><span${go(o.back)}>${ic('back', 24)}</span><h2>${o.title}</h2>${o.bell === false ? '' : ic('bell', 24)}${o.action || ''}</div>` : '';
  const dim = o.sheet ? `<div class="dim"></div><div class="sheet">${o.sheet}</div>` : '';
  return `<div class="gf${o.plain ? ' plain' : ''}${o.hb ? ' herob' : ''}">${sbar()}${ab}${o.offline ? `<div class="off">${ic('wifioff', 16)}${o.offline}</div>` : ''}<div class="bd ${o.cls || ''}">${o.body || ''}</div>${o.tab ? tabbar(o.tab[0], o.tab[1]) : ''}${o.fab ? `<div class="fab"${go(o.fab)}>${ic('plus', 26, '#fff')}</div>` : ''}${o.stick ? `<div class="stickb">${o.stick}</div>` : ''}${dim}</div>`;
}
// desktop dashboard frame
const WEBNAV = [['chart', 'Purchase vs sales'], ['truck', 'Purchases by vendor'], ['invoice', 'Billing summary'], ['clock', 'Dues ageing'], ['wallet', 'Payment register'], ['drop', 'Wastage'], ['shield', 'Reconciliation'], ['people', 'Attendance'], ['user', 'Customer movement']];
const STOCKNAV = [['box', 'Stock overview'], ['truck', 'Record purchase'], ['chart', 'Demand sheet'], ['pin', 'Region allocation'], ['trash', 'Record wastage'], ['shield', 'Day-end approval']];
const FILT = (extra = []) => `<div class="fl"><div class="fchip">${ic('calendar', 16)}<small>Dates</small>1 Oct to 31 Oct 2026${ic('down', 14)}</div><div class="fchip"><small>Region</small>All regions${ic('down', 14)}</div><div class="fchip"><small>Product</small>All products${ic('down', 14)}</div>${extra.join('')}<span class="f1"></span><div class="exp"><div class="f">Export Excel</div><div>Export PDF</div></div></div>`;
function web(active, title, content, filt) {
  const nv = (arr) => arr.map(([i, l]) => `<div class="nv${l === active ? ' on' : ''}">${ic(i, 18)}${l}</div>`).join('');
  return `<div class="gf web"><div class="side"><div class="logochip"><img class="logoimg" src="${IMG.logo}" alt="GoFarm" style="width:150px"></div><div class="grp">REPORTS</div>${nv(WEBNAV)}<div class="grp">STOCK</div>${nv(STOCKNAV)}<div class="f1"></div><div class="nv">${ic('shield', 18)}Reports are read-only</div></div><div class="main"><div class="tbar"><h2>${title}</h2><div class="row">${avatar('Meera Shah')}<div class="col"><b style="font-size:13px">Meera Shah</b><span style="font-size:11.5px;color:var(--mut)">Accountant</span></div></div></div>${filt === false ? '' : FILT()}<div class="ct">${content}</div></div></div>`;
}
const barsvg = (data, w = 560, h = 190, colors = ['#0F7038', '#F2B61C']) => {
  const max = Math.max(...data.flatMap(d => d.v)); const n = data.length; const bw = (w - 50) / n; let s = `<svg viewBox="0 0 ${w} ${h + 26}" width="100%" role="img" aria-label="Bar chart"><g stroke="#E2EADF">${[0, 1, 2, 3].map(i => `<line x1="40" x2="${w}" y1="${8 + i * (h - 8) / 3}" y2="${8 + i * (h - 8) / 3}"/>`).join('')}</g>`;
  const fmt = v => v >= 100000 ? (v / 100000).toFixed(1) + ' L' : v >= 1000 ? (v / 1000).toFixed(v % 1000 ? 1 : 0) + 'k' : Math.round(v);
  [0, 1, 2, 3].forEach(i => { s += `<text x="34" y="${12 + i * (h - 8) / 3}" text-anchor="end" font-size="10" fill="#6A7885">${fmt(max * (1 - i / 3))}</text>`; });
  data.forEach((d, i) => { const gw = bw * 0.7 / d.v.length; d.v.forEach((v, j) => { const bh = (h - 8) * v / max; s += `<rect x="${44 + i * bw + j * gw}" y="${h - bh}" width="${gw - 2}" height="${bh}" rx="3" fill="${colors[j % colors.length]}"/>`; }); s += `<text x="${44 + i * bw + bw * 0.35}" y="${h + 16}" text-anchor="middle" font-size="10" fill="#6A7885">${d.l}</text>`; });
  return s + '</svg>';
};
// registry: S[app] = list of screens
const S = { cus: [], own: [], del: [], acc: [], mgr: [] };
const KEEP = { cd: ['cus', 'del'], mgr: ['own'], own: ['own'], acc: ['acc'] }[ROLE];
const MGR_IDS = new Set(['own-signin', 'own-home-mgr', 'own-alerts', 'own-menu', 'own-customers', 'own-customer', 'own-cust-edit', 'own-signups', 'own-subreq', 'own-calllog', 'own-proof', 'own-boys', 'own-boy', 'own-attendance', 'own-paylog', 'own-cover', 'own-bills', 'mgr-wa', 'mgr-wa-done', 'own-bill', 'own-cash', 'own-dues', 'own-unlock', 'own-credit']);
const OWN_IDS = new Set(['own-signin', 'own-home', 'own-compare', 'own-alerts', 'own-menu', 'own-regions', 'own-region-edit', 'own-catalogue', 'own-product', 'own-prices', 'own-vendors', 'own-settings', 'own-banners', 'own-banner-edit', 'own-customers', 'own-customer', 'own-signups', 'own-subreq', 'own-proof', 'own-boys', 'own-boy', 'own-attendance', 'own-paylog', 'own-staff', 'own-staff-edit', 'own-stockhub', 'own-purchase', 'own-demand', 'own-allocate', 'own-issue', 'own-wastage', 'own-shortage', 'own-recon', 'own-recon-review', 'own-bills', 'mgr-wa', 'mgr-wa-done', 'own-bill', 'own-dues', 'own-unlock', 'own-cash', 'own-credit', 'own-audit']);
const add = (app, sec, id, name, req, pri, html, size) => {
  if (!KEEP.includes(app)) return;
  if (app === 'own') {
    if (!(ROLE === 'mgr' ? MGR_IDS : OWN_IDS).has(id)) return;
    if (ROLE === 'mgr') { app = 'mgr'; html = html.replace(/own-home-mgr/g, 'own-home'); if (id === 'own-home-mgr') id = 'own-home'; }
  }
  S[app].push({ app, sec, id, name, req, pri, html, size });
};
