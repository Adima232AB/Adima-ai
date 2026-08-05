// Yeh file purani baatcheet ko save aur dikhane ka kaam karti hai
const HISTORY_KEY = "adima_history";
const TOTAL_KEY = "adima_total_count";

function saveHistory(question, answer) {
  const history = getHistory();
  history.unshift({
    question,
    answer,
    time: new Date().toLocaleString("hi-IN"),
    ts: Date.now() // Overview stats (This Week) ke liye asli timestamp
  });
  // Sirf aakhri 20 entries rakho, taaki storage bhar na jaaye
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 20)));

  // Lifetime total counter - History se alag, kabhi trim nahi hota
  const total = getTotalCount() + 1;
  localStorage.setItem(TOTAL_KEY, String(total));
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function getTotalCount() {
  return parseInt(localStorage.getItem(TOTAL_KEY) || "0", 10);
}

function getThisWeekCount() {
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  return getHistory().filter(item => item.ts && item.ts >= weekAgo).length;
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
  renderDashboardStats();
}

function renderHistory() {
  const box = document.getElementById("historyBox");
  if (!box) return;

  const history = getHistory();

  if (history.length === 0) {
    box.innerHTML = `<p style="color:var(--muted); margin:0; padding:6px;">Abhi tak koi history nahi hai. Kuch generate karke dekhiye.</p>`;
    return;
  }

  box.innerHTML = history.map((item, index) => `
    <div class="history-item" style="cursor:pointer;" onclick="viewHistoryItem(${index})" title="Click karke poora jawab dekhein">
      <strong>Aapne poocha:</strong> ${escapeHtml(item.question)}<br>
      <strong>Adima AI ka jawab:</strong> ${escapeHtml(truncate(item.answer, 90))}
      <div style="color:var(--muted); font-size:12px; margin-top:6px;">${item.time}</div>
    </div>
  `).join("");

  renderDashboardStats();
}

// History item par click karne par poora sawaal-jawab Generator ke output box mein khol deta hai
function viewHistoryItem(index) {
  const history = getHistory();
  const item = history[index];
  if (!item) return;

  const input = document.getElementById("userInput");
  const output = document.getElementById("outputBox");
  if (input) {
    input.value = item.question;
    input.dispatchEvent(new Event("input"));
  }
  if (output) output.textContent = item.answer;

  const generatorCard = document.getElementById("dashGenerator");
  if (generatorCard) generatorCard.scrollIntoView({ behavior: "smooth" });
}

// Lambe text ko chhota karke "..." lagata hai (list mein saaf dikhne ke liye)
function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

// Dashboard ke "Overview" card ke numbers update karta hai
function renderDashboardStats() {
  const totalEl = document.getElementById("statTotalGenerated");
  const weekEl = document.getElementById("statThisWeek");
  if (totalEl) totalEl.textContent = getTotalCount();
  if (weekEl) weekEl.textContent = getThisWeekCount();
}

// XSS se bachne ke liye text ko safe banata hai
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
