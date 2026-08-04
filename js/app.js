// Yeh file poore page ka structure banati hai aur #app div ke andar daalti hai
function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <nav class="nav">
      <div class="container nav-inner">
        <div class="brand">
          <div class="logo"></div>
          <div>
            <div class="brand-title">Adima AI Studio</div>
            <div class="brand-subtitle">Smart AI, Simplified</div>
          </div>
        </div>

        <div id="navLoggedOut" style="display:flex; align-items:center; gap:10px;">
          <button class="cta" id="navLoginBtn" style="background:transparent; color:var(--text); box-shadow:none; border:1px solid var(--line);">Login</button>
          <button class="cta" id="navSignupBtn">Sign Up</button>
        </div>

        <div id="navLoggedIn" style="display:none; align-items:center; gap:12px;">
          <span id="userInfo" style="color:var(--muted); font-size:14px;"></span>
          <button class="cta" id="logoutBtn">Logout</button>
        </div>
      </div>
    </nav>

    <header class="hero">
      <div class="container hero-grid">
        <div class="headline-card">
          <div class="eyebrow"><span class="dot"></span> AI Powered Platform</div>
          <h1>Build smarter with AI.</h1>
          <p class="support">Script, Story, Caption aur Prompt — sab kuch ek hi jagah, seconds mein.</p>
          <div class="hero-actions">
            <button class="cta" id="heroTryBtn">Generate Now</button>
          </div>
        </div>

        <div class="panel-card">
          <div class="split-top">
            <p class="mini-title">Why Adima AI</p>
          </div>
          <div class="feature-grid">
            <div class="feature">
              <div class="feature-icon">⚡</div>
              <p class="feature-title">Fast AI Workflow</p>
            </div>
            <div class="feature">
              <div class="feature-icon">🔒</div>
              <p class="feature-title">Secure by Design</p>
            </div>
            <div class="feature">
              <div class="feature-icon">📱</div>
              <p class="feature-title">Mobile Ready Design</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="generator" id="generator" style="display:none;">
      <div class="container">
        <div class="generator-card">
          <div class="generator-head">
            <div>
              <h2 class="generator-title">AI Generator</h2>
              <p class="generator-note">Apna topic likhiye — Adima AI aapke liye script, story ya caption bana dega.</p>
            </div>
          </div>

          <div class="fields">
            <label class="field-label" for="userInput">Aapka Topic ya Sawaal</label>
            <textarea class="input" id="userInput" rows="3" placeholder="Jaise: Instagram reel ke liye ek motivational script likho"></textarea>
          </div>

          <div class="toolbar">
            <button id="generateBtn">Generate</button>
            <button class="ghost" id="clearBtn">Clear</button>
            <button class="ghost" id="downloadBtn">⬇ Download</button>
          </div>

          <div class="output" id="outputBox">Aapka jawab yahan dikhega...</div>

          <div class="split-top" style="margin-top:24px;">
            <p class="mini-title">History</p>
            <button class="plus-btn" id="clearHistoryBtn" title="History saaf karein">×</button>
          </div>
          <div class="history" id="historyBox"></div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">© 2026 Adima AI Studio. Made with care.</div>
    </footer>

    <!-- Login/Signup Popup - shuru mein chupa hua rehta hai -->
    <div id="authModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,.65); z-index:100; align-items:center; justify-content:center; padding:20px;">
      <div class="generator-card" style="max-width:420px; width:100%; position:relative;">
        <button id="authModalClose" style="position:absolute; top:14px; right:14px; background:transparent; border:none; color:var(--muted); font-size:22px; cursor:pointer;">×</button>

        <h2 class="generator-title" id="authModalTitle">Login ya Account banayein</h2>
        <p class="generator-note">Adima AI istemal karne ke liye pehle apna account banayein ya login karein.</p>

        <div class="fields">
          <label class="field-label" for="authEmail">Email</label>
          <input class="input" id="authEmail" type="email" placeholder="aapka.email@example.com">

          <label class="field-label" for="authPassword" style="margin-top:14px;">Password</label>
          <input class="input" id="authPassword" type="password" placeholder="Kam se kam 6 characters">
        </div>

        <p id="authError" style="color:var(--danger); font-size:14px; margin-top:12px;"></p>

        <div class="toolbar">
          <button id="loginBtn">Login</button>
          <button class="ghost" id="signupBtn">Naya Account Banayein</button>
        </div>
      </div>
    </div>
  `;

  // Hero ka "Generate Now" button
  document.getElementById("heroTryBtn").onclick = () => {
    if (window.currentUser) {
      document.getElementById("generator").scrollIntoView({ behavior: "smooth" });
    } else {
      openAuthModal();
    }
  };

  // Nav ke Login/Signup buttons
  document.getElementById("navLoginBtn").onclick = () => openAuthModal();
  document.getElementById("navSignupBtn").onclick = () => openAuthModal();

  // Modal band karne ke liye
  document.getElementById("authModalClose").onclick = () => closeAuthModal();
  document.getElementById("authModal").onclick = (e) => {
    if (e.target.id === "authModal") closeAuthModal();
  };
}

// Jab poora page load ho jaaye, tabhi app shuru karo
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  initUI();
  initAuthUI();
  renderHistory();
});
