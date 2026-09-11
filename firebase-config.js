/* =====================================================================
   Config Firebase punya kamu (project: cikalgram).
   Ini AMAN ditaro langsung di sini -- apiKey Firebase itu bukan password,
   cuma "alamat" project kamu. Keamanan datanya diatur lewat Firestore
   Rules (file firestore.rules), bukan dari config ini.
   ===================================================================== */
const firebaseConfig = {
    apiKey: "AIzaSyDIE-SFzPrOu4fBot4fmhVxD8E6uY95YKg",
    authDomain: "cikalgram.firebaseapp.com",
    projectId: "cikalgram",
    storageBucket: "cikalgram.firebasestorage.app",
    messagingSenderId: "876713995849",
    appId: "1:876713995849:web:1f20957122a7b3886d1998"
};

let firebaseInitError = null;
try {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
} catch (e) {
    firebaseInitError = "Init Firebase gagal: " + (e && e.message ? e.message : e);
    console.error(firebaseInitError, e);
}
window.firebaseInitError = firebaseInitError;

window.firebaseReadyPromise = firebaseInitError ? Promise.resolve(false) :
    window.db.enablePersistence({ synchronizeTabs: true })
    .catch(() => {})
    .then(() => true);
