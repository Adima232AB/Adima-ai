// Vercel Serverless Function - DeepSeek AI ko call karti hai
module.exports = async (req, res) => {
  // Sirf POST request allow karo
  if (req.method !== "POST") {
    res.status(405).json({ error: "Sirf POST method allowed hai." });
    return;
  }

  try {
    const { message } = req.body;

    // Agar user ne kuch nahi likha
    if (!message || message.trim() === "") {
      res.status(400).json({ error: "Message khali hai. Pehle kuch likhiye." });
      return;
    }

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "Aap Adima AI hain, ek helpful aur friendly AI assistant jo Hindi aur English dono mein jawab de sakta hai."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    // Agar DeepSeek ne error diya (jaise galat API key)
    if (!response.ok) {
      res.status(response.status).json({
        error: data.error?.message || "DeepSeek API mein koi gadbad hui."
      });
      return;
    }

    const reply = data.choices?.[0]?.message?.content || "Maaf kijiye, koi jawab nahi mil paaya.";

    res.status(200).json({ reply });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
