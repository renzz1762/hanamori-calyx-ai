/* ================================================================
   HANAMORI CALYX AI — Vercel API Proxy (overchat.ai)
   By renzzzzofc18 | v5.2
   - Proxy ke overchat.ai (claude-haiku-4-5)
   - DEVICE_UUID disimpan di Vercel Environment Variable
   - CORS enabled untuk akses dari browser
================================================================ */

import crypto from "node:crypto";

const OVERCHAT_API = "https://api.overchat.ai/v1/chat/completions";

// ⚠️ Set ini di Vercel Dashboard → Settings → Environment Variables
// Variable name: OVERCHAT_DEVICE_UUID
// Value: UUID random lo (generate di https://www.uuidgenerator.net/)
const DEVICE_UUID = process.env.OVERCHAT_DEVICE_UUID || crypto.randomUUID();

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: { message: "Method not allowed" } });
  }

  try {
    const body = req.body;
    const chatId = body.chatId || crypto.randomUUID();
    const messages = body.messages || [];

    const overBody = {
      chatId,
      model: "claude-haiku-4-5-20251001",
      messages,
      personaId: "claude-haiku-4-5-landing",
      frequency_penalty: 0,
      max_tokens: 4000,
      presence_penalty: 0,
      stream: false, // non-stream biar lebih simpel di proxy
      temperature: body.temperature ?? 0.5,
      top_p: 0.95,
    };

    const response = await fetch(OVERCHAT_API, {
      method: "POST",
      headers: {
        "sec-ch-ua-platform": `"Android"`,
        "x-device-uuid": DEVICE_UUID,
        "sec-ch-ua": `"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"`,
        "sec-ch-ua-mobile": "?1",
        "x-device-language": "id-ID",
        "x-device-platform": "web",
        "x-device-version": "1.0.44",
        "user-agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Mobile Safari/537.36",
        accept: "application/json",
        "content-type": "application/json",
        origin: "https://overchat.ai",
        referer: "https://overchat.ai/",
        "accept-language": "id-ID,id;q=0.9",
        priority: "u=1, i",
      },
      body: JSON.stringify(overBody),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: { message: data?.error || "Overchat API error" },
      });
    }

    // Normalize ke format OpenAI-compatible (yang sudah dipakai main.js)
    // overchat.ai response: { answer: "..." } atau standard choices format
    let content = "";

    if (data.answer) {
      // Format overchat native
      content = data.answer;
    } else if (data.choices?.[0]?.message?.content) {
      // Format OpenAI-compatible
      content = data.choices[0].message.content;
    } else {
      content = "_(Tidak ada respons)_";
    }

    return res.status(200).json({
      choices: [
        {
          message: {
            role: "assistant",
            content,
          },
        },
      ],
    });
  } catch (err) {
    console.error("Proxy error:", err);
    return res.status(500).json({
      error: { message: "Server error: " + err.message },
    });
  }
}
