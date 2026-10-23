const $=id=>document.getElementById(id);
/* ---------- X-Ray ---------- */
$("xr").onclick=()=>{const o=document.body.classList.toggle("xray");$("xs").textContent=o?"AÇIK":"KAPALI";$("xr").textContent=o?"X-RAY KAPAT":"X-RAY AÇ";$("xr").setAttribute("aria-pressed",o)};
/* ---------- Ses ---------- */
let ac=null,sound=false;
function beep(f){if(!sound)return;try{ac=ac||new AudioContext();const o=ac.createOscillator(),g=ac.createGain();o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.08)}catch(e){}}
$("snd").onclick=()=>{sound=!sound;$("snd").textContent="Ses: "+(sound?"açık":"kapalı");$("snd").setAttribute("aria-pressed",sound);beep(660)};
/* ---------- Radar simülasyonu ---------- */
const PRE=[[["log"],["timeout",0],["promise"],["log"]],[["timeout",300],["timeout",0],["micro"],["log"],["promise"]],[["log"],["promise"],["timeout",0],["micro"],["timeout",0],["log"]]];
let prog=[],guess=[],steps=[],si=0,timer=null;
const L=n=>String.fromCharCode(65+n);
const line=x=>{const l=`console.log("${x.id}")`;
 if(x.type=="log")return l+";";else if(x.type=="timeout")return `setTimeout(() => ${l}, ${x.ms});`;
 else if(x.type=="promise")return `Promise.resolve().then(() => ${l});`;else return `queueMicrotask(() => ${l});`};
function simulate(p){
 const st={stack:[],web:[],micro:[],macro:[],out:[]},S=[];
 const snap=(t,l,f)=>S.push({t,l,f,s:JSON.parse(JSON.stringify(st))});
 snap("Kule açıldı. Pist (Call Stack) yukarıdan aşağı sırayla çalışır.",-1,440);
 p.forEach((x,i)=>{
  st.stack=[{log:"console.log",timeout:"setTimeout",promise:"Promise.then",micro:"queueMicrotask"}[x.type]];
  if(x.type=="log"){st.out.push(x.id);snap(`"${x.id}" hemen yazıldı. Ana koddaki log beklemez.`,i,520)}
  else if(x.type=="timeout"){st.web.push({id:x.id,ms:x.ms,n:i});snap(`"${x.id}" zamanlayıcısı bekleme sahasına (Web API) verildi: ${x.ms} ms. Pist beklemeden devam eder.`,i,380)}
  else{st.micro.push(x.id);snap(`"${x.id}" acil iniş kuyruğuna (microtask) alındı. Henüz yazılmadı.`,i,300)}
  st.stack=[]});
 snap("Ana kod bitti, pist boş. Kule önce acil iniş kuyruğuna bakar.",-1,440);
 const dr=()=>{while(st.micro.length){const m=st.micro.shift();st.stack=["then: "+m];st.out.push(m);snap(`Acil iniş: "${m}" yazıldı. Acil işler normal sıradan önce gelir.`,-1,700);st.stack=[]}};
 dr();
 while(st.web.length){
  st.web.sort((a,b)=>a.ms-b.ms||a.n-b.n);const w=st.web.shift();
  st.macro.push({id:w.id});snap(`"${w.id}" zamanlayıcısı doldu (${w.ms} ms), iniş sırasına (Task) geçti.`,-1,380);
  st.macro.shift();st.stack=["callback: "+w.id];st.out.push(w.id);snap(`Normal sıradan "${w.id}" alındı ve yazıldı.`,-1,560);st.stack=[];dr()}
 snap("Tüm uçaklar indi. Sıra: "+st.out.join(", "),-1,880);
 return S}
const realRun=p=>new Promise(res=>{const r=[];
 p.forEach(x=>{const f=()=>r.push(x.id);if(x.type=="log")f();else if(x.type=="timeout")setTimeout(f,x.ms);else if(x.type=="promise")Promise.resolve().then(f);else queueMicrotask(f)});
 setTimeout(()=>res(r),Math.max(0,...p.map(x=>x.type=="timeout"?x.ms:0))+80)});
