exports.handler = async (event) => {
  // Sirf POST request allow karo
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Sirf POST method allowed hai." })
    };
  }

  try {
    const { message } = JSON.parse(event.body);

    // Agar user ne kuch nahi likha
    if (!message || message.trim() === "") {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Message khali hai. Pehle kuch likhiye." })
      };
    }

    // Agar yeh model error de ("model not found"), to Google AI Studio me
    // "Get API Key" page ke paas hi available models ki list dekh kar
    // neeche wala naam badal dein (jaise "gemini-2.5-flash")
    const MODEL = "gemini-2.5-flash";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
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
      return {
        statusCode: response.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: data.error?.message || "Gemini API mein koi gadbad hui."
        })
      };
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Maaf kijiye, koi jawab nahi mil paaya.";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply })
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message })
    };
  }
};
