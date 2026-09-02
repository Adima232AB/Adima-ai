// Yeh file poore page ka structure banati hai aur #app div ke andar daalti hai

// Templates - category wise organize kiye gaye hain
const TEMPLATE_CATEGORIES = [
  {
    category: "Social",
    items: [
      { icon: "📸", label: "Instagram Caption", prompt: "Write an engaging Instagram caption about " },
      { icon: "🎬", label: "Reel / Short Script", prompt: "Write a 30-second motivational reel script about " }
    ]
  },
  {
    category: "Creator",
    items: [
      { icon: "▶️", label: "YouTube Script", prompt: "Write a YouTube video script about " },
      { icon: "📖", label: "Short Story", prompt: "Write a short, inspiring story about " }
    ]
  },
  {
    category: "Marketing",
    items: [
      { icon: "📢", label: "Ad Copy", prompt: "Write a persuasive ad copy for " },
      { icon: "✉️", label: "Email", prompt: "Write a professional marketing email about " }
    ]
  },
  {
    category: "Business",
    items: [
      { icon: "📝", label: "Blog Post", prompt: "Write a blog post introduction about " }
    ]
  },
  {
    category: "Education",
    items: [
      { icon: "🎓", label: "Explain a Topic", prompt: "Explain this topic in simple terms for beginners: " }
    ]
  }
];

const USE_CASES = ["Instagram Captions", "YouTube Scripts", "Ad Copy", "Blog Posts", "Emails", "Stories", "AI Prompts"];

