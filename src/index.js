const html = `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" /><title>Census · Sacrum Florilegium</title><style>
:root{--bg:#070606;--panel:#0f0d10;--panel2:#151218;--text:#f4f1f7;--muted:#aaa2b3;--purple:#8451cf;--purple2:#9b6bc7;--gold:#d7aa62;--line:#2b2530;--teal:#668f85;--clay:#a78065;--slate:#6f8196;--olive:#9a8a62}.shell{width:min(1120px,100%);margin:0 auto;padding:20px 16px 56px}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.45}.mast{display:flex;align-items:end;justify-content:space-between;gap:16px;padding:8px 0 20px;border-bottom:1px solid var(--line)}.kicker{font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold)}h1,h2,h3{font-family:Georgia,"Times New Roman",serif;font-weight:500;margin:0}.brand{font-size:2rem}.sub{color:var(--muted);font-size:.9rem;margin-top:4px}.nav{display:flex;gap:8px}.pill{border:1px solid var(--line);background:#0c0a0d;border-radius:999px;padding:8px 12px;color:var(--muted);font-size:.82rem}.pill.active{color:#fff;border-color:#5f447d;background:#17111d}.hero{padding:26px 0 14px}.hero h2{font-size:1.75rem}.hero p{margin:6px 0 0;color:var(--muted);max-width:680px}.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:16px 0}.stat{background:linear-gradient(180deg,#120f14,#0c0a0d);border:1px solid var(--line);border-radius:16px;padding:16px}.stat .n{font:500 2rem Georgia,serif}.stat .l{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-top:3px}.section{margin-top:24px}.section-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.section h3{font-size:1.15rem}.section-note{font-size:.78rem;color:var(--muted)}.cards{display:grid;grid-template-columns:1fr 1fr;gap:12px}.card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:15px}.rows{display:flex;flex-direction:column;gap:12px}.rowline{display:grid;grid-template-columns:minmax(110px,1fr) 2fr auto;gap:10px;align-items:center}.name{font-size:.9rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.track{height:7px;background:#242029;border-radius:99px;overflow:hidden}.fill{height:100%;background:var(--bar,var(--purple2));border-radius:99px}.count{font-size:.8rem;color:var(--muted);min-width:2ch;text-align:right}.vchart{height:220px;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px;align-items:end;padding-top:8px}.vitem{height:100%;display:grid;grid-template-rows:1fr auto;gap:8px;min-width:0}.vplot{display:flex;align-items:flex-end;justify-content:center;position:relative;border-bottom:1px solid var(--line)}.vbar{width:min(42px,72%);height:calc(var(--pct)*1%);min-height:10px;background:var(--bar);border-radius:8px 8px 2px 2px;position:relative;box-shadow:inset 0 1px rgba(255,255,255,.14)}.vcount{position:absolute;left:50%;top:-1.45rem;transform:translateX(-50%);font-size:.75rem;color:#d8d1dc;font-variant-numeric:tabular-nums}.vlabel{min-height:2.5rem;text-align:center;font-size:.72rem;line-height:1.2;color:var(--muted);overflow-wrap:anywhere}.donut-wrap{display:grid;grid-template-columns:150px 1fr;gap:18px;align-items:center;min-height:180px}.donut{width:150px;aspect-ratio:1;border-radius:50%;position:relative;display:grid;place-items:center}.donut:after{content:"";position:absolute;inset:28%;border-radius:50%;background:var(--panel);box-shadow:0 0 0 1px var(--line)}.donut-center{position:relative;z-index:1;text-align:center}.donut-total{font:500 1.65rem Georgia,serif}.donut-caption{font-size:.68rem;letter-spacing:.09em;text-transform:uppercase;color:var(--muted)}.legend{display:flex;flex-direction:column;gap:10px}.legend-row{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:8px;align-items:center}.legend-swatch{width:10px;height:10px;border-radius:3px;background:var(--bar)}.legend-name{font-size:.85rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.legend-value{font-size:.78rem;color:var(--muted);font-variant-numeric:tabular-nums}.lollipops{display:flex;flex-direction:column;gap:14px}.lollipop{display:grid;grid-template-columns:minmax(105px,1fr) 1.7fr auto;gap:10px;align-items:center}.lollipop-track{height:12px;position:relative}.lollipop-line{position:absolute;left:0;top:5px;width:calc(var(--pct)*1%);height:2px;background:var(--bar);opacity:.7}.lollipop-dot{position:absolute;left:calc(var(--pct)*1%);top:0;width:12px;height:12px;border-radius:50%;background:var(--bar);transform:translateX(-50%);box-shadow:0 0 0 3px #19151c}.lollipop-rank{font-size:.75rem;color:var(--muted);margin-right:6px}.recent{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.book{border:1px solid var(--line);border-radius:14px;padding:12px;background:var(--panel2)}.book-title{font-family:Georgia,serif;font-size:1rem}.meta{margin-top:5px;color:var(--muted);font-size:.78rem}.health{display:flex;flex-direction:column}.health-detail{padding:2px 0 13px;border-bottom:1px solid var(--line)}.health-detail+ .health-detail{padding-top:13px}.health-detail:last-child{border-bottom:0;padding-bottom:0}.health-detail summary{list-style:none;cursor:pointer;-webkit-tap-highlight-color:transparent}.health-detail summary::-webkit-details-marker{display:none}.health-top{display:flex;justify-content:space-between;gap:10px;font-size:.88rem}.health-title:after{content:"⌄";display:inline-block;margin-left:7px;color:var(--purple2);transition:transform .18s ease}.health-detail[open] .health-title:after{transform:rotate(180deg)}.health small{display:block;margin-top:4px;color:var(--muted)}.missing-list{margin:11px 0 0;padding:10px 10px 3px 27px;border-left:2px solid var(--bar);background:#0b090c;border-radius:0 10px 10px 0;color:#c8c1cc;font-size:.82rem}.missing-list li{margin:0 0 7px;padding-left:2px}.complete-note{margin-top:10px;padding:9px 11px;border-left:2px solid var(--teal);background:#0b0d0c;border-radius:0 10px 10px 0;color:var(--muted);font-size:.8rem}.status{margin-top:18px;padding:12px 14px;border:1px solid var(--line);border-radius:14px;color:var(--muted);font-size:.82rem}.error{color:#e8a6a6}.footer{margin-top:34px;padding-top:18px;border-top:1px solid var(--line);text-align:center;color:#746d79;font-size:.78rem}.cross{color:var(--purple2);font-size:1rem}.skeleton{opacity:.55;animation:pulse 1.4s ease-in-out infinite alternate}@keyframes pulse{to{opacity:.85}}@media(max-width:760px){.mast{align-items:start;flex-direction:column}.nav{width:100%;overflow:auto}.grid4{grid-template-columns:repeat(2,1fr)}.cards{grid-template-columns:1fr}.recent{grid-template-columns:1fr}.shell{padding:16px 14px 44px}.brand{font-size:1.8rem}.hero{padding-top:22px}.rowline{grid-template-columns:minmax(95px,1fr) 1.6fr auto}.vchart{height:205px;gap:5px}.vbar{width:min(34px,74%)}.vlabel{font-size:.68rem}.donut-wrap{grid-template-columns:128px 1fr;gap:14px}.donut{width:128px}.lollipop{grid-template-columns:minmax(90px,1fr) 1.35fr auto}}
/* Shared Sacrum Florilegium shell */
:root{--panel:#0d0b0b;--panel2:#121010;--text:#ece9e5;--muted:#9d9791;--faint:#6f6964;--line:#292424}html{min-height:100%;background:var(--bg);color-scheme:dark;-webkit-text-size-adjust:100%}.shell{position:relative;min-height:100vh;min-height:100dvh;padding:env(safe-area-inset-top) max(1rem,env(safe-area-inset-right)) env(safe-area-inset-bottom) max(1rem,env(safe-area-inset-left))}.site-header{padding:3.25rem 0 2.25rem;text-align:center}.wordmark{display:inline-flex;align-items:center;flex-direction:column;color:inherit;text-decoration:none}.wordmark span{color:var(--purple);font-size:.7rem;font-weight:650;letter-spacing:.18em;line-height:1.2;text-transform:uppercase}.wordmark strong{margin-top:.32rem;font-family:Georgia,"Times New Roman",serif;font-size:clamp(2rem,8vw,2.7rem);font-weight:400;letter-spacing:-.025em;line-height:1}.subtitle{margin:.85rem 0 0;color:var(--muted);font-family:Georgia,"Times New Roman",serif;font-size:1rem;font-style:italic}.florilegium-menu{position:absolute;top:max(.55rem,env(safe-area-inset-top));right:max(1.2rem,env(safe-area-inset-right));z-index:50}.florilegium-menu summary{display:grid;place-items:center;width:2.25rem;height:2.25rem;border:1px solid var(--line);border-radius:.25rem;background:var(--panel);color:var(--muted);cursor:pointer;list-style:none}.florilegium-menu summary::-webkit-details-marker{display:none}.florilegium-menu summary::marker{content:""}.menu-icon,.menu-icon:before,.menu-icon:after{display:block;width:.9rem;height:1px;background:currentColor;content:""}.menu-icon{position:relative}.menu-icon:before{position:absolute;top:-.3rem}.menu-icon:after{position:absolute;top:.3rem}.florilegium-menu summary:hover,.florilegium-menu[open]>summary{border-color:var(--purple);background:var(--panel2);color:var(--text)}.florilegium-menu summary:focus-visible,.wordmark:focus-visible,.florilegium-menu nav a:focus-visible{outline:2px solid var(--purple);outline-offset:3px}.florilegium-menu nav{position:absolute;top:calc(100% + .35rem);right:0;width:min(18rem,calc(100vw - 2rem));max-height:calc(100dvh - 4rem);overflow-y:auto;padding:.4rem;border:1px solid var(--line);border-radius:.35rem;background:var(--panel);box-shadow:0 .8rem 2.5rem rgba(0,0,0,.48);text-align:left}.florilegium-menu nav p{margin:0;padding:.5rem .68rem .65rem;border-bottom:1px solid var(--line);color:var(--purple);font-family:Georgia,"Times New Roman",serif;font-size:.78rem;letter-spacing:.08em;text-transform:uppercase}.florilegium-menu nav a{display:flex;align-items:center;justify-content:space-between;min-height:2.55rem;padding:.55rem .68rem;color:var(--muted);font-size:.72rem;font-weight:650;letter-spacing:.08em;text-decoration:none;text-transform:uppercase}.florilegium-menu nav a+a{border-top:1px solid var(--line)}.florilegium-menu nav a:hover,.florilegium-menu nav a:focus-visible{background:var(--panel2);color:var(--text)}.florilegium-menu nav a[aria-current="page"]{color:var(--text);box-shadow:inset 2px 0 0 var(--purple)}.florilegium-menu nav a[aria-current="page"]:after{color:var(--purple);content:"Current";font-size:.52rem;letter-spacing:.1em}.kicker{color:var(--purple)}.hero{padding:8px 0 14px}.footer{display:flex;align-items:center;gap:.55rem;margin-top:34px;padding:1rem 0 2rem;border-top:1px solid var(--line);color:var(--faint);font-size:.65rem;letter-spacing:.12em;text-align:left;text-transform:uppercase}.cross{color:var(--purple);font-size:.8rem}@media(max-width:760px){.site-header{padding:2.5rem 0 1.9rem}.shell{padding-left:max(14px,env(safe-area-inset-left));padding-right:max(14px,env(safe-area-inset-right));padding-bottom:env(safe-area-inset-bottom)}}</style></head><body><main class="shell"><header class="site-header"><a class="wordmark" href="/" aria-label="Census home"><span>Sacrum Florilegium</span><strong>Census</strong></a><p class="subtitle">Numerus et ordo collectionis.</p><details class="florilegium-menu"><summary aria-label="Open Sacrum Florilegium sites"><span class="menu-icon" aria-hidden="true"></span></summary><nav aria-label="Sacrum Florilegium sites"><p>Sacrum Florilegium</p><a href="https://sacrumflorilegium.com/">Domus</a><a href="https://biblia.sacrumflorilegium.com/">Biblia</a><a href="https://census.sacrumflorilegium.com/" aria-current="page">Census</a><a href="https://librarium.sacrumflorilegium.com/">Librarium</a><a href="https://officium.sacrumflorilegium.com/">Officium</a><a href="https://orarium.sacrumflorilegium.com/">Orarium</a><a href="https://propria.sacrumflorilegium.com/">Propria</a></nav></details></header><section class="hero"><div class="kicker">Librarium</div><h2>Collection Overview</h2><p>A live view of the Librarium catalogue, its subjects, authors, languages, classifications, and metadata health.</p></section><section class="grid4" id="stats"><div class="stat skeleton"><div class="n">—</div><div class="l">Books</div></div><div class="stat skeleton"><div class="n">—</div><div class="l">Authors</div></div><div class="stat skeleton"><div class="n">—</div><div class="l">Subjects</div></div><div class="stat skeleton"><div class="n">—</div><div class="l">Languages</div></div></section><div class="cards"><section class="card"><div class="section-head"><h3>Classifications</h3><span class="section-note">Books by division</span></div><div class="rows" id="classifications"></div></section><section class="card"><div class="section-head"><h3>Top Subjects</h3><span class="section-note">Top 5</span></div><div class="vchart" id="subjects"></div></section></div><div class="cards section"><section class="card"><div class="section-head"><h3>Languages</h3><span class="section-note">Editions</span></div><div id="languages"></div></section><section class="card"><div class="section-head"><h3>Top Authors</h3><span class="section-note">Most represented</span></div><div class="lollipops" id="authors"></div></section></div><section class="section card"><div class="section-head"><h3>Metadata Health</h3><span class="section-note">Catalogue completeness</span></div><div class="health" id="health"></div></section><section class="section"><div class="section-head"><h3>Recently Added</h3><span class="section-note">Newest catalogue records</span></div><div class="recent" id="recent"></div></section><div class="status" id="status">Loading live Librarium data…</div><footer class="footer"><span class="cross" aria-hidden="true">✠</span><span>T.A.D.M.N.</span></footer></main><script>
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const palette=['#8669a7','#a78065','#668f85','#7c789b','#9a8a62','#6f8196','#8f6f78'];
const rows=(id,data)=>{const max=Math.max(1,...data.map(x=>x.count));document.getElementById(id).innerHTML=data.map((x,i)=>{const color=palette[i%palette.length];return '<div class="rowline" style="--bar:'+color+'"><div class="name">'+esc(x.name)+'</div><div class="track" role="img" aria-label="'+esc(x.name)+': '+x.count+'"><div class="fill" style="width:'+Math.max(4,Math.round(x.count/max*100))+'%"></div></div><div class="count">'+x.count+'</div></div>'}).join('')||'<div class="meta">No data</div>'};
const vertical=(id,data)=>{const max=Math.max(1,...data.map(x=>x.count));document.getElementById(id).innerHTML=data.map((x,i)=>{const pct=Math.max(7,Math.round(x.count/max*88));return '<div class="vitem" style="--pct:'+pct+';--bar:'+palette[i%palette.length]+'"><div class="vplot" role="img" aria-label="'+esc(x.name)+': '+x.count+'"><div class="vbar"><span class="vcount">'+x.count+'</span></div></div><div class="vlabel">'+esc(x.name)+'</div></div>'}).join('')||'<div class="meta">No data</div>'};
const donut=(id,data)=>{const total=data.reduce((n,x)=>n+x.count,0);if(!total){document.getElementById(id).innerHTML='<div class="meta">No data</div>';return}let angle=0;const stops=data.map((x,i)=>{const start=angle;angle+=x.count/total*360;return palette[i%palette.length]+' '+start.toFixed(1)+'deg '+angle.toFixed(1)+'deg'}).join(',');const summary=data.map(x=>x.name+': '+x.count).join(', ');const legend=data.map((x,i)=>'<div class="legend-row" style="--bar:'+palette[i%palette.length]+'"><span class="legend-swatch"></span><span class="legend-name">'+esc(x.name)+'</span><span class="legend-value">'+Math.round(x.count/total*100)+'%</span></div>').join('');document.getElementById(id).innerHTML='<div class="donut-wrap"><div class="donut" role="img" aria-label="'+esc(summary)+'" style="background:conic-gradient('+stops+')"><div class="donut-center"><div class="donut-total">'+total+'</div><div class="donut-caption">Books</div></div></div><div class="legend">'+legend+'</div></div>'};
const lollipops=(id,data)=>{const max=Math.max(1,...data.map(x=>x.count));document.getElementById(id).innerHTML=data.map((x,i)=>{const pct=Math.max(5,Math.round(x.count/max*92));return '<div class="lollipop" style="--pct:'+pct+';--bar:'+palette[i%palette.length]+'"><div class="name"><span class="lollipop-rank">'+(i+1)+'</span>'+esc(x.name)+'</div><div class="lollipop-track" role="img" aria-label="'+esc(x.name)+': '+x.count+'"><span class="lollipop-line"></span><span class="lollipop-dot"></span></div><div class="count">'+x.count+'</div></div>'}).join('')||'<div class="meta">No data</div>'};
const health=(data,total)=>{document.getElementById('health').innerHTML=data.map(x=>{const color=x.percent>=85?'#668f85':x.percent>=60?'#9a8a62':'#9b6868';const missing=Array.isArray(x.missing)?x.missing:[];const detail=missing.length?'<ul class="missing-list">'+missing.map(title=>'<li>'+esc(title)+'</li>').join('')+'</ul>':'<div class="complete-note">No books are missing this information.</div>';return '<details class="health-detail" style="--bar:'+color+'"><summary aria-label="Show books missing '+esc(x.name)+'"><span class="health-top"><span class="health-title">'+esc(x.name)+'</span><span>'+x.percent+'%</span></span><span class="track" role="img" aria-label="'+esc(x.name)+': '+x.percent+' percent complete"><span class="fill" style="display:block;width:'+x.percent+'%"></span></span><small>'+x.complete+' of '+total+' records complete · '+missing.length+' missing</small></summary>'+detail+'</details>'}).join('')};
async function load(){try{const r=await fetch('/api/stats');if(!r.ok)throw new Error(await r.text());const d=await r.json();document.getElementById('stats').innerHTML=[['Books',d.totalBooks],['Authors',d.totalAuthors],['Subjects',d.totalSubjects],['Languages',d.totalLanguages]].map(([l,n])=>'<div class="stat"><div class="n">'+n+'</div><div class="l">'+l+'</div></div>').join('');rows('classifications',d.classifications);vertical('subjects',d.topSubjects);donut('languages',d.languages);lollipops('authors',d.topAuthors);health(d.health,d.totalBooks);document.getElementById('recent').innerHTML=d.recent.map(b=>'<article class="book"><div class="book-title">'+esc(b.title)+'</div><div class="meta">'+esc([b.author,b.language,b.dateAdded].filter(Boolean).join(' · '))+'</div></article>').join('');document.getElementById('status').textContent='Live from Airtable · '+d.publishedBooks+' published · '+d.draftBooks+' draft'}catch(e){const s=document.getElementById('status');s.classList.add('error');s.textContent='Census could not load Airtable data: '+e.message}}load();
</script></body></html>`;
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": status >= 400 ? "no-store" : "public, max-age=120",
    },
  });
}function countBy(items) {
  const m = new Map();
  for (const x of items.flat()) if (x) m.set(x, (m.get(x) || 0) + 1);
  return [...m]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}async function fetchTable(env, tableId, token) {
  let offset = "";
  const all = [];
  do {
    const u = new URL(
      "https://api.airtable.com/v0/" + env.AIRTABLE_BASE_ID + "/" + tableId,
    );
    u.searchParams.set("pageSize", "100");
    if (offset) u.searchParams.set("offset", offset);
    const r = await fetch(u, { headers: { Authorization: "Bearer " + token } });
    if (!r.ok)
      throw new Error("Airtable " + r.status + ": " + (await r.text()));
    const d = await r.json();
    all.push(...d.records);
    offset = d.offset || "";
  } while (offset);
  return all;
}function stats(booksRaw, authorsRaw, classesRaw) {
  const authorMap = new Map(
    authorsRaw.map((r) => [r.id, r.fields.Name || r.id]),
  );
  const classMap = new Map(
    classesRaw.map((r) => [r.id, r.fields.Class || r.id]),
  );
  const books = booksRaw.map((r) => ({ id: r.id, ...r.fields }));
  const linked = (value, map) =>
    Array.isArray(value)
      ? value.map((id) => map.get(id) || id).filter(Boolean)
      : [];
  const classifications = countBy(
    books.map((b) => linked(b.Classification, classMap)),
  );
  const subjects = countBy(
    books.map((b) => (Array.isArray(b.Subjects) ? b.Subjects : [])),
  );
  const languages = countBy(books.map((b) => [b.Language].filter(Boolean)));
  const authors = countBy(books.map((b) => linked(b.Authors, authorMap)));
  const complete = (name, test) => {
    const missing = books
      .filter((b) => !test(b))
      .map((b) => b.Title || "Untitled")
      .sort((a, b) => a.localeCompare(b));
    const n = books.length - missing.length;
    return {
      name,
      complete: n,
      percent: books.length ? Math.round((n / books.length) * 100) : 0,
      missing,
    };
  };
  const status = books.map((b) => b.Status || "");
  return {
    totalBooks: books.length,
    publishedBooks: status.filter((x) => x === "Published").length,
    draftBooks: status.filter((x) => x === "Draft").length,
    totalAuthors: authors.length,
    totalSubjects: subjects.length,
    totalLanguages: languages.length,
    classifications,
    topSubjects: subjects.slice(0, 5),
    languages,
    topAuthors: authors.slice(0, 5),
    health: [
      complete("Searchable text", (b) => !!b["Searchable Text"]),
      complete("OCR", (b) => !!b.OCR),
      complete("Cover available", (b) => !!b["Cover URL"]),
      complete(
        "Author identified",
        (b) => linked(b.Authors, authorMap).length > 0,
      ),
      complete(
        "Classification",
        (b) => linked(b.Classification, classMap).length > 0,
      ),
      complete(
        "Subjects",
        (b) => Array.isArray(b.Subjects) && b.Subjects.length > 0,
      ),
      complete("Edition year", (b) => !!b["Edition Year"]),
      complete("Publisher", (b) => !!b.Publisher),
    ],
    recent: books
      .slice()
      .sort(
        (a, b) =>
          String(b["Date Added"] || "").localeCompare(
            String(a["Date Added"] || ""),
          ) || String(b.id).localeCompare(String(a.id)),
      )
      .slice(0, 6)
      .map((b) => ({
        title: b.Title || "Untitled",
        author: linked(b.Authors, authorMap).join(", "),
        language: b.Language || "",
        dateAdded: b["Date Added"] || "",
      })),
  };
}export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/stats") {
      try {
        const binding = env.AIRTABLE_TOKEN;
        if (!binding) throw new Error("AIRTABLE_TOKEN is not configured");
        const token =
          typeof binding === "string"
            ? binding
            : typeof binding.get === "function"
              ? await binding.get()
              : "";
        if (!token) throw new Error("AIRTABLE_TOKEN is not configured");
        const [books, authors, classes] = await Promise.all([
          fetchTable(env, env.AIRTABLE_BOOKS_TABLE_ID, token),
          fetchTable(env, env.AIRTABLE_AUTHORS_TABLE_ID, token),
          fetchTable(env, env.AIRTABLE_CLASSIFICATIONS_TABLE_ID, token),
        ]);
        return json(stats(books, authors, classes));
      } catch (e) {
        return json({ error: e.message }, 500);
      }    }    if (url.pathname === "/health") return new Response("ok");
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-cache",
      },
    });
  },
};
