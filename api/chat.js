// Vercel Serverless Function - Gemini AI ko call karti hai
// NOTE: Google ne June 2026 se naye "AQ." format ki API keys nikali hain,
// jo OAuth Bearer token ki tarah bheji jaati hain (x-goog-api-key se nahi)
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

    // Agar yeh model error de ("model not found"), to Google AI Studio me
    // available models ki list dekh kar neeche wala naam badal dein
    const MODEL = "gemini-2.5-flash";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Naye "AQ." format ki key OAuth Bearer token ki tarah kaam karti hai
          "Authorization": `Bearer ${process.env.GEMINI_API_KEY}`
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [
              {
                text: "Aap Adima AI hain, ek helpful aur friendly AI assistant jo Hindi aur English dono mein jawab de sakta hai."
              }
            ]
          },
          contents: [
            {
              role: "user",
              parts: [{ text: message }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    // Agar Gemini ne error diya (jaise galat API key ya galat model naam)
    if (!response.ok) {
      res.status(response.status).json({
        error: data.error?.message || "Gemini API mein koi gadbad hui."
      });
      return;
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Maaf kijiye, koi jawab nahi mil paaya.";

    res.status(200).json({ reply });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