function renderApp() {
  const app = document.getElementById("app");
  if (!app) {
    console.error("Adima AI: #app container not found.");
    return;
  }

  try {
    app.innerHTML = `
    <!-- ===== 1) MARKETING LANDING PAGE ===== -->
    <div id="landingView">
      <nav class="nav">
        <div class="container nav-inner">
          <div class="brand">
            <div class="logo"></div>
            <div>
              <div class="brand-title">Adima AI Studio</div>
              <div class="brand-subtitle">AI Content, Simplified</div>
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
            <div class="eyebrow"><span class="dot"></span> AI Content Platform</div>
            <h1>Create AI Content In Seconds.</h1>
            <p class="support">Adima AI helps creators, marketers and businesses generate scripts, captions, stories and more — instantly, without any writing skills needed.</p>

            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:16px;">
              ${USE_CASES.map(u => `<span style="padding:7px 12px; border-radius:999px; background:rgba(16,185,129,.12); border:1px solid rgba(16,185,129,.2); color:var(--accent2); font-size:12px;">${u}</span>`).join("")}
            </div>

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
                <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Generate quality content in seconds, not hours.</p>
              </div>
              <div class="feature">
                <div class="feature-icon">🔒</div>
                <p class="feature-title">Secure by Design</p>
                <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Your data and account stay protected.</p>
              </div>
              <div class="feature">
                <div class="feature-icon">📱</div>
                <p class="feature-title">Works Everywhere</p>
                <p style="color:var(--muted); font-size:13px; margin:6px 0 0;">Fully responsive on mobile, tablet and desktop.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Results Preview -->
      <section style="padding:10px 0 40px;">
        <div class="container">
          <h2 class="generator-title" style="font-size:24px;">See It In Action</h2>
          <p class="generator-note">Here's an example of what Adima AI generates from a single prompt.</p>
          <div class="generator-card glass-card" style="margin-top:16px;">
            <div style="display:flex; gap:10px; align-items:flex-start; margin-bottom:14px;">
              <span style="color:var(--muted); font-size:13px; font-weight:700;">PROMPT</span>
            </div>
            <p style="color:var(--text); font-size:14px; background:rgba(255,255,255,.04); padding:12px 14px; border-radius:12px; margin:0 0 18px;">"Write an Instagram caption for a sunset beach photo"</p>
            <div style="display:flex; gap:10px; align-items:flex-start; margin-bottom:14px;">
              <span style="color:var(--accent2); font-size:13px; font-weight:700;">ADIMA AI RESULT</span>
            </div>
            <p style="color:var(--text); font-size:14px; line-height:1.7; margin:0;">"Chasing golden hours and ocean breeze 🌅 Some sunsets remind you that endings can be beautiful too. #BeachLife #GoldenHour"</p>
          </div>
        </div>
      </section>

      <!-- Templates by category -->
      <section style="padding:10px 0 40px;">
        <div class="container">
          <h2 class="generator-title" style="font-size:24px;">Templates For Every Need</h2>
          <p class="generator-note">Pick a category and start generating in one click.</p>
          <div id="landingTemplateCategories" style="margin-top:16px;"></div>
        </div>
      </section>

      <!-- Testimonials section - abhi placeholder hai, baad mein asli feedback aane par badlein -->
      <section style="padding:10px 0 40px;">
        <div class="container">
          <h2 class="generator-title" style="font-size:24px;">What Our Users Say</h2>
          <p class="generator-note">⚠️ Sample layout — replace with real user feedback once available.</p>
          <div class="feature-grid grid-3col" style="margin-top:16px;">
            <div class="feature glass-card">
              <p style="color:var(--text); font-size:14px; line-height:1.6; margin:0;">"[Add a real customer quote here]"</p>
              <p style="color:var(--muted); font-size:13px; margin:14px 0 0; font-weight:700;">[Name] · [Role/City]</p>
            </div>
            <div class="feature glass-card">
              <p style="color:var(--text); font-size:14px; line-height:1.6; margin:0;">"[Add a real customer quote here]"</p>
              <p style="color:var(--muted); font-size:13px; margin:14px 0 0; font-weight:700;">[Name] · [Role/City]</p>
            </div>
            <div class="feature glass-card">
              <p style="color:var(--text); font-size:14px; line-height:1.6; margin:0;">"[Add a real customer quote here]"</p>
              <p style="color:var(--muted); font-size:13px; margin:14px 0 0; font-weight:700;">[Name] · [Role/City]</p>
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
              <p style="margin:0; color:var(--muted);">Join creators and businesses already saving hours every week.</p>
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
        <h2 class="generator-title" style="text-align:center;">Welcome to Adima AI</h2>
        <p class="generator-note" style="text-align:center; margin-left:auto; margin-right:auto;">Sign in to start generating AI content.</p>

        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <button id="googleSignInBtn" class="ghost" style="flex:1; display:flex; align-items:center; justify-content:center; gap:10px; padding:12px;">
            <span style="font-weight:800;">G</span> Google
          </button>
          <button id="facebookSignInBtn" class="ghost" style="flex:1; display:flex; align-items:center; justify-content:center; gap:10px; padding:12px; background:linear-gradient(135deg,#1877F2,#0F5BEF); color:white; border:none;">
            <span style="font-weight:800;">f</span> Facebook
          </button>
          <button id="phoneSignInBtn" class="ghost" style="flex:1; display:flex; align-items:center; justify-content:center; gap:10px; padding:12px;">
            <span style="font-weight:800;">📱</span> Phone
          </button>
        </div>

        <div style="display:flex; align-items:center; gap:12px; margin:20px 0; color:var(--muted); font-size:13px;">
          <div style="flex:1; height:1px; background:var(--line);"></div> or continue with email
          <div style="flex:1; height:1px; background:var(--line);"></div>
        </div>

        <!-- Phone auth inputs (hidden until requested) -->
        <div id="phoneAuthRow" style="display:none; margin-top:12px; gap:8px;">
          <div style="display:flex; gap:8px;">
            <input id="phoneInput" class="input" placeholder="+91 98765 43210" style="flex:1; min-height:44px;" />
            <button id="sendOtpBtn" class="ghost" style="padding:10px 14px;">Send OTP</button>
          </div>
          <div style="display:flex; gap:8px; margin-top:8px;">
            <input id="otpInput" class="input" placeholder="6-digit OTP" style="flex:1; min-height:44px; display:none;" />
            <button id="verifyOtpBtn" class="ghost" style="padding:10px 14px; display:none;">Verify</button>
          </div>
          <div id="recaptcha-container" style="margin-top:8px;"></div>
        </div>

        <div class="fields">
          <label class="field-label" for="authEmail">Email</label>
          <input class="input" id="authEmail" type="email" placeholder="you@example.com">

          <label class="field-label" for="authPassword" style="margin-top:14px;">Password</label>
          <div style="position:relative;">
            <input class="input" id="authPassword" type="password" placeholder="At least 6 characters" style="padding-right:46px;">
            <button id="togglePasswordBtn" type="button" style="position:absolute; right:12px; top:50%; transform:translateY(-50%); background:transparent; border:none; color:var(--muted); cursor:pointer; font-size:16px;">👁</button>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; font-size:13px;">
          <label style="display:flex; align-items:center; gap:6px; color:var(--muted); cursor:pointer;">
            <input type="checkbox" id="rememberMe" checked style="accent-color:var(--accent);"> Remember me
          </label>
          <a href="#" id="forgotPasswordLink" style="color:var(--accent2); text-decoration:none;">Forgot password?</a>
        </div>

        <p id="authError" style="color:var(--danger); font-size:14px; margin-top:12px;"></p>
        <p id="authSuccess" style="color:var(--accent2); font-size:14px; margin-top:12px;"></p>

        <div class="toolbar">
          <button id="loginBtn">Sign In</button>
          <button class="ghost" id="signupBtn">Create Account</button>
        </div>
      </div>
    </div>

    <!-- ===== 3) DASHBOARD ===== -->
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
              <h2 style="margin:0; font-size:22px;">Welcome back, <span id="dashUserName">there</span> 👋</h2>
              <p style="margin:4px 0 0; color:var(--muted);">What would you like to create today?</p>
            </div>
            <div style="display:flex; align-items:center; gap:12px;">
              <button class="plus-btn" data-soon="Upgrade" style="width:auto; padding:0 16px; border-radius:999px; font-size:13px;">⭐ Upgrade</button>
              <div class="plus-btn" id="dashAvatar" style="background:var(--accent); color:#062018; font-weight:800;">A</div>
            </div>
          </div>

          <div class="dashboard-grid">
            <div id="dashGenerator" class="generator-card glass-card">
              <h3 class="generator-title" style="font-size:19px;">AI Generator</h3>
              <p class="generator-note">Describe what you need — Adima AI will generate a script, story, caption or more.</p>

              <div class="fields">
                <textarea class="input" id="userInput" rows="4" maxlength="1000" placeholder="e.g. Write an Instagram caption for a coffee shop launch"></textarea>
                <div style="text-align:right; color:var(--muted); font-size:12px; margin-top:4px;"><span id="charCount">0</span>/1000</div>
              </div>

              <div class="toolbar">
                <button id="generateBtn">Generate</button>
                <button class="ghost" id="stopBtn" disabled>Stop</button>
                <button class="ghost" id="regenerateBtn">↻ Regenerate</button>
                <button class="ghost" id="copyBtn">📋 Copy</button>
                <button class="ghost" id="clearBtn">Clear</button>
              </div>

              <div class="output" id="outputBox">Your result will appear here...</div>

              <div class="toolbar" style="margin-top:10px;">
                <span style="color:var(--muted); font-size:13px; align-self:center; margin-right:4px;">Export as:</span>
                <button class="ghost" id="downloadTxtBtn">TXT</button>
                <button class="ghost" id="downloadDocBtn">DOC</button>
                <button class="ghost" id="downloadPdfBtn">PDF</button>
              </div>
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
                  <strong style="color:var(--muted); font-size:13px;">Coming soon</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="dashboard-grid" style="margin-top:16px;">
            <div id="dashHistory" class="generator-card glass-card">
              <div class="split-top">
                <h3 class="generator-title" style="font-size:17px; margin:0;">History</h3>
                <button class="ghost" id="viewAllHistoryBtn" style="padding:6px 14px; font-size:12px;">View All</button>
              </div>
              <input class="input" id="historySearchInput" placeholder="Search history..." style="margin-top:12px; min-height:44px;">
              <div class="history" id="historyBox" style="margin-top:12px;"></div>
            </div>

            <div id="dashTemplates" class="generator-card glass-card">
              <div class="split-top">
                <h3 class="generator-title" style="font-size:17px; margin:0;">Quick Templates</h3>
              </div>
              <div id="templatesBox" style="margin-top:12px;"></div>
            </div>
          </div>
        </main>
      </div>
      <footer class="footer"><div class="container">© 2026 Adima AI Studio. Made with care.</div></footer>
    </div>
    `;

    const requiredIds = [
      "landingView", "dashboardView", "authModal", "generateBtn",
      "userInput", "outputBox", "historyBox", "templatesBox"
    ];
    const missingIds = requiredIds.filter((id) => !document.getElementById(id));
    if (missingIds.length) {
      throw new Error(`Missing required UI elements: ${missingIds.join(", ")}`);
    }

    const initializers = [
      "buildTemplateLists", "wireLandingEvents", "wireDashboardEvents",
      "initAuthUI", "initUI"
    ];
    initializers.forEach((name) => {
      const initializer = window[name];
      if (typeof initializer !== "function") {
        console.warn(`Adima AI: ${name} dependency is unavailable.`);
        return;
      }
      initializer();
    });

    if (typeof window.applyPendingAuthState === "function") {
      window.applyPendingAuthState();
    }
    console.log("Adima AI: app rendered", {
      requiredElements: requiredIds.length,
      stylesheets: document.styleSheets.length
    });
  } catch (error) {
    console.error("Adima AI: renderApp failed", error);
    app.innerHTML = `
      <main class="app-error" role="alert">
        <h1>Adima AI could not load</h1>
        <p>Please refresh the page. If the problem continues, open the browser console for details.</p>
      </main>
    `;
  }
}

