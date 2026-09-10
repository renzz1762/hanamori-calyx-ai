// Vercel Serverless Function: /api/verify-owner
// Username & password Owner yang ASLI cuma ada di sini, dibaca dari
// Environment Variables Vercel (OWNER_LOGIN_USERNAME / OWNER_LOGIN_PASSWORD).
// Tidak pernah dikirim ke browser -- cuma jawaban ok:true/false yang dikirim balik.
module.exports = (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    if (req.method !== 'POST') {
        res.status(405).json({ ok: false, error: 'Method not allowed' });
        return;
    }

    let body = req.body;
    if (!body || typeof body === 'string') {
        try { body = JSON.parse(body || '{}'); } catch (e) { body = {}; }
    }
    const { username, password } = body || {};

    const realUsername = process.env.OWNER_LOGIN_USERNAME;
    const realPassword = process.env.OWNER_LOGIN_PASSWORD;

    if (!realUsername || !realPassword) {
        // Env var belum di-set di Vercel -- jangan pernah loloskan siapa pun.
        res.status(200).json({ ok: false, error: 'OWNER_LOGIN_USERNAME / OWNER_LOGIN_PASSWORD belum di-set di Vercel' });
        return;
    }

    const ok = typeof username === 'string' && typeof password === 'string' &&
        username === realUsername && password === realPassword;

    res.status(200).json({ ok });
};
