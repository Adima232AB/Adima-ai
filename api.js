// Yeh file backend (netlify/vercel function) se baat karti hai
const AdimaAPI = (() => {

  async function sendMessage(message, signal) {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
      signal // Stop button se request ko beech mein rokne ke liye
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Kuch gadbad ho gayi, dobara koshish karein.");
    }

    return data.reply;
  }

  return { sendMessage };
})();
