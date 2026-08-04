// Yeh file poore page ka structure banati hai aur #app div ke andar daalti hai
function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <!-- ===== MAIN LANDING VIEW ===== -->
    <div id="landingView">
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
            <button class="cta" id="navSignupBtn">Start for Free</button>
          </div>

          <div id="navLoggedIn" style="display:none; align-items:center; gap:12px;">
            <span id="userInfo" style="color:var(--muted); font-size:14px;"></span>
            <button class="cta" id="logoutBtn">Logout</button>
          </div>
        </div>
      </nav>

      <header class="hero glow-wrap">
        <div class="glow-orb"></div>
        <div class="container hero-grid">
          <div class="headline-card">
            <div class="eyebrow"><span class="dot"></span> AI Powered Platform</div>
            <h1>Build smarter with AI.</h1>
            <p class="support">Script, Story, Caption aur Prompt — sab kuch ek hi jagah, seconds mein.</p>
            <div class="hero-actions">
              <button class="cta" id="heroTryBtn">Start for Free</button>
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
    </div>

    <!-- ===== FULL PAGE LOGIN/SIGNUP VIEW (alag page jaisa) ===== -->
    <div id="authView" class="glow-wrap" style="display:none; min-height:100vh; align-items:center; justify-content:center; padding:24px 0;">
      <div class="glow-orb"></div>
      <div class="container" style="max-width:440px;">
        <button id="authBackBtn" style="background:transparent; border:none; color:var(--muted); font-size:15px; margin-bottom:18px; cursor:pointer; display:flex; align-items:center; gap:6px;">← Wapas jaayein</button>

        <div class="generator-card">
          <div style="text-align:center; margin-bottom:8px;">
            <div class="logo" style="margin:0 auto 14px;"></div>
          </div>
          <h2 class="generator-title" style="text-align:center;">Adima AI mein Swagat hai</h2>
          <p class="generator-note" style="text-align:center; margin-left:auto; margin-right:auto;">Login karein ya naya account banayein, aur AI Generator istemal karna shuru karein.</p>

          <button id="googleSignInBtn" class="ghost" style="width:100%; margin-top:20px; display:flex; align-items:center; justify-content:center; gap:10px; padding:14px;">
            <span style="font-weight:800;">G</span> Google se Continue karein
          </button>

          <div style="display:flex; align-items:center; gap:12px; margin:20px 0; color:var(--muted); font-size:13px;">
            <div style="flex:1; height:1px; background:var(--line);"></div>
            ya Email se
            <div style="flex:1; height:1px; background:var(--line);"></div>
          </div>

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
    </div>
  `;

  // Hero aur Nav ke buttons - Auth page kholte hain
  document.getElementById("heroTryBtn").onclick = () => {
    window.currentUser ? document.getElementById("generator").scrollIntoView({ behavior: "smooth" }) : showAuthView();
  };
  document.getElementById("navLoginBtn").onclick = () => showAuthView();
  document.getElementById("navSignupBtn").onclick = () => showAuthView();
  document.getElementById("authBackBtn").onclick = () => hideAuthView();
}

// Jab poora page load ho jaaye, tabhi app shuru karo
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  initUI();
  initAuthUI();
  renderHistory();
});
