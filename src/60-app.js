// ===== page logic: tabs, galleries, design-system guide, requirements table, prototype =====
const ALL = [...S.cus, ...S.own, ...S.mgr, ...S.del, ...S.acc];
const IDSET = new Set(ALL.map(s => s.id));
ALL.forEach(s => { s.html = s.html.replace(/ data-go="([^"]*)"/g, (m, g) => g && !IDSET.has(g) ? '' : m); });
const BYID = Object.fromEntries(ALL.map(s => [s.id, s]));
const APPS = {
  cus: { name: 'Customer app', who: 'Customers', title: 'Customer app', blurb: 'Sign up, subscribe, pause, see the calendar, get the monthly bill and pay it. Customers who never install the app are still served by the manager (MGR-08).', start: 'cus-splash' },
  own: { name: 'Owner app', who: 'The owner', title: 'Owner app', blurb: 'The owner sees every region, sets up products, prices, vendors and staff, buys and allocates stock, approves the day-end count and sends every bill on WhatsApp. Managers and the accountant get their own, smaller apps.', start: 'own-signin' },
  mgr: { name: 'Manager app', who: 'Region managers', title: 'Manager app', blurb: 'A region manager sees only their own region: customers, sign-ups, delivery boys and their attendance, delivery photos, dues and cash, and sends all monthly bills on WhatsApp in one tap. Stock is not part of the manager app: it belongs to the accountant and the owner.', start: 'own-signin' },
  del: { name: 'Delivery app', who: 'Delivery boys', title: 'Delivery boy app', blurb: 'Check in, follow the route, prove each delivery with a door photo, work offline, return stock in litres, check out. Large buttons, one-tap actions.', start: 'del-signin' },
  acc: { name: 'Accountant dashboard', who: 'Accountant and owner (web, read-only)', title: 'Accountant reports dashboard', blurb: 'A web dashboard for the accountant. Reports are read-only, always match the apps, filter by date, region and product, and export to Excel and PDF. The Stock section lets the accountant record purchases, wastage and demand, and review the day-end count. Shown at desktop size; click a frame to view it at full size.', start: '' },
};
const TABS = { cd: [['found', 'Design system'], ['cus', 'Customer app'], ['del', 'Delivery app'], ['pv', 'Click-through']], mgr: [['mgr', 'Manager app'], ['pv', 'Click-through']], own: [['own', 'Owner app'], ['pv', 'Click-through']], acc: [['acc', 'Accountant dashboard']] }[ROLE];
const PVAPPS = { cd: ['cus', 'del'], mgr: ['mgr'], own: ['own'], acc: [] }[ROLE];
const FLOWS = { cd: [['Sign up and subscribe', 'cus-splash'], ['Pause, calendar and bill', 'cus-home'], ['Pay a locked account', 'cus-locked'], ['Delivery day', 'del-signin']], mgr: [['Morning check', 'own-signin'], ['Approve a new customer', 'own-signups'], ['Send bills on WhatsApp', 'own-bills'], ['Collect cash and unlock', 'own-dues']], own: [['Owner morning view', 'own-signin'], ['Add a manager', 'own-staff'], ['Buy stock and allocate', 'own-stockhub'], ['Send bills on WhatsApp', 'own-bills']], acc: [] }[ROLE];
const HINT = { cd: 'Anita is a customer in Baner. Sunil is a delivery boy.', mgr: 'Rahul Patil is the Baner manager.', own: 'Amit Deshmukh is the owner.', acc: '' }[ROLE];
const $ = (s, r = document) => r.querySelector(s);
const view = $('#view'), tabsEl = $('#tabs');
let cur = TABS[0][0];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
function availW() { return Math.max(280, Math.min(1360, document.documentElement.clientWidth - 32)); }
function setScale() {
  const w = availW(); const s = Math.min(0.78, w / 390); view.style.setProperty('--s', s); view.style.setProperty('--fw', Math.round(390 * s) + 'px');
  view.style.setProperty('--ws', Math.min(1, w / 1280));
  view.style.setProperty('--ps', Math.min(1, w / 390));
}
const fig = (s) => `<figure class="fig" id="${s.id}"><figcaption><b>${esc(s.name)}</b><span class="req">${esc(s.req)}</span><span class="pri ${s.pri === 'Must' ? 'must' : ''}">${s.pri}</span></figcaption><div class="fw" style="--w:390;width:calc(390px*var(--s));height:calc(844px*var(--s))">${s.html.replace('class="gf', 'style="transform:scale(var(--s))" class="gf')}</div></figure>`;
const figWide = (s) => `<figure class="fig wide" id="${s.id}"><figcaption><b>${esc(s.name)}</b><span class="req">${esc(s.req)}</span><span class="pri ${s.pri === 'Must' ? 'must' : ''}">${s.pri}</span></figcaption><div class="fw" data-wide style="width:calc(1280px*var(--ws));height:calc(800px*var(--ws));border-radius:10px">${s.html.replace('class="gf', 'style="transform:scale(var(--ws))" class="gf')}</div></figure>`;
function gallery(app) {
  const A = APPS[app]; const list = S[app]; const secs = [...new Set(list.map(s => s.sec))];
  const must = list.filter(s => s.pri === 'Must').length;
  let h = `<div class="intro hero2"><h1>${A.title}</h1><p>${A.blurb}</p><div class="stats"><span>${list.length} screens</span><span>${must} Must</span><span>${list.length - must} Should or Could</span><span>For: ${A.who}</span><span>Tap a screen to enlarge</span></div></div>`;
  for (const sec of secs) {
    const items = list.filter(s => s.sec === sec);
    h += `<h2 class="sec-h">${esc(sec)}</h2><p class="sec-p">${items.map(i => i.req.split(',')[0]).filter((v, i, a) => a.indexOf(v) === i).join(', ')}</p>`;
    h += app === 'acc' ? `<div class="gal" style="grid-template-columns:1fr">${items.map(figWide).join('')}</div>` : `<div class="gal" style="--fw:calc(390px*var(--s))">${items.map(fig).join('')}</div>`;
  }
  return h;
}
// ---- design system tab ----
const SW = [
  ['Brand', [['Primary green', '#0F7038', 'Buttons, links, selected tab'], ['Dark green', '#0B5A2D', 'Pressed state, web sidebar'], ['Soft green', '#E3F2E8', 'Chips, soft buttons, info alerts'], ['Gold', '#F2B61C', 'Accent, progress, the "Go" in the logo'], ['Soft gold', '#FFF4D6', 'Highlights']]],
  ['Status', [['Red', '#D93A35', 'Locked, overdue, errors, missed'], ['Soft red', '#FDECEB', 'Locked rows and alerts'], ['Amber', '#B26A00', 'Paused, photo-only proof, warnings'], ['Soft amber', '#FFF3DC', 'Warning alerts']]],
  ['Neutral', [['Ink', '#1B2B3A', 'Text'], ['Muted', '#6A7885', 'Secondary text, icons'], ['Page', '#F6FAF4', 'App background'], ['Card', '#FFFFFF', 'Cards and inputs'], ['Muted fill', '#EEF1EC', 'Muted badge, disabled'], ['Line', '#E2EADF', 'Borders and dividers']]],
];
function reqTable() {
  const map = {}; for (const s of ALL) for (const r of s.req.split(',').map(x => x.trim())) { if (!r) continue; (map[r] = map[r] || []).push(s); }
  const order = ['CUS', 'DEL', 'MGR', 'ACC', 'BR', 'NFR', 'P', 'New request', 'Section 4'];
  const keys = Object.keys(map).sort((a, b) => { const pa = order.findIndex(o => a.startsWith(o)), pb = order.findIndex(o => b.startsWith(o)); return pa - pb || a.localeCompare(b, undefined, { numeric: true }); });
  return `<div class="cov"><table><thead><tr><th>Requirement</th><th>Screens that show it</th></tr></thead><tbody>${keys.map(k => `<tr><td><b>${esc(k)}</b></td><td>${map[k].map(s => `<a href="#${s.app}" data-jump="${s.id}">${esc(s.name)}</a>`).join(', ')}</td></tr>`).join('')}</tbody></table></div>`;
}
function foundations() {
  let h = `<div class="intro hero2"><h1>GoFarm app design</h1><p>The Customer app and the Delivery app, with the colours, type and components shared by every GoFarm app. The Manager app, the Owner app and the Accountant dashboard each have their own page. Every screen is labelled with its SRS requirement.</p><div class="stats"><span>${S.cus.length} customer screens</span><span>${S.del.length} delivery screens</span><span>${ALL.length} in total</span></div></div>`;
  h += `<h2 class="sec-h">Colours</h2><p class="sec-p">Green is the action colour. Gold marks good news and the brand accent. Red is only for things that need action: locked, overdue, missed.</p>`;
  for (const [g, items] of SW) h += `<h3 style="font-size:13px;color:var(--muted);margin:18px 0 8px">${g}</h3><div class="big-grid">${items.map(([n, hex, use]) => `<div class="sw"><i style="background:${hex};${hex === '#FFFFFF' ? 'box-shadow:inset 0 0 0 1px #E2EADF' : ''}"></i><div><b>${n}  ${hex}</b><span>${use}</span></div></div>`).join('')}</div>`;
  const ty = [['Display 28 Bold', 'font-size:28px;font-weight:700', 'GoFarm'], ['Page title 20 Bold', 'font-size:20px;font-weight:700', 'My subscriptions'], ['Section 18 Bold', 'font-size:18px;font-weight:700', 'This month'], ['List title 17 SemiBold', 'font-size:17px;font-weight:600', 'Full cream cow milk, 1 litre'], ['Body 14 Regular', 'font-size:14px', 'Delivered every morning before 7 AM in Baner.'], ['Body strong 14 SemiBold', 'font-size:14px;font-weight:600', '1 litre, Morning'], ['Caption 12 Regular', 'font-size:12px;color:var(--muted)', 'Change before 9:00 PM to skip tomorrow morning.'], ['Stat 26 Bold', 'font-size:26px;font-weight:700', '₹1,240'], ['Button 15 Bold', 'font-size:15px;font-weight:700', 'Pay now'], ['Tab label 11 SemiBold', 'font-size:11px;font-weight:600', 'Home']];
  h += `<h2 class="sec-h">Type: Open Sans</h2><p class="sec-p">The same font the apps already ship with. Regular, SemiBold and Bold only. Marathi and Hindi use the same sizes with a matching Devanagari font once the owner confirms languages.</p><div class="spec">${ty.map(([l, st, s]) => `<div class="ty"><small>${l}</small><span style="${st}">${s}</span></div>`).join('')}</div>`;
  h += `<h2 class="sec-h">Shape, space and rules</h2><p class="sec-p">Page margin 16, gap between cards 14, buttons 48 high with radius 14, cards radius 16 with a soft shadow, chips radius 12, status pills fully round. Every tap target is at least 44 by 44, and delivery boy screens use the biggest buttons.</p>`;
  h += `<h2 class="sec-h">Components</h2><p class="sec-p">Built once, used on every screen. They are plain HTML here; in the apps they are the shared controls in the Core library.</p><div class="big-grid" style="grid-template-columns:repeat(auto-fill,minmax(330px,1fr))">
    <div class="spec"><h3>Buttons</h3><div class="gf free demo">${btn('Primary', 'primary')}${btn('Gold', 'gold')}${btn('Soft', 'soft')}${btn('Danger', 'danger')}${btn('Outline', 'outline')}<div class="row">${btn('Small', 'soft sm')}${btn('Small danger', 'danger sm')}</div></div></div>
    <div class="spec"><h3>Status pills and chips</h3><div class="gf free demo"><div class="row wrap">${pill('Active')}${pill('Paid', 'good')}${pill('Paused', 'warn')}${pill('Locked', 'bad')}${pill('Done', 'muted')}</div>${chips(['Daily', 'Alternate', 'Weekly'], 0)}<div class="row wrap">${pill('Photo saved')}${pill('Photo flagged', 'warn')}${pill('Too far', 'bad')}</div></div></div>
    <div class="spec"><h3>Inputs</h3><div class="gf free demo">${fld('Mobile number', '+91 98765 43210')}${fld('Flat number', 'B-402', 'foc')}${fld('Quantity', '0', 'err')}${sel('Region', 'Baner')}</div></div>
    <div class="spec"><h3>Alerts</h3><div class="gf free demo">${al('', 'Info', 'Latest time to change is 9:00 PM today.')}${al('warn', 'Warning', 'Photo-only deliveries are flagged for review.')}${al('locked', 'Account locked', 'Pay your bill to start deliveries again.')}</div></div>
    <div class="spec"><h3>Cards and lists</h3><div class="gf free demo">${lc('List card', 'Subtitle and a chevron', 'invoice', '')}${pc('Cow milk', 'Full cream  |  1 litre', '₹68 per litre')}<div class="grid2">${stat('Due', '₹1,240', 'Bill on 1 Dec', 'g')}${stat('Missed', '18', 'today', 'red')}</div></div></div>
    <div class="spec"><h3>Calendar days, stepper, banner</h3><div class="gf free demo"><div class="cal" style="grid-template-columns:repeat(5,1fr)">${[['del', 'Delivered'], ['pau', 'Paused'], ['mis', 'Missed'], ['', 'Upcoming'], ['tod', 'Today']].map(x => `<div class="d ${x[0]}">12<small>${x[1]}</small></div>`).join('')}</div>${stepper(2)}${banner('Fresh milk, every morning', 'Choose your litres and start a plan.', 'Start a plan')}</div></div>
    <div class="spec"><h3>Tab bars (one per app)</h3><div class="gf free demo">${tabbar('cus', 'Home')}${tabbar('own', 'Customers')}${tabbar('del', 'Today')}</div></div>
    <div class="spec"><h3>Delivery proof</h3><div class="gf free demo"><div class="ph-img" style="height:150px;border-radius:16px;flex-direction:column;gap:6px">${ic('camera', 36)}<b>Door photo</b></div><div class="row wrap">${pill('Photo saved')}${pill('Flagged: manager checks', 'warn')}${pill('Too far from address', 'bad')}</div><div class="off">${ic('wifioff', 16)}Offline: 9 updates saved</div></div></div>
  </div>`;
  h += `<h2 class="sec-h">Icons</h2><p class="sec-p">The icon set the apps already use: 24 px, 1.8 stroke, rounded ends.</p><div class="icons">${Object.keys(IC).map(k => `<div>${ic(k, 24)}${k}</div>`).join('')}</div>`;
  h += `<h2 class="sec-h">Requirements coverage</h2><p class="sec-p">Each SRS requirement that has a screen, and where to see it. Items marked Could or Owner to confirm are shown as proposals.</p>${reqTable()}`;
  h += `<footer>Built from the GoFarm SRS v0.1 (7 Nov 2026). Content is example data: names, addresses and amounts are made up. Open questions for the owner (shortage priority, locked-account rule, pay model, languages) are shown on the screens they affect.</footer>`;
  return h;
}
// ---- click-through prototype ----
let pv = { app: PVAPPS[0], stack: [FLOWS[0] ? FLOWS[0][1] : ''] };
function protoPhone() {
  const id = pv.stack[pv.stack.length - 1]; const s = BYID[id];
  if (s.app === 'acc') return `<p class="pv-hint">The accountant dashboard is a desktop screen. Open it from the Accountant dashboard tab.</p>`;
  return `<div class="fw" style="width:calc(390px*var(--ps));height:calc(844px*var(--ps));--s:var(--ps)">${s.html.replace('class="gf', 'style="transform:scale(var(--ps))" class="gf')}</div>`;
}
function proto() {
  const id = pv.stack[pv.stack.length - 1]; const s = BYID[id];
  const groups = PVAPPS.map(a => `<h3>${APPS[a].name}</h3><div class="grp">${S[a].map(x => `<button data-open="${x.id}" class="${x.id === id ? 'cur' : ''}">${esc(x.name)}</button>`).join('')}</div>`).join('');
  return `<div class="intro"><h1>Click-through</h1><p>Tap the buttons, cards and tabs inside the phone to move between screens, the way a customer or a delivery boy would. Not every control is linked: the ones that are show a hand cursor. Use the journeys to start from a real task.</p></div><div class="pv pvmode"><div class="pv-phone"><div class="pv-bar"><button data-back ${pv.stack.length < 2 ? 'disabled style="opacity:.5"' : ''}>Back</button><button data-restart>Start over</button><span><b style="color:var(--fg)">${esc(s.name)}</b>  ${esc(s.req)}</span></div><div id="pvphone">${protoPhone()}</div></div><div class="pv-list"><h3>Journeys</h3><div class="grp">${FLOWS.map(([l, i]) => `<button data-open="${i}">${l}</button>`).join('')}</div><p class="pv-hint">${HINT}</p><div style="height:14px"></div>${groups}</div></div>`;
}
// ---- routing ----
function render(t, jump) {
  cur = TABS.some(x => x[0] === t) ? t : TABS[0][0];
  tabsEl.innerHTML = TABS.map(([k, l]) => `<button role="tab" aria-selected="${k === cur}" data-tab="${k}">${l}</button>`).join('');
  view.innerHTML = cur === 'found' ? foundations() : cur === 'pv' ? proto() : gallery(cur);
  document.getElementById('tabs').style.display = TABS.length < 2 ? 'none' : '';
  setScale();
  if (jump) { const el = document.getElementById(jump); if (el) el.scrollIntoView({ block: 'center' }); } else window.scrollTo(0, 0);
}
tabsEl.addEventListener('click', e => { const b = e.target.closest('[data-tab]'); if (b) { try { history.replaceState(null, '', '#' + b.dataset.tab); } catch (x) { } render(b.dataset.tab); } });
view.addEventListener('click', e => {
  const j = e.target.closest('[data-jump]'); if (j) { e.preventDefault(); const s = BYID[j.dataset.jump]; render(s.app, s.id); try { history.replaceState(null, '', '#' + s.app); } catch (x) { } return; }
  const w = e.target.closest('[data-wide]'); if (w) { const f = w.closest('.wide'); f.classList.toggle('full'); const full = f.classList.contains('full'); w.style.width = full ? '100%' : 'calc(1280px*var(--ws))'; w.style.height = full ? '800px' : 'calc(800px*var(--ws))'; const g = w.firstElementChild; g.style.transform = full ? 'none' : 'scale(var(--ws))'; return; }
  if (cur !== 'pv') { const z = e.target.closest('.fig:not(.wide) .fw'); if (z) lightbox(z.parentElement.id); return; }
  const o = e.target.closest('[data-open]'); if (o) { pv.stack = [o.dataset.open]; render('pv'); return; }
  if (e.target.closest('[data-restart]')) { pv.stack = [pv.stack[0]]; render('pv'); return; }
  if (e.target.closest('[data-back]')) { if (pv.stack.length > 1) pv.stack.pop(); render('pv'); return; }
  const g = e.target.closest('.gf [data-go]'); if (g && BYID[g.dataset.go]) { pv.stack.push(g.dataset.go); render('pv'); }
});
function lightbox(id) {
  const s = BYID[id]; if (!s) return; const k = Math.min(1, (document.documentElement.clientHeight - 40) / 844, (document.documentElement.clientWidth - 32) / 390);
  const d = document.createElement('div'); d.className = 'lb'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-label', s.name);
  d.innerHTML = `<button class="lb-x" type="button">Close</button><div class="fw" style="width:${390 * k}px;height:${844 * k}px;--s:${k}">${s.html.replace('class="gf', 'style="transform:scale(' + k + ')" class="gf')}</div>`;
  const close = () => { d.remove(); document.removeEventListener('keydown', esc); }; const esc = ev => { if (ev.key === 'Escape') close(); };
  d.addEventListener('click', close); document.addEventListener('keydown', esc); document.body.appendChild(d); d.querySelector('.lb-x').focus();
}
window.addEventListener('resize', setScale);
window.addEventListener('hashchange', () => { const h = location.hash.slice(1); if (h && h !== cur) render(h); });
render(location.hash.slice(1) || TABS[0][0]);

window.vw = (id, k = 0.68) => { document.querySelectorAll('.lb,.vw').forEach(x => x.remove()); const s = BYID[id]; const d = document.createElement('div'); d.className = 'vw'; d.style.cssText = 'position:fixed;inset:0;z-index:99;background:#cfd8cf;display:flex;justify-content:center;align-items:flex-start;padding-top:4px'; const w = s.app === 'acc'; const kk = w ? 0.62 : k; d.innerHTML = '<div style="width:' + ((w ? 1280 : 390) * kk) + 'px;height:' + ((w ? 800 : 844) * kk) + 'px;position:relative;overflow:hidden;border-radius:8px">' + s.html.replace('class="gf', 'style="transform:scale(' + kk + ');transform-origin:0 0" class="gf') + '</div>'; document.body.appendChild(d); return id; };
window.audit = () => { render(cur); const out = []; document.querySelectorAll('.fig').forEach(f => { const g = f.querySelector('.gf'); const bd = g && g.querySelector('.bd, .ct'); if (bd && bd.scrollHeight > bd.clientHeight + 1) out.push(f.id + ' +' + (bd.scrollHeight - bd.clientHeight)); }); return out; };
