// Yeh file generate hue result ko TXT, DOC ya PDF ke roop mein export karti hai

function hasValidOutput(text) {
  if (!text || text.trim() === "" || text.includes("will appear here")) {
    alert("Please generate some content first.");
    return false;
  }
  return true;
}

// Plain text (.txt) ke roop mein download karta hai
function downloadAsTxt(text) {
  if (!hasValidOutput(text)) return;
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  triggerDownload(blob, "adima-ai-output.txt");
}

// Word (.doc) ke roop mein download karta hai - koi heavy library nahi chahiye,
// Word HTML content ko .doc extension ke saath khol leta hai
function downloadAsDoc(text) {
  if (!hasValidOutput(text)) return;
  const htmlContent = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word">
    <head><meta charset="utf-8"></head>
    <body><pre style="font-family:Calibri, Arial, sans-serif; font-size:14px; white-space:pre-wrap;">${escapeForDoc(text)}</pre></body>
    </html>`;
  const blob = new Blob(['\ufeff', htmlContent], { type: "application/msword" });
  triggerDownload(blob, "adima-ai-output.doc");
}

// PDF ke roop mein download karta hai - browser ke apne Print > Save as PDF ka istemal karta hai
// (koi heavy PDF library add nahi ki, taaki website fast rahe)
function downloadAsPdf(text) {
  if (!hasValidOutput(text)) return;
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>Adima AI Output</title>
        <style>
          body{ font-family: Arial, sans-serif; padding: 40px; white-space: pre-wrap; line-height: 1.7; color:#111; }
          h1{ font-size: 18px; margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <h1>Adima AI Studio - Generated Content</h1>
        ${escapeForDoc(text)}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
  }, 300);
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function escapeForDoc(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
