/* Website behavior. Most editing should happen in content.js, not this file. */
(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const escapeText = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const isLink = value => typeof value === 'string' && /^https?:\/\//i.test(value);
  const menuButton = $('#menu-toggle'), navigation = $('#nav');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded','false');
    }));
  }
  if (typeof SITE_CONFIG === 'undefined') { console.warn('content.js missing — static homepage remains available.'); return; }
  const c = SITE_CONFIG;
  const games = Array.isArray(c.games) ? c.games.filter(g => g && g.title && isLink(g.link)) : [];
  let filter = 'All';
  let activeAppId = null;

  const setText = (id, value) => { const el = document.getElementById(id); if(el && value !== undefined) el.textContent = String(value); };
  const setLink = (id, url) => { const el = document.getElementById(id); if(el && isLink(url)) el.href=url; };
  const appLinkIds = ['header-store','hero-store','full-store-link','about-store'];
  appLinkIds.forEach(id=>setLink(id,c.developerUrl));
  document.title = c.developerName + ' | iOS Games';
  setText('hero-eyebrow',c.eyebrow);
  setText('hero-tagline',c.tagline);
  setText('hero-description',c.heroDescription);
  setText('collection-intro',c.collectionIntro);
  setText('about-heading',c.aboutHeading);
  setText('about-text',c.aboutText);
  setText('contact-heading',c.contactHeading);
  setText('contact-description',c.contactDescription);
  setText('footer-developer',c.developerName);
  setText('copyright','© '+new Date().getFullYear()+' '+c.developerName+'. All rights reserved.');
  if(c.headline){
    const parts=String(c.headline).split('\n');
    const hero=$('#hero-title');
    if(hero){hero.textContent='';hero.append(document.createTextNode(parts[0]||''));if(parts[1]){hero.append(document.createElement('br'));const em=document.createElement('em');em.textContent=parts.slice(1).join(' ');hero.append(em);}}
  }
  if(c.logo){ document.querySelectorAll('.brand img,.footer-brand img').forEach(img=>img.src=c.logo); }
  if(c.email && /^\S+@\S+\.\S+$/.test(c.email)){
    const mail=$('#contact-email'); if(mail){mail.hidden=false;mail.href='mailto:'+encodeURIComponent(c.email).replace('%40','@');mail.innerHTML='Email '+escapeText(c.email)+' <span>↗</span>';}
  }
  const socials=$('#socials');
  if(socials && Array.isArray(c.socials)){
    socials.innerHTML=c.socials.filter(s=>s && s.label && isLink(s.url)).map(s=>'<a href="'+escapeText(s.url)+'" target="_blank" rel="noopener">'+escapeText(s.label)+' ↗</a>').join('');
  }
  const featured=games.find(g=>g.featured)||games[0];
  if(featured){
    setText('hero-featured-name',featured.title);
    setLink('hero-featured-link',featured.link);
    const hi=$('#hero-art');if(hi){hi.src=featured.image||'assets/covers/kitten.svg';hi.alt='Decorative artwork for '+featured.title;}
  }

  const grid=$('#games-grid'), count=$('#result-count');
  function gameMarkup(g){
    const img=escapeText(g.image||'assets/covers/kitten.svg');
    return `<article class="game-card" data-category="${escapeText(g.category)}">
      <div class="game-cover"><img class="cover-img" src="${img}" alt="Decorative cover for ${escapeText(g.title)}" loading="lazy" ${g.appleIcon?'': ''}>
        ${g.appleIcon?'<img class="store-icon" src="'+escapeText(g.appleIcon)+'" alt="Official App Store icon" loading="lazy">':''}
      </div><div class="game-card-body">
      <div class="card-meta">${escapeText(g.category||'Mobile Game')} <span>iPhone &amp; iPad</span></div>
      <h3>${escapeText(g.title)}</h3><p>${escapeText(g.description||'Discover this game on the App Store.')}</p>
      <div class="card-actions"><a class="mini-link" href="${escapeText(g.link)}" target="_blank" rel="noopener">App Store <span>↗</span></a>
      <button type="button" class="details-btn" data-game-id="${escapeText(g.id)}" aria-label="Details for ${escapeText(g.title)}">Details +</button></div>
      </div></article>`;
  }
  function renderGames(){
    const filtered=filter==='All'? games : games.filter(g=>g.category===filter);
    if(grid){grid.innerHTML=filtered.map(gameMarkup).join('') || '<p class="empty">No games found in this category yet.</p>';}
    if(count)count.textContent=`${filtered.length} ${filtered.length===1?'GAME':'GAMES'} / ${games.length} TOTAL`;
    document.querySelectorAll('.filter').forEach(b=>{
      const active=b.dataset.filter===filter;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));
    });
  }
  document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter||'All';renderGames();}));
  document.querySelectorAll('.genre-tile').forEach(b=>b.addEventListener('click',()=>{
    filter=b.dataset.genre||'All';renderGames();$('#games')?.scrollIntoView({behavior:'smooth'});
  }));
  renderGames();

  const dialog=$('#game-dialog');
  function openGame(id){
    const g=games.find(game=>String(game.id)===String(id)); if(!g || !dialog)return;
    activeAppId=g.id;
    setText('dialog-title',g.title);setText('dialog-category',g.category);setText('dialog-description',g.description);
    setLink('dialog-store',g.link);
    const cover=$('#dialog-image');if(cover){cover.src=g.appleIcon||g.image||'assets/covers/kitten.svg';cover.alt='Artwork for '+g.title;}
    const screens=(Array.isArray(g.screenshots)&&g.screenshots.length?g.screenshots:g.appleScreenshots)||[];
    const wrap=$('#screenshots-wrap'), list=$('#screenshots');
    if(wrap && list){wrap.hidden=!screens.length; list.innerHTML=screens.map(src=>'<img src="'+escapeText(src)+'" alt="'+escapeText(g.title)+' screenshot" loading="lazy">').join('');}
    if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
  }
  grid?.addEventListener('click',ev=>{
    const button=ev.target.closest('[data-game-id]');if(button)openGame(button.dataset.gameId);
  });
  $('#dialog-close')?.addEventListener('click',()=>dialog?.close());
  dialog?.addEventListener('click',ev=>{if(ev.target===dialog)dialog.close();});

  // OPTIONAL: Fetch official App Store icons/screenshots. If lookup fails (region/CORS/timeout),
  // all local cover art and links are already usable, with no empty or broken sections.
  async function tryAppleArtwork(){
    if(!c.autoAppleArtwork || !games.length || !('fetch' in window))return;
    const ids=games.map(g=>g.id).filter(x=>/^\d+$/.test(String(x)));
    if(!ids.length)return;
    const ctrl=new AbortController();
    const guard=setTimeout(()=>ctrl.abort(),9000);
    try{
      const url='https://itunes.apple.com/lookup?id='+encodeURIComponent(ids.join(','))+'&country='+encodeURIComponent(c.appleCountry||'in')+'&entity=software';
      const response=await fetch(url,{signal:ctrl.signal});
      if(!response.ok)throw new Error('Lookup status '+response.status);
      const data=await response.json();
      for(const item of (data.results||[])){
        const g=games.find(x=>String(x.id)===String(item.trackId));if(!g)continue;
        if(item.artworkUrl512||item.artworkUrl100)g.appleIcon=item.artworkUrl512||item.artworkUrl100;
        if(Array.isArray(item.screenshotUrls)&&item.screenshotUrls.length)g.appleScreenshots=item.screenshotUrls.slice(0,8);
        else if(Array.isArray(item.ipadScreenshotUrls)&&item.ipadScreenshotUrls.length)g.appleScreenshots=item.ipadScreenshotUrls.slice(0,8);
      }
      renderGames();
      if(featured?.appleScreenshots?.length){const img=$('#hero-art');if(img){img.src=featured.appleScreenshots[0];img.alt='App Store screenshot for '+featured.title;}}
      if(activeAppId && dialog?.open){ const g=games.find(x=>x.id===activeAppId); if(g)openDetailsScreens(g); }
    }catch(e){console.info('App Store preview auto-fetch unavailable; local artwork is shown.');}
    finally{clearTimeout(guard);}
  }
  function openDetailsScreens(g){
    const screens=(Array.isArray(g.screenshots)&&g.screenshots.length?g.screenshots:g.appleScreenshots)||[];
    const wrap=$('#screenshots-wrap'),list=$('#screenshots');if(wrap&&list){wrap.hidden=!screens.length;list.innerHTML=screens.map(src=>'<img src="'+escapeText(src)+'" alt="'+escapeText(g.title)+' screenshot" loading="lazy">').join('');}
  }
  tryAppleArtwork();
})();