function stop(){clearInterval(timer);timer=null;$("pl").textContent="Otomatik"}
function reset(){stop();guess=[];steps=simulate(prog);si=0;
 $("code").innerHTML=prog.map((x,i)=>`<span>${line(x)}<i data-del="${i}" title="Sil">x</i></span>`).join("")||"<span>// Yukarıdan blok ekle</span>";
 $("chips").innerHTML=prog.map(x=>`<button class="chip" data-g="${x.id}">${x.id}</button>`).join("");$("res").className="res";draw(false)}
function draw(b){const s=steps[si];
 [...$("code").children].forEach((c,k)=>c.classList.toggle("on",k===s.l));
 const f=(id,a,fn)=>$(id).innerHTML=a.map(x=>`<span class="it">${fn(x)}</span>`).join("");
 f("stack",s.s.stack,x=>x);f("web",s.s.web,x=>x.id+" · "+x.ms+"ms");f("micro",s.s.micro,x=>x);f("macro",s.s.macro,x=>x.id);
 $("say").textContent=s.t;$("lane").innerHTML=s.s.out.map(id=>{const t=(prog.find(p=>p.id==id)||{}).type,c=t=="log"?"var(--g)":t=="timeout"?"var(--bl)":"var(--rd)";return `<span class="pj" style="color:${c}"><svg viewBox="-34 -26 68 52" width="50" height="38"><use href="#pl"/></svg>${id}</span>`}).join("")||'<span class="mut mono">Pist boş: henüz inen uçak yok.</span>';$("out").textContent=s.s.out.length?"> "+s.s.out.join("  "):"> (konsol boş)";
 $("cnt").textContent=`Adım ${si}/${steps.length-1}`;$("pv").disabled=si==0;$("nx").disabled=si==steps.length-1;
 $("guess").textContent="Tahmin: "+guess.join("  ");
 document.querySelectorAll(".chip").forEach(b=>b.classList.toggle("used",guess.includes(b.dataset.g)));
 if(b)beep(s.f);if(si==steps.length-1)stop()}
function load(k){prog=PRE[k].map((x,n)=>({type:x[0],ms:x[1]||0,id:L(n)}));reset()}
document.addEventListener("click",e=>{const t=e.target;
 if(t.dataset.add){if(prog.length<7){prog.push({type:t.dataset.add,ms:+$("ms").value,id:L(prog.length)});reset()}}
 else if(t.dataset.pre)load(+t.dataset.pre);
 else if(t.dataset.del){prog.splice(+t.dataset.del,1);prog.forEach((x,i)=>x.id=L(i));reset()}
 else if(t.dataset.g&&!guess.includes(t.dataset.g)){guess.push(t.dataset.g);draw(false)}});
$("clr").onclick=()=>{prog=[];reset()};$("gu").onclick=()=>{guess.pop();draw(false)};
$("nx").onclick=()=>{if(si<steps.length-1){si++;draw(true)}};$("pv").onclick=()=>{stop();if(si>0){si--;draw(true)}};
$("rs").onclick=()=>{stop();si=0;draw(false)};
$("pl").onclick=()=>{if(timer){stop();return}if(si==steps.length-1)si=0;draw(true);$("pl").textContent="Durdur";
 timer=setInterval(()=>{if(si<steps.length-1){si++;draw(true)}},2000)};
$("chk").onclick=async()=>{const r=$("res");r.className="res show";
 if(!prog.length){r.textContent="Önce en az bir blok ekle.";return}
 if(guess.length<prog.length){r.textContent=`Tahmin eksik: ${prog.length} harfin hepsini sırayla seç.`;return}
 r.textContent="Gerçek tarayıcıda çalıştırılıyor...";
 const real=await realRun(prog),sim=steps[steps.length-1].s.out;
 r.innerHTML=`Gerçek tarayıcı sonucu: <b>${real.join(", ")}</b><br>`+(guess.join()==real.join()?'<span class="ok">Tahmin doğru!</span>':`<span class="no">Tahmin farklı:</span> ${guess.join(", ")}. Radar ekranını adım adım izle.`)+
 `<br>Simülasyon: ${sim.join()==real.join()?'<span class="ok">gerçek sonuçla aynı</span>':'<span class="no">gerçekten farklı</span>'}.`;si=0;draw(false)};