let appBootstrapped = false;

function bootstrapApp() {
  if (appBootstrapped) return;
  appBootstrapped = true;
  console.log("Adima AI: bootstrapping", document.readyState);
  renderApp();
}

window.debugAdima = function () {
  const ids = ["app", "landingView", "dashboardView", "authModal", "generateBtn", "userInput", "outputBox", "historyBox"];
  const result = {
    readyState: document.readyState,
    appHtmlLength: document.getElementById("app")?.innerHTML.length || 0,
    missingIds: ids.filter((id) => !document.getElementById(id)),
    stylesheets: Array.from(document.styleSheets, (sheet) => sheet.href),
    firebase: typeof window.firebase !== "undefined",
    currentUser: window.currentUser?.uid || null
  };
  console.table(result);
  return result;
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrapApp, { once: true });
} else {
  bootstrapApp();
}

// Templates ki HTML dono jagah (landing preview aur dashboard) banata hai
function buildTemplateLists() {
  const renderCategory = (cat) => `
    <div style="margin-bottom:16px;">
      <p style="color:var(--muted); font-size:12px; font-weight:800; letter-spacing:.04em; text-transform:uppercase; margin:0 0 8px;">${cat.category}</p>
      ${cat.items.map(t => `
        <div class="history-item template-pick" data-prompt="${escapeHtml(t.prompt)}" style="cursor:pointer; display:flex; align-items:center; justify-content:space-between;">
          <span>${t.icon} ${t.label}</span> <span style="color:var(--muted);">›</span>
        </div>
      `).join("")}
    </div>
  `;

  const html = TEMPLATE_CATEGORIES.map(renderCategory).join("");
  document.getElementById("templatesBox").innerHTML = html;
  document.getElementById("landingTemplateCategories").innerHTML =
    `<div class="feature-grid grid-2col">` +
    TEMPLATE_CATEGORIES.map(cat => `
      <div class="feature glass-card">
        <p class="feature-title" style="margin-bottom:8px;">${cat.category}</p>
        ${cat.items.map(t => `<p style="color:var(--muted); font-size:13px; margin:4px 0;">${t.icon} ${t.label}</p>`).join("")}
      </div>
    `).join("") +
    `</div>`;

  document.querySelectorAll(".template-pick").forEach(el => {
    el.onclick = () => {
      const input = document.getElementById("userInput");
      if (!input) { openAuthModal(); return; }
      input.value = el.dataset.prompt;
      input.dispatchEvent(new Event("input"));
      document.getElementById("dashGenerator").scrollIntoView({ behavior: "smooth" });
      input.focus();
    };
  });
}

