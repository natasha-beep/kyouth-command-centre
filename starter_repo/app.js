const initiatives=[
{name:"Programme A",status:"On track",issue:"None"},
{name:"Programme B",status:"At risk",issue:"Evidence pending"},
{name:"Programme C",status:"Delayed",issue:"Approval outstanding"}
];
document.getElementById('summary').innerHTML=`<p>${initiatives.length} items tracked. ${initiatives.filter(x=>x.status!=="On track").length} need attention.</p>`;
document.getElementById('issues').innerHTML=initiatives.filter(x=>x.status!=="On track").map(x=>`<p><b>${x.name}</b> — ${x.status}: ${x.issue}</p>`).join('');