/* ---------- Bubbling ---------- */
const el=["b1","b2","b3"],nm={b1:"DIŞ",b2:"ORTA",b3:"İÇ"};let lg=[];
el.forEach(id=>{
 $(id).addEventListener("click",()=>lg.push("capture → "+nm[id]),{capture:true});
 $(id).addEventListener("click",e=>{lg.push("bubble  ← "+nm[id]);if(id=="b2"&&$("stp").checked){e.stopPropagation();lg.push("(orta kutuda durduruldu)")}})});
$("b3").addEventListener("click",()=>{});
document.addEventListener("click",e=>{if(e.target.closest("#b1")){const n=lg.length;setTimeout(()=>{$("elog").textContent=lg.join("\n");lg=[]},0)}},false);
$("b3").addEventListener("keydown",e=>{if(e.key=="Enter")$("b3").click()});
/* ---------- Kilitlenme ---------- */
let c=0,last=Date.now();
setInterval(()=>{c++;$("cn").textContent=c;$("mt").style.width=(c%50)*2+"%";const d=Date.now()-last;last=Date.now();$("fz").textContent=d>500?`(${(d/1000).toFixed(1)} sn kilitlendi)`:""},100);
$("blk").onclick=()=>{const t=Date.now();while(Date.now()-t<2000);};
/* ---------- Sahte fetch + JSON ---------- */
const fakeFetch=()=>new Promise(r=>setTimeout(()=>r('{"ucus":"TK1234","irtifa":10500,"durum":"inis"}'),1200));
$("ft").onclick=async()=>{const o=$("fl"),t0=Date.now(),ts=()=>`[${((Date.now()-t0)/1000).toFixed(1)} sn] `;
 o.textContent=ts()+"İstek gönderildi...";
 const p=fakeFetch();o.textContent+="\n"+ts()+"Kule beklemiyor, başka işlere bakıyor.";
 const raw=await p;o.textContent+="\n"+ts()+"Yanıt geldi (metin): "+raw;
 const u=JSON.parse(raw);o.textContent+="\n"+ts()+`JSON.parse → uçuş ${u.ucus}, irtifa ${u.irtifa} m, durum: ${u.durum}`};
/* ---------- Sözdizimi renklendirme + kopyala ---------- */
function hl(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/(\/\/.*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(const|let|var|function|return|if|while|for|await|async|new|of)\b|\b(\d+)\b/g,(m,c,q,k,n)=>c?`<span class="c">${c}</span>`:q?`<span class="s">${q}</span>`:k?`<span class="k">${k}</span>`:`<span class="n">${n}</span>`)}
document.querySelectorAll("pre.hl").forEach(p=>{const t=p.textContent;p.innerHTML=hl(t);p.insertAdjacentHTML("beforebegin",`<div class="row" style="justify-content:space-between;margin-bottom:0"><span class="mono mut">${p.dataset.t||"javascript"}</span><button class="cp">Kopyala</button></div>`)});
document.addEventListener("click",async e=>{const b=e.target;if(!b.classList.contains("cp"))return;
 try{await navigator.clipboard.writeText(b.closest(".row").nextElementSibling.textContent);b.textContent="Kopyalandı"}catch(x){b.textContent="Kopyalanamadı"}setTimeout(()=>b.textContent="Kopyala",1500)});
