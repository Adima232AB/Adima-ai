// Yeh file generate hue jawab ko .txt file ke roop mein download karti hai
function downloadOutput(text) {
  if (!text || text.trim() === "" || text.includes("yahan dikhega")) {
    alert("Pehle kuch generate kariye, tab download hoga.");
    return;
  }

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "adima-ai-output.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}
