
(function(){
 const key='kyouthCompletedDays';
 const get=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return[]}};
 const set=(v)=>localStorage.setItem(key,JSON.stringify(v));
 window.toggleDayComplete=function(date){let v=get();if(v.includes(date)){v=v.filter(x=>x!==date)}else{v.push(date)}set(v);location.reload()};
 window.copyFeedback=function(){const t=document.getElementById('feedbackText'); if(!t)return; navigator.clipboard.writeText(t.value||'').then(()=>{const b=document.getElementById('copyBtn'); if(b){b.textContent='Copied';setTimeout(()=>b.textContent='Copy feedback',1200)}})};
 document.addEventListener('DOMContentLoaded',()=>{
   const v=get();
   document.querySelectorAll('[data-complete-date]').forEach(el=>{const d=el.getAttribute('data-complete-date'); if(v.includes(d)){el.textContent='✓ Completed';el.classList.add('done')}});
   const pct=Math.round((v.length/37)*100); document.querySelectorAll('[data-progress-fill]').forEach(x=>x.style.width=pct+'%'); document.querySelectorAll('[data-progress-text]').forEach(x=>x.textContent=pct+'%'); document.querySelectorAll('[data-progress-count]').forEach(x=>x.textContent=v.length+' / 37');
 });
})();
