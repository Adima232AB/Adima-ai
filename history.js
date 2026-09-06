// Yeh file purani baatcheet ko save, search, pin, delete aur dikhane ka kaam karti hai
const HISTORY_KEY = "adima_history";
const TOTAL_KEY = "adima_total_count";

function saveHistory(question, answer) {
  const history = getHistory();
  history.unshift({
    id: Date.now() + "-" + Math.random().toString(36).slice(2, 7),
    question,
    answer,
    time: new Date().toLocaleString("hi-IN"),
    ts: Date.now(),
    pinned: false
  });
  // Sirf aakhri 30 entries rakho, taaki storage bhar na jaaye
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 30)));

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

function setHistory(history) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
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
}

// Kisi item ko pin/unpin karta hai (pinned items list ke top par rahte hain)
function pinHistoryItem(id) {
  const history = getHistory();
  const item = history.find(h => h.id === id);
  if (item) item.pinned = !item.pinned;
  setHistory(history);
  renderHistory(document.getElementById("historySearchInput")?.value || "");
}

// Ek entry ko history se hata deta hai
function deleteHistoryItem(id) {
  const history = getHistory().filter(h => h.id !== id);
  setHistory(history);
  renderHistory(document.getElementById("historySearchInput")?.value || "");
}

// History item par click karne par poora sawaal-jawab Generator ke output box mein khol deta hai
function viewHistoryItem(id) {
  const item = getHistory().find(h => h.id === id);
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

function renderHistory(searchTerm) {
  const box = document.getElementById("historyBox");
  if (!box) return;

  let history = getHistory();

  // Search se filter karo (question ya answer mein match dhoondo)
  if (searchTerm && searchTerm.trim()) {
    const q = searchTerm.trim().toLowerCase();
    history = history.filter(item =>
      item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
    );
  }

  // Pinned items hamesha sabse upar dikhein
  history.sort((a, b) => (b.pinned === true) - (a.pinned === true));

  if (history.length === 0) {
    box.innerHTML = `
      <div style="text-align:center; padding:24px 12px;">
        <p style="color:var(--muted); margin:0 0 14px;">${searchTerm ? "No matching history found." : "You haven't generated anything yet."}</p>
        ${!searchTerm ? `<button class="cta" id="emptyStateGenerateBtn" style="padding:0 20px; min-height:42px;">Generate your first content</button>` : ""}
      </div>`;
    const emptyBtn = document.getElementById("emptyStateGenerateBtn");
    if (emptyBtn) {
      emptyBtn.onclick = () => {
        document.getElementById("dashGenerator").scrollIntoView({ behavior: "smooth" });
        document.getElementById("userInput").focus();
      };
    }
    renderDashboardStats();
    return;
  }

  box.innerHTML = history.map(item => `
    <div class="history-item" style="position:relative;">
      <div onclick="viewHistoryItem('${item.id}')" style="cursor:pointer;" title="Click to view full result">
        <strong>${item.pinned ? "📌 " : ""}You asked:</strong> ${escapeHtml(item.question)}<br>
        <strong>Adima AI replied:</strong> ${escapeHtml(truncate(item.answer, 90))}
        <div style="color:var(--muted); font-size:12px; margin-top:6px;">${item.time}</div>
      </div>
      <div style="display:flex; gap:8px; margin-top:8px;">
        <button class="ghost" style="padding:5px 10px; font-size:12px;" onclick="event.stopPropagation(); viewHistoryItem('${item.id}')">Use Again</button>
        <button class="ghost" style="padding:5px 10px; font-size:12px;" onclick="event.stopPropagation(); pinHistoryItem('${item.id}')">${item.pinned ? "Unpin" : "Pin"}</button>
        <button class="ghost" style="padding:5px 10px; font-size:12px; color:var(--danger);" onclick="event.stopPropagation(); if(confirm('Delete this entry?')) deleteHistoryItem('${item.id}')">Delete</button>
      </div>
    </div>
  `).join("");

  renderDashboardStats();
}

// Dashboard ke "Overview" card ke numbers update karta hai
function renderDashboardStats() {
  const totalEl = document.getElementById("statTotalGenerated");
  const weekEl = document.getElementById("statThisWeek");
  if (totalEl) totalEl.textContent = getTotalCount();
  if (weekEl) weekEl.textContent = getThisWeekCount();
}

// Lambe text ko chhota karke "..." lagata hai (list mein saaf dikhne ke liye)
function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

// XSS se bachne ke liye text ko safe banata hai
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
