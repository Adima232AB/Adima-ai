// Yeh file poore page ka structure banati hai aur #app div ke andar daalti hai
function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <!-- ===== MAIN LANDING VIEW (blur ho jaata hai jab modal khulta hai) ===== -->
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

      <header class="hero">
        <div class="container hero-grid">
          <div class="headline-card glass-card">
            <div class="eyebrow"><span class="dot"></span> AI Powered Platform</div>
            <h1>Build AI Apps<br>With Adima AI.</h1>
            <p class="support">Script, Story, Caption aur Prompt — sab kuch ek hi jagah, seconds mein.</p>
            <div class="hero-actions" style="display:flex; gap:12px; flex-wrap:wrap;">
              <button class="cta" id="heroTryBtn">Start for Free</button>
              <button class="cta" id="heroLaunchBtn" style="background:transparent; color:var(--text); box-shadow:none; border:1px solid var(--line);">Launch App</button>
            </div>
          </div>

          <div class="panel-card glass-card">
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
          <div class="generator-card glass-card">
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
              <button class="ghost" id="stopBtn" disabled>Stop</button>
              <button class="ghost" id="regenerateBtn">Regenerate</button>
              <button class="ghost" id="copyBtn">Copy</button>
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

    <!-- ===== GLASS LOGIN / SIGNUP POPUP ===== -->
    <div id="authModal" style="display:none; position:fixed; inset:0; z-index:200; align-items:center; justify-content:center; padding:20px;">
      <div id="authModalOverlay" style="position:absolute; inset:0; background:rgba(0,0,0,.55); backdrop-filter:blur(3px);"></div>

      <div class="glass-card" style="position:relative; max-width:420px; width:100%; border-radius:26px; padding:28px;">
        <button id="authModalClose" style="position:absolute; top:16px; right:16px; background:transparent; border:none; color:var(--muted); font-size:22px; cursor:pointer;">×</button>

        <div style="text-align:center; margin-bottom:6px;">
          <div class="logo" style="margin:0 auto 14px;"></div>
        </div>
        <h2 class="generator-title" style="text-align:center;">Welcome to Adima AI Studio</h2>

        <button id="googleSignInBtn" class="ghost" style="width:100%; margin-top:20px; display:flex; align-items:center; justify-content:center; gap:10px; padding:14px;">
          <span style="font-weight:800;">G</span> Google se Login
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

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; font-size:13px;">
          <label style="display:flex; align-items:center; gap:6px; color:var(--muted); cursor:pointer;">
            <input type="checkbox" id="rememberMe" checked style="accent-color:var(--accent);"> Remember Me
          </label>
          <a href="#" id="forgotPasswordLink" style="color:var(--accent2); text-decoration:none;">Forgot Password?</a>
        </div>

        <p id="authError" style="color:var(--danger); font-size:14px; margin-top:12px;"></p>
        <p id="authSuccess" style="color:var(--accent2); font-size:14px; margin-top:12px;"></p>

        <div class="toolbar">
          <button id="loginBtn">Sign In</button>
          <button class="ghost" id="signupBtn">Create Account</button>
        </div>
      </div>
    </div>
  `;

  // Hero aur Nav ke buttons - Auth popup kholte hain (agar login nahi hai)
  const goToGeneratorOrAuth = () => {
    window.currentUser
      ? document.getElementById("generator").scrollIntoView({ behavior: "smooth" })
      : openAuthModal();
  };

  document.getElementById("heroTryBtn").onclick = goToGeneratorOrAuth;
  document.getElementById("heroLaunchBtn").onclick = goToGeneratorOrAuth;
  document.getElementById("navLoginBtn").onclick = () => openAuthModal();
  document.getElementById("navSignupBtn").onclick = () => openAuthModal();

  // Modal band karne ke liye
  document.getElementById("authModalClose").onclick = () => closeAuthModal();
  document.getElementById("authModalOverlay").onclick = () => closeAuthModal();
}

// Jab poora page load ho jaaye, tabhi app shuru karo
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  initUI();
  initAuthUI();
  renderHistory();
});
