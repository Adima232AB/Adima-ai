// Yeh file buttons ko sun-ti hai aur AI se baat karwati hai
function initUI() {
  const generateBtn = document.getElementById("generateBtn");
  const clearBtn = document.getElementById("clearBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const input = document.getElementById("userInput");
  const output = document.getElementById("outputBox");

  generateBtn.onclick = async () => {
    const message = input.value.trim();

    if (!message) {
      output.textContent = "Pehle kuch likhiye, phir Generate dabaiye.";
      return;
    }

    output.innerHTML = `<span class="loader"><span class="spinner"></span> Adima AI soch raha hai...</span>`;
    generateBtn.disabled = true;

    try {
      const reply = await AdimaAPI.sendMessage(message);
      output.textContent = reply;

      if (typeof window.saveHistory === "function") {
        window.saveHistory(message, reply);
      }

      if (typeof window.renderHistory === "function") {
        window.renderHistory();
      }
    } catch (err) {
      output.textContent = "❌ Error: " + err.message;
    } finally {
      generateBtn.disabled = false;
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
      if (typeof window.clearHistory === "function") {
        window.clearHistory();
      }
    }
  };
}
