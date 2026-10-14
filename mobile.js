(()=>{
const media=matchMedia('(max-width:700px)');
const dock=document.createElement('nav');dock.className='mobile-dock';dock.setAttribute('aria-label','Mobile quick navigation');
const file=location.pathname.split('/').pop()||'index.html';
dock.innerHTML=`<a href="index.html" ${file==='index.html'?'aria-current="page"':''}><span class="dock-icon" aria-hidden="true">⌂</span><span>Home</span></a><a href="projects.html" ${file==='projects.html'||file.startsWith('project-')?'aria-current="page"':''}><span class="dock-icon" aria-hidden="true">⌘</span><span>Projects</span></a><button class="dock-ai" type="button"><span class="dock-icon" aria-hidden="true">✳</span><span>Ask AI</span></button><a href="reach.html" ${file==='reach.html'?'aria-current="page"':''}><span class="dock-icon" aria-hidden="true">↗</span><span>Reach me</span></a><button class="dock-menu" type="button" aria-controls="site-nav" aria-expanded="false"><span class="dock-icon" aria-hidden="true">☰</span><span>Explore</span></button>`;
document.body.append(dock);
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
dock.querySelector('.dock-ai').addEventListener('click',()=>{if(nav.classList.contains('open'))menu.click();document.querySelector('.assistant-launch').click();});
dock.querySelector('.dock-menu').addEventListener('click',()=>menu.click());
const scrim=document.createElement('button');scrim.className='mobile-menu-scrim';scrim.type='button';scrim.tabIndex=-1;scrim.setAttribute('aria-label','Close navigation');document.body.append(scrim);scrim.addEventListener('click',()=>{if(nav.classList.contains('open'))menu.click();});
new MutationObserver(()=>{const open=nav.classList.contains('open');scrim.classList.toggle('visible',open);dock.querySelector('.dock-menu').setAttribute('aria-expanded',String(open));}).observe(nav,{attributes:true,attributeFilter:['class']});
function viewport(){const height=visualViewport?.height||innerHeight;document.documentElement.style.setProperty('--mobile-visual-height',height+'px');const editing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);dock.classList.toggle('keyboard-hidden',editing&&height<innerHeight*.8);}
visualViewport?.addEventListener('resize',viewport);addEventListener('resize',viewport);document.addEventListener('focusin',viewport);document.addEventListener('focusout',()=>setTimeout(viewport,100));viewport();
new MutationObserver(()=>document.body.classList.toggle('mobile-modal-open',!!document.querySelector('dialog[open]'))).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
media.addEventListener('change',()=>{if(!media.matches&&nav.classList.contains('open'))menu.click();});
})();
