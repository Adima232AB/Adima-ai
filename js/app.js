// Yeh file poore page ka structure banati hai aur #app div ke andar daalti hai

// Quick Templates - inpar click karte hi topic box mein prompt bhar jaata hai
const QUICK_TEMPLATES = [
  { icon: "🎬", label: "Motivational Script", prompt: "Instagram reel ke liye ek motivational script likho" },
  { icon: "▶️", label: "YouTube Script", prompt: "YouTube video ke liye ek engaging script likho" },
  { icon: "📸", label: "Instagram Caption", prompt: "Ek Instagram post ke liye acha sa caption likho" },
  { icon: "📖", label: "Short Story", prompt: "Success par ek chhoti si prernadaayak kahani likho" }
];

function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <!-- ===== 1) MARKETING LANDING PAGE ===== -->
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
          <div style="display:flex; align-items:center; gap:10px;">
            <button class="cta" id="navLoginBtn" style="background:transparent; color:var(--text); box-shadow:none; border:1px solid var(--line);">Login</button>
            <button class="cta" id="navSignupBtn">Start for Free</button>
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
            <div class="split-top"><p class="mini-title">Why Adima AI</p></div>
            <div class="feature-grid">
              <div class="feature">
                <div class="feature-icon">⚡</div>
                <p class="feature-title">Fast AI Workflow</p>
                <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Generate content in seconds with smart AI.</p>
              </div>
              <div class="feature">
                <div class="feature-icon">🔒</div>
                <p class="feature-title">Secure by Design</p>
                <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Aapka data hamesha suraksit rehta hai.</p>
              </div>
              <div class="feature">
                <div class="feature-icon">📱</div>
                <p class="feature-title">Mobile Ready Design</p>
                <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Har device par sahi se chalta hai.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Powerful AI Tools section -->
      <section style="padding:10px 0 40px;">
        <div class="container">
          <h2 class="generator-title" style="font-size:24px;">Powerful AI Tools For You</h2>
          <p class="generator-note">Sab kuch jo aapko chahiye AI content banane ke liye.</p>
          <div class="feature-grid grid-2col" style="margin-top:16px;">
            <div class="feature glass-card">
              <div class="feature-icon">🪄</div>
              <p class="feature-title">AI Generator</p>
              <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Koi bhi content — script, story ya caption — generate karein.</p>
            </div>
            <div class="feature glass-card">
              <div class="feature-icon">🕐</div>
              <p class="feature-title">History</p>
              <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Aapki saari generated history yahan safe rahegi.</p>
            </div>
            <div class="feature glass-card">
              <div class="feature-icon">🧩</div>
              <p class="feature-title">Templates</p>
              <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Ready-made templates se fast content banayein.</p>
            </div>
            <div class="feature glass-card">
              <div class="feature-icon">📤</div>
              <p class="feature-title">Export &amp; Share</p>
              <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Download ya share karein apne content ko aasani se.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials section - abhi placeholder hai, baad mein asli feedback aane par badlein -->
      <section style="padding:10px 0 40px;">
        <div class="container">
          <h2 class="generator-title" style="font-size:24px;">Hamare Users Kya Kehte Hain</h2>
          <p class="generator-note">⚠️ Yeh sample hai — asli user feedback aane par isse badal dein.</p>
          <div class="feature-grid grid-3col" style="margin-top:16px;">
            <div class="feature glass-card">
              <p style="color:var(--text); font-size:14px; line-height:1.6; margin:0;">"[Yahan customer ka asli feedback likhein]"</p>
              <p style="color:var(--muted); font-size:13px; margin:14px 0 0; font-weight:700;">[Naam] · [Profession/City]</p>
            </div>
            <div class="feature glass-card">
              <p style="color:var(--text); font-size:14px; line-height:1.6; margin:0;">"[Yahan customer ka asli feedback likhein]"</p>
              <p style="color:var(--muted); font-size:13px; margin:14px 0 0; font-weight:700;">[Naam] · [Profession/City]</p>
            </div>
            <div class="feature glass-card">
              <p style="color:var(--text); font-size:14px; line-height:1.6; margin:0;">"[Yahan customer ka asli feedback likhein]"</p>
              <p style="color:var(--muted); font-size:13px; margin:14px 0 0; font-weight:700;">[Naam] · [Profession/City]</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA banner -->
      <section style="padding:0 0 50px;">
        <div class="container">
          <div class="generator-card glass-card" style="display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap;">
            <div>
              <h3 style="margin:0 0 6px; font-size:20px;">Start Creating Amazing Content With Adima AI</h3>
              <p style="margin:0; color:var(--muted);">Join thousands of creators and boost your productivity.</p>
            </div>
            <button class="cta" id="ctaGetStartedBtn">Get Started Now</button>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">© 2026 Adima AI Studio. Made with care.</div>
      </footer>
    </div>

    <!-- ===== 2) GLASS LOGIN / SIGNUP POPUP ===== -->
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
          <div style="flex:1; height:1px; background:var(--line);"></div> ya Email se
          <div style="flex:1; height:1px; background:var(--line);"></div>
        </div>

        <div class="fields">
          <label class="field-label" for="authEmail">Email</label>
          <input class="input" id="authEmail" type="email" placeholder="aapka.email@example.com">

          <label class="field-label" for="authPassword" style="margin-top:14px;">Password</label>
          <div style="position:relative;">
            <input class="input" id="authPassword" type="password" placeholder="Kam se kam 6 characters" style="padding-right:46px;">
            <button id="togglePasswordBtn" type="button" style="position:absolute; right:12px; top:50%; transform:translateY(-50%); background:transparent; border:none; color:var(--muted); cursor:pointer; font-size:16px;">👁</button>
          </div>
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

    <!-- ===== 3) DASHBOARD (Login ke baad yahi khulta hai) ===== -->
    <div id="dashboardView" style="display:none;">
      <div class="dashboard-shell">
        <aside class="dashboard-sidebar">
          <div class="brand" style="margin-bottom:18px;">
            <div class="logo"></div>
            <div class="brand-title" style="font-size:16px;">Adima AI Studio</div>
          </div>
          <div class="sidebar-link active" data-target="dashTop">📊 Dashboard</div>
          <div class="sidebar-link" data-target="dashGenerator">🪄 AI Generator</div>
          <div class="sidebar-link" data-target="dashHistory">🕐 History</div>
          <div class="sidebar-link" data-target="dashTemplates">🧩 Templates</div>
          <div class="sidebar-link" data-soon="Favorites">⭐ Favorites</div>
          <div class="sidebar-link" data-soon="Settings">⚙️ Settings</div>
          <div class="sidebar-link" data-soon="Upgrade Plan">🔼 Upgrade Plan</div>
          <div class="sidebar-link" id="sidebarLogoutBtn" style="margin-top:20px; color:var(--danger);">⏻ Logout</div>
        </aside>

        <main class="dashboard-main" id="dashTop">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:20px;">
            <div>
              <h2 style="margin:0; font-size:22px;">Welcome back, <span id="dashUserName">Dost</span> 👋</h2>
              <p style="margin:4px 0 0; color:var(--muted);">Aaj kya create karna hai?</p>
            </div>
            <div style="display:flex; align-items:center; gap:12px;">
              <button class="plus-btn" data-soon="Upgrade" style="width:auto; padding:0 16px; border-radius:999px; font-size:13px;">⭐ Upgrade</button>
              <div class="plus-btn" id="dashAvatar" style="background:var(--accent); color:#062018; font-weight:800;">M</div>
            </div>
          </div>

          <div class="dashboard-grid">
            <div id="dashGenerator" class="generator-card glass-card">
              <h3 class="generator-title" style="font-size:19px;">AI Generator</h3>
              <p class="generator-note">Apna topic likhiye — Adima AI aapke liye script, story ya caption bana dega.</p>

              <div class="fields">
                <textarea class="input" id="userInput" rows="4" maxlength="1000" placeholder="Yahan apna topic likhiye..."></textarea>
                <div style="text-align:right; color:var(--muted); font-size:12px; margin-top:4px;"><span id="charCount">0</span>/1000</div>
              </div>

              <div class="toolbar">
                <button id="generateBtn">Generate</button>
                <button class="ghost" id="stopBtn" disabled>Stop</button>
                <button class="ghost" id="regenerateBtn">↻ Regenerate</button>
                <button class="ghost" id="copyBtn">📋 Copy</button>
                <button class="ghost" id="clearBtn">Clear</button>
                <button class="ghost" id="downloadBtn">⬇ Download</button>
              </div>

              <div class="output" id="outputBox">Aapka jawab yahan dikhega...</div>
            </div>

            <div class="generator-card glass-card">
              <h3 class="generator-title" style="font-size:17px;">Overview</h3>
              <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px;">
                <div class="feature" style="min-height:auto; padding:14px; display:flex; align-items:center; justify-content:space-between;">
                  <span>📄 Total Generated</span>
                  <strong id="statTotalGenerated">0</strong>
                </div>
                <div class="feature" style="min-height:auto; padding:14px; display:flex; align-items:center; justify-content:space-between;">
                  <span>📅 This Week</span>
                  <strong id="statThisWeek">0</strong>
                </div>
                <div class="feature" style="min-height:auto; padding:14px; display:flex; align-items:center; justify-content:space-between;">
                  <span>⭐ Favorites</span>
                  <strong style="color:var(--muted); font-size:13px;">Jald aayega</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="dashboard-grid" style="margin-top:16px;">
            <div id="dashHistory" class="generator-card glass-card">
              <div class="split-top">
                <h3 class="generator-title" style="font-size:17px; margin:0;">Recent History</h3>
                <button class="ghost" id="viewAllHistoryBtn" style="padding:6px 14px; font-size:12px;">View All</button>
              </div>
              <div class="history" id="historyBox" style="margin-top:12px;"></div>
            </div>

            <div id="dashTemplates" class="generator-card glass-card">
              <div class="split-top">
                <h3 class="generator-title" style="font-size:17px; margin:0;">Quick Templates</h3>
              </div>
              <div id="templatesBox" style="display:flex; flex-direction:column; gap:8px; margin-top:12px;"></div>
            </div>
          </div>
        </main>
      </div>
      <footer class="footer"><div class="container">© 2026 Adima AI Studio. Made with care.</div></footer>
    </div>
  `;

  // Quick Templates list banao
  const templatesBox = document.getElementById("templatesBox");
  templatesBox.innerHTML = QUICK_TEMPLATES.map((t, i) => `
    <div class="history-item template-pick" data-index="${i}" style="cursor:pointer; display:flex; align-items:center; justify-content:space-between;">
      <span>${t.icon} ${t.label}</span> <span style="color:var(--muted);">›</span>
    </div>
  `).join("");
  templatesBox.querySelectorAll(".template-pick").forEach(el => {
    el.onclick = () => {
      const t = QUICK_TEMPLATES[el.dataset.index];
      const input = document.getElementById("userInput");
      input.value = t.prompt;
      input.dispatchEvent(new Event("input"));
      document.getElementById("dashGenerator").scrollIntoView({ behavior: "smooth" });
    };
  });

  // Landing page ke buttons - Auth popup kholte hain
  const openLogin = () => openAuthModal();
  document.getElementById("heroTryBtn").onclick = openLogin;
  document.getElementById("heroLaunchBtn").onclick = openLogin;
  document.getElementById("navLoginBtn").onclick = openLogin;
  document.getElementById("navSignupBtn").onclick = openLogin;
  document.getElementById("ctaGetStartedBtn").onclick = openLogin;

  // Modal band karna
  document.getElementById("authModalClose").onclick = () => closeAuthModal();
  document.getElementById("authModalOverlay").onclick = () => closeAuthModal();

  // Password dikhaana/chupana
  document.getElementById("togglePasswordBtn").onclick = () => {
    const pwd = document.getElementById("authPassword");
    const btn = document.getElementById("togglePasswordBtn");
    if (pwd.type === "password") { pwd.type = "text"; btn.textContent = "🙈"; }
    else { pwd.type = "password"; btn.textContent = "👁"; }
  };

  // Sidebar links
  document.querySelectorAll(".sidebar-link[data-target]").forEach(link => {
    link.onclick = () => {
      document.querySelectorAll(".sidebar-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      document.getElementById(link.dataset.target).scrollIntoView({ behavior: "smooth" });
    };
  });
  document.querySelectorAll(".sidebar-link[data-soon]").forEach(link => {
    link.onclick = () => alert((link.dataset.soon) + " feature jald hi aa raha hai!");
  });
  document.querySelectorAll("[data-soon='Upgrade']").forEach(el => {
    el.onclick = () => alert("Upgrade Plan jald hi aa raha hai!");
  });
  document.getElementById("sidebarLogoutBtn").onclick = () => logOut();

  // "View All" - poori history dikhata hai (scroll limit hata deta hai)
  const viewAllBtn = document.getElementById("viewAllHistoryBtn");
  viewAllBtn.onclick = () => {
    const box = document.getElementById("historyBox");
    box.classList.toggle("history-expanded");
    viewAllBtn.textContent = box.classList.contains("history-expanded") ? "Show Less" : "View All";
  };

  // Character counter
  const userInput = document.getElementById("userInput");
  userInput.addEventListener("input", () => {
    document.getElementById("charCount").textContent = userInput.value.length;
  });
}

// Jab poora page load ho jaaye, tabhi app shuru karo
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  initUI();
  initAuthUI();
  renderHistory();
});
