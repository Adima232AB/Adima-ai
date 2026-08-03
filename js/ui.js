// Yeh file buttons ko "sun-ti" hai aur AI se baat karwati hai
function initUI() {
  const generateBtn = document.getElementById("generateBtn");
  const clearBtn = document.getElementById("clearBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const input = document.getElementById("userInput");
  const output = document.getElementById("outputBox");

  // Generate button dabane par
  generateBtn.onclick = async () => {
    const message = input.value.trim();

    if (!message) {
      output.textContent = "Pehle kuch likhiye, phir Generate dabaiye.";
      return;
    }

    // Loading spinner dikhao
    output.innerHTML = `<span class="loader"><span class="spinner"></span> Adima AI soch raha hai...</span>`;
    generateBtn.disabled = true;

    try {
      const reply = await AdimaAPI.sendMessage(message);
      output.textContent = reply;
      saveHistory(message, reply);
      renderHistory();
    } catch (err) {
      output.textContent = "❌ Error: " + err.message;
    } finally {
      generateBtn.disabled = false;
    }
  };

  // Clear button dabane par
  clearBtn.onclick = () => {
    input.value = "";
    output.textContent = "Aapka jawab yahan dikhega...";
  };

  // Download button dabane par
  downloadBtn.onclick = () => {
    downloadOutput(output.textContent);
  };

  // History saaf karne ke liye
  clearHistoryBtn.onclick = () => {
    if (confirm("Kya aap poori history mitana chahte hain?")) {
      clearHistory();
    }
  };
}

