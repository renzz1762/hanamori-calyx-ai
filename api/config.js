// Vercel Serverless Function: /api/config
// Ambil config Firebase dari Environment Variables di dashboard Vercel,
// BUKAN dari kode. Jadi tidak ada satupun kunci ke-hardcode di file JS publik.
module.exports = (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({
        apiKey: process.env.FIREBASE_API_KEY || '',
        authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
        projectId: process.env.FIREBASE_PROJECT_ID || '',
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
        appId: process.env.FIREBASE_APP_ID || ''
    });
};
