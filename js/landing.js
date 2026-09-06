/* Reference-led landing UI. Existing auth handlers, dashboard and backend stay intact. */
window.AdimaLanding = (() => {
const paths={
idea:'<path d="M9 18h6m-5 3h4M8.5 14.5a7 7 0 1 1 7 0C14.5 15.3 15 17 15 17H9s.5-1.7-.5-2.5Z"/>',
script:'<path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6m-6 4h6"/>',
image:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="8" cy="9" r="1.5"/><path d="m4 18 6-6 4 4 3-3 4 5"/>',
video:'<rect x="3" y="6" width="12" height="12" rx="3"/><path d="m15 10 6-4v12l-6-4Z"/>',
box:'<path d="m12 2 9 5v10l-9 5-9-5V7Zm0 10 9-5M3 7l9 5v10M7.5 4.5l9 5"/>',
play:'<path d="m9 5 11 7-11 7Z"/>',
sound:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M6 10v2a6 6 0 0 0 12 0v-2m-6 8v4m-4 0h8"/>',
scene:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 4l-3 6m9-6-3 6m9-6-3 6"/>',
sparkle:'<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/>',
bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-7Z"/>',
heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>'};
function icon(name,cls=''){return '<svg class="al-icon '+cls+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(paths[name]||paths.sparkle)+'</svg>';}
function mark(){return '<svg class="al-mark" viewBox="0 0 40 40" aria-hidden="true"><defs><linearGradient id="al-brand-gradient" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#00d6ed"/><stop offset=".5" stop-color="#63a6ff"/><stop offset="1" stop-color="#bc8cff"/></linearGradient></defs><path d="M20 1c4 13 6 15 19 19-13 4-15 6-19 19C16 26 14 24 1 20 14 16 16 14 20 1Z" fill="url(#al-brand-gradient)" stroke="white"/></svg>';}
function tile(name,label,tone){return '<div class="al-flow-item"><span class="al-tile '+tone+'">'+icon(name)+'</span><strong>'+label+'</strong></div>';}
function feature(name,title,subtitle,tone){return '<button class="al-feature" data-al-start><span class="al-small-tile '+tone+'">'+icon(name)+'</span><span><strong>'+title+'</strong><span class="al-feature-subtitle">'+subtitle+'</span></span></button>';}
function render(){return `
<div id="landingView" class="al-page">
<a class="al-skip" href="#al-main">Skip to content</a>
<div class="al-container">
<nav class="al-nav" aria-label="Main navigation">
<a class="al-brand" href="#al-home" aria-label="Adima AI home">${mark()}<span>Adima AI</span></a>
<button class="al-menu" id="alMenuButton" aria-expanded="false" aria-controls="alNavLinks" aria-label="Open navigation"><svg class="al-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
<div class="al-nav-links" id="alNavLinks"><a href="#al-features">Features</a><a href="#al-how">How it works</a><a href="#al-agent">About</a><button class="al-text-button" id="navLoginBtn">Log in</button><button class="al-button al-secondary" id="navSignupBtn">Get Started</button></div>
</nav>
<main id="al-main">
<header class="al-hero" id="al-home">
<span class="al-orb" aria-hidden="true"></span><span class="al-badge">${icon('sparkle')} AI for Creators</span>
<h1>Create smarter with AI</h1><p>Turn one idea into your next great video. <br><span>Scripts, creative direction and content ideas — all in one place.</span></p>
<div class="al-actions"><button class="al-button al-primary" id="heroTryBtn">Create with Adima ${icon('arrow')}</button><button class="al-button al-secondary" id="heroLaunchBtn">${icon('play')} View Demo</button></div>
<ul class="al-benefits"><li>${icon('bolt')}Simple</li><li>${icon('sparkle')}Powerful</li><li>${icon('heart')}Built for Creators</li></ul>
<span class="al-handnote" aria-hidden="true">Create <br>Without <br>Limits<svg viewBox="0 0 100 22"><path d="M3 18Q50-3 97 8" fill="none" stroke="currentColor" stroke-width="2"/></svg></span>
</header>
<section class="al-panel al-production" aria-labelledby="al-production-title"><div><h2 id="al-production-title">One idea. <br>A complete vision.</h2><p>Plan your video from the first spark<br class="al-desktop-break"> to the final frame.</p></div><div class="al-pipeline-wrap"><span class="al-caption">THE VIDEO WORKFLOW · PREVIEW</span><div class="al-pipeline">
${tile('idea','Idea','al-blue')}${icon('arrow','al-connector')}${tile('script','Script','al-purple')}${icon('arrow','al-connector')}${tile('image','Visuals','al-cyan')}${icon('arrow','al-connector')}${tile('video','Animation','al-blue')}${icon('arrow','al-connector')}${tile('box','Final video','al-orange')}
</div></div></section>
<section class="al-panel al-agent" id="al-agent" aria-labelledby="al-agent-title"><div class="al-agent-copy"><h2 id="al-agent-title">Meet your AI <br>creative partner.</h2><p>Bring the idea. Adima helps you<br class="al-desktop-break"> find the words and the direction.</p><button class="al-button al-primary" id="ctaGetStartedBtn">Chat with Adima ${icon('arrow')}</button></div>
<div class="al-mascot-scene" aria-label="Adima mascot surrounded by creative workflow stages" role="img"><div class="al-orbit"></div><span class="al-orbit-label al-orbit-top">Plan</span><span class="al-orbit-label al-orbit-left">Think</span><span class="al-orbit-label al-orbit-right">Create</span><span class="al-orbit-label al-orbit-bottom-left">Research</span><span class="al-orbit-label al-orbit-bottom-right">Deliver</span><img src="assets/adima-mascot.webp" alt="" width="160" height="165" class="al-mascot" loading="lazy"></div>
<div class="al-chat-preview"><div class="al-chat-header"><strong>${icon('sparkle')} Adima AI</strong><span>Preview</span></div><div class="al-chat-body"><span class="al-chat-avatar">${icon('sparkle')}</span><p>Tell me your idea. <br>Let’s create something <br>worth sharing.</p></div></div></section>
<section class="al-panel al-result" aria-labelledby="al-result-title"><h2 id="al-result-title">One idea → A production plan</h2><p>A clearer path from your first prompt to your next video.</p><div class="al-before-after"><div class="al-before"><strong>Before</strong><p>“I want a 60-second <br>video about AI.”</p></div>${icon('arrow','al-result-arrow')}<div class="al-after"><strong>After <span>· Example creative package</span></strong><div class="al-deliverables">${tile('script','Script','al-blue')}${tile('scene','Scenes','al-blue')}${tile('image','Image prompts','al-cyan')}${tile('video','Video plan','al-blue')}${tile('sound','Voiceover text','al-purple')}${tile('image','Thumbnail idea','al-orange')}</div></div></div></section>
<section class="al-panel" id="al-how" aria-labelledby="al-how-title"><h2 id="al-how-title">How it works</h2><p>A simple process. More room to create.</p><ol class="al-how-grid">
<li><span class="al-number">1</span><span class="al-small-tile al-cyan">${icon('idea')}</span><div><h3>Give your idea</h3><p>Start with a simple topic.</p></div></li>
<li><span class="al-number">2</span><span class="al-small-tile al-purple">${icon('sparkle')}</span><div><h3>Create with AI</h3><p>Draft, explore and refine.</p></div></li>
<li><span class="al-number">3</span><span class="al-small-tile al-pink">${icon('box')}</span><div><h3>Save your work</h3><p>Copy or export your text.</p></div></li>
<li><span class="al-number">4</span><span class="al-small-tile al-green">${icon('play')}</span><div><h3>Make it yours</h3><p>Edit, produce and publish.</p></div></li>
</ol></section>
<section class="al-panel al-features" id="al-features" aria-labelledby="al-features-title"><div class="al-section-heading"><div><h2 id="al-features-title">Create with clarity</h2><p>Your everyday creative essentials.</p></div><button class="al-text-button" data-al-start>Start creating ${icon('arrow')}</button></div><div class="al-feature-grid">
${feature('script','AI scripts','Turn ideas into engaging stories.','al-purple')}${feature('image','Visual prompts','Describe your next great frame.','al-cyan')}${feature('sound','Voiceover scripts','Find the words for your video.','al-pink')}${feature('image','Thumbnail ideas','Give your story a strong first look.','al-orange')}${feature('box','Easy exports','Keep your work. Create anywhere.','al-green')}
</div></section>
<p class="al-availability">Available now: AI text generation and exports. Visual workflows are illustrative; image, voice and video rendering are not connected.</p>
</main><footer class="al-footer"><span>© ${new Date().getFullYear()} Adima AI</span><span>One idea. Endless possibilities.</span><a href="#al-home">Back to top ↑</a></footer>
</div>
<dialog class="al-demo" id="alDemo" aria-labelledby="al-demo-title"><button class="al-dialog-close" id="alDemoClose" aria-label="Close demo">×</button><span class="al-badge">PRODUCT WALKTHROUGH</span><h2 id="al-demo-title">A little idea. <br>A great starting point.</h2><p class="al-demo-note">Illustrative example — not a live generation.</p><div class="al-demo-prompt"><strong>Your idea</strong><p>Write a short video script about AI for beginners.</p></div><div class="al-demo-output"><strong>A possible starting point</strong><p><b>Hook:</b> You’ve probably used AI today without noticing.</p><p><b>Story:</b> From suggested songs to voice assistants, AI looks for patterns to help us with everyday tasks.</p><p><b>Close:</b> Which everyday AI tool do you use most?</p></div><p>Sign in to generate your own text, refine it and export it from the existing Adima workspace.</p><button class="al-button al-primary" id="alDemoStart">Try your own idea ${icon('arrow')}</button></dialog>
</div>`;}
function init(){
const landing=document.getElementById('landingView'),modal=document.getElementById('authModal'),demo=document.getElementById('alDemo'),menu=document.getElementById('alMenuButton'),links=document.getElementById('alNavLinks');
let returnFocus=null,previousOverflow='';
function closeMenu(){menu.setAttribute('aria-expanded','false');links.classList.remove('is-open');}
function start(){closeMenu();openAuthModal();}
['navLoginBtn','navSignupBtn','heroTryBtn','ctaGetStartedBtn'].forEach(id=>document.getElementById(id).onclick=start);
landing.querySelectorAll('[data-al-start]').forEach(btn=>btn.onclick=start);
menu.onclick=()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));links.classList.toggle('is-open',open);};
links.querySelectorAll('a').forEach(a=>a.onclick=closeMenu);
document.getElementById('heroLaunchBtn').onclick=()=>{previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';demo.showModal();};
demo.addEventListener('close',()=>{if(modal.style.display!=='flex')document.body.style.overflow=previousOverflow;});
document.getElementById('alDemoClose').onclick=()=>demo.close();
demo.addEventListener('click',e=>{if(e.target===demo){const r=demo.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)demo.close();}});
document.getElementById('alDemoStart').onclick=()=>{demo.close();start();};
document.getElementById('authModalClose').onclick=closeAuthModal;
document.getElementById('authModalOverlay').onclick=closeAuthModal;
document.getElementById('togglePasswordBtn').onclick=()=>{const pwd=document.getElementById('authPassword');const show=pwd.type==='password';pwd.type=show?'text':'password';document.getElementById('togglePasswordBtn').setAttribute('aria-label',show?'Hide password':'Show password');};
const authCard=modal.querySelector('.glass-card');
authCard.setAttribute('role','dialog');authCard.setAttribute('aria-modal','true');authCard.setAttribute('aria-labelledby','al-auth-title');authCard.tabIndex=-1;authCard.querySelector('h2').id='al-auth-title';
document.getElementById('authModalClose').setAttribute('aria-label','Close sign-in');document.getElementById('togglePasswordBtn').setAttribute('aria-label','Show password');
document.getElementById('authEmail').autocomplete='email';document.getElementById('authPassword').autocomplete='current-password';
document.getElementById('authError').setAttribute('role','alert');document.getElementById('authSuccess').setAttribute('role','status');
let authOpen=false;
new MutationObserver(()=>{const open=modal.style.display==='flex';if(open===authOpen)return;authOpen=open;if(open){returnFocus=document.activeElement;landing.inert=true;document.getElementById('googleSignInBtn').focus();}else{landing.inert=false;if(returnFocus&&landing.style.display!=='none')returnFocus.focus();}}).observe(modal,{attributes:true,attributeFilter:['style']});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();if(authOpen)closeAuthModal();}if(authOpen&&e.key==='Tab'){const list=[...authCard.querySelectorAll('button,input,a[href],[tabindex="0"]')].filter(el=>!el.disabled&&el.getClientRects().length);const first=list[0],last=list[list.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
}
return {render,init};
})();
