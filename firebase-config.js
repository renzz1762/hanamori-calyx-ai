/* =====================================================================
   File ini SUDAH TIDAK BERISI kredensial apa pun.
   Config Firebase diambil dari serverless function /api/config,
   yang bacanya dari Environment Variables di Vercel (lihat tutorial).
   Firebase Web config MEMANG didesain aman untuk publik (bukan password),
   tapi kita tetap taruh di server biar tidak ada satu pun kunci
   ke-hardcode di file yang bisa dibaca lewat "view source".
   ===================================================================== */
window.firebaseReadyPromise = (async () => {
    try {
        const res = await fetch('/api/config');
        if (!res.ok) throw new Error('Gagal ambil /api/config (status ' + res.status + ')');
        const firebaseConfig = await res.json();
        if (!firebaseConfig || !firebaseConfig.apiKey) {
            throw new Error('Config Firebase kosong. Cek Environment Variables di Vercel.');
        }
        firebase.initializeApp(firebaseConfig);
        window.db = firebase.firestore();
        try { await window.db.enablePersistence({ synchronizeTabs: true }); } catch (e) {}
        return true;
    } catch (e) {
        console.error('Firebase gagal disiapkan:', e);
        return false;
    }
})();
