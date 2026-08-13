const $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
function activateView(id){$$('.view').forEach(v=>v.classList.toggle('active',v.id===id));$$('.main-nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===id));window.scrollTo({top:0,behavior:'smooth'});}
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>activateView(b.dataset.view)));
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>activateView(b.dataset.go)));
$$('[data-view-link]').forEach(b=>b.addEventListener('click',()=>activateView(b.dataset.viewLink)));
const data=window.KYOUTH_DATA;
document.getElementById('readinessTimeline').innerHTML=data.readiness.map(m=>`<article class="milestone"><time>${m.date}</time><div><b>${m.title}</b><p>${m.text}</p></div><span class="tag">${m.owner}</span></article>`).join('');
document.getElementById('roadmapGrid').innerHTML=data.roadmap.map(m=>`<article><span>${m.phase}</span><b>${m.title}</b><p>${m.text}</p></article>`).join('');
document.getElementById('runlist').innerHTML=data.runlist.map(m=>`<article class="run-card"><time>${m.time}</time><div><h3>${m.title}</h3><p><b>Show:</b> ${m.show}</p><p><b>Output:</b> ${m.output}</p></div><div><b>Graduates do:</b><ul>${m.do.map(x=>`<li>${x}</li>`).join('')}</ul></div></article>`).join('');
document.getElementById('labBoard').innerHTML=data.labs.map(m=>`<article><span>${m.no}</span><b>${m.title}</b><p>${m.text}</p></article>`).join('');
document.getElementById('projectGrid').innerHTML=data.projects.map(m=>`<article><span>${m.track}</span><b>${m.title}</b><p>${m.text}</p></article>`).join('');
