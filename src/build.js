// Builds the installable design site: node build.js  (run inside design-pwa/src)
const fs=require('fs'),path=require('path');
const THEME=JSON.parse(fs.readFileSync(path.join(__dirname,'theme.json'),'utf8')); delete THEME._note;
const VERSION='v1.9 · 22 Nov 2026 · no legend labels';
const badge=`(function(){var d=document.createElement('div');d.id='gfver';d.textContent='${VERSION}';d.style.cssText='position:fixed;top:max(4px,env(safe-area-inset-top,0px));right:8px;z-index:2147483647;font:700 10px/1 system-ui,sans-serif;background:${THEME.accent};color:${THEME.text};padding:4px 8px;border-radius:999px;pointer-events:none;box-shadow:0 1px 4px rgba(0,0,0,.25)';document.body.appendChild(d)})();`;
// theme.json key -> CSS variable (the app reads colours only through these variables)
const VARS={g:'primary',gd:'primaryDark',gl:'primaryLight',sage:'secondary',gs:'secondarySoft',gs2:'secondarySofter',gold:'accent',golds:'accentSoft',warn:'accentDark',warns:'accentSoft',ink:'text',mut:'muted',page:'background',ln:'line',mutedbg:'mutedBg',bg:'background',card:'card',fg:'text',muted:'muted',line:'line',soft:'secondarySoft',accent:'primary',chip:'secondarySoft'};
const themeCss=Object.entries(VARS).map(([k,v])=>`--${k}:${THEME[v]};`).join(' ');
const themeJs='const THEME='+JSON.stringify(THEME)+';\n';
const rd=f=>fs.readFileSync(f,'utf8'); const OUT=path.join(__dirname,'..');
const roles={cd:['GoFarm Customer and Delivery','Customer and Delivery apps','customer-delivery.html'],mgr:['GoFarm Manager App','Manager app','manager.html'],own:['GoFarm Owner App','Owner app','owner.html'],acc:['GoFarm Accountant Dashboard','Accountant dashboard','accountant.html']};
const parts=['08-img.js','10-ds.js','20-customer.js','30-owner.js','40-delivery.js','50-web.js','60-app.js'].map(rd);
const pwa='<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="'+THEME.primary+'"><link rel="manifest" href="manifest.webmanifest"><link rel="icon" href="icons/icon-192.png"><link rel="apple-touch-icon" href="icons/icon-192.png"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="GoFarm Design">';
for(const [k,[title,label,out]] of Object.entries(roles)){
  let head=rd('00-head.html').replace('/*THEME_VARS*/',themeCss).replace('<title>GoFarm App Design</title>',`<title>${title}</title>`+pwa);
  let body=rd('05-body.html').replace('<small>App design</small>',`<a class="home" href="index.html" style="color:inherit;text-decoration:none"><small>${label}</small></a>`);
  let pj=parts.slice(); if(k!=='cd'){const m=pj[0].match(/logo:'(data:[^']+)'/); pj[0]="const IMG={logo:'"+m[1]+"'};";}
  const js=`const ROLE='${k}';\n`+themeJs+pj.join('\n')+"\n"+badge+"\nif('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{});}";
  fs.writeFileSync(path.join(OUT,out),'<!doctype html><html lang="en"><head>'+head+'</head><body>'+body+'<script>\n'+js+'\n</script></body></html>');
  console.log(out,fs.statSync(path.join(OUT,out)).size);
}

// welcome page + manifest take their colours from the same theme
let ix=rd(path.join(OUT,'index.html')).replace(/\/\*THEME_START\*\/[\s\S]*?\/\*THEME_END\*\//,'/*THEME_START*/'+themeCss+'/*THEME_END*/').replace(/<meta name="theme-color" content="#[0-9A-Fa-f]{6}">/,`<meta name="theme-color" content="${THEME.primary}">`);
fs.writeFileSync(path.join(OUT,'index.html'),ix);
const mf=JSON.parse(rd(path.join(OUT,'manifest.webmanifest'))); mf.theme_color=THEME.primary; mf.background_color=THEME.background;
fs.writeFileSync(path.join(OUT,'manifest.webmanifest'),JSON.stringify(mf,null,2)+'\n');
