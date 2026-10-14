// Apply the saved preference before styles paint; gracefully handle blocked storage.
(()=>{
  let saved;
  try{saved=localStorage.getItem('viraj-portfolio-theme');}catch{}
  const theme=saved==='light'||saved==='dark'?saved:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
  document.documentElement.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
})();
