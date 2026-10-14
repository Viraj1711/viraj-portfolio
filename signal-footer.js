(()=>{
  const formatter=new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false});
  function clock(){document.querySelectorAll('[data-footer-clock]').forEach(t=>{t.textContent=formatter.format(new Date())+' IST';t.dateTime=new Date().toISOString();});}
  clock();setInterval(clock,60000);
  document.querySelectorAll('[data-footer-top]').forEach(b=>b.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches||window.portfolioMotionPaused?'instant':'smooth'})));
  document.querySelectorAll('[data-footer-copy]').forEach(b=>b.addEventListener('click',async()=>{const status=b.closest('footer').querySelector('[data-footer-status]');try{await navigator.clipboard.writeText('dhasviraj0707@gmail.com');status.textContent='Email copied. Ready for your next conversation.';}catch{status.textContent='Copy this email address: dhasviraj0707@gmail.com';}}));
})();
