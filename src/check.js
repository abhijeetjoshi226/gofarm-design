const fs=require('fs');
const parts=['08-img.js','10-ds.js','20-customer.js','30-owner.js','40-delivery.js','50-web.js'].map(f=>fs.readFileSync(f,'utf8'));
for(const k of ['cd','mgr','own','acc']){
  const src=`const ROLE='${k}';\nconst THEME=${fs.readFileSync('theme.json','utf8')};\n`+parts.join('\n')+`
const ALL=[...S.cus,...S.own,...S.mgr,...S.del,...S.acc];
const ids=new Set(ALL.map(s=>s.id)); const bad=[],missing=new Set();
for(const s of ALL){ if(s.html.includes('undefined')||s.html.includes('[object')||s.html.includes('NaN')) bad.push(s.id); for(const m of s.html.matchAll(/data-go="([^"]*)"/g)) if(m[1]&&!ids.has(m[1])) missing.add(m[1]+' in '+s.id); }
return {n:ALL.length,per:Object.fromEntries(Object.entries(S).map(([a,v])=>[a,v.length])),bad,missing:[...missing],dup:ALL.map(s=>s.id).filter((x,i,a)=>a.indexOf(x)!==i)};`;
  try{ console.log(k,JSON.stringify(new Function(src)())); }catch(e){ console.log(k,'ERR',e.stack.split('\n').slice(0,4).join(' | ')); }
}