/* ---------- Canlı konsol ---------- */
const EX=[`console.log("A: ana kod");\nsetTimeout(() => console.log("B: setTimeout 0"), 0);\nPromise.resolve().then(() => console.log("C: Promise"));\nqueueMicrotask(() => console.log("D: microtask"));\nconsole.log("E: ana kod bitti");`,
`const bekle = ms => new Promise(r => setTimeout(r, ms));\nconsole.log("1: başla");\nawait bekle(500);\nconsole.log("2: 500 ms sonra");\nawait bekle(500);\nconsole.log("3: bir 500 ms daha");`,
`for (var i = 0; i < 3; i++) setTimeout(() => console.log("var:", i), 0);\nfor (let j = 0; j < 3; j++) setTimeout(() => console.log("let:", j), 0);`];
$("ed").value=EX[0];
document.querySelectorAll("[data-ex]").forEach(b=>b.onclick=()=>{$("ed").value=EX[+b.dataset.ex]});
$("cl").onclick=()=>{$("rep").textContent="Çıktı burada görünecek."};
$("rn").onclick=()=>{const out=[],t0=performance.now(),upd=()=>$("rep").textContent=out.join("\n")||"(çıktı yok)";
 const log=(...a)=>{out.push(`[${(performance.now()-t0).toFixed(0)} ms] `+a.map(x=>typeof x=="object"?JSON.stringify(x):String(x)).join(" "));upd()};
 try{new Function("console","return (async()=>{"+$("ed").value+"\n})()")({log,warn:log,error:log,info:log}).catch(e=>log("HATA: "+e.message))}catch(e){log("HATA: "+e.message)}
 upd()};
/* ---------- Site özellikleri ---------- */
const root=document.documentElement;
$("th").onclick=()=>{const cur=root.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");root.dataset.theme=cur=="dark"?"light":"dark"};
addEventListener("scroll",()=>{const h=root.scrollHeight-innerHeight;$("pg").style.width=(h>0?scrollY/h*100:0)+"%";$("top").hidden=scrollY<600},{passive:true});
$("top").onclick=()=>scrollTo({top:0,behavior:"smooth"});
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){const a=document.querySelector(`nav a[href="#${en.target.id}"]`);document.querySelectorAll("nav a").forEach(x=>x.classList.toggle("act",x===a));if(a)$("loc").textContent=a.textContent}}),{rootMargin:"-30% 0px -60% 0px"});
for(let n=1;n<=12;n++){const s=document.getElementById("b"+String(n).padStart(2,"0"));if(s)io.observe(s)}
$("q").addEventListener("input",()=>{const k=$("q").value.trim().toLocaleLowerCase("tr");let c=0;
 document.querySelectorAll("main section").forEach(s=>{const ok=!k||s.textContent.toLocaleLowerCase("tr").includes(k);s.hidden=!ok;if(ok)c++});
 $("sc").textContent=k?`${c} bölüm`:""});
$("fm").addEventListener("submit",async e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target)),o=$("fo");
 o.textContent="Gönderiliyor...";await new Promise(r=>setTimeout(r,900));
 o.textContent="Gönderildi (simülasyon). Alınan veri:\n"+JSON.stringify(d,null,2)});
$("fm").addEventListener("reset",()=>{$("fo").textContent="Form henüz gönderilmedi."});
/* ---------- Sunum modu ---------- */
let pres=false;
$("pr").onclick=()=>{pres=!pres;document.body.classList.toggle("pres",pres);$("pr").textContent=pres?"SUNUM: AÇIK":"SUNUM";$("pr").setAttribute("aria-pressed",pres);$("sc").textContent=pres?"← → ile bölüm değiştir":""};
addEventListener("keydown",e=>{if(!pres||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||(e.key!="ArrowRight"&&e.key!="ArrowLeft"))return;e.preventDefault();
 const L=[...document.querySelectorAll("main>section[id],main>aside[id]")].filter(s=>!s.hidden),top=s=>s.getBoundingClientRect().top;
 const t=e.key=="ArrowRight"?(L.find(s=>top(s)>200)||L[L.length-1]):([...L].reverse().find(s=>top(s)<-20)||L[0]);
 t.scrollIntoView({behavior:"smooth"})});
