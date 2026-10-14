(()=>{
  const buttons=[...document.querySelectorAll('[data-theme-toggle]')];
  function update(){
    const light=document.documentElement.dataset.theme==='light';
    for(const button of buttons){
      const label=light?'Switch to dark mode':'Switch to bright mode';
      button.innerHTML=button.classList.contains('home-theme-toggle')
        ? `${light?'☾':'☀'} <span>${label}</span>`
        : `${light?'☾':'☀'} <span>${light?'Dark mode':'Bright mode'}</span>`;
      button.setAttribute('aria-label',label);
      button.setAttribute('aria-pressed',String(light));
      button.title=label;
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',light?'#f4f7f0':'#090d0e');
  }
  function apply(theme){
    document.documentElement.dataset.theme=theme;
    document.documentElement.style.colorScheme=theme;
    update();
    document.dispatchEvent(new Event('portfolio-theme-change'));
  }
  buttons.forEach(button=>button.addEventListener('click',()=>{
    const theme=document.documentElement.dataset.theme==='light'?'dark':'light';
    apply(theme);
    try{localStorage.setItem('viraj-portfolio-theme',theme);}catch{}
  }));
  addEventListener('storage',event=>{
    if(event.key==='viraj-portfolio-theme'&&['light','dark'].includes(event.newValue))apply(event.newValue);
  });
  update();
})();
