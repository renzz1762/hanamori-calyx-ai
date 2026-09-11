/* =====================================================================
   Config Firebase punya kamu (project: apkchat-c65e2).
   Ini AMAN ditaro langsung di sini -- apiKey Firebase itu bukan password,
   cuma "alamat" project kamu. Keamanan datanya diatur lewat Firestore
   Rules (file firestore.rules), bukan dari config ini.
   ===================================================================== */
const firebaseConfig = {
    apiKey: "AIzaSyD_a1SF2-n08291-O-GXag0Mv-_ai77ZQg",
    authDomain: "apkchat-c65e2.firebaseapp.com",
    projectId: "apkchat-c65e2",
    storageBucket: "apkchat-c65e2.firebasestorage.app",
    messagingSenderId: "21368623092",
    appId: "1:21368623092:web:5740c1a2091e422a0cf3a1"
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
