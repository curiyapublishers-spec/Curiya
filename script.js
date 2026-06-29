const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active');});
});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
