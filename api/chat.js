const BASE_URL = 'https://www.chatday.ai';

const BASE_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36',
  'Origin': BASE_URL,
  'Referer': `${BASE_URL}/chat`,
};

async function signInAnonymous() {
  const r = await fetch(`${BASE_URL}/api/auth/sign-in/anonymous`, {
    method: 'POST',
    headers: { ...BASE_HEADERS, 'Content-Type': 'application/json' },
    body: '{}',
  });
  if (!r.ok) throw new Error(`Auth failed: ${r.status}`);

  // Ambil semua set-cookie
  const raw = r.headers.get('set-cookie') || '';
  // Gabungkan semua cookie (bisa multiple, pisah koma tapi tricky — ambil nilai per pasang key=val sebelum titik koma)
  const cookie = raw.split(',')
    .map(c => c.trim().split(';')[0])
    .filter(Boolean)
    .join('; ');

  const data = await r.json();
  return { cookie, token: data.token };
}

function genId(len = 16) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Terima: { messages: [{role,content}], model }
  // atau fallback: { prompt, model }
  const { messages, prompt, model = 'anthropic/claude-sonnet-4.6' } = req.body || {};

  // Ambil konten pesan terakhir dari user sebagai 'content'
  let content = '';
  if (messages && Array.isArray(messages) && messages.length > 0) {
    // Kirim hanya pesan terakhir (API chatday hanya support single turn)
    const last = messages[messages.length - 1];
    content = last.content;
  } else if (prompt) {
    content = prompt;
  }

  if (!content) return res.status(400).json({ error: 'content required' });

  // Buat conversationId unik per request
  const visitorId = genId(32);
  const conversationId = genId(8).toUpperCase() + genId(8).toUpperCase();

  try {
    const { cookie } = await signInAnonymous();

    const upstream = await fetch(`${BASE_URL}/api/v2/chat/anonymous`, {
      method: 'POST',
      headers: {
        ...BASE_HEADERS,
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
        'Cookie': cookie,
      },
      body: JSON.stringify({
        content,
        model,
        visitorId,
        conversationId,
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text().catch(() => '');
      throw new Error(`Upstream error: ${upstream.status} — ${errText.slice(0, 200)}`);
    }

    // SSE stream back to client
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('X-Accel-Buffering', 'no');
    res.setHeader('Connection', 'keep-alive');

    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    let buf = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buf += decoder.decode(value, { stream: true });
      const lines = buf.split('\n');
      buf = lines.pop();

      for (const line of lines) {
        if (!line.startsWith('data:')) continue;
        const payload = line.slice(5).trim();
        if (!payload) continue;
        try {
          const evt = JSON.parse(payload);
          if (evt.type === 'text-delta' && typeof evt.delta === 'string') {
            res.write(`data: ${JSON.stringify({ delta: evt.delta })}\n\n`);
          }
        } catch {}
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();

  } catch (err) {
    console.error('[chat.js error]', err.message);
    if (!res.headersSent) {
      res.status(500).json({ error: err.message });
    } else {
      res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
      res.end();
    }
  }
}
