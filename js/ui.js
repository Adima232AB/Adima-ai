// Yeh file buttons ko "sun-ti" hai aur AI se baat karwati hai
let currentAbortController = null;
let lastQuestion = "";

function initUI() {
  const generateBtn = document.getElementById("generateBtn");
  const stopBtn = document.getElementById("stopBtn");
  const regenerateBtn = document.getElementById("regenerateBtn");
  const copyBtn = document.getElementById("copyBtn");
  const clearBtn = document.getElementById("clearBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const input = document.getElementById("userInput");
  const output = document.getElementById("outputBox");

  // Asli AI call karne wala function (Generate aur Regenerate dono isse istemal karte hain)
  async function runGenerate(message) {
    if (!message) {
      output.textContent = "Pehle kuch likhiye, phir Generate dabaiye.";
      return;
    }

    lastQuestion = message;
    output.innerHTML = `<span class="loader"><span class="spinner"></span> Adima AI soch raha hai...</span>`;
    generateBtn.disabled = true;
    stopBtn.disabled = false;

    currentAbortController = new AbortController();

    try {
      const reply = await AdimaAPI.sendMessage(message, currentAbortController.signal);
      output.textContent = reply;
      saveHistory(message, reply);
      renderHistory();
    } catch (err) {
      if (err.name === "AbortError") {
        output.textContent = "⏹ Roka gaya. Aap dobara Generate dabakar try kar sakte hain.";
      } else {
        output.textContent = "❌ Error: " + err.message;
      }
    } finally {
      generateBtn.disabled = false;
      stopBtn.disabled = true;
      currentAbortController = null;
    }
  }

  generateBtn.onclick = () => {
    runGenerate(input.value.trim());
  };

  // Chal rahi request ko beech mein rokne ke liye
  stopBtn.onclick = () => {
    if (currentAbortController) {
      currentAbortController.abort();
    }
  };

  // Aakhri sawaal ko dobara generate karne ke liye
  regenerateBtn.onclick = () => {
    if (!lastQuestion) {
      output.textContent = "Pehle ek baar Generate karein, tabhi Regenerate kaam karega.";
      return;
    }
    runGenerate(lastQuestion);
  };

  // Output ko clipboard mein copy karne ke liye
  copyBtn.onclick = async () => {
    const text = output.textContent;
    if (!text || text.includes("yahan dikhega")) {
      alert("Copy karne ke liye pehle kuch generate karein.");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      const original = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => { copyBtn.textContent = original; }, 1500);
    } catch {
      alert("Copy nahi ho paya, text ko manually select karke copy karein.");
    }
  };

  clearBtn.onclick = () => {
    input.value = "";
    output.textContent = "Aapka jawab yahan dikhega...";
  };

  downloadBtn.onclick = () => {
    downloadOutput(output.textContent);
  };

  clearHistoryBtn.onclick = () => {
    if (confirm("Kya aap poori history mitana chahte hain?")) {
      clearHistory();
    }
  };
}