function wireLandingEvents() {
  const openLogin = () => openAuthModal();
  document.getElementById("heroTryBtn").onclick = openLogin;
  document.getElementById("heroLaunchBtn").onclick = openLogin;
  document.getElementById("navLoginBtn").onclick = openLogin;
  document.getElementById("navSignupBtn").onclick = openLogin;
  document.getElementById("ctaGetStartedBtn").onclick = openLogin;

  document.getElementById("authModalClose").onclick = () => closeAuthModal();
  document.getElementById("authModalOverlay").onclick = () => closeAuthModal();

  document.getElementById("togglePasswordBtn").onclick = () => {
    const pwd = document.getElementById("authPassword");
    const btn = document.getElementById("togglePasswordBtn");
    if (pwd.type === "password") { pwd.type = "text"; btn.textContent = "🙈"; }
    else { pwd.type = "password"; btn.textContent = "👁"; }
  };
}

function wireDashboardEvents() {
  document.querySelectorAll(".sidebar-link[data-target]").forEach(link => {
    link.onclick = () => {
      const target = link.dataset.target;
      if (!target) return;

      document.querySelectorAll(".sidebar-link").forEach(item => item.classList.remove("active"));
      link.classList.add("active");

      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  });

  const viewAllHistoryBtn = document.getElementById("viewAllHistoryBtn");
  const historySearchInput = document.getElementById("historySearchInput");

  if (viewAllHistoryBtn) {
    viewAllHistoryBtn.onclick = () => {
      const historyBox = document.getElementById("historyBox");
      if (historyBox) {
        historyBox.classList.toggle("history-expanded");
      }
    };
  }

  if (historySearchInput) {
    historySearchInput.oninput = (event) => {
      renderHistory(event.target.value || "");
    };
  }

  renderHistory();
}