/* ---------- Mini sınav ---------- */
const QZ=[
{q:`Aşağıdaki kod konsola hangi sırayla yazar?`,c:`console.log("A");\nsetTimeout(() => console.log("B"), 0);\nconsole.log("C");`,o:[`A, B, C`,`A, C, B`,`B, A, C`,`C, B, A`],a:1,e:`setTimeout geri çağrısı Task kuyruğunda bekler ve ana kod (A ve C) bitince çalışır.`},
{q:`Bu kodda hangisi önce yazılır?`,c:`setTimeout(() => console.log("T"), 0);\nPromise.resolve().then(() => console.log("P"));`,o:[`T, P`,`P, T`,`Rastgele`,`Hata verir`],a:1,e:`Microtask (Promise) her zaman sıradaki Task'tan (setTimeout) önce çalışır.`},
{q:`Uzun süren senkron bir <code>while</code> döngüsü çalışırken ne olur?`,o:[`Sayfa normal çalışmaya devam eder`,`Zamanlayıcılar ve tıklamalar döngü bitene kadar bekler`,`Döngü otomatik olarak arka plana alınır`,`Sadece Promise'ler durur`],a:1,e:`Pist tektir: döngü bitmeden kuyruklardaki hiçbir iş çalıştırılamaz. Bölüm 04'teki sayaç bunu gösterir.`},
{q:`<code>await</code> bir async fonksiyonu nasıl etkiler?`,o:[`Tüm sayfayı durdurur`,`Fonksiyonu duraklatır ama pisti tutmaz`,`Fonksiyonu başka bir iş parçacığına taşır`,`Hiçbir etkisi yoktur`],a:1,e:`await'ten sonrası bir microtask olarak devam eder. Bu arada ana kod ve diğer işler çalışmaya devam eder.`},
{q:`Bu kod hangi çıktıyı verir?`,c:`for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}`,o:[`0, 1, 2`,`3, 3, 3`,`2, 2, 2`,`0, 0, 0`],a:1,e:`var tek bir değişkendir: geri çağrılar çalışana kadar döngü bitmiş ve i 3 olmuştur. let kullanırsan her turun kendi i'si olur.`},
{q:`İç kutuya tıklayınca (bubbling) dinleyiciler hangi sırayla çalışır?`,o:[`İten dışa (iç, orta, dış)`,`Dıştan içe`,`Rastgele`,`Yalnızca iç kutu`],a:0,e:`Varsayılan olarak olay hedeften başlar ve üst elemanlara doğru kabarcık gibi çıkar. Capture aşaması ise dıştan içe iner.`}];
let qi=0,qs=0;
function qr(){const d=$("qz");
 if(qi>=QZ.length){d.innerHTML=`<p class="mono">SONUÇ: <b>${qs} / ${QZ.length}</b> — ${qs==QZ.length?"Kule kontrolörü seviyesi!":qs>=4?"Çok iyi, birkaç ayrıntı kaldı.":"Bölüm 02 ve 10'da tekrar dene."}</p><button id="qre" class="go">Yeniden başla</button>`;$("qre").onclick=()=>{qi=0;qs=0;qr()};return}
 const x=QZ[qi];
 d.innerHTML=`<p class="mono mut">SORU ${qi+1} / ${QZ.length} · PUAN ${qs}</p><p>${x.q}</p>${x.c?`<pre class="hl">${hl(x.c)}</pre>`:""}<div class="row">${x.o.map((o,i)=>`<button data-qa="${i}">${o}</button>`).join("")}</div><div id="qf" aria-live="polite"></div>`;
 d.querySelectorAll("[data-qa]").forEach(b=>b.onclick=()=>{const k=+b.dataset.qa,ok=k==x.a;if(ok)qs++;
  d.querySelectorAll("[data-qa]").forEach((bb,i)=>{bb.disabled=true;if(i==x.a)bb.style.borderColor="var(--g)";else if(i==k)bb.style.borderColor="var(--rd)"});
  $("qf").innerHTML=`<div class="say" style="min-height:0"><b class="${ok?"ok":"no"}">${ok?"Doğru!":"Yanlış."}</b> ${x.e}</div><div class="row"><button id="qn" class="go">${qi==QZ.length-1?"Sonucu gör":"Sonraki soru"}</button></div>`;
  $("qn").onclick=()=>{qi++;qr()}})}
qr();
load(0);
