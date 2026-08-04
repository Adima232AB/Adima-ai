// Yeh file purani baatcheet ko save aur dikhane ka kaam karti hai
const HISTORY_KEY = "adima_history";

function saveHistory(question, answer) {
  const history = getHistory();
  history.unshift({
    question: String(question || ""),
    answer: String(answer || ""),
    time: new Date().toLocaleString("hi-IN")
  });

  // Sirf aakhri 20 entries rakho
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
  renderHistory();
}

function getHistory() {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
}

function renderHistory() {
  const box = document.getElementById("historyBox");
  if (!box) return;

  const history = getHistory();

  if (history.length === 0) {
    box.innerHTML = `<p style="color:var(--muted); margin:0; padding:6px;">Abhi tak koi history nahi hai. Kuch generate karke dekhiye.</p>`;
    return;
  }

  box.innerHTML = history.map(item => `
    <div class="history-item">
      <strong>Aapne poocha:</strong> ${escapeHtml(item.question)}<br>
      <strong>Adima AI ka jawab:</strong> ${escapeHtml(item.answer)}
      <div style="color:var(--muted); font-size:12px; margin-top:6px;">${escapeHtml(item.time)}</div>
    </div>
  `).join("");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = String(text || "");
  return div.innerHTML;
}

// Global access ke liye
window.saveHistory = saveHistory;
window.getHistory = getHistory;
window.clearHistory = clearHistory;
window.renderHistory = renderHistory;
