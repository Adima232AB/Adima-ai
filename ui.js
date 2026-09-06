// Yeh file buttons ko "sun-ti" hai aur AI se baat karwati hai
let currentAbortController = null;
let lastQuestion = "";

function initUI() {
  const generateBtn = document.getElementById("generateBtn");
  const stopBtn = document.getElementById("stopBtn");
  const regenerateBtn = document.getElementById("regenerateBtn");
  const copyBtn = document.getElementById("copyBtn");
  const clearBtn = document.getElementById("clearBtn");
  const downloadTxtBtn = document.getElementById("downloadTxtBtn");
  const downloadDocBtn = document.getElementById("downloadDocBtn");
  const downloadPdfBtn = document.getElementById("downloadPdfBtn");
  const input = document.getElementById("userInput");
  const output = document.getElementById("outputBox");

  // Skeleton loader dikhata hai jab tak AI ka jawab nahi aata
  function showSkeletonLoader() {
    output.innerHTML = `
      <div class="skeleton-line" style="width:92%;"></div>
      <div class="skeleton-line" style="width:78%;"></div>
      <div class="skeleton-line" style="width:85%;"></div>
      <div class="skeleton-line" style="width:60%;"></div>
    `;
  }

  // Jawab ko typewriter jaisa dheere-dheere dikhata hai
  function typeOutText(text) {
    output.textContent = "";
    let i = 0;
    const step = () => {
      output.textContent += text.slice(i, i + 4);
      i += 4;
      if (i < text.length) requestAnimationFrame(step);
    };
    step();
  }

  // Asli AI call karne wala function (Generate aur Regenerate dono isse istemal karte hain)
  async function runGenerate(message) {
    if (!message) {
      output.textContent = "Please write a topic first, then press Generate.";
      return;
    }

    // Network check - offline hone par seedha bata do, request bhejne ki koshish bhi mat karo
    if (!navigator.onLine) {
      output.textContent = "⚠️ You appear to be offline. Please check your internet connection and try again.";
      return;
    }

    lastQuestion = message;
    showSkeletonLoader();
    generateBtn.disabled = true;
    stopBtn.disabled = false;

    currentAbortController = new AbortController();

    try {
      const reply = await AdimaAPI.sendMessage(message, currentAbortController.signal);
      typeOutText(reply);
      saveHistory(message, reply);
      renderHistory();
    } catch (err) {
      if (err.name === "AbortError") {
        output.textContent = "⏹ Generation stopped. Press Generate to try again.";
      } else if (err.message && err.message.toLowerCase().includes("fetch")) {
        output.textContent = "⚠️ Could not reach the server. Please check your connection and try again.";
      } else {
        output.textContent = "❌ Something went wrong: " + err.message;
      }
    } finally {
      generateBtn.disabled = false;
      stopBtn.disabled = true;
      currentAbortController = null;
    }
  }

  generateBtn.onclick = () => runGenerate(input.value.trim());

  stopBtn.onclick = () => {
    if (currentAbortController) currentAbortController.abort();
  };

  regenerateBtn.onclick = () => {
    if (!lastQuestion) {
      output.textContent = "Generate something first, then Regenerate will work.";
      return;
    }
    runGenerate(lastQuestion);
  };

  copyBtn.onclick = async () => {
    const text = output.textContent;
    if (!text || text.includes("will appear here")) {
      alert("Please generate some content first, then copy it.");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      const original = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => { copyBtn.textContent = original; }, 1500);
    } catch {
      alert("Could not copy automatically. Please select the text manually.");
    }
  };

  clearBtn.onclick = () => {
    input.value = "";
    input.dispatchEvent(new Event("input"));
    output.textContent = "Your result will appear here...";
  };

  downloadTxtBtn.onclick = () => downloadAsTxt(output.textContent);
  downloadDocBtn.onclick = () => downloadAsDoc(output.textContent);
  downloadPdfBtn.onclick = () => downloadAsPdf(output.textContent);

  // Network wapas aane/jaane par user ko bata do
  window.addEventListener("offline", () => {
    console.warn("Adima AI: connection lost");
  });
}
