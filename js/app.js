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
        <button class="cta" id="navTryBtn">Try Now</button>
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

    <section class="generator" id="generator">
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
  `;

  // Generator section tak smooth scroll karne ke liye
  const scrollToGenerator = () => {
    document.getElementById("generator").scrollIntoView({ behavior: "smooth" });
  };
  document.getElementById("navTryBtn").onclick = scrollToGenerator;
  document.getElementById("heroTryBtn").onclick = scrollToGenerator;
}

// Jab poora page load ho jaaye, tabhi app shuru karo
document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  initUI();
  renderHistory();
});

