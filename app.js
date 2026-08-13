const $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
const $=(s,c=document)=>c.querySelector(s);
const data=window.KYOUTH_DATA;

let currentPhase='all';
let selectedDay=null;

function activateView(id){
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===id));
  $$('.main-nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>activateView(b.dataset.view)));
$$('[data-view-link]').forEach(b=>b.addEventListener('click',()=>activateView(b.dataset.viewLink)));

function phaseById(id){return data.phases.find(p=>p.id===id);}
function dayDate(id){return new Date(id+'T12:00:00');}
function dateStatus(id){
  const d=dayDate(id);
  const now=new Date();
  const today=new Date(now.getFullYear(),now.getMonth(),now.getDate(),12);
  if(d.toDateString()===today.toDateString()) return 'today';
  return d<today?'past':'future';
}
function statusLabel(status){return status==='today'?'Today':status==='past'?'Complete / past':'Upcoming';}

function renderPhases(){
  $('#phaseTrack').innerHTML=data.phases.map(p=>`
    <button class="phase-card ${currentPhase===p.id?'active':''}" data-phase="${p.id}">
      <span class="phase-no">${p.no}</span>
      <b>${p.title}</b>
      <time>${p.range}</time>
      <p>${p.outcome}</p>
    </button>`).join('');
  $$('#phaseTrack [data-phase]').forEach(btn=>btn.addEventListener('click',()=>{
    currentPhase=btn.dataset.phase;
    renderFilters();renderPhases();renderCalendar();
    const first=data.days.find(d=>d.phase===currentPhase);
    if(first) openDay(first.id,true);
  }));
}

function renderFilters(){
  const items=[{id:'all',title:'All'},...data.phases.map(p=>({id:p.id,title:p.title}))];
  $('#filterRow').innerHTML=items.map(x=>`<button class="${currentPhase===x.id?'active':''}" data-filter="${x.id}">${x.title}</button>`).join('');
  $$('#filterRow [data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    currentPhase=btn.dataset.filter;
    renderFilters();renderPhases();renderCalendar();
  }));
}

function renderCalendar(){
  const days=currentPhase==='all'?data.days:data.days.filter(d=>d.phase===currentPhase);
  $('#calendarList').innerHTML=days.map(d=>{
    const p=phaseById(d.phase), s=dateStatus(d.id);
    return `<button class="day-row ${selectedDay===d.id?'active':''}" data-day="${d.id}">
      <div class="day-date"><b>${d.date}</b><small>${d.weekday}</small></div>
      <div class="day-copy"><span>${p.title}</span><b>${d.title}</b><small>${d.owner} · ${d.duration}</small></div>
      <div class="day-meta"><small>${d.materials.length} material${d.materials.length===1?'':'s'}</small><span class="status ${s}">${statusLabel(s)}</span></div>
    </button>`;
  }).join('');
  $$('#calendarList [data-day]').forEach(btn=>btn.addEventListener('click',()=>openDay(btn.dataset.day)));
}

function openDay(id,scroll=false){
  const d=data.days.find(x=>x.id===id); if(!d) return;
  selectedDay=id;
  const p=phaseById(d.phase);
  const idx=data.days.findIndex(x=>x.id===id);
  const prev=data.days[idx-1], next=data.days[idx+1];

  $('#dayPane').innerHTML=`
    <div class="day-hero">
      <div class="day-hero-top">
        <div>
          <span class="kicker">${p.no} / ${p.title.toUpperCase()} · ${d.weekday} ${d.date}</span>
          <h2>${d.title}</h2>
          <p>${d.objective}</p>
        </div>
        <span class="owner-pill">${d.owner} · ${d.duration}</span>
      </div>
    </div>
    <div class="day-body">
      <section class="day-section">
        <div class="day-section-head"><span>Agenda</span><small>${d.agenda.length} blocks</small></div>
        <div class="agenda-list">
          ${d.agenda.map(a=>`<article class="agenda-item">
            <time>${a.time}</time>
            <div><b>${a.title}</b><p>${a.detail}</p></div>
            <div class="agenda-output"><small>OUTPUT</small>${a.output}</div>
          </article>`).join('')}
        </div>
      </section>

      <section class="day-section">
        <div class="day-section-head"><span>Materials for this day</span><small>Open directly</small></div>
        <div class="material-links">
          ${d.materials.map(m=>`<a class="material-card" href="${m.href}" target="_blank">
            <span>${m.type}</span><b>${m.title}</b><p>${m.desc}</p><i>Open material ↗</i>
          </a>`).join('')}
        </div>
      </section>

      <section class="day-section">
        <div class="two-col">
          <article class="mini-card"><h4>Before this session</h4><ul>${d.prep.map(x=>`<li>${x}</li>`).join('')}</ul></article>
          <article class="mini-card"><h4>Must exist by the end</h4><ul>${d.outputs.map(x=>`<li>${x}</li>`).join('')}</ul></article>
        </div>
        <div class="day-nav">
          <button ${prev?'':'disabled'} data-prev="${prev?prev.id:''}">← ${prev?prev.date:'Start'}</button>
          <button ${next?'':'disabled'} data-next="${next?next.id:''}">${next?next.date:'End'} →</button>
        </div>
      </section>
    </div>`;

  renderCalendar();
  const pb=$('[data-prev]'); if(pb&&prev) pb.addEventListener('click',()=>openDay(prev.id,true));
  const nb=$('[data-next]'); if(nb&&next) nb.addEventListener('click',()=>openDay(next.id,true));
  if(scroll && window.innerWidth<1100) $('#dayPane').scrollIntoView({behavior:'smooth',block:'start'});
  history.replaceState(null,'','#day='+id);
}

function renderMaterials(){
  const map=new Map();
  data.days.forEach(d=>d.materials.forEach(m=>{
    if(!map.has(m.href)) map.set(m.href,{...m,days:[]});
    map.get(m.href).days.push(`${d.date}`);
  }));
  const extra=[
    {title:'Starter Prototype Folder',href:'starter_repo/index.html',type:'Starter',desc:'Fallback HTML/CSS/JS starting point.',days:['17 Aug','20 Aug']},
    {title:'Programme Data File',href:'data/programme.js',type:'Admin',desc:'Edit this file to change programme dates, agendas or linked materials.',days:['Programme admin']}
  ];
  extra.forEach(m=>{if(!map.has(m.href))map.set(m.href,m)});
  $('#materialsGrid').innerHTML=[...map.values()].map(m=>`<article>
    <span>${m.type}</span><b>${m.title}</b><p>${m.desc}</p>
    <small>Used: ${[...new Set(m.days)].join(' · ')}</small>
    <a href="${m.href}" target="_blank">Open ↗</a>
  </article>`).join('');
}

function renderBrief(){
  $('#briefRoadmap').innerHTML=data.phases.map(p=>`<article><span>${p.no} · ${p.range}</span><b>${p.title}</b><small>${p.outcome}</small></article>`).join('');
}

$('#showAll').addEventListener('click',()=>{currentPhase='all';renderFilters();renderPhases();renderCalendar();});
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-go-day]');
  if(!b) return;
  activateView('calendar');
  currentPhase='all';renderFilters();renderPhases();
  openDay(b.dataset.goDay,true);
});

renderPhases();
renderFilters();
renderCalendar();
renderMaterials();
renderBrief();

const hash=location.hash.match(/day=([0-9-]+)/);
if(hash && data.days.some(d=>d.id===hash[1])) openDay(hash[1]);
else {
  const today=data.days.find(d=>dateStatus(d.id)==='today');
  openDay(today?today.id:'2026-08-20');
}
