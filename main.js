/* ================= INLINE ICON SYSTEM ================= */
        const ICON_PATHS = {
            "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
            "circle-dashed": '<circle cx="12" cy="12" r="9" stroke-dasharray="3.2 3.2"/>',
            "users-round": '<path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.5-8.3"/>',
            "settings": '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
            "plus": '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
            "camera": '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3.2"/>',
            "search": '<circle cx="11" cy="11" r="7.5"/><line x1="21" y1="21" x2="16.2" y2="16.2"/>',
            "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
            "video": '<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
            "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
            "smile": '<circle cx="12" cy="12" r="9.5"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',
            "paperclip": '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
            "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
            "send": '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
            "check": '<polyline points="20 6 9 17 4 12"/>',
            "check-check": '<path d="M18 6L7 17l-5-5"/><path d="M22 10L12 20l-4-4"/>',
            "x": '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
            "megaphone": '<path d="M3 11l18-6v14L3 15v-4z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
            "type": '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
            "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
            "lock": '<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
            "unlock": '<rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.5-2.5"/>',
            "bell": '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
            "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><line x1="1" y1="1" x2="23" y2="23"/>',
            "flag": '<path d="M4 22V4"/><path d="M4 4h13l-2 4 2 4H4"/>',
            "trash": '<polyline points="3 6 5 6 21 6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
            "help-circle": '<circle cx="12" cy="12" r="9.5"/><path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2-3 4"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
            "info": '<circle cx="12" cy="12" r="9.5"/><line x1="12" y1="16" x2="12" y2="11.5"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
            "chevron-right": '<polyline points="9 18 15 12 9 6"/>',
            "moon": '<path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/>',
            "database": '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>',
            "heart": '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
            "eye": '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>',
            "link": '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/>',
            "ban": '<circle cx="12" cy="12" r="9.5"/><line x1="5" y1="19" x2="19" y2="5"/>',
            "image": '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.7"/><path d="M21 15l-5-5-9 9"/>',
            "film": '<rect x="2.5" y="4" width="19" height="16" rx="2"/><line x1="7" y1="4" x2="7" y2="20"/><line x1="17" y1="4" x2="17" y2="20"/><line x1="2.5" y1="9" x2="7" y2="9"/><line x1="2.5" y1="15" x2="7" y2="15"/><line x1="17" y1="9" x2="21.5" y2="9"/><line x1="17" y1="15" x2="21.5" y2="15"/>',
            "copy": '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
            "badge-check": '<circle cx="12" cy="12" r="9.5"/><polyline points="8 12.5 11 15.5 16 9"/>',
            "crown": '<path d="M2 19h20"/><path d="M4 19l-1-9 5 4 4-7 4 7 5-4-1 9"/>',
            "shield-check": '<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/><polyline points="9 12 11 14 15 10"/>',
            "story": '<circle cx="12" cy="12" r="9.5"/><path d="M7 12l3 3 7-7"/>',
            "news": '<path d="M4 4h16v16H4z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/>',
            "pin": '<path d="M12 2a5 5 0 0 0-5 5c0 3.5 5 11 5 11s5-7.5 5-11a5 5 0 0 0-5-5z"/><circle cx="12" cy="7" r="1.8"/>',
            "compass": '<circle cx="12" cy="12" r="9.5"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
        };
        const DOT_ICONS = { "more-vertical": [
                [12, 5, 1.4],
                [12, 12, 1.4],
                [12, 19, 1.4]
            ] };

        function svgIcon(name, size, color, strokeWidth) {
            size = size || 20;
            color = color || "currentColor";
            strokeWidth = (strokeWidth === undefined) ? 2 : strokeWidth;
            if (DOT_ICONS[name]) {
                const dots = DOT_ICONS[name].map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" stroke="none"/>`)
                    .join("");
                return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24">${dots}</svg>`;
            }
            const body = ICON_PATHS[name] || "";
            return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
        }
        function heartInline(size, color) {
            return `<span style="display:inline-flex;align-items:center;">${svgIcon('heart', size || 11, color || '#C9553B', 2)}</span>`;
        }

        /* ================= LOGIN & AUTH (Firestore + API server buat password owner) ================= */
        // PENTING: username & password Owner TIDAK ADA di file ini lagi.
        // Itu disimpan sebagai Environment Variable di Vercel dan dicek lewat /api/verify-owner
        // (lihat folder /api), jadi tidak akan kelihatan siapa pun walau buka source code / inspect element.
        const OWNER_DOC_ID = "__owner__"; // id dokumen profil Owner di Firestore (bukan rahasia, cuma id data)

        let loggedInUser = null;
        let isOwner = false;
        let USERS = [];
        let BAN_REQUESTS = [];
        let appBooted = false;
        let hasCloud = false;

        function usersCol() { return db.collection('users'); }
        function channelsCol() { return db.collection('channels'); }
        function communitiesCol() { return db.collection('communities'); }
        function ownerStoriesCol() { return db.collection('ownerStories'); }
        function ownerNewsCol() { return db.collection('ownerNews'); }
        function ownerRequestsCol() { return db.collection('ownerRequests'); }
        function banRequestsCol() { return db.collection('banRequests'); }
        function statusesCol() { return db.collection('statuses'); }
        function conversationsCol() { return db.collection('conversations'); }
        function presenceCol() { return db.collection('presence'); }

        async function ensureOwnerAccount() {
            if (!hasCloud) return;
            try {
                const ref = usersCol().doc(OWNER_DOC_ID);
                const snap = await ref.get();
                if (!snap.exists) {
                    await ref.set({
                        username: OWNER_DOC_ID, phone: "08123456789", name: "Owner",
                        isOwner: true, banned: false, banReason: "", bio: "Owner aplikasi Chat App",
                        avatar: null, avatarType: null, banner: null, bannerType: null, verified: true
                    });
                } else {
                    const d = snap.data();
                    if (!d.isOwner || !d.verified) await ref.set({ isOwner: true, verified: true }, { merge: true });
                }
            } catch (e) { console.error("Gagal siapkan akun owner di Firestore:", e); }
        }

        // Cek username/password Owner lewat serverless function (password aslinya cuma ada di server Vercel)
        async function verifyOwnerOnServer(username, password) {
            try {
                const res = await fetch('/api/verify-owner', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                if (!res.ok) {
                    showDebugBanner("❌ /api/verify-owner status " + res.status + " " + res.statusText + " (folder api/ mungkin belum kebaca Vercel)");
                    return false;
                }
                const data = await res.json();
                if (data.error) showDebugBanner("⚠️ verify-owner: " + data.error);
                return !!data.ok;
            } catch (e) {
                showDebugBanner("❌ Gagal hubungi /api/verify-owner: " + (e && e.message ? e.message : e));
                return false;
            }
        }

        function listenUsers() {
            if (!hasCloud) return;
            usersCol().onSnapshot(snap => {
                USERS = snap.docs.map(d => d.data());
                if (loggedInUser) {
                    const fresh = USERS.find(u => u.username === loggedInUser.username);
                    if (fresh) {
                        loggedInUser = fresh;
                        isOwner = !!fresh.isOwner;
                        ME.name = fresh.name || fresh.username;
                        ME.username = fresh.username;
                        ME.phone = fresh.phone || "-";
                        ME.about = fresh.bio || "Halo! Saya pengguna Chat App";
                        ME.avatar = fresh.avatar || null;
                        ME.avatarType = fresh.avatarType || null;
                        ME.banner = fresh.banner || null;
                        ME.bannerType = fresh.bannerType || null;
                        ME.verified = isOwner ? true : (fresh.verified || false);
                        if (fresh.banned) showBannedOverlay(fresh.banReason || "Anda telah diblokir oleh Owner.");
                    }
                }
                if (appBooted) { renderMain(); if (infoTarget) renderInfo(); }
            }, err => console.error("listenUsers error:", err));
        }

        // Simpan SEMUA akun di USERS ke Firestore (dipanggil setelah ada perubahan data user).
        function saveUsers() {
            if (!hasCloud) return;
            USERS.forEach(u => {
                usersCol().doc(u.username).set(u, { merge: true }).catch(e => console.error("saveUsers:", e));
            });
        }

        function listenBanRequests() {
            if (!hasCloud) return;
            banRequestsCol().onSnapshot(snap => {
                BAN_REQUESTS = snap.docs.map(d => d.data());
                if (appBooted && isOwner) renderMain();
            }, err => console.error("listenBanRequests error:", err));
        }
        function loadBanRequests() {} // kompatibilitas lama, sekarang pakai listener realtime

        function saveBanRequests() {
            if (!hasCloud) return;
            BAN_REQUESTS.forEach(r => {
                banRequestsCol().doc(String(r.id)).set(r, { merge: true }).catch(e => console.error("saveBanRequests:", e));
            });
        }

        function loadSession() {
            try {
                const savedUsername = localStorage.getItem('chat_session_user');
                if (savedUsername) {
                    const user = USERS.find(u => u.username === savedUsername);
                    if (user) {
                        loggedInUser = user;
                        isOwner = !!user.isOwner;
                        if (user.banned) {
                            showBannedOverlay(user.banReason || "Anda telah diblokir oleh Owner.");
                            return false;
                        }
                        ME.name = user.name || user.username;
                        ME.username = user.username;
                        ME.phone = user.phone || "-";
                        ME.about = user.bio || "Halo! Saya pengguna Chat App";
                        ME.avatar = user.avatar || null;
                        ME.avatarType = user.avatarType || null;
                        ME.banner = user.banner || null;
                        ME.bannerType = user.bannerType || null;
                        ME.verified = isOwner ? true : (user.verified || false);
                        return true;
                    }
                }
            } catch (e) {}
            return false;
        }

        function saveSession(user) {
            try { localStorage.setItem('chat_session_user', user.username); } catch (e) {}
        }

        function clearSession() {
            localStorage.removeItem('chat_session_user');
            setPresence(false);
        }

        // Login sekarang async: cek dulu ke server apakah ini Owner, baru fallback ke akun biasa di Firestore.
        async function handleLogin(username, password) {
            const isOwnerLogin = await verifyOwnerOnServer(username, password);
            let user = null;
            if (isOwnerLogin) {
                user = USERS.find(u => u.username === OWNER_DOC_ID) || null;
                if (!user) {
                    await ensureOwnerAccount();
                    try {
                        const snap = await usersCol().doc(OWNER_DOC_ID).get();
                        if (snap.exists) {
                            user = snap.data();
                            if (!USERS.find(u => u.username === OWNER_DOC_ID)) USERS.push(user);
                        }
                    } catch (e) {
                        showDebugBanner("❌ Gagal ambil akun Owner dari Firestore: " + (e && e.message ? e.message : e));
                    }
                }
            } else {
                user = USERS.find(u => u.username === username && u.password === password) || null;
            }
            if (user) {
                if (user.banned) {
                    showBannedOverlay(user.banReason || "Anda telah diblokir oleh Owner.");
                    return false;
                }
                loggedInUser = user;
                isOwner = !!user.isOwner;
                saveSession(user);
                document.getElementById('login-screen').classList.add('hidden');
                document.getElementById('banned-overlay').classList.remove('open');
                ME.name = user.name || user.username;
                ME.username = user.username;
                ME.phone = user.phone || "-";
                ME.about = user.bio || "Halo! Saya pengguna Chat App";
                ME.avatar = user.avatar || null;
                ME.avatarType = user.avatarType || null;
                ME.banner = user.banner || null;
                ME.bannerType = user.bannerType || null;
                ME.verified = isOwner ? true : (user.verified || false);
                initApp();
                setPresence(true);
                return true;
            }
            return false;
        }

        function handleRegister(username, password, phone, session) {
            if (USERS.find(u => u.username === username)) {
                return { success: false, error: "Username sudah terdaftar!" };
            }
            if (username === OWNER_DOC_ID) {
                return { success: false, error: "Username tidak tersedia!" };
            }
            const newUser = {
                username,
                password,
                phone: phone || "-",
                session: session || "sess_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8),
                name: username,
                isOwner: false,
                banned: false,
                banReason: "",
                bio: "Halo! Saya pengguna Chat App",
                avatar: null,
                avatarType: null,
                banner: null,
                bannerType: null,
                verified: false
            };
            USERS.push(newUser);
            saveUsers();
            return { success: true, user: newUser };
        }

        function showBannedOverlay(reason) {
            document.getElementById('ban-reason-text').textContent = reason || "Anda telah diblokir oleh Owner karena melanggar kebijakan.";
            document.getElementById('banned-overlay').classList.add('open');
            document.getElementById('banned-overlay').style.display = 'flex';
            document.querySelectorAll('.screen, .content, .bottom-nav, .header').forEach(el => {
                el.style.display = 'none';
            });
            document.getElementById('main-content').style.display = 'none';
        }

        function hideBannedOverlay() {
            document.getElementById('banned-overlay').classList.remove('open');
            document.getElementById('banned-overlay').style.display = 'none';
            document.querySelectorAll('.screen, .content, .bottom-nav, .header').forEach(el => {
                el.style.display = '';
            });
            document.getElementById('main-content').style.display = '';
        }

        function requestUnban(reason) {
            if (!loggedInUser) return;
            BAN_REQUESTS.push({
                id: Date.now(),
                username: loggedInUser.username,
                reason: reason || "Saya ingin meminta pembukaan blokir.",
                status: "pending",
                time: "Baru saja"
            });
            saveBanRequests();

            const help = CHATS.find(x => x.id === 999);
            if (help) {
                help.messages.push({
                    id: help.messages.length + 1,
                    from: "them",
                    broadcastType: "alert",
                    title: "Permintaan Buka Blokir",
                    text: `Permintaan buka blokir dari @${loggedInUser.username}: ${reason || "Saya ingin meminta pembukaan blokir."}`,
                    time: "Sekarang",
                    status: "read"
                });
            }
            saveData();
            alert("Permintaan buka blokir telah dikirim ke Owner.");
        }

        /* ================= DATA ================= */
        let ME = { name: "Pengguna", username: "user", about: "Halo! Saya pengguna Chat App", phone: "-",
            avatar: null, avatarType: null, banner: null, bannerType: null, verified: false };
        let OWNER_MODE = false;
        let OWNER_REQUESTS = [];
        let infoTarget = null;
        let currentInfoChat = null;
        let activeStoryOwner = "contact";
        let mySubIndex = 0;
        let tempAvatar = null,
            tempAvatarType = null,
            tempBanner = null,
            tempBannerType = null,
            tempStatusMedia = null;

        let CHATS = [];
        let STATUSES = [];
        let MY_STATUS = [];
        let COMMUNITIES = [];
        let OWNER_STORIES = [];
        let OWNER_NEWS = [];
        let CHANNEL_DIRECTORY = [];
        let channelSearchQuery = "";

        const CONTACT_POOL = [
            { name: "Dewi Anggraini", initials: "DA", color: "#2F6F5E" },
            { name: "Bang Fajar", initials: "BF", color: "#8A5A44" },
            { name: "Rina Wijaya", initials: "RW", color: "#B0553B" },
            { name: "Yusuf Pratama", initials: "YP", color: "#5B7A8C" },
            { name: "Siti Marlina", initials: "SM", color: "#946B9E" },
        ];

        let GROUP_DIRECTORY = [
            { name: "Komunitas Pecinta Kopi", code: "KOPI24", color: "#8A5A44", initials: "KP" },
            { name: "Diskusi Programmer ID", code: "DEV99", color: "#4A5FA3", initials: "DP" },
        ];

        const SETTINGS_ITEMS = [
            { icon: "user", label: "Akun", sub: "Info profil, nomor terdaftar" },
            { icon: "lock", label: "Privasi", sub: "Terakhir dilihat, foto profil, blokir" },
            { icon: "bell", label: "Notifikasi", sub: "Nada dering pesan & grup" },
            { icon: "database", label: "Penyimpanan & Data", sub: "Pemakaian jaringan, unduh otomatis" },
            { icon: "moon", label: "Tampilan", sub: "Tema terang, gelap, wallpaper" },
            { icon: "help-circle", label: "Bantuan", sub: "Chat dengan Owner, laporkan masalah, minta centang biru" },
            { icon: "info", label: "Tentang", sub: "Info aplikasi, versi" },
        ];

        let activeTab = "chats";
        let activeChatId = null;
        let activeStoryIndex = 0;
        let storyTimer = null;
        let nextId = 100;
        let dialOpen = false;

        function privateDataRef() {
            return usersCol().doc(loggedInUser.username).collection('private').doc('data');
        }

        // Data privat per akun (chat DM/grup lokal, nextId) -- disimpan di Firestore
        // supaya tidak ilang walau ganti device/browser (bukan lagi localStorage).
        async function loadPrivateData() {
            if (!hasCloud || !loggedInUser) return false;
            try {
                const snap = await privateDataRef().get();
                if (snap.exists) {
                    const d = snap.data();
                    CHATS = d.chats || [];
                    if (d.nextId) nextId = d.nextId;
                    return true;
                }
            } catch (e) { console.error("loadPrivateData:", e); }
            return false;
        }

        function savePrivateData() {
            if (!hasCloud || !loggedInUser) return;
            privateDataRef().set({
                chats: CHATS.filter(c => c.type !== "channel"),
                nextId
            }, { merge: true }).catch(e => {
                if (e && (e.code === "resource-exhausted" || /size|large/i.test(e.message || ""))) {
                    if (!window.__quotaWarned) {
                        window.__quotaWarned = true;
                        alert("Data terlalu besar untuk disimpan (biasanya karena foto/video). Coba pakai foto/video yang lebih kecil.");
                        setTimeout(() => { window.__quotaWarned = false; }, 4000);
                    }
                } else console.error("savePrivateData:", e);
            });
        }

        function loadData() { return false; } // kompatibilitas lama; sekarang lewat listener + loadPrivateData

        // Simpan semua koleksi BERSAMA (saluran, komunitas, story & berita owner) ke Firestore
        // supaya keliatan sama semua orang, plus data privat chat/DM akun sendiri.
        function saveData() {
            if (!hasCloud) return true;
            CHATS.filter(c => c.type === "channel").forEach(c => {
                channelsCol().doc(String(c.id)).set(c, { merge: true }).catch(e => console.error("save channel:", e));
            });
            COMMUNITIES.forEach(k => {
                communitiesCol().doc(String(k.id)).set(k, { merge: true }).catch(e => console.error("save community:", e));
            });
            OWNER_STORIES.forEach(s => {
                ownerStoriesCol().doc(String(s.id)).set(s, { merge: true }).catch(e => console.error("save ownerStory:", e));
            });
            OWNER_NEWS.forEach(n => {
                ownerNewsCol().doc(String(n.id)).set(n, { merge: true }).catch(e => console.error("save ownerNews:", e));
            });
            OWNER_REQUESTS.forEach(r => {
                ownerRequestsCol().doc(String(r.id)).set(r, { merge: true }).catch(e => console.error("save ownerRequest:", e));
            });
            if (loggedInUser) {
                MY_STATUS.forEach(s => {
                    statusesCol().doc(String(s.id)).set({ ...s, owner: loggedInUser.username }, { merge: true })
                        .catch(e => console.error("save status:", e));
                });
            }
            savePrivateData();
            return true;
        }

        // ===== Listener realtime untuk koleksi bersama =====
        function listenChannels() {
            if (!hasCloud) return;
            channelsCol().onSnapshot(snap => {
                const all = snap.docs.map(d => d.data());
                const me = loggedInUser ? loggedInUser.username : null;
                const followed = all.filter(c => (c.followers || []).includes(me));
                const notFollowed = all.filter(c => !(c.followers || []).includes(me));
                // Pertahankan channel yang baru dibuat sendiri sebelum followers ke-set (fallback)
                CHATS = CHATS.filter(c => c.type !== "channel").concat(followed.map(c => ({ ...c, type: "channel" })));
                CHANNEL_DIRECTORY = notFollowed;
                if (appBooted) renderMain();
            }, err => console.error("listenChannels:", err));
        }
        function listenCommunities() {
            if (!hasCloud) return;
            communitiesCol().onSnapshot(snap => {
                COMMUNITIES = snap.docs.map(d => d.data());
                if (appBooted) renderMain();
            }, err => console.error("listenCommunities:", err));
        }
        function listenOwnerContent() {
            if (!hasCloud) return;
            ownerStoriesCol().onSnapshot(snap => {
                OWNER_STORIES = snap.docs.map(d => d.data()).sort((a, b) => b.id - a.id);
                syncOwnerStoriesToStatuses();
                if (appBooted) renderMain();
            }, err => console.error("listenOwnerStories:", err));
            ownerNewsCol().onSnapshot(snap => {
                OWNER_NEWS = snap.docs.map(d => d.data()).sort((a, b) => b.id - a.id);
                if (appBooted && isOwner) renderOwnerPanel();
            }, err => console.error("listenOwnerNews:", err));
            ownerRequestsCol().onSnapshot(snap => {
                OWNER_REQUESTS = snap.docs.map(d => d.data());
                if (appBooted && isOwner) { renderMain(); renderOwnerPanel(); }
            }, err => console.error("listenOwnerRequests:", err));
        }
        function listenStatuses() {
            if (!hasCloud) return;
            statusesCol().onSnapshot(snap => {
                const all = snap.docs.map(d => d.data());
                const me = loggedInUser ? loggedInUser.username : null;
                MY_STATUS = all.filter(s => s.owner === me).sort((a, b) => a.id - b.id);
                STATUSES = all.filter(s => s.owner !== me && s.owner !== "owner_broadcast")
                    .sort((a, b) => b.id - a.id);
                if (appBooted) renderMain();
            }, err => console.error("listenStatuses:", err));
        }

        // Update user data di USERS saat ME berubah
        function updateUserData() {
            if (loggedInUser) {
                const userData = USERS.find(u => u.username === loggedInUser.username);
                if (userData) {
                    userData.name = ME.name;
                    userData.bio = ME.about;
                    userData.phone = ME.phone;
                    userData.avatar = ME.avatar;
                    userData.avatarType = ME.avatarType;
                    userData.banner = ME.banner;
                    userData.bannerType = ME.bannerType;
                    userData.verified = isOwner ? true : ME.verified;
                    saveUsers();
                }
            }
        }

        function initDefaultData() {
            if (CHATS.length === 0) {
                CHATS = [
                    { id: 1, type: "dm", name: "Dewi Anggraini", initials: "DA", color: "#2F6F5E", username: "dewi.a",
                        verified: false, banned: false, avatar: null, lastSeen: "online",
                        messages: [
                            { id: 1, from: "them", text: "Woy, jadi meeting jam berapa besok?", time: "09:12",
                                status: "read" },
                            { id: 2, from: "me", text: "Jam 10 pagi ya, di ruang B", time: "09:14",
                            status: "read" },
                            { id: 3, from: "them", text: "Oke siap, gue bawain laptop tambahan", time: "09:15",
                                status: "read" },
                        ] },
                    { id: 2, type: "dm", name: "Bang Fajar", initials: "BF", color: "#8A5A44", username: "bang.fajar",
                        verified: false, banned: false, avatar: null, lastSeen: "terakhir dilihat 12.40",
                        messages: [
                            { id: 1, from: "them", text: "Barangnya udah sampai belum?", time: "08:02",
                                status: "read" },
                            { id: 2, from: "me", text: "Udah, tadi pagi diantar kurir", time: "08:10",
                                status: "delivered" },
                        ] },
                    { id: 3, type: "group", name: "Grup Keluarga", initials: "GK", color: "#4A5FA3",
                        username: "grupkeluarga", verified: false, banned: false, avatar: null, banner: null,
                        bannerType: null,
                        lastSeen: "5 anggota", members: ["Anda", "Ibu", "Bapak", "Kak Nia", "Dek Ari"],
                        inviteCode: "KLRG82",
                        subgroups: [],
                        messages: [
                            { id: 1, from: "them", text: "Lebaran tahun ini di rumah Ibu ya", time: "Kemarin",
                                status: "read" },
                            { id: 2, from: "me", text: "Siap, gue bantu siapin", time: "Kemarin",
                            status: "read" },
                        ] },
                    { id: 4, type: "dm", name: "Rina Wijaya", initials: "RW", color: "#B0553B", username: "rina.w",
                        verified: false, banned: false, avatar: null, lastSeen: "online",
                        messages: [
                            { id: 1, from: "them", text: "Filenya udah gue kirim ke email", time: "Selasa",
                                status: "read" },
                        ] },
                    { id: 999, type: "help", name: "Bantuan (Owner)", initials: "OW", color: "#234F42",
                        username: "owner.help", verified: true, banned: false, avatar: null,
                        lastSeen: "Layanan Bantuan",
                        messages: [
                            { id: 1, from: "them", text: "Halo! Ini layanan Bantuan. Tulis kendala Anda di sini, atau ketuk tombol di bawah untuk minta verifikasi centang biru.",
                                time: "09:00", status: "read" },
                        ] },
                ];
            }
            saveData();
        }

        async function ensureSeedChannels() {
            if (!hasCloud) return;
            try {
                const snap = await channelsCol().limit(1).get();
                if (snap.empty) {
                    const seeds = [
                        { id: 5001, name: "Info Diskon Harian", initials: "ID", color: "#B0553B",
                            desc: "Info promo & diskon toko online setiap hari.", verified: false, followers: [] },
                        { id: 5002, name: "Berita Teknologi", initials: "BT", color: "#4A5FA3",
                            desc: "Kabar terbaru seputar gadget dan teknologi.", verified: true, followers: [] },
                        { id: 5003, name: "Resep Masakan Rumahan", initials: "RM", color: "#2F6F5E",
                            desc: "Resep praktis untuk masak sehari-hari.", verified: false, followers: [] },
                    ];
                    for (const s of seeds) await channelsCol().doc(String(s.id)).set(s);
                }
            } catch (e) { console.error("ensureSeedChannels:", e); }
        }

        async function initApp() {
            await loadPrivateData();
            if (CHATS.length === 0) initDefaultData();
            listenChannels();
            listenCommunities();
            listenOwnerContent();
            listenStatuses();
            listenPresence();
            listenConversations();
            appBooted = true;
            renderMain();
            updateUserData();

            syncOwnerStoriesToStatuses();

            if (loggedInUser) {
                const userData = USERS.find(u => u.username === loggedInUser.username);
                if (userData && userData.banned) {
                    showBannedOverlay(userData.banReason);
                }
            }
        }

        // ===== Presence (online / terakhir dilihat) =====
        let PRESENCE = {}; // { username: { online, lastActive(ms) } }
        let presenceHeartbeat = null;

        function setPresence(online) {
            if (!hasCloud || !loggedInUser) return;
            presenceCol().doc(loggedInUser.username).set({
                online, lastActive: Date.now()
            }, { merge: true }).catch(e => console.error("setPresence:", e));
        }

        function listenPresence() {
            if (!hasCloud) return;
            presenceCol().onSnapshot(snap => {
                snap.docs.forEach(d => { PRESENCE[d.id] = d.data(); });
                if (appBooted) {
                    if (activeChatId != null) renderChatHeader();
                    if (infoTarget) renderInfo();
                }
            }, err => console.error("listenPresence:", err));
            clearInterval(presenceHeartbeat);
            presenceHeartbeat = setInterval(() => setPresence(true), 20000);
            setPresence(true);
            document.addEventListener("visibilitychange", () => {
                setPresence(document.visibilityState === "visible");
            });
            window.addEventListener("beforeunload", () => setPresence(false));
        }

        function formatLastSeen(username) {
            const p = PRESENCE[username];
            if (!p) return "";
            const isOnline = p.online && (Date.now() - p.lastActive) < 60000;
            if (isOnline) return "online";
            if (!p.lastActive) return "";
            const diffMin = Math.floor((Date.now() - p.lastActive) / 60000);
            if (diffMin < 1) return "terakhir dilihat baru saja";
            if (diffMin < 60) return `terakhir dilihat ${diffMin} menit lalu`;
            const diffHr = Math.floor(diffMin / 60);
            if (diffHr < 24) return `terakhir dilihat ${diffHr} jam lalu`;
            const diffDay = Math.floor(diffHr / 24);
            return `terakhir dilihat ${diffDay} hari lalu`;
        }

        function syncOwnerStoriesToStatuses() {
            const ownerStoryIds = OWNER_STORIES.map(s => s.id);
            STATUSES = STATUSES.filter(s => !ownerStoryIds.includes(s.id) || s.name !== "Owner");

            OWNER_STORIES.forEach(story => {
                STATUSES.unshift({
                    id: story.id,
                    name: "Owner",
                    initials: "OW",
                    color: "#234F42",
                    avatar: null,
                    verified: true,
                    time: story.time,
                    viewed: false,
                    type: story.type,
                    text: story.text,
                    mediaUrl: story.mediaUrl,
                    likes: story.likes || []
                });
            });
        }

        function escapeHtml(str) {
            const div = document.createElement("div");
            div.textContent = str == null ? "" : str;
            return div.innerHTML;
        }

        function statusIcon(status) {
            if (status === "read") return svgIcon("check-check", 14, "#4FA3D1");
            if (status === "delivered") return svgIcon("check-check", 14, "#8B9A97");
            return svgIcon("check", 14, "#8B9A97");
        }

        function typeBadge(type) {
            if (type === "group") return svgIcon("users-round", 13, "currentColor");
            if (type === "channel") return svgIcon("megaphone", 13, "currentColor");
            return "";
        }

        function verifiedBadgeSVG(size) {
            size = size || 14;
            return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" style="display:block;">
                <path fill="#3897F0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z"/>
                <polyline points="7 12.4 10.2 15.4 16.6 8.4" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        }

        function verifiedBadge(v) {
            return v ? `<span class="verified-badge">${verifiedBadgeSVG(14)}</span>` : "";
        }

        function avatarHTML(entity, opts) {
            opts = opts || {};
            const size = opts.size || 50;
            const square = !!opts.square;
            const cls = "avatar" + (square ? " avatar-square" : "");
            const bg = entity.avatar ? "transparent" : (entity.color || "#2F6F5E");
            const inner = entity.avatar ?
                (entity.avatarType === "video" ?
                    `<video src="${entity.avatar}" style="width:100%;height:100%;object-fit:cover;" autoplay muted loop playsinline></video>` :
                    `<img src="${entity.avatar}" style="width:100%;height:100%;object-fit:cover;"/>`) :
                (entity.initials || (entity.name ? entity.name.slice(0, 2).toUpperCase() : "?"));
            return `<div class="${cls}" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.34)}px;background:${bg};flex-shrink:0;">${inner}</div>`;
        }

        function bigAvatarHTML(entity, editable, editId, square) {
            const bg = entity.avatar ? "transparent" : (entity.color || "#2F6F5E");
            const inner = entity.avatar ?
                (entity.avatarType === "video" ?
                    `<video src="${entity.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" autoplay muted loop playsinline></video>` :
                    `<img src="${entity.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;"/>`) :
                (entity.initials || (entity.name ? entity.name.slice(0, 2).toUpperCase() : "?"));
            return `<div class="big-avatar ${square ? "square" : ""}" style="background:${bg};color:#F4F1EA;display:flex;align-items:center;justify-content:center;overflow:hidden;font-family:'Fraunces',serif;font-weight:600;font-size:30px;position:relative;">
                ${inner}
                ${editable ? `<div class="avatar-edit-btn" id="${editId || "avatar-edit-btn"}">${svgIcon("camera", 15, "#fff")}</div>` : ""}
            </div>`;
        }

        function randCode(len) {
            len = len || 6;
            const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
            let s = "";
            for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
            return s;
        }

        const MAX_VIDEO_BYTES = 9 * 1024 * 1024; // ~9MB, batas aman untuk localStorage

        function compressImageDataUrl(dataUrl, maxDim, quality, cb) {
            const img = new Image();
            img.onload = () => {
                let { width, height } = img;
                if (width > maxDim || height > maxDim) {
                    if (width >= height) { height = Math.round(height * (maxDim / width)); width = maxDim; }
                    else { width = Math.round(width * (maxDim / height)); height = maxDim; }
                }
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
                try {
                    cb(canvas.toDataURL("image/jpeg", quality));
                } catch (e) { cb(dataUrl); }
            };
            img.onerror = () => cb(dataUrl);
            img.src = dataUrl;
        }

        function pickFile(accept, onLoad) {
            const inp = document.createElement("input");
            inp.type = "file";
            inp.accept = accept;
            inp.style.display = "none";
            inp.addEventListener("change", () => {
                const file = inp.files[0];
                if (!file) { document.body.removeChild(inp); return; }
                const isVideo = file.type.startsWith("video");
                if (isVideo && file.size > MAX_VIDEO_BYTES) {
                    alert("Video terlalu besar (maks ~9MB). Ini adalah batas penyimpanan lokal di browser -- pakai video yang lebih pendek/kecil ya.");
                    document.body.removeChild(inp);
                    return;
                }
                const reader = new FileReader();
                reader.onload = () => {
                    if (isVideo) {
                        onLoad("video", reader.result);
                        document.body.removeChild(inp);
                    } else {
                        // Kompres gambar dulu supaya hemat ruang penyimpanan
                        compressImageDataUrl(reader.result, 1280, 0.75, (compressed) => {
                            onLoad("image", compressed);
                            document.body.removeChild(inp);
                        });
                    }
                };
                reader.readAsDataURL(file);
            });
            document.body.appendChild(inp);
            inp.click();
        }

        function seedViewers() {
            return [
                { name: "Dewi Anggraini", initials: "DA", color: "#2F6F5E", avatar: null, time: "5 menit lalu",
                    liked: true },
                { name: "Rina Wijaya", initials: "RW", color: "#B0553B", avatar: null, time: "2 menit lalu",
                    liked: false },
            ];
        }

        /* Static icon slots */
        document.getElementById("camera-btn").innerHTML = svgIcon("camera", 20, "#7C8A87");
        document.getElementById("menu-btn").innerHTML = svgIcon("more-vertical", 20, "#7C8A87");
        document.getElementById("fab").innerHTML = svgIcon("plus", 24, "#FBFAF7");
        document.getElementById("chat-back").innerHTML = svgIcon("arrow-left", 21, "#1E2A28");
        document.getElementById("info-back").innerHTML = svgIcon("arrow-left", 21, "#1E2A28");
        document.getElementById("owner-back").innerHTML = svgIcon("arrow-left", 21, "#1E2A28");
        document.getElementById("chat-header-actions").innerHTML =
            `<div class="icon-btn">${svgIcon("video",19,"#7C8A87")}</div><div class="icon-btn">${svgIcon("phone",17,"#7C8A87")}</div><div class="icon-btn">${svgIcon("more-vertical",19,"#7C8A87")}</div>`;
        document.getElementById("emoji-btn").innerHTML = svgIcon("smile", 21, "#8B9A97");
        document.getElementById("clip-btn").innerHTML = svgIcon("paperclip", 20, "#8B9A97");
        document.getElementById("send-btn").innerHTML = svgIcon("send", 15, "#FBFAF7");
        document.getElementById("mic-icon").innerHTML = svgIcon("mic", 21, "#8B9A97");
        document.getElementById("story-close").innerHTML = svgIcon("x", 22, "#FFFFFF");
        document.getElementById("owner-panel-badge").innerHTML = svgIcon("crown", 11, "#fff", 2.2) + " OWNER";
        document.getElementById("ban-icon-slot").innerHTML = svgIcon("ban", 60, "#FFFFFF", 1.6);

        const NAV_ICONS = { chats: "message-circle", status: "circle-dashed", komunitas: "users-round",
            pengaturan: "settings" };
        document.querySelectorAll(".nav-item").forEach(el => {
            el.querySelector(".nav-icon").innerHTML = svgIcon(NAV_ICONS[el.dataset.tab], 21, "currentColor", 1.9) +
                (el.dataset.tab === "chats" ? '<span class="nav-badge" id="chats-unread-badge" style="display:none;"></span>' : '');
        });

        function updateUnreadBadge() {
            const total = CHATS.filter(c => c.type !== "channel").reduce((sum, c) => sum + (c.unread || 0), 0);
            const badge = document.getElementById("chats-unread-badge");
            if (!badge) return;
            if (total > 0) {
                badge.textContent = total > 99 ? "99+" : String(total);
                badge.style.display = "flex";
            } else {
                badge.style.display = "none";
            }
        }

        /* ================= RENDER MAIN ================= */
        function renderMain() {
            document.querySelectorAll('.header, .bottom-nav').forEach(el => el.style.display = '');
            document.getElementById('main-content').style.display = '';

            const titles = { chats: "Percakapan", status: "Pembaruan", komunitas: "Komunitas", pengaturan: "Pengaturan" };
            document.getElementById("header-title").textContent = titles[activeTab];
            document.querySelectorAll(".nav-item").forEach(t => t.classList.toggle("active", t.dataset.tab === activeTab));
            updateUnreadBadge();

            const el = document.getElementById("main-content");
            if (activeTab === "chats") el.innerHTML = renderChatsTab();
            else if (activeTab === "status") el.innerHTML = renderStatusTab();
            else if (activeTab === "komunitas") el.innerHTML = renderKomunitasTab();
            else el.innerHTML = renderPengaturanTab();

            document.getElementById("fab").style.display = activeTab === "pengaturan" ? "none" : "flex";
            attachMainListeners();
            saveData();
        }

        function renderChatsTab() {
            const search = `
                <div class="search-wrap">
                  <div class="search-box">
                    ${svgIcon("search",16,"#8B9A97")}
                    <input id="chat-search-input" placeholder="Cari nama atau pesan" />
                  </div>
                </div>`;
            const list = CHATS.filter(c => c.type !== "channel")
                .slice()
                .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
            const items = list.map(c => {
                const last = c.messages[c.messages.length - 1];
                const lastPreview = last ?
                    (last.from === "me" ? "Anda: " : "") + (last.mediaUrl ?
                        (last.mediaType === "video" ? "Video" : "Foto") + (last.text ? " · " + escapeHtml(last.text) : "") :
                        escapeHtml(last.text || last.title || "")) :
                    "Belum ada pesan";
                const isOnline = c.type === "dm" && c.username && PRESENCE[c.username] && PRESENCE[c.username].online &&
                    (Date.now() - PRESENCE[c.username].lastActive) < 60000;
                return `
                  <div class="chat-item" data-id="${c.id}" data-longpress="chat">
                    <div style="position:relative;flex-shrink:0;">
                      ${avatarHTML(c, { size: 50, square: c.type !== "dm" && c.type !== "help" })}
                      ${isOnline ? '<span class="online-dot"></span>' : ''}
                    </div>
                    <div class="chat-info">
                      <div class="chat-top">
                        <div class="chat-name">${escapeHtml(c.name)} ${verifiedBadge(c.verified)} ${(c.type !== "dm" && c.type !== "help") ? '<span class="type-badge">' + typeBadge(c.type) + '</span>' : ''} ${c.banned ? `<span style="color:#C9553B;font-size:10.5px;font-weight:700;display:inline-flex;align-items:center;gap:2px;">${svgIcon('ban',11,'#C9553B',2.4)} Diblokir</span>` : ''}</div>
                        <span class="chat-time">${c.pinned ? svgIcon('pin',11,'#9AA6A3',2.2) : ''} ${last ? last.time : ""}</span>
                      </div>
                      <div class="chat-last">${lastPreview}${c.unread ? `<span class="chat-unread-badge">${c.unread > 99 ? '99+' : c.unread}</span>` : ''}</div>
                    </div>
                  </div>`;
            }).join("");
            return search + `<div id="chat-items-list">${items}</div>`;
        }

        function statusCardBg(item, isPlaceholder) {
            if (item.mediaUrl) {
                return item.type === "video" ?
                    `<video src="${item.mediaUrl}" class="status-card-media" muted autoplay loop playsinline></video>` :
                    `<img src="${item.mediaUrl}" class="status-card-media"/>`;
            }
            return `<div class="status-card-media status-card-text" style="background:${item.color || '#2F6F5E'};">${escapeHtml((item.text || "").slice(0, 60))}</div>`;
        }

        function renderStatusTab() {
            const myLatest = MY_STATUS.length > 0;
            const myLatestItem = myLatest ? MY_STATUS[MY_STATUS.length - 1] : null;
            const myCard = `
                <div class="status-card" id="my-status-row">
                  ${myLatestItem ? statusCardBg(myLatestItem) : `<div class="status-card-media status-card-empty">${svgIcon('plus',26,'var(--muted)',1.8)}</div>`}
                  <div class="status-card-gradient"></div>
                  <div class="status-card-avatar-wrap ${myLatest ? 'unviewed' : ''}">${avatarHTML(ME, { size: 26 })}
                    <div class="status-card-plus" id="status-card-add-btn">${svgIcon('plus',10,'#fff',3)}</div>
                  </div>
                  <div class="status-card-name">Status Saya</div>
                </div>`;
            const otherCards = STATUSES.map(s => `
                <div class="status-card status-item" data-id="${s.id}">
                  ${statusCardBg(s)}
                  <div class="status-card-gradient"></div>
                  <div class="status-card-avatar-wrap ${s.viewed ? '' : 'unviewed'}">${avatarHTML(s, { size: 26 })}</div>
                  <div class="status-card-name">${escapeHtml(s.name)}</div>
                </div>`).join("");
            const statusStrip = `<div class="status-strip">${myCard}${otherCards}</div>`;
            const statusMeta = myLatest ? `<div class="status-sub" style="padding:2px 18px 10px;">${MY_STATUS.length} pembaruan Anda — ketuk untuk lihat, tahan untuk kelola</div>` : "";

            // ===== Bagian Saluran (dipindah ke bawah Status, seperti tab Pembaruan) =====
            const followedChannels = CHATS.filter(c => c.type === "channel")
                .slice().sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
            const suggested = CHANNEL_DIRECTORY;

            const channelHeader = `
                <div class="settings-divider"></div>
                <div class="section-label-row">
                  <div class="section-label" style="padding:0;">Saluran</div>
                  <button class="pill-btn" id="explore-channels-btn">${svgIcon('compass',14,'currentColor',2)} Jelajahi</button>
                </div>
                <div class="search-wrap" style="padding-top:0;">
                  <div class="search-box">
                    ${svgIcon("search",16,"#8B9A97")}
                    <input id="channel-search-input" placeholder="Cari saluran" />
                  </div>
                </div>`;

            const followedRows = followedChannels.length ? followedChannels.map(c => {
                const last = c.messages[c.messages.length - 1];
                const preview = last ? (last.mediaUrl ? (last.mediaType === "video" ? svgIcon('film',12,'currentColor') : svgIcon('image',12,'currentColor')) + " " + (last.text ? escapeHtml(last.text) : (last.mediaType === "video" ? "Video" : "Foto")) : escapeHtml(last.text || last.title || "")) : "Belum ada pembaruan";
                return `
                  <div class="chat-item channel-row" data-id="${c.id}" data-longpress="channel" data-name="${escapeHtml(c.name.toLowerCase())}">
                    ${avatarHTML(c, { size: 50, square: true })}
                    <div class="chat-info">
                      <div class="chat-top">
                        <div class="chat-name">${escapeHtml(c.name)} ${verifiedBadge(c.verified)}</div>
                        <span class="chat-time">${c.pinned ? svgIcon('pin',11,'#9AA6A3',2.2) : ''} ${last ? last.time : ''}</span>
                      </div>
                      <div class="chat-last">${preview}</div>
                    </div>
                  </div>`;
            }).join("") : `<div class="channel-empty-msg" style="padding:8px 18px 14px;font-size:12.5px;color:var(--muted);">Anda belum mengikuti saluran apa pun. Ketuk "Jelajahi" untuk menemukan saluran baru.</div>`;

            const suggestedRows = suggested.length ? `
                <div class="section-label suggested-label">Saluran yang mungkin Anda sukai</div>
                ${suggested.map(d => `
                  <div class="chat-item suggested-row" data-suggested="${d.id}" data-name="${escapeHtml(d.name.toLowerCase())}">
                    ${avatarHTML(d, { size: 50, square: true })}
                    <div class="chat-info">
                      <div class="chat-top">
                        <div class="chat-name">${escapeHtml(d.name)}</div>
                      </div>
                      <div class="chat-last">${escapeHtml(d.desc || '')}</div>
                    </div>
                    <button class="small-btn approve follow-channel-btn" data-follow="${d.id}" style="flex-shrink:0;">Ikuti</button>
                  </div>`).join("")}` : "";

            return statusStrip + statusMeta + channelHeader + followedRows + suggestedRows;
        }

        function followChannel(dirId) {
            if (!hasCloud || !loggedInUser) return;
            channelsCol().doc(String(dirId)).update({
                followers: firebase.firestore.FieldValue.arrayUnion(loggedInUser.username)
            }).catch(e => console.error("followChannel:", e));
        }

        function unfollowChannel(chatId) {
            const c = CHATS.find(x => x.id === chatId);
            if (!c) return;
            if (!confirm(`Berhenti mengikuti "${c.name}"? Anda bisa menemukannya lagi lewat Jelajahi.`)) return;
            if (!hasCloud || !loggedInUser) return;
            channelsCol().doc(String(chatId)).update({
                followers: firebase.firestore.FieldValue.arrayRemove(loggedInUser.username)
            }).catch(e => console.error("unfollowChannel:", e));
        }

        function openExploreChannels() {
            const backdrop = document.getElementById("modal-backdrop");
            const sheet = document.getElementById("modal-sheet");
            const followedIds = CHATS.filter(c => c.type === "channel").map(c => c.name.toLowerCase());
            const renderList = (list) => list.length ? list.map(d => `
                <div class="chat-item suggested-row" data-name="${escapeHtml(d.name.toLowerCase())}">
                  ${avatarHTML(d, { size: 46, square: true })}
                  <div class="chat-info">
                    <div class="chat-top"><div class="chat-name">${escapeHtml(d.name)}</div></div>
                    <div class="chat-last">${escapeHtml(d.desc || '')}</div>
                  </div>
                  <button class="small-btn approve follow-channel-btn" data-follow="${d.id}" style="flex-shrink:0;">Ikuti</button>
                </div>`).join("") : `<div style="padding:16px 4px;font-size:12.5px;color:var(--muted);text-align:center;">Tidak ada saluran yang cocok.</div>`;
            sheet.innerHTML = `
                <div class="modal-title">Jelajahi Saluran</div>
                <div class="search-wrap" style="padding:0 0 10px;">
                  <div class="search-box">
                    ${svgIcon("search",16,"#8B9A97")}
                    <input id="explore-search-input" placeholder="Cari saluran untuk diikuti" />
                  </div>
                </div>
                <div id="explore-results" style="max-height:52vh;overflow-y:auto;margin:0 -20px;">${renderList(CHANNEL_DIRECTORY)}</div>
                <div class="modal-actions"><button class="btn-ghost" id="modal-cancel">Tutup</button></div>`;
            backdrop.classList.add("open");
            document.getElementById("modal-cancel").addEventListener("click", closeModal);
            document.getElementById("explore-search-input").addEventListener("input", (e) => {
                const q = e.target.value.trim().toLowerCase();
                document.getElementById("explore-results").innerHTML =
                    renderList(CHANNEL_DIRECTORY.filter(d => d.name.toLowerCase().includes(q)));
                wireFollowButtons();
            });
            function wireFollowButtons() {
                document.querySelectorAll("#explore-results .follow-channel-btn").forEach(el => {
                    el.addEventListener("click", () => {
                        followChannel(Number(el.dataset.follow));
                        closeModal();
                    });
                });
            }
            wireFollowButtons();
        }

        // ===== Sematkan (pin) chat / saluran / komunitas =====
        let longPressFired = false;
        function attachLongPress(el, onLongPress) {
            let timer = null;
            const start = () => { timer = setTimeout(() => { longPressFired = true; onLongPress(); }, 500); };
            const cancel = () => { clearTimeout(timer); };
            el.addEventListener("pointerdown", start);
            el.addEventListener("pointerup", cancel);
            el.addEventListener("pointerleave", cancel);
            el.addEventListener("pointermove", cancel);
            el.addEventListener("contextmenu", (e) => { e.preventDefault(); cancel(); longPressFired = true; onLongPress(); });
        }

        function openPinSheet(kind, id) {
            const list = kind === "community" ? COMMUNITIES : CHATS;
            const item = list.find(x => x.id === id);
            if (!item) return;
            const backdrop = document.getElementById("modal-backdrop");
            const sheet = document.getElementById("modal-sheet");
            const isChannel = kind === "channel";
            sheet.innerHTML = `
                <div class="modal-title">${escapeHtml(item.name)}</div>
                <div class="pin-sheet-row" id="pin-toggle-row">${svgIcon('pin',17,'currentColor',2)} ${item.pinned ? 'Lepas sematan' : 'Sematkan'}</div>
                ${isChannel ? `<div class="pin-sheet-row" id="unfollow-row" style="color:var(--danger);">${svgIcon('x',17,'currentColor',2)} Berhenti mengikuti</div>` : ''}
                <div class="modal-actions"><button class="btn-ghost" id="modal-cancel">Batal</button></div>`;
            backdrop.classList.add("open");
            document.getElementById("modal-cancel").addEventListener("click", closeModal);
            document.getElementById("pin-toggle-row").addEventListener("click", () => {
                item.pinned = !item.pinned;
                closeModal();
                renderMain();
                saveData();
            });
            document.getElementById("unfollow-row")?.addEventListener("click", () => {
                closeModal();
                unfollowChannel(id);
            });
        }

        function renderKomunitasTab() {
            if (COMMUNITIES.length === 0) {
                return `
                  <div class="empty-illustration">
                    <div class="circle-icon">${svgIcon("users-round",32,"currentColor",1.7)}</div>
                    <div style="font-family:'Fraunces',serif; font-size:17px; font-weight:600;">Bawa anggota bareng dalam Komunitas</div>
                    <div style="font-size:13px; line-height:1.5;">Komunitas kumpulin beberapa grup jadi satu, biar gampang kirim info ke semua anggota sekaligus.</div>
                    <button class="primary-btn" id="create-community-btn">Buat Komunitas</button>
                  </div>`;
            }
            return COMMUNITIES.slice().sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)).map(k => `
                <div class="community-card" data-id="${k.id}">
                  <div class="community-head">
                    ${avatarHTML(k, { size: 46, square: true })}
                    <div style="flex:1;">
                      <div class="community-name">${escapeHtml(k.name)} ${verifiedBadge(k.verified)}</div>
                      <div class="community-sub">${k.groups.length} grup</div>
                    </div>
                    ${k.pinned ? svgIcon('pin',14,'var(--muted)',2.2) : ''}
                  </div>
                  ${k.banner ? `<div style="margin-top:10px;border-radius:10px;overflow:hidden;height:74px;">${k.bannerType === 'video' ? `<video src="${k.banner}" muted loop autoplay playsinline style="width:100%;height:100%;object-fit:cover;"></video>` : `<img src="${k.banner}" style="width:100%;height:100%;object-fit:cover;"/>`}</div>` : ''}
                  <div class="community-groups">
                    ${k.groups.map(g => `<div class="community-group-row">${svgIcon("users-round",13,"currentColor")}${escapeHtml(g)}</div>`).join("")}
                  </div>
                </div>`).join("");
        }

        function renderPengaturanTab() {
            const isUserOwner = isOwner;

            const profile = `
                <div class="settings-profile" id="my-profile-row">
                  ${avatarHTML(ME, { size: 58 })}
                  <div>
                    <div class="settings-profile-name">${escapeHtml(ME.name)} ${verifiedBadge(ME.verified)} ${isUserOwner ? '<span class="owner-crown-badge">' + svgIcon('crown',10,'#fff',2.4) + ' OWNER</span>' : ''}</div>
                    <div class="settings-profile-sub">@${escapeHtml(ME.username)} · ${ME.phone}</div>
                  </div>
                </div>
                <div class="settings-divider"></div>`;

            const quickActions = `
                <div class="settings-row" id="edit-profile-btn">
                  <div class="settings-icon">${svgIcon("user",18,"currentColor",1.9)}</div>
                  <div style="flex:1;">
                    <div class="settings-label">Edit Profil</div>
                    <div class="settings-sub">Ubah nama, bio, dan foto profil</div>
                  </div>
                  <div class="settings-chevron">${svgIcon("chevron-right",17,"currentColor",2)}</div>
                </div>
                <div class="settings-row" id="change-password-btn">
                  <div class="settings-icon">${svgIcon("lock",18,"currentColor",1.9)}</div>
                  <div style="flex:1;">
                    <div class="settings-label">Ubah Password</div>
                    <div class="settings-sub">Ganti password akun Anda</div>
                  </div>
                  <div class="settings-chevron">${svgIcon("chevron-right",17,"currentColor",2)}</div>
                </div>
                <div class="settings-divider"></div>`;

            const rows = SETTINGS_ITEMS.map((item, i) => `
                <div class="settings-row" data-settings-idx="${i}">
                  <div class="settings-icon">${svgIcon(item.icon,18,"currentColor",1.9)}</div>
                  <div style="flex:1;">
                    <div class="settings-label">${item.label}</div>
                    <div class="settings-sub">${item.sub}</div>
                  </div>
                  <div class="settings-chevron">${svgIcon("chevron-right",17,"currentColor",2)}</div>
                </div>`).join("");

            let ownerSection = '';
            if (isUserOwner) {
                const pendingCount = OWNER_REQUESTS.filter(r => r.status === 'pending').length;
                const banReqCount = BAN_REQUESTS.filter(r => r.status === 'pending').length;
                ownerSection = `
                <div class="settings-divider"></div>
                <div class="settings-row" id="owner-panel-row">
                  <div class="settings-icon">${svgIcon('shield-check',18,'currentColor',1.9)}</div>
                  <div style="flex:1;">
                    <div class="settings-label">Panel Owner</div>
                    <div class="settings-sub">Kelola centang biru, ban akun, story & berita${(pendingCount + banReqCount) ? ' · ' + (pendingCount + banReqCount) + ' permintaan' : ''}</div>
                  </div>
                  <div class="settings-chevron">${svgIcon("chevron-right",17,"currentColor",2)}</div>
                </div>
                <div class="settings-row">
                  <div class="settings-icon">${svgIcon('crown',18,'currentColor',1.9)}</div>
                  <div style="flex:1;">
                    <div class="settings-label">Mode Owner</div>
                    <div class="settings-sub">Aktifkan kontrol admin: centang biru & ban akun</div>
                  </div>
                  <div class="toggle-switch ${OWNER_MODE ? 'on' : ''}" id="owner-mode-toggle"><div class="toggle-knob"></div></div>
                </div>`;
            }

            const logoutRow = `
                <div class="settings-divider"></div>
                <div class="settings-row" id="logout-btn">
                  <div class="settings-icon" style="background:#F3E4DE;color:#C9553B;">${svgIcon("x",18,"currentColor",2)}</div>
                  <div style="flex:1;">
                    <div class="settings-label" style="color:#C9553B;">Keluar</div>
                    <div class="settings-sub">Logout dari akun ini</div>
                  </div>
                  <div class="settings-chevron">${svgIcon("chevron-right",17,"currentColor",2)}</div>
                </div>`;

            return profile + quickActions + rows + ownerSection + logoutRow;
        }

        function attachMainListeners() {
            document.querySelectorAll(".chat-item[data-id]").forEach(el => {
                el.addEventListener("click", () => {
                    if (longPressFired) { longPressFired = false; return; }
                    openChat(Number(el.dataset.id));
                });
            });

            // Live search filter untuk daftar chat
            document.getElementById("chat-search-input")?.addEventListener("input", (e) => {
                const q = e.target.value.trim().toLowerCase();
                document.querySelectorAll(".chat-item[data-id]").forEach(el => {
                    const c = CHATS.find(x => x.id === Number(el.dataset.id));
                    if (!c) return;
                    const last = c.messages[c.messages.length - 1];
                    const hay = (c.name + " " + (last ? (last.text || last.title || "") : "")).toLowerCase();
                    el.style.display = hay.includes(q) ? "" : "none";
                });
            });

            // Edit profile
            document.getElementById("edit-profile-btn")?.addEventListener("click", () => openInfo("me"));

            // Change password
            document.getElementById("change-password-btn")?.addEventListener("click", () => {
                const backdrop = document.getElementById("modal-backdrop");
                const sheet = document.getElementById("modal-sheet");
                sheet.innerHTML = `
                    <div class="modal-title">Ubah Password</div>
                    <div class="form-group">
                        <label>Password Lama</label>
                        <input class="modal-input" id="old-password" type="password" placeholder="Masukkan password lama" />
                    </div>
                    <div class="form-group">
                        <label>Password Baru</label>
                        <input class="modal-input" id="new-password" type="password" placeholder="Masukkan password baru" />
                    </div>
                    <div class="form-group">
                        <label>Konfirmasi Password Baru</label>
                        <input class="modal-input" id="confirm-password" type="password" placeholder="Konfirmasi password baru" />
                    </div>
                    <div class="modal-actions">
                        <button class="btn-ghost" id="modal-cancel">Batal</button>
                        <button class="primary-btn" id="modal-confirm-password">Simpan</button>
                    </div>
                `;
                backdrop.classList.add("open");
                document.getElementById("modal-cancel").addEventListener("click", closeModal);
                document.getElementById("modal-confirm-password").addEventListener("click", () => {
                    const old = document.getElementById("old-password").value.trim();
                    const newPass = document.getElementById("new-password").value.trim();
                    const confirm = document.getElementById("confirm-password").value.trim();

                    if (!old || !newPass || !confirm) {
                        alert("Semua field harus diisi!");
                        return;
                    }
                    if (old !== loggedInUser.password) {
                        alert("Password lama salah!");
                        return;
                    }
                    if (newPass !== confirm) {
                        alert("Password baru dan konfirmasi tidak sama!");
                        return;
                    }
                    if (newPass.length < 4) {
                        alert("Password minimal 4 karakter!");
                        return;
                    }

                    const userData = USERS.find(u => u.username === loggedInUser.username);
                    if (userData) {
                        userData.password = newPass;
                        loggedInUser.password = newPass;
                        saveUsers();
                        closeModal();
                        alert("Password berhasil diubah!");
                    }
                });
            });

            const myRow = document.getElementById("my-status-row");
            if (myRow) myRow.addEventListener("click", () => {
                if (MY_STATUS.length > 0) openStoryViewer("me");
                else openModal("addStatus");
            });
            document.getElementById("status-card-add-btn")?.addEventListener("click", (e) => {
                e.stopPropagation();
                openModal("addStatus");
            });
            document.querySelectorAll(".status-item").forEach(el => {
                el.addEventListener("click", () => {
                    const id = Number(el.dataset.id);
                    const idx = STATUSES.findIndex(s => s.id === id);
                    if (idx >= 0) {
                        STATUSES[idx].viewed = true;
                        openStoryViewer(idx);
                    }
                });
            });

            // Saluran: jelajahi, cari, dan ikuti
            document.getElementById("explore-channels-btn")?.addEventListener("click", openExploreChannels);
            document.getElementById("channel-search-input")?.addEventListener("input", (e) => {
                const q = e.target.value.trim().toLowerCase();
                let anySuggested = false;
                document.querySelectorAll(".channel-row, .suggested-row").forEach(el => {
                    const match = (el.dataset.name || "").includes(q);
                    el.style.display = match ? "" : "none";
                    if (el.classList.contains("suggested-row") && match) anySuggested = true;
                });
                const label = document.querySelector(".suggested-label");
                if (label) label.style.display = anySuggested ? "" : "none";
            });
            document.querySelectorAll(".follow-channel-btn").forEach(el => {
                el.addEventListener("click", (e) => {
                    e.stopPropagation();
                    followChannel(Number(el.dataset.follow));
                });
            });

            // Sematkan (pin): tahan chat/saluran/komunitas sebentar
            document.querySelectorAll('.chat-item[data-longpress], .community-card[data-id]').forEach(el => {
                attachLongPress(el, () => {
                    const kind = el.dataset.longpress || "community";
                    const id = Number(el.dataset.id);
                    openPinSheet(kind, id);
                });
            });

            const ccBtn = document.getElementById("create-community-btn");
            if (ccBtn) ccBtn.addEventListener("click", () => openModal("community"));
            document.querySelectorAll(".community-card").forEach(el => {
                el.addEventListener("click", () => {
                    if (longPressFired) { longPressFired = false; return; }
                    openModal("community");
                });
            });
            document.getElementById("my-profile-row")?.addEventListener("click", () => openInfo("me"));
            document.querySelectorAll("[data-settings-idx]").forEach(el => {
                el.addEventListener("click", () => {
                    const item = SETTINGS_ITEMS[Number(el.dataset.settingsIdx)];
                    if (item.label === "Akun") openInfo("me");
                    else if (item.label === "Bantuan") openChat(999);
                    else openSettingsInfoModal(item);
                });
            });
            if (isOwner) {
                document.getElementById("owner-mode-toggle")?.addEventListener("click", () => {
                    OWNER_MODE = !OWNER_MODE;
                    renderMain();
                    saveData();
                });
                document.getElementById("owner-panel-row")?.addEventListener("click", () => openOwnerPanel());
            }
            document.getElementById("logout-btn")?.addEventListener("click", () => {
                if (confirm("Yakin ingin keluar?")) {
                    clearSession();
                    loggedInUser = null;
                    isOwner = false;
                    document.getElementById('login-username').value = '';
                    document.getElementById('login-password').value = '';
                    document.getElementById('login-screen').classList.remove('hidden');
                    document.getElementById('banned-overlay').classList.remove('open');
                    document.querySelectorAll('.screen').forEach(s => s.classList.remove('open'));
                    renderMain();
                }
            });
        }

        function openSettingsInfoModal(item) {
            const backdrop = document.getElementById("modal-backdrop");
            const sheet = document.getElementById("modal-sheet");
            sheet.innerHTML =
                `<div class="modal-title">${item.label}</div><div style="font-size:13.5px;color:var(--muted2);line-height:1.6;margin-bottom:16px;">${item.sub}. Halaman detail untuk fitur ini masih versi demo di prototipe ini.</div><div class="modal-actions"><button class="primary-btn" id="modal-cancel">Tutup</button></div>`;
            backdrop.classList.add("open");
            document.getElementById("modal-cancel").addEventListener("click", closeModal);
        }

        /* ================= FAB / SPEED DIAL ================= */
        function speedDialOptionsFor(tab) {
            if (tab === "chats") return [
                { icon: "search", label: "Cari kontak", action: "findContact" },
                { icon: "megaphone", label: "Saluran baru", action: "channel" },
                { icon: "users-round", label: "Grup baru", action: "group" },
                { icon: "link", label: "Gabung via kode", action: "joinCode" },
            ];
            if (tab === "komunitas") return [{ icon: "users-round", label: "Komunitas baru", action: "community" }];
            if (tab === "status") return [{ icon: "type", label: "Tambah status", action: "addStatus" }];
            return [];
        }

        function toggleSpeedDial() {
            dialOpen = !dialOpen;
            const dial = document.getElementById("speed-dial");
            if (!dialOpen) { dial.innerHTML = "";
                dial.style.display = "none"; return; }
            const opts = speedDialOptionsFor(activeTab);
            dial.style.display = "flex";
            dial.innerHTML = opts.map(o => `
                <div class="speed-item" data-action="${o.action}">
                  <span>${o.label}</span>
                  <div class="speed-icon">${svgIcon(o.icon,18,"currentColor",2)}</div>
                </div>`).join("");
            dial.querySelectorAll(".speed-item").forEach(el => {
                el.addEventListener("click", () => {
                    toggleSpeedDial();
                    if (el.dataset.action === "findContact") openContactSearch();
                    else openModal(el.dataset.action);
                });
            });
        }

        document.getElementById("fab").addEventListener("click", () => {
            if (activeTab === "status") { openModal("addStatus"); return; }
            if (activeTab === "komunitas") { openModal("community"); return; }
            toggleSpeedDial();
        });

        document.querySelectorAll(".nav-item").forEach(t => {
            t.addEventListener("click", () => {
                activeTab = t.dataset.tab;
                dialOpen = false;
                document.getElementById("speed-dial").innerHTML = "";
                document.getElementById("speed-dial").style.display = "none";
                renderMain();
            });
        });

        /* ================= CHAT SCREEN ================= */
        // ===== Chat 2 arah antar akun asli (kontak yang di-cari/di-add) =====
        function listenConversations() {
            if (!hasCloud || !loggedInUser) return;
            conversationsCol().where("participantsUsernames", "array-contains", loggedInUser.username)
                .onSnapshot(snap => {
                    snap.docChanges().forEach(change => {
                        const docId = change.doc.id;
                        if (change.type === "removed") {
                            CHATS = CHATS.filter(c => c.cloudConversationId !== docId);
                            return;
                        }
                        const d = change.doc.data();
                        const otherUsername = (d.participantsUsernames || []).find(u => u !== loggedInUser.username);
                        const otherInfo = (d.participantsInfo && d.participantsInfo[otherUsername]) || {};
                        let local = CHATS.find(c => c.cloudConversationId === docId);
                        const wasActive = local && activeChatId === local.id;
                        const prevCount = local ? local.messages.length : 0;
                        if (!local) {
                            local = { id: nextId++, type: "dm", cloudConversationId: docId,
                                name: otherInfo.name || otherUsername, username: otherUsername,
                                initials: (otherInfo.name || otherUsername || "?").slice(0, 2).toUpperCase(),
                                color: "#5B7A8C", avatar: null, avatarType: null, verified: false,
                                banned: false, lastSeen: "", pinned: false, unread: 0, messages: [] };
                            CHATS.unshift(local);
                        }
                        local.name = otherInfo.name || local.name;
                        local.avatar = otherInfo.avatar || null;
                        local.avatarType = otherInfo.avatarType || null;
                        local.verified = !!otherInfo.verified;
                        local.messages = (d.messages || []).map(m => ({ ...m,
                            from: m.senderUsername === loggedInUser.username ? "me" : "them" }));
                        if (!wasActive && local.messages.length > prevCount) {
                            const added = local.messages.length - prevCount;
                            const fromThemAdded = local.messages.slice(prevCount).filter(m => m.from === "them").length;
                            if (fromThemAdded > 0) local.unread = (local.unread || 0) + fromThemAdded;
                        }
                        if (wasActive) renderMessages();
                    });
                    if (appBooted) renderMain();
                }, err => console.error("listenConversations:", err));
        }

        function openContactSearch() {
            const backdrop = document.getElementById("modal-backdrop");
            const sheet = document.getElementById("modal-sheet");
            const renderList = (list) => list.length ? list.map(u => `
                <div class="chat-item" data-start-chat="${escapeHtml(u.username)}">
                  ${avatarHTML(u, { size: 44 })}
                  <div class="chat-info">
                    <div class="chat-top"><div class="chat-name">${escapeHtml(u.name || u.username)} ${verifiedBadge(u.verified)}</div></div>
                    <div class="chat-last">@${escapeHtml(u.username)}</div>
                  </div>
                </div>`).join("") : `<div style="padding:16px 4px;font-size:12.5px;color:var(--muted);text-align:center;">${loggedInUser ? 'Ketik username untuk mencari pengguna lain.' : ''}</div>`;
            sheet.innerHTML = `
                <div class="modal-title">Cari Kontak</div>
                <div class="search-wrap" style="padding:0 0 10px;">
                  <div class="search-box">
                    ${svgIcon("search",16,"#8B9A97")}
                    <input id="contact-search-input" placeholder="Cari nama atau username pengguna" />
                  </div>
                </div>
                <div id="contact-search-results" style="max-height:52vh;overflow-y:auto;margin:0 -20px;">${renderList([])}</div>
                <div class="modal-actions"><button class="btn-ghost" id="modal-cancel">Tutup</button></div>`;
            backdrop.classList.add("open");
            document.getElementById("modal-cancel").addEventListener("click", closeModal);
            function wireRows() {
                document.querySelectorAll("[data-start-chat]").forEach(el => {
                    el.addEventListener("click", () => {
                        startConversationWith(el.dataset.startChat);
                        closeModal();
                    });
                });
            }
            document.getElementById("contact-search-input").addEventListener("input", (e) => {
                const q = e.target.value.trim().toLowerCase();
                const results = !q ? [] : USERS.filter(u => loggedInUser && u.username !== loggedInUser.username &&
                    ((u.name || "").toLowerCase().includes(q) || u.username.toLowerCase().includes(q)));
                document.getElementById("contact-search-results").innerHTML = renderList(results);
                wireRows();
            });
        }

        function startConversationWith(username) {
            if (!hasCloud || !loggedInUser) return;
            const otherUser = USERS.find(u => u.username === username);
            if (!otherUser) return;
            const convId = "dm_" + [loggedInUser.username, username].sort().join("__");
            let c = CHATS.find(x => x.cloudConversationId === convId);
            if (!c) {
                c = { id: nextId++, type: "dm", cloudConversationId: convId,
                    name: otherUser.name || username, username: username,
                    initials: (otherUser.name || username).slice(0, 2).toUpperCase(),
                    color: "#5B7A8C", avatar: otherUser.avatar || null, avatarType: otherUser.avatarType || null,
                    verified: !!otherUser.verified, banned: false, lastSeen: "", pinned: false, unread: 0, messages: [] };
                CHATS.unshift(c);
            }
            activeTab = "chats";
            renderMain();
            openChat(c.id);
            conversationsCol().doc(convId).get().then(snap => {
                if (!snap.exists) {
                    conversationsCol().doc(convId).set({
                        id: convId,
                        participantsUsernames: [loggedInUser.username, username],
                        participantsInfo: {
                            [loggedInUser.username]: { name: ME.name, avatar: ME.avatar, avatarType: ME.avatarType, verified: ME.verified },
                            [username]: { name: otherUser.name || username, avatar: otherUser.avatar || null, avatarType: otherUser.avatarType || null, verified: !!otherUser.verified }
                        },
                        messages: [], lastActivity: Date.now()
                    }).catch(e => console.error("startConversationWith set:", e));
                }
            }).catch(e => console.error("startConversationWith get:", e));
        }

        function renderChatHeader() {
            const c = CHATS.find(x => x.id === activeChatId);
            if (!c) return;
            document.getElementById("chat-avatar-wrap").innerHTML = avatarHTML(c, { size: 38, square: c.type !== "dm" &&
                    c.type !== "help" });
            document.getElementById("chat-name").innerHTML = escapeHtml(c.name) + " " + verifiedBadge(c.verified) + (c
                .banned ? ` <span style="color:#C9553B;font-size:11px;font-weight:700;display:inline-flex;">${svgIcon('ban',12,'#C9553B',2.4)}</span>` : "");
            let statusText = c.lastSeen;
            if (c.type === "dm" && c.username && PRESENCE[c.username]) {
                statusText = formatLastSeen(c.username) || c.lastSeen;
            }
            document.getElementById("chat-status").textContent = statusText;
        }

        function openChat(id) {
            activeChatId = id;
            const c = CHATS.find(x => x.id === id);
            if (!c) return;
            renderChatHeader();
            document.getElementById("chat-header-info").onclick = () => openInfo("chat", c.id);
            const draftInput = document.getElementById("draft-input");
            draftInput.value = "";
            draftInput.disabled = !!c.banned || !!c.blockedByMe;
            draftInput.placeholder = c.banned ? "Diblokir oleh Owner" : (c.blockedByMe ? "Anda memblokir kontak ini" : "Ketik pesan");
            updateSendButton();
            // Owner sudah otomatis tercentang biru, jadi tombol pengajuan tidak perlu ditampilkan untuknya.
            document.getElementById("help-quickbar").style.display = (c.type === "help" && !isOwner && !ME.verified) ? "block" : "none";
            c.unread = 0;
            renderMessages();
            document.getElementById("chat-screen").classList.add("open");
        }

        document.getElementById("chat-back").addEventListener("click", () => {
            document.getElementById("chat-screen").classList.remove("open");
            activeChatId = null;
            renderMain();
        });
        document.getElementById("quick-verify-btn").addEventListener("click", () => requestVerification("user", "me", ME
            .name));

        function renderMessages() {
            const c = CHATS.find(x => x.id === activeChatId);
            const wrap = document.getElementById("messages");
            if (!c) { wrap.innerHTML = ""; return; }
            wrap.innerHTML = `<div class="messages">` + c.messages.map(m => `
                <div class="bubble ${m.from === "me" ? "mine" : "theirs"}">
                  ${m.broadcastType ? `<div class="broadcast-label">${svgIcon(m.broadcastType === 'story' ? 'film' : (m.broadcastType === 'alert' ? 'bell' : 'megaphone'), 12, 'currentColor')} ${m.broadcastType === 'story' ? 'Story Baru' : (m.broadcastType === 'alert' ? 'Pemberitahuan' : 'Pengumuman Resmi')}</div>` : ''}
                  ${m.title ? `<div class="bubble-title">${escapeHtml(m.title)}</div>` : ''}
                  ${m.mediaUrl ? (m.mediaType === "video" ?
                        `<video src="${m.mediaUrl}" controls style="max-width:100%;border-radius:8px;margin-bottom:${m.text ? '5px' : '0'};display:block;"></video>` :
                        `<img src="${m.mediaUrl}" style="max-width:100%;border-radius:8px;margin-bottom:${m.text ? '5px' : '0'};display:block;"/>`) : ''}
                  ${m.text ? `<div class="bubble-text" style="white-space:pre-line;">${escapeHtml(m.text)}</div>` : ''}
                  <div class="bubble-meta">
                    <span class="bubble-time">${m.time}</span>
                    ${m.from === "me" ? statusIcon(m.status) : ""}
                  </div>
                </div>`).join("") + `</div>`;
            wrap.scrollTop = wrap.scrollHeight;
        }

        function sendCloudMessage(c, msg) {
            const payload = { ...msg, id: Date.now(), senderUsername: loggedInUser.username };
            conversationsCol().doc(c.cloudConversationId).update({
                messages: firebase.firestore.FieldValue.arrayUnion(payload),
                lastActivity: Date.now()
            }).catch(e => { console.error("sendCloudMessage:", e); alert("Gagal mengirim pesan, cek koneksi internet."); });
        }

        function sendMessage() {
            const input = document.getElementById("draft-input");
            const text = input.value.trim();
            if (!text || activeChatId == null) return;
            const c = CHATS.find(x => x.id === activeChatId);
            if (!c || c.banned) return;
            if (c.cloudConversationId) {
                sendCloudMessage(c, { text, time: "Sekarang", status: "sent" });
            } else {
                c.messages.push({ id: c.messages.length + 1, from: "me", text, time: "Sekarang", status: "sent" });
                saveData();
            }
            input.value = "";
            updateSendButton();
            renderMessages();
        }

        function sendMediaMessage(mediaType, dataUrl) {
            if (activeChatId == null) return;
            const c = CHATS.find(x => x.id === activeChatId);
            if (!c || c.banned) return;
            if (c.cloudConversationId) {
                sendCloudMessage(c, { text: "", time: "Sekarang", status: "sent", mediaUrl: dataUrl, mediaType });
            } else {
                c.messages.push({ id: c.messages.length + 1, from: "me", text: "", time: "Sekarang", status: "sent",
                    mediaUrl: dataUrl, mediaType });
                saveData();
            }
            renderMessages();
        }

        function updateSendButton() {
            const input = document.getElementById("draft-input");
            const sendBtn = document.getElementById("send-btn");
            const micIcon = document.getElementById("mic-icon");
            if (input.value.trim()) { sendBtn.style.display = "flex";
                micIcon.style.display = "none"; } else { sendBtn.style.display = "none";
                micIcon.style.display = "flex"; }
        }
        document.getElementById("draft-input").addEventListener("input", updateSendButton);
        document.getElementById("draft-input").addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey) { e.preventDefault();
                sendMessage(); }
        });
        document.getElementById("send-btn").addEventListener("click", sendMessage);
        document.getElementById("clip-btn").addEventListener("click", () => {
            if (activeChatId == null) return;
            const c = CHATS.find(x => x.id === activeChatId);
            if (!c || c.banned) return;
            pickFile("image/*,video/*", (type, data) => sendMediaMessage(type, data));
        });

        /* ================= INFO / PROFILE SCREEN ================= */
        function openInfo(kind, id) {
            infoTarget = { kind, id };
            renderInfo();
            document.getElementById("info-screen").classList.add("open");
        }
        document.getElementById("info-back").addEventListener("click", () => {
            document.getElementById("info-screen").classList.remove("open");
        });

        function promptEdit(label, current, onSave) {
            const backdrop = document.getElementById("modal-backdrop");
            const sheet = document.getElementById("modal-sheet");
            sheet.innerHTML =
                `<div class="modal-title">Ubah ${label}</div><input class="modal-input" id="edit-field-input" value="${escapeHtml(current)}" /><div class="modal-actions"><button class="btn-ghost" id="modal-cancel">Batal</button><button class="primary-btn" id="modal-save-field">Simpan</button></div>`;
            backdrop.classList.add("open");
            document.getElementById("modal-cancel").addEventListener("click", closeModal);
            document.getElementById("modal-save-field").addEventListener("click", () => {
                const v = document.getElementById("edit-field-input").value.trim();
                if (v) onSave(v);
                closeModal();
                saveData();
                updateUserData();
            });
        }

        function requestVerification(targetType, targetId, targetName) {
            if (isOwner) { alert("Akun Owner sudah otomatis tercentang biru."); return; }
            OWNER_REQUESTS.push({ id: nextId++, targetType, targetId, targetName, status: "pending", time: "Baru saja" });
            const help = CHATS.find(x => x.id === 999);
            if (help) {
                help.messages.push({ id: help.messages.length + 1, from: "me",
                    text: `Permintaan centang biru untuk "${targetName}" telah dikirim.`, time: "Sekarang",
                    status: "sent" });
                help.messages.push({ id: help.messages.length + 2, from: "them",
                    text: "Terima kasih, permintaan Anda sedang ditinjau oleh Owner.", time: "Sekarang",
                    status: "read" });
            }
            if (activeChatId === 999) renderMessages();
            alert("Permintaan centang biru terkirim ke Owner!");
            if (infoTarget) renderInfo();
            saveData();
        }

        function renderInfo() {
            const el = document.getElementById("info-content");
            if (infoTarget.kind === "me") el.innerHTML = renderMeInfo();
            else {
                const c = CHATS.find(x => x.id === infoTarget.id);
                if (!c) { el.innerHTML = ""; return; }
                el.innerHTML = renderChatInfo(c);
            }
            attachInfoListeners();
        }

        function renderMeInfo() {
            const isUserOwner = isOwner;
            return `
                <div class="banner-wrap">
                  ${ME.banner ? (ME.bannerType === 'video' ? `<video src="${ME.banner}" autoplay muted loop playsinline></video>` : `<img src="${ME.banner}"/>`) : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--muted);">${svgIcon('image',30,'currentColor')}</div>`}
                  <button class="banner-edit-btn" id="me-banner-edit">${svgIcon('film',14,'#fff')} Ubah Sampul</button>
                </div>
                <div class="info-header" style="padding-top:14px;">
                  ${bigAvatarHTML(ME, true, "me-avatar-edit")}
                  <div class="info-name">${escapeHtml(ME.name)} ${verifiedBadge(ME.verified)} ${isUserOwner ? '<span class="owner-crown-badge">' + svgIcon('crown',10,'#fff',2.4) + ' OWNER</span>' : ''}</div>
                  <div class="info-username">@${escapeHtml(ME.username)}</div>
                  <div class="info-about">${escapeHtml(ME.about)}</div>
                  <div class="info-actions">
                    <div class="action-chip" id="edit-name-btn"><div class="chip-icon">${svgIcon('type',18,'currentColor')}</div>Nama</div>
                    <div class="action-chip" id="edit-username-btn"><div class="chip-icon">${svgIcon('user',18,'currentColor')}</div>Username</div>
                    <div class="action-chip" id="edit-about-btn"><div class="chip-icon">${svgIcon('info',18,'currentColor')}</div>Bio</div>
                    <div class="action-chip" id="edit-phone-btn"><div class="chip-icon">${svgIcon('phone',18,'currentColor')}</div>Nomor</div>
                  </div>
                </div>
                <div class="settings-divider"></div>
                <div class="info-section-title">Informasi Akun</div>
                <div style="padding:8px 18px 16px;">
                    <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);">
                        <span style="color:var(--muted);">Username</span>
                        <span>@${escapeHtml(ME.username)}</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--border);">
                        <span style="color:var(--muted);">Nomor HP</span>
                        <span>${escapeHtml(ME.phone)}</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--border);">
                        <span style="color:var(--muted);">Status Verifikasi</span>
                        <span style="display:inline-flex;align-items:center;gap:5px;">${ME.verified ? verifiedBadgeSVG(14) + ' Terverifikasi' : svgIcon('x',13,'var(--danger)',2.4) + ' Belum terverifikasi'}</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;">
                        <span style="color:var(--muted);">Role</span>
                        <span style="display:inline-flex;align-items:center;gap:5px;">${isUserOwner ? svgIcon('crown',13,'var(--accent-dark)',2.2) + ' Owner' : svgIcon('user',13,'currentColor',2.2) + ' Pengguna'}</span>
                    </div>
                </div>
                <div class="settings-divider"></div>
                ${(!ME.verified && !isUserOwner) ? `<div style="padding:14px 18px;"><button class="primary-btn" id="request-verify-btn" style="width:100%;">Ajukan Centang Biru ke Owner</button></div><div class="settings-divider"></div>` : ''}
                ${isUserOwner && OWNER_MODE ? `<div style="padding:14px 18px;"><button class="primary-btn" id="self-verify-btn" style="width:100%;background:var(--accent-dark);">${ME.verified ? 'Cabut' : 'Beri'} Centang Biru (Owner)</button></div><div class="settings-divider"></div>` : ''}
                <div style="padding:14px 18px;">
                    <button class="primary-btn" id="change-password-from-profile" style="width:100%;background:var(--accent-dark);">Ubah Password</button>
                </div>
            `;
        }

        function renderChatInfo(c) {
            const isUserOwner = isOwner;
            if (c.type === "dm" || c.type === "help") {
                const mediaItems = (c.messages || []).filter(m => m.mediaUrl);
                const mediaGrid = mediaItems.length ? `
                    <div class="info-section-title">Media Bersama (${mediaItems.length})</div>
                    <div class="media-grid">
                      ${mediaItems.slice(-12).reverse().map(m => m.mediaType === "video" ?
                        `<div class="media-cell"><video src="${m.mediaUrl}" muted></video></div>` :
                        `<div class="media-cell"><img src="${m.mediaUrl}"/></div>`).join("")}
                    </div>` : `
                    <div class="info-section-title">Media Bersama</div>
                    <div style="padding:0 18px 14px;font-size:12.5px;color:var(--muted);">Belum ada foto atau video yang dikirim di chat ini.</div>`;
                return `
                  <div class="info-header">
                    ${bigAvatarHTML(c, false)}
                    <div class="info-name">${escapeHtml(c.name)} ${verifiedBadge(c.verified)}</div>
                    <div class="info-username">@${escapeHtml(c.username || "-")}</div>
                    <div class="info-about">${escapeHtml((c.type === "dm" && c.username && PRESENCE[c.username]) ? (formatLastSeen(c.username) || c.lastSeen || "") : (c.lastSeen || ""))}</div>
                  </div>
                  <div class="settings-divider"></div>
                  ${(c.type === "help" && !isUserOwner && !ME.verified) ? `<div style="padding:14px 18px;"><button class="primary-btn" id="ask-verify-help" style="width:100%;">Ajukan Centang Biru untuk Akun Saya</button></div><div class="settings-divider"></div>` : ''}
                  ${mediaGrid}
                  ${c.type === "dm" ? `
                  <div class="settings-divider"></div>
                  <div class="settings-row" id="toggle-mute-row">
                    <div>${svgIcon(c.muted ? 'bell-off' : 'bell', 18, 'var(--muted2)', 2)}</div>
                    <div class="settings-label" style="margin:0;">${c.muted ? 'Aktifkan lagi notifikasi' : 'Bisukan notifikasi'}</div>
                  </div>
                  <div class="settings-row" id="toggle-pin-row-info">
                    <div>${svgIcon('pin', 18, 'var(--muted2)', 2)}</div>
                    <div class="settings-label" style="margin:0;">${c.pinned ? 'Lepas sematan' : 'Sematkan chat'}</div>
                  </div>
                  <div class="settings-row" id="report-contact-row">
                    <div>${svgIcon('flag', 18, 'var(--muted2)', 2)}</div>
                    <div class="settings-label" style="margin:0;">Laporkan kontak</div>
                  </div>
                  <div class="settings-row" id="toggle-block-row">
                    <div>${svgIcon('ban', 18, 'var(--danger)', 2)}</div>
                    <div class="settings-label" style="margin:0;color:var(--danger);">${c.blockedByMe ? 'Buka blokir kontak' : 'Blokir kontak'}</div>
                  </div>
                  <div class="settings-row" id="delete-chat-row">
                    <div>${svgIcon('trash', 18, 'var(--danger)', 2)}</div>
                    <div class="settings-label" style="margin:0;color:var(--danger);">Hapus percakapan</div>
                  </div>` : ''}
                  ${isUserOwner && OWNER_MODE && c.type === "dm" ? `
                    <div class="settings-divider"></div>
                    <div class="info-section-title">Kontrol Owner</div>
                    <div style="padding:6px 18px 16px;display:flex;flex-direction:column;gap:10px;">
                      <button class="primary-btn" id="toggle-verify-btn" style="width:100%;">${c.verified ? 'Cabut' : 'Beri'} Centang Biru</button>
                      <button class="small-btn reject" id="toggle-ban-btn" style="width:100%;padding:11px;">${c.banned ? 'Buka Blokir Akun' : 'Ban Akun Ini'}</button>
                    </div>` : ''}
                `;
            }
            const isGroup = c.type === "group";
            return `
                <div class="banner-wrap">
                  ${c.banner ? (c.bannerType === 'video' ? `<video src="${c.banner}" autoplay muted loop playsinline></video>` : `<img src="${c.banner}"/>`) : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--muted);">${svgIcon('image',30,'currentColor')}</div>`}
                  <button class="banner-edit-btn" id="edit-banner-btn">${svgIcon('film',14,'#fff')} Ubah Sampul</button>
                </div>
                <div class="info-header" style="padding-top:14px;">
                  ${bigAvatarHTML(c, true, "group-avatar-edit", true)}
                  <div class="info-name">${escapeHtml(c.name)} ${verifiedBadge(c.verified)}</div>
                  <div class="info-username">@${escapeHtml(c.username || "-")} · ${isGroup ? (c.members ? c.members.length : 0) + ' anggota' : 'Saluran'}</div>
                </div>
                <div class="settings-divider"></div>
                <div class="invite-box">
                  <div style="font-size:12.5px;color:var(--muted);margin-bottom:5px;">Kode undangan ${isGroup ? 'grup' : 'saluran'}</div>
                  <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
                    <div class="invite-code">${c.inviteCode}</div>
                    <button class="small-btn approve" id="copy-code-btn">${svgIcon('copy',13,'#fff')} Salin</button>
                  </div>
                </div>
                ${isGroup ? `
                <div class="info-section-title">Anggota (${c.members ? c.members.length : 0})</div>
                ${(c.members || []).map(m => `<div class="member-item">${avatarHTML({ name: m, initials: m.slice(0,2).toUpperCase(), color: '#5B7A8C' }, { size: 36 })}<div style="font-size:13.5px;">${escapeHtml(m)}</div></div>`).join("")}
                <div style="padding:10px 18px 16px;display:flex;flex-direction:column;gap:10px;">
                  <button class="primary-btn" id="add-member-btn" style="width:100%;">+ Tambah Anggota</button>
                  <button class="primary-btn" id="create-subgroup-btn" style="width:100%;background:var(--accent-dark);">Buat Sub-grup</button>
                </div>
                ${(c.subgroups && c.subgroups.length) ? `<div class="info-section-title">Sub-grup</div>` + c.subgroups.map(sid => {
                    const sg = CHATS.find(x => x.id === sid);
                    if (!sg) return '';
                    return `<div class="subgroup-row" data-subgroup="${sid}">${avatarHTML(sg, { size: 44, square: true })}<div><div style="font-size:14px;font-weight:600;">${escapeHtml(sg.name)}</div><div style="font-size:12px;color:var(--muted);">Sub-grup</div></div></div>`;
                  }).join("") : ''}
                ` : ``}
                ${!c.verified ? `<div style="padding:10px 18px 4px;"><button class="primary-btn" id="ask-verify-group" style="width:100%;">Ajukan Centang Biru ${isGroup ? 'Grup' : 'Saluran'}</button></div>` : ''}
                ${isUserOwner && OWNER_MODE ? `
                  <div class="settings-divider"></div>
                  <div class="info-section-title">Kontrol Owner</div>
                  <div style="padding:6px 18px 16px;display:flex;flex-direction:column;gap:10px;">
                    <button class="primary-btn" id="toggle-verify-btn" style="width:100%;">${c.verified ? 'Cabut' : 'Beri'} Centang Biru</button>
                    <button class="small-btn reject" id="toggle-ban-btn" style="width:100%;padding:11px;">${c.banned ? 'Buka Blokir' : 'Ban'} ${isGroup ? 'Grup' : 'Saluran'} Ini</button>
                  </div>` : ''}
            `;
        }

        function attachInfoListeners() {
            if (infoTarget.kind === "me") {
                document.getElementById("me-avatar-edit")?.addEventListener("click", () => pickFile("image/*,video/*", (
                    type, data) => {
                    ME.avatar = data;
                    ME.avatarType = type;
                    renderInfo();
                    renderMain();
                    saveData();
                    updateUserData();
                }));
                document.getElementById("me-banner-edit")?.addEventListener("click", () => pickFile("image/*,video/*", (
                    type, data) => {
                    ME.banner = data;
                    ME.bannerType = type;
                    renderInfo();
                    saveData();
                    updateUserData();
                }));
                document.getElementById("edit-name-btn")?.addEventListener("click", () => promptEdit("Nama", ME.name,
                    v => {
                        ME.name = v;
                        renderInfo();
                        saveData();
                        updateUserData();
                    }));
                document.getElementById("edit-username-btn")?.addEventListener("click", () => promptEdit("Username",
                    ME.username, v => {
                        if (v === OWNER_DOC_ID && !isOwner) {
                            alert("Username tidak tersedia!");
                            return;
                        }
                        if (USERS.find(u => u.username === v && u.username !== loggedInUser.username)) {
                            alert("Username sudah digunakan!");
                            return;
                        }
                        const oldUsername = ME.username;
                        ME.username = v.replace(/\s+/g, "").toLowerCase();
                        // Update user data (flag isOwner/verified ikut objeknya, bukan dihitung dari username,
                        // jadi status Owner tetap aman walau username berubah)
                        const userData = USERS.find(u => u.username === oldUsername);
                        if (userData) {
                            userData.username = ME.username;
                            saveUsers();
                        }
                        // Update chats
                        CHATS.forEach(c => {
                            if (c.username === oldUsername) c.username = ME.username;
                        });
                        renderInfo();
                        saveData();
                    }));
                document.getElementById("edit-about-btn")?.addEventListener("click", () => promptEdit("Bio", ME
                    .about, v => {
                        ME.about = v;
                        renderInfo();
                        saveData();
                        updateUserData();
                    }));
                document.getElementById("edit-phone-btn")?.addEventListener("click", () => promptEdit("Nomor HP",
                    ME.phone, v => {
                        ME.phone = v;
                        renderInfo();
                        saveData();
                        updateUserData();
                    }));
                document.getElementById("request-verify-btn")?.addEventListener("click", () => requestVerification(
                    "user", "me", ME.name));
                if (isOwner && OWNER_MODE) {
                    document.getElementById("self-verify-btn")?.addEventListener("click", () => {
                        ME.verified = !ME.verified;
                        renderInfo();
                        saveData();
                        updateUserData();
                    });
                }
                document.getElementById("change-password-from-profile")?.addEventListener("click", () => {
                    document.getElementById("change-password-btn")?.click();
                });
                return;
            }
            const c = CHATS.find(x => x.id === infoTarget.id);
            if (!c) return;
            currentInfoChat = c;
            document.getElementById("group-avatar-edit")?.addEventListener("click", () => pickFile("image/*,video/*", (
                type, data) => { c.avatar = data;
                    c.avatarType = type;
                    renderInfo();
                    renderMain();
                    saveData(); }));
            document.getElementById("edit-banner-btn")?.addEventListener("click", () => pickFile("image/*,video/*", (
                type, data) => { c.banner = data;
                    c.bannerType = type;
                    renderInfo();
                    saveData(); }));
            document.getElementById("copy-code-btn")?.addEventListener("click", () => {
                if (navigator.clipboard) navigator.clipboard.writeText(c.inviteCode).catch(() => {});
                alert("Kode undangan disalin: " + c.inviteCode);
            });
            document.getElementById("add-member-btn")?.addEventListener("click", () => openModal("addMember"));
            document.getElementById("create-subgroup-btn")?.addEventListener("click", () => openModal("subgroup"));
            document.getElementById("ask-verify-group")?.addEventListener("click", () => requestVerification(c.type ===
                "group" ? "group" : "channel", c.id, c.name));
            document.getElementById("ask-verify-help")?.addEventListener("click", () => requestVerification("user",
                "me", ME.name));

            document.getElementById("toggle-mute-row")?.addEventListener("click", () => {
                c.muted = !c.muted;
                renderInfo();
                saveData();
            });
            document.getElementById("toggle-pin-row-info")?.addEventListener("click", () => {
                c.pinned = !c.pinned;
                renderInfo();
                renderMain();
                saveData();
            });
            document.getElementById("report-contact-row")?.addEventListener("click", () => {
                const reason = prompt(`Laporkan ${c.name}? Ceritakan alasannya singkat (opsional):`);
                if (reason === null) return;
                alert("Laporan kamu udah dikirim. Terima kasih sudah bantu jaga komunitas tetap aman.");
            });
            document.getElementById("toggle-block-row")?.addEventListener("click", () => {
                c.blockedByMe = !c.blockedByMe;
                renderInfo();
                renderMain();
                if (activeChatId === c.id) renderChatHeader();
                saveData();
            });
            document.getElementById("delete-chat-row")?.addEventListener("click", () => {
                if (!confirm(`Hapus percakapan dengan ${c.name}? Riwayat chat di perangkat ini akan hilang.`)) return;
                CHATS = CHATS.filter(x => x.id !== c.id);
                document.getElementById("info-screen").classList.remove("open");
                document.getElementById("chat-screen").classList.remove("open");
                activeTab = "chats";
                renderMain();
                saveData();
            });

            if (isOwner && OWNER_MODE) {
                document.getElementById("toggle-verify-btn")?.addEventListener("click", () => { c.verified = !c
                        .verified;
                    renderInfo();
                    renderMain();
                    saveData(); });
                document.getElementById("toggle-ban-btn")?.addEventListener("click", () => {
                    if (!c.banned) {
                        const backdrop = document.getElementById("modal-backdrop");
                        const sheet = document.getElementById("modal-sheet");
                        sheet.innerHTML = `
                            <div class="modal-title">Ban ${c.name}</div>
                            <div style="font-size:13px;color:var(--muted2);margin-bottom:10px;">Masukkan alasan pemblokiran:</div>
                            <textarea class="modal-input" id="ban-reason-input" placeholder="Alasan ban..." style="min-height:80px;resize:vertical;"></textarea>
                            <div class="modal-actions">
                                <button class="btn-ghost" id="modal-cancel">Batal</button>
                                <button class="primary-btn" id="modal-confirm-ban" style="background:#C9553B;">Ban Akun</button>
                            </div>
                        `;
                        backdrop.classList.add("open");
                        document.getElementById("modal-cancel").addEventListener("click", closeModal);
                        document.getElementById("modal-confirm-ban").addEventListener("click", () => {
                            const reason = document.getElementById("ban-reason-input").value.trim() ||
                                "Melanggar kebijakan aplikasi.";
                            c.banned = true;
                            const userData = USERS.find(u => u.username === c.username);
                            if (userData) {
                                userData.banned = true;
                                userData.banReason = reason;
                                saveUsers();
                            }
                            if (loggedInUser && loggedInUser.username === c.username) {
                                showBannedOverlay(reason);
                            }
                            closeModal();
                            renderInfo();
                            renderMain();
                            saveData();
                        });
                        return;
                    } else {
                        c.banned = false;
                        const userData = USERS.find(u => u.username === c.username);
                        if (userData) {
                            userData.banned = false;
                            userData.banReason = "";
                            saveUsers();
                        }
                        if (loggedInUser && loggedInUser.username === c.username) {
                            hideBannedOverlay();
                        }
                        renderInfo();
                        renderMain();
                        saveData();
                    }
                });
            }

            document.querySelectorAll("[data-subgroup]").forEach(el => el.addEventListener("click", () => {
                document.getElementById("info-screen").classList.remove("open");
                openChat(Number(el.dataset.subgroup));
            }));
        }

        /* ================= OWNER PANEL ================= */
        function openOwnerPanel() {
            if (!isOwner) return;
            renderOwnerPanel();
            document.getElementById("owner-screen").classList.add("open");
        }
        document.getElementById("owner-back").addEventListener("click", () => {
            document.getElementById("owner-screen").classList.remove("open");
        });

        function renderOwnerPanel() {
            const el = document.getElementById("owner-content");

            const pending = OWNER_REQUESTS.filter(r => r.status === "pending");
            const reqHtml = pending.length ? pending.map(r => `
                <div class="request-card">
                  <div style="font-size:13.5px;font-weight:600;">${escapeHtml(r.targetName)}</div>
                  <div style="font-size:12px;color:var(--muted);margin-top:2px;">Minta centang biru · ${r.targetType} · ${r.time}</div>
                  <div class="request-actions">
                    <button class="small-btn approve" data-approve="${r.id}">Setujui</button>
                    <button class="small-btn reject" data-reject="${r.id}">Tolak</button>
                  </div>
                </div>`).join("") : `<div style="padding:14px 18px;color:var(--muted);font-size:13px;">Tidak ada permintaan tertunda.</div>`;

            const banReqs = BAN_REQUESTS.filter(r => r.status === "pending");
            const banReqHtml = banReqs.length ? banReqs.map(r => `
                <div class="request-card">
                  <div style="font-size:13.5px;font-weight:600;">@${escapeHtml(r.username)}</div>
                  <div style="font-size:12px;color:var(--muted);margin-top:2px;">Minta buka blokir · ${r.time}</div>
                  <div style="font-size:13px;background:var(--wash);padding:8px;border-radius:6px;margin:6px 0;">${escapeHtml(r.reason)}</div>
                  <div class="request-actions">
                    <button class="small-btn approve" data-unban="${r.id}">Setujui</button>
                    <button class="small-btn reject" data-reject-unban="${r.id}">Tolak</button>
                  </div>
                </div>`).join("") : `<div style="padding:14px 18px;color:var(--muted);font-size:13px;">Tidak ada permintaan buka blokir.</div>`;

            const userRows = CHATS.filter(c => c.type === "dm").map(c => {
                const userData = USERS.find(u => u.username === c.username);
                const isBanned = userData ? userData.banned : c.banned;
                return `
                <div class="settings-row">
                  ${avatarHTML(c, { size: 38 })}
                  <div style="flex:1;">
                    <div class="settings-label" style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;">${escapeHtml(c.name)} ${verifiedBadge(c.verified)} ${isBanned ? '<span style="color:#C9553B;font-size:11px;font-weight:700;">(BANNED)</span>' : ''}</div>
                    <div class="settings-sub">@${escapeHtml(c.username)}</div>
                  </div>
                  <button class="small-btn approve" data-uverify="${c.id}" style="margin-right:6px;">${c.verified ? 'Cabut' : 'Centang'}</button>
                  <button class="small-btn reject" data-uban="${c.id}">${isBanned ? 'Buka' : 'Ban'}</button>
                </div>`;
            }).join("");

            const groupRows = CHATS.filter(c => c.type === "group" || c.type === "channel").map(c => `
                <div class="settings-row">
                  ${avatarHTML(c, { size: 38, square: true })}
                  <div style="flex:1;">
                    <div class="settings-label" style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;">${escapeHtml(c.name)} ${verifiedBadge(c.verified)} ${c.banned ? '<span style="color:#C9553B;font-size:11px;font-weight:700;">(BANNED)</span>' : ''}</div>
                    <div class="settings-sub">${c.type === "group" ? "Grup" : "Saluran"}</div>
                  </div>
                  <button class="small-btn approve" data-uverify="${c.id}" style="margin-right:6px;">${c.verified ? 'Cabut' : 'Centang'}</button>
                  <button class="small-btn reject" data-uban="${c.id}">${c.banned ? 'Buka' : 'Ban'}</button>
                </div>`).join("");

            const storiesHtml = OWNER_STORIES.length ? OWNER_STORIES.map(s => `
                <div class="owner-story-card">
                  <div class="story-meta">
                    <span><strong>${escapeHtml(s.userName)}</strong> · ${s.time}</span>
                    <span class="meta-right"><span>${svgIcon('eye',12,'currentColor')} ${s.viewers ? s.viewers.length : 0}</span><span>${svgIcon('heart',12,'currentColor')} ${s.likes ? s.likes.length : 0}</span></span>
                  </div>
                  <div class="story-content">
                    ${s.mediaUrl ? (s.type === 'video' ? `<video src="${s.mediaUrl}" muted style="max-height:50px;border-radius:6px;"></video>` : `<img src="${s.mediaUrl}" style="max-height:50px;border-radius:6px;"/>`) : ''}
                    ${s.text ? escapeHtml(s.text) : ''}
                  </div>
                  <div style="margin-top:8px;display:flex;gap:8px;">
                    <button class="small-btn approve" data-del-story="${s.id}" style="background:#C9553B;color:#fff;display:inline-flex;align-items:center;gap:5px;">${svgIcon('x',12,'#fff',2.4)} Hapus</button>
                  </div>
                </div>`).join("") :
                `<div class="empty-owner-msg">Belum ada story yang dikirim ke semua pengguna.</div>`;

            const newsHtml = OWNER_NEWS.length ? OWNER_NEWS.map(n => `
                <div class="owner-news-card">
                  <div class="news-meta">
                    <span><strong>${escapeHtml(n.title)}</strong> · ${n.time}</span>
                    <span>dikirim oleh ${escapeHtml(n.sentBy)}</span>
                  </div>
                  <div class="news-content">${escapeHtml(n.content)}</div>
                  ${n.mediaUrl ? `<div class="news-media">${n.mediaType === 'video' ? `<video src="${n.mediaUrl}" muted controls style="max-height:100px;"></video>` : `<img src="${n.mediaUrl}"/>`}</div>` : ''}
                  <div style="margin-top:8px;display:flex;gap:8px;">
                    <button class="small-btn approve" data-del-news="${n.id}" style="background:#C9553B;color:#fff;display:inline-flex;align-items:center;gap:5px;">${svgIcon('x',12,'#fff',2.4)} Hapus</button>
                  </div>
                </div>`).join("") :
                `<div class="empty-owner-msg">Belum ada berita yang dikirim ke semua pengguna.</div>`;

            el.innerHTML = `
                <div class="owner-tab">
                  <div class="owner-subheader">${svgIcon('film',15,'currentColor',2)} Kirim Story ke Semua Pengguna</div>
                  <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
                    <button class="primary-btn small" id="owner-send-story-text">${svgIcon('type',13,'#fff',2.4)} Tulis Story</button>
                    <button class="primary-btn small" id="owner-send-story-media">${svgIcon('image',13,'#fff',2.4)} Story dengan Media</button>
                  </div>
                  <div class="owner-subheader">${svgIcon('megaphone',15,'currentColor',2)} Kirim Berita di Bantuan Owner</div>
                  <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
                    <button class="primary-btn small" id="owner-send-news">${svgIcon('news',13,'#fff',2.4)} Kirim Berita (Teks)</button>
                    <button class="primary-btn small" id="owner-send-news-media">${svgIcon('image',13,'#fff',2.4)} Kirim Berita + Media</button>
                  </div>

                  <div class="settings-divider"></div>
                  <div class="owner-subheader">${svgIcon('film',15,'currentColor',2)} Story Terkirim</div>
                  ${storiesHtml}

                  <div class="settings-divider"></div>
                  <div class="owner-subheader">${svgIcon('news',15,'currentColor',2)} Berita Terkirim</div>
                  ${newsHtml}

                  <div class="settings-divider"></div>
                  <div class="owner-subheader">${svgIcon('unlock',15,'currentColor',2)} Permintaan Buka Blokir</div>
                  ${banReqHtml}

                  <div class="settings-divider"></div>
                  <div class="owner-subheader">${svgIcon('badge-check',15,'currentColor',2)} Permintaan Centang Biru</div>
                  ${reqHtml}

                  <div class="settings-divider"></div>
                  <div class="owner-subheader">${svgIcon('user',15,'currentColor',2)} Akun Pengguna</div>
                  ${userRows}

                  <div class="settings-divider"></div>
                  <div class="owner-subheader">${svgIcon('users-round',15,'currentColor',2)} Grup & Saluran</div>
                  ${groupRows}
                </div>
            `;

            el.querySelector("#owner-send-story-text")?.addEventListener("click", () => openModal("ownerStoryText"));
            el.querySelector("#owner-send-story-media")?.addEventListener("click", () => openModal("ownerStoryMedia"));
            el.querySelector("#owner-send-news")?.addEventListener("click", () => openModal("ownerNewsText"));
            el.querySelector("#owner-send-news-media")?.addEventListener("click", () => openModal("ownerNewsMedia"));

            el.querySelectorAll("[data-del-story]").forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = Number(btn.dataset.delStory);
                    OWNER_STORIES = OWNER_STORIES.filter(s => s.id !== id);
                    syncOwnerStoriesToStatuses();
                    renderOwnerPanel();
                    renderMain();
                    saveData();
                    if (hasCloud) ownerStoriesCol().doc(String(id)).delete().catch(e => console.error("del ownerStory:", e));
                });
            });
            el.querySelectorAll("[data-del-news]").forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = Number(btn.dataset.delNews);
                    OWNER_NEWS = OWNER_NEWS.filter(n => n.id !== id);
                    renderOwnerPanel();
                    saveData();
                    if (hasCloud) ownerNewsCol().doc(String(id)).delete().catch(e => console.error("del ownerNews:", e));
                });
            });

            el.querySelectorAll("[data-approve]").forEach(b => b.addEventListener("click", () => {
                const r = OWNER_REQUESTS.find(x => x.id === Number(b.dataset.approve));
                if (r) {
                    r.status = "approved";
                    if (r.targetType === "user" && r.targetId === "me") ME.verified = true;
                    else { const t = CHATS.find(x => x.id === r.targetId); if (t) t.verified = true; }
                    renderOwnerPanel();
                    renderMain();
                    saveData();
                    updateUserData();
                }
            }));
            el.querySelectorAll("[data-reject]").forEach(b => b.addEventListener("click", () => {
                const r = OWNER_REQUESTS.find(x => x.id === Number(b.dataset.reject));
                if (r) { r.status = "rejected";
                    renderOwnerPanel();
                    saveData(); }
            }));

            el.querySelectorAll("[data-unban]").forEach(b => b.addEventListener("click", () => {
                const r = BAN_REQUESTS.find(x => x.id === Number(b.dataset.unban));
                if (r) {
                    r.status = "approved";
                    const userData = USERS.find(u => u.username === r.username);
                    if (userData) {
                        userData.banned = false;
                        userData.banReason = "";
                        saveUsers();
                        const chat = CHATS.find(c => c.username === r.username);
                        if (chat) chat.banned = false;
                    }
                    renderOwnerPanel();
                    renderMain();
                    saveData();
                    saveBanRequests();
                    alert(`Akun @${r.username} telah dibuka blokir.`);
                }
            }));
            el.querySelectorAll("[data-reject-unban]").forEach(b => b.addEventListener("click", () => {
                const r = BAN_REQUESTS.find(x => x.id === Number(b.dataset.rejectUnban));
                if (r) { r.status = "rejected";
                    renderOwnerPanel();
                    saveBanRequests(); }
            }));

            el.querySelectorAll("[data-uverify]").forEach(b => b.addEventListener("click", () => {
                const c = CHATS.find(x => x.id === Number(b.dataset.uverify));
                if (c) { c.verified = !c.verified;
                    renderOwnerPanel();
                    renderMain();
                    saveData(); }
            }));
            el.querySelectorAll("[data-uban]").forEach(b => b.addEventListener("click", () => {
                const c = CHATS.find(x => x.id === Number(b.dataset.uban));
                if (!c) return;

                if (!c.banned) {
                    const backdrop = document.getElementById("modal-backdrop");
                    const sheet = document.getElementById("modal-sheet");
                    sheet.innerHTML = `
                        <div class="modal-title">Ban ${c.name}</div>
                        <div style="font-size:13px;color:var(--muted2);margin-bottom:10px;">Masukkan alasan pemblokiran:</div>
                        <textarea class="modal-input" id="ban-reason-input" placeholder="Alasan ban..." style="min-height:80px;resize:vertical;"></textarea>
                        <div class="modal-actions">
                            <button class="btn-ghost" id="modal-cancel">Batal</button>
                            <button class="primary-btn" id="modal-confirm-ban" style="background:#C9553B;">Ban</button>
                        </div>
                    `;
                    backdrop.classList.add("open");
                    document.getElementById("modal-cancel").addEventListener("click", closeModal);
                    document.getElementById("modal-confirm-ban").addEventListener("click", () => {
                        const reason = document.getElementById("ban-reason-input").value.trim() ||
                            "Melanggar kebijakan aplikasi.";
                        c.banned = true;
                        const userData = USERS.find(u => u.username === c.username);
                        if (userData) {
                            userData.banned = true;
                            userData.banReason = reason;
                            saveUsers();
                        }
                        if (loggedInUser && loggedInUser.username === c.username) {
                            showBannedOverlay(reason);
                        }
                        closeModal();
                        renderOwnerPanel();
                        renderMain();
                        saveData();
                    });
                } else {
                    c.banned = false;
                    const userData = USERS.find(u => u.username === c.username);
                    if (userData) {
                        userData.banned = false;
                        userData.banReason = "";
                        saveUsers();
                    }
                    if (loggedInUser && loggedInUser.username === c.username) {
                        hideBannedOverlay();
                    }
                    renderOwnerPanel();
                    renderMain();
                    saveData();
                }
            }));
        }

        function sendOwnerStory(text, mediaUrl, mediaType) {
            const story = {
                id: nextId++,
                userId: "owner",
                userName: "Owner",
                userAvatar: null,
                time: "Baru saja",
                type: mediaUrl ? mediaType : "text",
                text: text || "",
                mediaUrl: mediaUrl || null,
                viewers: [],
                likes: []
            };
            OWNER_STORIES.unshift(story);

            STATUSES.unshift({
                id: story.id,
                name: "Owner",
                initials: "OW",
                color: "#234F42",
                avatar: null,
                verified: true,
                time: "Baru saja",
                viewed: false,
                type: story.type,
                text: story.text,
                mediaUrl: story.mediaUrl,
                likes: story.likes
            });

            const help = CHATS.find(x => x.id === 999);
            if (help) {
                help.messages.push({
                    id: help.messages.length + 1,
                    from: "them",
                    broadcastType: "story",
                    text: text || "Lihat pembaruan terbaru di tab Status.",
                    time: "Sekarang",
                    status: "read"
                });
            }

            renderOwnerPanel();
            renderMain();
            saveData();
            alert("Story berhasil dikirim ke semua pengguna!");
        }

        function sendOwnerNews(title, content, mediaUrl, mediaType) {
            const news = {
                id: nextId++,
                title: title || "Pengumuman",
                content: content || "",
                mediaUrl: mediaUrl || null,
                mediaType: mediaType || null,
                time: "Baru saja",
                sentBy: "Owner"
            };
            OWNER_NEWS.unshift(news);

            const help = CHATS.find(x => x.id === 999);
            if (help) {
                help.messages.push({
                    id: help.messages.length + 1,
                    from: "them",
                    broadcastType: "news",
                    title: title || "Pengumuman",
                    text: content || "",
                    time: "Sekarang",
                    status: "read",
                    mediaUrl: mediaUrl || null,
                    mediaType: mediaType || null,
                });
            }

            renderOwnerPanel();
            renderMain();
            saveData();
            alert("Berita berhasil dikirim ke Bantuan Owner!");
        }

        /* ================= MODALS ================= */
        function openModal(kind) {
            tempAvatar = null;
            tempAvatarType = null;
            tempBanner = null;
            tempBannerType = null;
            tempStatusMedia = null;
            const backdrop = document.getElementById("modal-backdrop");
            const sheet = document.getElementById("modal-sheet");

            if (kind === "ownerStoryText") {
                if (!isOwner) return;
                sheet.innerHTML = `
                  <div class="modal-title">Kirim Story (Teks)</div>
                  <input class="modal-input" id="modal-story-text" placeholder="Tulis story..." />
                  <div class="modal-actions">
                    <button class="btn-ghost" id="modal-cancel">Batal</button>
                    <button class="primary-btn" id="modal-confirm-story">Kirim Story</button>
                  </div>`;
                backdrop.classList.add("open");
                document.getElementById("modal-cancel").addEventListener("click", closeModal);
                document.getElementById("modal-confirm-story").addEventListener("click", () => {
                    const text = document.getElementById("modal-story-text").value.trim();
                    if (!text) { document.getElementById("modal-story-text").focus(); return; }
                    sendOwnerStory(text, null, null);
                    closeModal();
                });
                return;
            }

            if (kind === "ownerStoryMedia") {
                if (!isOwner) return;
                sheet.innerHTML = `
                  <div class="modal-title">Kirim Story dengan Media</div>
                  <div style="margin-bottom:12px;">
                    <button class="primary-btn small" id="pick-story-media">${svgIcon('image',13,'#fff',2.4)} Pilih Media (Foto/Video)</button>
                  </div>
                  <div id="story-media-preview" style="margin-bottom:10px;"></div>
                  <input class="modal-input" id="modal-story-text" placeholder="Tambahkan teks (opsional)" />
                  <div class="modal-actions">
                    <button class="btn-ghost" id="modal-cancel">Batal</button>
                    <button class="primary-btn" id="modal-confirm-story">Kirim Story</button>
                  </div>`;
                backdrop.classList.add("open");
                let mediaData = null,
                    mediaType = null;
                document.getElementById("modal-cancel").addEventListener("click", closeModal);
                document.getElementById("pick-story-media").addEventListener("click", () => {
                    pickFile("image/*,video/*", (type, data) => {
                        mediaData = data;
                        mediaType = type;
                        document.getElementById("story-media-preview").innerHTML = type === "video" ?
                            `<video src="${data}" style="width:100%;max-height:150px;border-radius:10px;" controls></video>` :
                            `<img src="${data}" style="width:100%;max-height:150px;object-fit:cover;border-radius:10px;"/>`;
                    });
                });
                document.getElementById("modal-confirm-story").addEventListener("click", () => {
                    const text = document.getElementById("modal-story-text").value.trim();
                    if (!mediaData && !text) { alert("Isi teks atau pilih media!"); return; }
                    sendOwnerStory(text, mediaData, mediaType);
                    closeModal();
                });
                return;
            }

            if (kind === "ownerNewsText") {
                if (!isOwner) return;
                sheet.innerHTML = `
                  <div class="modal-title">Kirim Berita (Teks)</div>
                  <input class="modal-input" id="modal-news-title" placeholder="Judul berita" />
                  <textarea class="modal-input" id="modal-news-content" placeholder="Isi berita..." style="min-height:80px;resize:vertical;"></textarea>
                  <div class="modal-actions">
                    <button class="btn-ghost" id="modal-cancel">Batal</button>
                    <button class="primary-btn" id="modal-confirm-news">Kirim Berita</button>
                  </div>`;
                backdrop.classList.add("open");
                document.getElementById("modal-cancel").addEventListener("click", closeModal);
                document.getElementById("modal-confirm-news").addEventListener("click", () => {
                    const title = document.getElementById("modal-news-title").value.trim();
                    const content = document.getElementById("modal-news-content").value.trim();
                    if (!title || !content) { alert("Judul dan isi berita harus diisi!"); return; }
                    sendOwnerNews(title, content, null, null);
                    closeModal();
                });
                return;
            }

            if (kind === "ownerNewsMedia") {
                if (!isOwner) return;
                sheet.innerHTML = `
                  <div class="modal-title">Kirim Berita + Media</div>
                  <input class="modal-input" id="modal-news-title" placeholder="Judul berita" />
                  <textarea class="modal-input" id="modal-news-content" placeholder="Isi berita..." style="min-height:60px;resize:vertical;"></textarea>
                  <div style="margin-bottom:12px;">
                    <button class="primary-btn small" id="pick-news-media">${svgIcon('image',13,'#fff',2.4)} Pilih Media (Foto/Video)</button>
                  </div>
                  <div id="news-media-preview" style="margin-bottom:10px;"></div>
                  <div class="modal-actions">
                    <button class="btn-ghost" id="modal-cancel">Batal</button>
                    <button class="primary-btn" id="modal-confirm-news">Kirim Berita</button>
                  </div>`;
                backdrop.classList.add("open");
                let mediaData = null,
                    mediaType = null;
                document.getElementById("modal-cancel").addEventListener("click", closeModal);
                document.getElementById("pick-news-media").addEventListener("click", () => {
                    pickFile("image/*,video/*", (type, data) => {
                        mediaData = data;
                        mediaType = type;
                        document.getElementById("news-media-preview").innerHTML = type === "video" ?
                            `<video src="${data}" style="width:100%;max-height:120px;border-radius:10px;" controls></video>` :
                            `<img src="${data}" style="width:100%;max-height:120px;object-fit:cover;border-radius:10px;"/>`;
                    });
                });
                document.getElementById("modal-confirm-news").addEventListener("click", () => {
                    const title = document.getElementById("modal-news-title").value.trim();
                    const content = document.getElementById("modal-news-content").value.trim();
                    if (!title || !content) { alert("Judul dan isi berita harus diisi!"); return; }
                    sendOwnerNews(title, content, mediaData, mediaType);
                    closeModal();
                });
                return;
            }

            if (kind === "group" || kind === "channel") {
                const isGroup = kind === "group";
                sheet.innerHTML = `
                  <div class="modal-title">${isGroup ? "Grup baru" : "Saluran baru"}</div>
                  <div class="info-actions" style="margin-bottom:12px;justify-content:flex-start;">
                    <div class="action-chip" id="pick-avatar-chip"><div class="chip-icon">${svgIcon('image',18,'currentColor')}</div>Foto</div>
                    <div class="action-chip" id="pick-banner-chip"><div class="chip-icon">${svgIcon('film',18,'currentColor')}</div>Sampul</div>
                  </div>
                  <div id="modal-avatar-preview" style="margin-bottom:10px;"></div>
                  <input class="modal-input" id="modal-name" placeholder="${isGroup ? "Nama grup" : "Nama saluran"}" />
                  <div class="members-label">${isGroup ? "Pilih anggota" : "Ini saluran satu arah, pengikut bisa bergabung nanti"}</div>
                  ${isGroup ? CONTACT_POOL.map((p, i) => `
                    <div class="member-row">
                      <input type="checkbox" id="member-${i}" checked />
                      ${avatarHTML(p, { size: 34 })}
                      <label for="member-${i}" style="flex:1;">${escapeHtml(p.name)}</label>
                    </div>`).join("") : ""}
                  <div class="modal-actions">
                    <button class="btn-ghost" id="modal-cancel">Batal</button>
                    <button class="primary-btn" id="modal-confirm">${isGroup ? "Buat grup" : "Buat saluran"}</button>
                  </div>`;
            } else if (kind === "community") {
                sheet.innerHTML = `
                  <div class="modal-title">Komunitas baru</div>
                  <div class="info-actions" style="margin-bottom:12px;justify-content:flex-start;">
                    <div class="action-chip" id="pick-avatar-chip"><div class="chip-icon">${svgIcon('image',18,'currentColor')}</div>Logo</div>
                    <div class="action-chip" id="pick-banner-chip"><div class="chip-icon">${svgIcon('film',18,'currentColor')}</div>Banner</div>
                  </div>
                  <div id="modal-avatar-preview" style="margin-bottom:10px;"></div>
                  <input class="modal-input" id="modal-name" placeholder="Nama komunitas" />
                  <input class="modal-input" id="modal-group1" placeholder="Nama grup pertama (opsional)" />
                  <div class="modal-actions">
                    <button class="btn-ghost" id="modal-cancel">Batal</button>
                    <button class="primary-btn" id="modal-confirm">Buat komunitas</button>
                  </div>`;
            } else if (kind === "addStatus") {
                sheet.innerHTML = `
                  <div class="modal-title">Tulis status</div>
                  <div class="info-actions" style="margin-bottom:12px;justify-content:flex-start;">
                    <div class="action-chip" id="pick-status-media"><div class="chip-icon">${svgIcon('image',18,'currentColor')}</div>Galeri</div>
                  </div>
                  <div id="status-media-preview" style="margin-bottom:10px;"></div>
                  <input class="modal-input" id="modal-name" placeholder="Lagi mikirin apa nih? (opsional jika pakai foto/video)" />
                  <div class="modal-actions">
                    <button class="btn-ghost" id="modal-cancel">Batal</button>
                    <button class="primary-btn" id="modal-confirm">Kirim status</button>
                  </div>`;
                backdrop.classList.add("open");
                document.getElementById("modal-cancel").addEventListener("click", closeModal);
                document.getElementById("pick-status-media").addEventListener("click", () => pickFile(
                    "image/*,video/*", (type, data) => {
                        tempStatusMedia = { type, data };
                        document.getElementById("status-media-preview").innerHTML = type === "video" ?
                            `<video src="${data}" style="width:100%;max-height:170px;border-radius:10px;" controls></video>` :
                            `<img src="${data}" style="width:100%;max-height:170px;object-fit:cover;border-radius:10px;"/>`;
                    }));
                document.getElementById("modal-confirm").addEventListener("click", () => confirmModal(kind));
                return;
            } else if (kind === "addMember") {
                const c = currentInfoChat;
                const nonMembers = CONTACT_POOL.filter(p => !(c.members || []).includes(p.name));
                sheet.innerHTML =
                    `<div class="modal-title">Tambah Anggota</div>` +
                    (nonMembers.length ? nonMembers.map((p, i) =>
                        `<div class="member-row"><input type="checkbox" id="addmem-${i}"/>${avatarHTML(p, { size: 34 })}<label for="addmem-${i}" style="flex:1;">${escapeHtml(p.name)}</label></div>`
                        ).join("") :
                        '<div style="padding:14px 0;color:var(--muted);font-size:13px;">Semua kontak sudah jadi anggota.</div>') +
                    `<div class="modal-actions"><button class="btn-ghost" id="modal-cancel">Batal</button><button class="primary-btn" id="modal-confirm-addmember">Tambahkan</button></div>`;
                backdrop.classList.add("open");
                document.getElementById("modal-cancel").addEventListener("click", closeModal);
                document.getElementById("modal-confirm-addmember")?.addEventListener("click", () => {
                    nonMembers.forEach((p, i) => { if (document.getElementById("addmem-" + i)?.checked) c.members
                            .push(p.name); });
                    closeModal();
                    renderInfo();
                    saveData();
                });
                return;
            } else if (kind === "subgroup") {
                sheet.innerHTML =
                    `<div class="modal-title">Buat Sub-grup</div><input class="modal-input" id="modal-name" placeholder="Nama sub-grup"/><div class="modal-actions"><button class="btn-ghost" id="modal-cancel">Batal</button><button class="primary-btn" id="modal-confirm-subgroup">Buat</button></div>`;
                backdrop.classList.add("open");
                document.getElementById("modal-cancel").addEventListener("click", closeModal);
                document.getElementById("modal-confirm-subgroup").addEventListener("click", () => {
                    const name = document.getElementById("modal-name").value.trim();
                    if (!name) return;
                    const parent = currentInfoChat;
                    const sg = {
                        id: nextId++,
                        type: "group",
                        name,
                        initials: name.slice(0, 2).toUpperCase(),
                        color: "#5B7A8C",
                        username: name.toLowerCase().replace(/\s+/g, ""),
                        verified: false,
                        banned: false,
                        avatar: null,
                        banner: null,
                        bannerType: null,
                        lastSeen: "Sub-grup dari " + parent.name,
                        members: [...(parent.members || [])],
                        inviteCode: randCode(),
                        subgroups: [],
                        messages: [{ id: 1, from: "them", text: "Sub-grup ini dibuat dari " + parent.name,
                            time: "Sekarang", status: "read" }],
                    };
                    CHATS.unshift(sg);
                    parent.subgroups = parent.subgroups || [];
                    parent.subgroups.push(sg.id);
                    closeModal();
                    renderInfo();
                    saveData();
                });
                return;
            } else if (kind === "joinCode") {
                sheet.innerHTML =
                    `<div class="modal-title">Gabung Grup dengan Kode</div><input class="modal-input" id="modal-code" placeholder="Masukkan kode undangan (misal: KOPI24)" style="text-transform:uppercase;"/><div class="modal-actions"><button class="btn-ghost" id="modal-cancel">Batal</button><button class="primary-btn" id="modal-confirm-join">Gabung</button></div>`;
                backdrop.classList.add("open");
                document.getElementById("modal-cancel").addEventListener("click", closeModal);
                document.getElementById("modal-confirm-join").addEventListener("click", () => {
                    const code = document.getElementById("modal-code").value.trim().toUpperCase();
                    const found = CHATS.find(x => x.inviteCode === code);
                    if (found) { closeModal();
                        activeTab = "chats";
                        renderMain();
                        openChat(found.id); return; }
                    const dirEntry = GROUP_DIRECTORY.find(g => g.code === code);
                    if (dirEntry) {
                        const ng = {
                            id: nextId++,
                            type: "group",
                            name: dirEntry.name,
                            initials: dirEntry.initials,
                            color: dirEntry.color,
                            username: dirEntry.name.toLowerCase().replace(/\s+/g, ""),
                            verified: false,
                            banned: false,
                            avatar: null,
                            banner: null,
                            bannerType: null,
                            lastSeen: "Anda bergabung via kode",
                            members: ["Anda"],
                            inviteCode: dirEntry.code,
                            subgroups: [],
                            messages: [{ id: 1, from: "them", text: "Selamat datang di " + dirEntry.name +
                                    "!", time: "Sekarang", status: "read" }],
                        };
                        CHATS.unshift(ng);
                        GROUP_DIRECTORY = GROUP_DIRECTORY.filter(g => g.code !== code);
                        closeModal();
                        activeTab = "chats";
                        renderMain();
                        saveData();
                    } else {
                        alert("Kode tidak ditemukan. Coba periksa lagi ya! (Coba: KOPI24 atau DEV99)");
                    }
                });
                return;
            }

            backdrop.classList.add("open");
            document.getElementById("modal-cancel").addEventListener("click", closeModal);
            document.getElementById("pick-avatar-chip")?.addEventListener("click", () => pickFile("image/*,video/*", (
                type, data) => {
                tempAvatar = data;
                tempAvatarType = type;
                document.getElementById("modal-avatar-preview").innerHTML = type === "video" ?
                    `<video src="${data}" style="width:70px;height:70px;border-radius:16px;object-fit:cover;" muted autoplay loop playsinline></video>` :
                    `<img src="${data}" style="width:70px;height:70px;border-radius:16px;object-fit:cover;"/>`;
            }));
            document.getElementById("pick-banner-chip")?.addEventListener("click", () => pickFile(
                "image/*,video/*", (type, data) => {
                    tempBanner = data;
                    tempBannerType = type;
                    const prev = document.getElementById("modal-avatar-preview");
                    prev.innerHTML +=
                        `<div style="margin-top:6px;font-size:12px;color:var(--accent-dark);">Sampul ${type === 'video' ? 'video' : 'foto'} dipilih ✓</div>`;
                }));
            document.getElementById("modal-confirm").addEventListener("click", () => confirmModal(kind));
        }

        function closeModal() {
            document.getElementById("modal-backdrop").classList.remove("open");
        }

        function confirmModal(kind) {
            const nameInput = document.getElementById("modal-name");
            const name = nameInput ? nameInput.value.trim() : "";

            if (kind === "group" || kind === "channel") {
                if (!name) { nameInput.focus(); return; }
                nextId++;
                const colorPool = ["#2F6F5E", "#4A5FA3", "#8A5A44", "#B0553B", "#5B7A8C"];
                const color = colorPool[nextId % colorPool.length];
                const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
                const isGroup = kind === "group";
                let members = [];
                if (isGroup) {
                    CONTACT_POOL.forEach((p, i) => {
                        const cb = document.getElementById("member-" + i);
                        if (cb && cb.checked) members.push(p.name);
                    });
                }
                CHATS.unshift({
                    id: nextId,
                    type: kind,
                    name,
                    initials,
                    color,
                    username: name.toLowerCase().replace(/\s+/g, ""),
                    verified: false,
                    banned: false,
                    avatar: tempAvatar,
                    avatarType: tempAvatarType,
                    banner: tempBanner,
                    bannerType: tempBannerType,
                    lastSeen: kind === "group" ? (members.length + 1) + " anggota" : "Saluran baru dibuat",
                    members: isGroup ? ["Anda", ...members] : undefined,
                    inviteCode: randCode(),
                    subgroups: [],
                    pinned: false,
                    following: kind === "channel" ? true : undefined,
                    followers: kind === "channel" && loggedInUser ? [loggedInUser.username] : undefined,
                    messages: [{ id: 1, from: "them", text: kind === "group" ?
                            "Grup berhasil dibuat, ayo mulai obrolan!" :
                            "Saluran berhasil dibuat, mulai bagikan info ke pengikut.", time: "Sekarang",
                        status: "read" }],
                });
                closeModal();
                activeTab = kind === "channel" ? "status" : "chats";
                renderMain();
                saveData();
            } else if (kind === "community") {
                if (!name) { nameInput.focus(); return; }
                const groupInput = document.getElementById("modal-group1");
                const groupName = groupInput ? groupInput.value.trim() : "";
                nextId++;
                COMMUNITIES.unshift({
                    id: nextId,
                    name,
                    initials: name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase(),
                    color: "#4A5FA3",
                    verified: false,
                    avatar: tempAvatar,
                    avatarType: tempAvatarType,
                    banner: tempBanner,
                    bannerType: tempBannerType,
                    pinned: false,
                    groups: groupName ? [groupName] : ["Pengumuman"],
                });
                closeModal();
                renderMain();
                saveData();
            } else if (kind === "addStatus") {
                if (!name && !tempStatusMedia) { nameInput.focus(); return; }
                MY_STATUS.push({
                    id: nextId++,
                    type: tempStatusMedia ? tempStatusMedia.type : "text",
                    text: name,
                    mediaUrl: tempStatusMedia ? tempStatusMedia.data : null,
                    time: "Baru saja",
                    likes: [],
                    viewers: seedViewers(),
                });
                closeModal();
                renderMain();
                saveData();
            }
        }

        /* ================= STORY VIEWER ================= */
        function openStoryViewer(target) {
            if (target === "me") { activeStoryOwner = "me";
                mySubIndex = 0; } else { activeStoryOwner = "contact";
                activeStoryIndex = target; }
            document.getElementById("story-screen").classList.add("open");
            renderStory();
        }

        function renderStory() {
            let entity, item, isMine;
            if (activeStoryOwner === "me") { isMine = true;
                entity = ME;
                item = MY_STATUS[mySubIndex]; } else { isMine = false;
                item = STATUSES[activeStoryIndex];
                entity = item; }
            if (!item) { closeStory(); return; }

            document.getElementById("story-avatar-wrap").innerHTML = avatarHTML(entity, { size: 34 });
            document.getElementById("story-name").innerHTML = escapeHtml(isMine ? "Status Saya" : entity.name) + " " +
                verifiedBadge(entity.verified);
            document.getElementById("story-time").textContent = item.time;

            const body = document.getElementById("story-body");
            let mediaHtml = "";
            if (item.mediaUrl) {
                mediaHtml = item.type === "video" ?
                    `<video src="${item.mediaUrl}" autoplay muted playsinline style="max-width:100%;max-height:60vh;border-radius:10px;"></video>` :
                    `<img src="${item.mediaUrl}" style="max-width:100%;max-height:60vh;border-radius:10px;object-fit:contain;"/>`;
            }
            const textHtml = item.text ?
                `<p style="${item.mediaUrl ? 'font-size:15px;margin-top:14px;font-family:Inter,sans-serif;font-weight:500;' : ''}">${escapeHtml(item.text)}</p>` :
                "";
            body.innerHTML =
                `<div style="display:flex;flex-direction:column;align-items:center;width:100%;">${mediaHtml}${textHtml}</div>`;

            const total = isMine ? MY_STATUS.length : STATUSES.length;
            const cur = isMine ? mySubIndex : activeStoryIndex;
            const prog = document.getElementById("story-progress");
            prog.innerHTML = "";
            const duration = item.mediaUrl ? (item.type === "video" ? 7000 : 6000) : 4500;
            for (let i = 0; i < Math.max(total, 1); i++) {
                const seg = document.createElement("div");
                seg.className = "story-progress-seg";
                const fill = document.createElement("div");
                fill.className = "story-progress-fill";
                seg.appendChild(fill);
                prog.appendChild(seg);
                if (i === cur) animateFill(fill, duration);
                else if (i < cur) fill.style.width = "100%";
            }

            const controls = document.getElementById("story-controls");
            if (isMine) {
                controls.innerHTML =
                    `<div class="story-mine-controls">
                        <div class="story-viewers-btn" id="story-viewers-btn">${svgIcon('eye',15,'#fff')} ${item.viewers ? item.viewers.length : 0} dilihat</div>
                        <div class="story-delete-btn" id="story-delete-btn" title="Hapus story ini">${svgIcon('x',15,'#fff',2.4)}</div>
                    </div>`;
                document.getElementById("story-viewers-btn").addEventListener("click", () => openViewersSheet(item));
                document.getElementById("story-delete-btn").addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (confirm("Hapus story ini? Tindakan ini tidak bisa dibatalkan.")) deleteMyStory();
                });
            } else {
                const liked = item.likes && item.likes.includes("Saya");
                controls.innerHTML =
                    `<div class="story-like-btn" id="story-like-btn">${svgIcon('heart',24, liked ? '#C9553B' : '#fff', 2)}<span>${item.likes ? item.likes.length : 0}</span></div>`;
                document.getElementById("story-like-btn").addEventListener("click", () => {
                    item.likes = item.likes || [];
                    const idx = item.likes.indexOf("Saya");
                    if (idx >= 0) item.likes.splice(idx, 1);
                    else item.likes.push("Saya");
                    renderStory();
                    saveData();
                });
            }
        }

        function deleteMyStory() {
            clearTimeout(storyTimer);
            const removed = MY_STATUS.splice(mySubIndex, 1)[0];
            saveData();
            if (hasCloud && removed) statusesCol().doc(String(removed.id)).delete().catch(e => console.error("del status:", e));
            if (MY_STATUS.length === 0) {
                closeStory();
            } else {
                if (mySubIndex >= MY_STATUS.length) mySubIndex = MY_STATUS.length - 1;
                renderStory();
            }
        }

        function animateFill(fill, durationMs) {
            clearTimeout(storyTimer);
            fill.style.transition = "none";
            fill.style.width = "0%";
            requestAnimationFrame(() => {
                fill.style.transition = `width ${durationMs}ms linear`;
                fill.style.width = "100%";
            });
            storyTimer = setTimeout(nextStory, durationMs + 100);
        }

        function nextStory() {
            if (activeStoryOwner === "me") {
                if (mySubIndex < MY_STATUS.length - 1) { mySubIndex++;
                    renderStory(); } else closeStory();
            } else {
                if (activeStoryIndex < STATUSES.length - 1) { STATUSES[activeStoryIndex + 1].viewed = true;
                    activeStoryIndex++;
                    renderStory(); } else closeStory();
            }
        }

        function prevStory() {
            if (activeStoryOwner === "me") { if (mySubIndex > 0) { mySubIndex--;
                    renderStory(); } } else { if (activeStoryIndex > 0) { activeStoryIndex--;
                    renderStory(); } }
        }

        document.getElementById("story-close").addEventListener("click", closeStory);

        function closeStory() {
            clearTimeout(storyTimer);
            document.getElementById("story-screen").classList.remove("open");
            renderMain();
            saveData();
        }
        document.getElementById("story-next").addEventListener("click", nextStory);
        document.getElementById("story-prev").addEventListener("click", prevStory);

        function openViewersSheet(item) {
            const backdrop = document.getElementById("modal-backdrop");
            const sheet = document.getElementById("modal-sheet");
            const viewers = item.viewers || [];
            sheet.innerHTML =
                `<div class="modal-title">Dilihat oleh (${viewers.length})</div>` +
                (viewers.length ? viewers.map(v => `
                    <div class="viewer-row">${avatarHTML(v, { size: 34 })}<div style="flex:1;font-size:13.5px;">${escapeHtml(v.name)}</div><span style="font-size:11px;color:var(--muted);">${v.time}</span>${v.liked ? svgIcon('heart',14,'#C9553B',2) : ''}</div>`).join("") :
                    '<div style="padding:20px;text-align:center;color:var(--muted);font-size:13px;">Belum ada yang melihat status ini.</div>') +
                `<div class="modal-actions"><button class="btn-ghost" id="modal-cancel">Tutup</button></div>`;
            backdrop.classList.add("open");
            document.getElementById("modal-cancel").addEventListener("click", closeModal);
        }

        /* ================= BAN OVERLAY LISTENERS ================= */
        document.getElementById("request-unban-btn").addEventListener("click", () => {
            const backdrop = document.getElementById("modal-backdrop");
            const sheet = document.getElementById("modal-sheet");
            sheet.innerHTML = `
                <div class="modal-title">Ajukan Buka Blokir</div>
                <div style="font-size:13px;color:var(--muted2);margin-bottom:10px;">Tulis alasan Anda meminta pembukaan blokir:</div>
                <textarea class="modal-input" id="unban-reason-input" placeholder="Alasan..." style="min-height:80px;resize:vertical;"></textarea>
                <div class="modal-actions">
                    <button class="btn-ghost" id="modal-cancel">Batal</button>
                    <button class="primary-btn" id="modal-confirm-unban-request">Kirim Permintaan</button>
                </div>
            `;
            backdrop.classList.add("open");
            document.getElementById("modal-cancel").addEventListener("click", closeModal);
            document.getElementById("modal-confirm-unban-request").addEventListener("click", () => {
                const reason = document.getElementById("unban-reason-input").value.trim() || "Saya ingin meminta pembukaan blokir.";
                requestUnban(reason);
                closeModal();
            });
        });

        document.getElementById("ban-logout-btn").addEventListener("click", () => {
            clearSession();
            loggedInUser = null;
            isOwner = false;
            document.getElementById('login-screen').classList.remove('hidden');
            document.getElementById('banned-overlay').classList.remove('open');
            document.getElementById('banned-overlay').style.display = 'none';
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('open'));
            renderMain();
        });

        /* ================= LOGIN UI ================= */
        document.querySelectorAll('.login-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const isLogin = this.dataset.tab === 'login';
                document.getElementById('login-fields').style.display = isLogin ? 'block' : 'none';
                document.getElementById('register-fields').style.display = isLogin ? 'none' : 'block';
                document.getElementById('login-btn').textContent = isLogin ? 'Masuk' : 'Daftar';
                document.getElementById('login-error').textContent = '';
            });
        });

        document.getElementById('login-btn').addEventListener('click', async function() {
            const isLogin = document.querySelector('.login-tab.active').dataset.tab === 'login';
            const errorEl = document.getElementById('login-error');
            const btn = this;

            if (isLogin) {
                const username = document.getElementById('login-username').value.trim();
                const password = document.getElementById('login-password').value.trim();

                if (!username || !password) {
                    errorEl.textContent = 'Masukkan username dan password!';
                    return;
                }

                btn.disabled = true;
                const ok = await handleLogin(username, password);
                btn.disabled = false;
                if (ok) {
                    errorEl.textContent = '';
                } else {
                    errorEl.textContent = 'Username atau password salah!';
                }
            } else {
                const username = document.getElementById('register-username').value.trim();
                const password = document.getElementById('register-password').value.trim();
                const phone = document.getElementById('register-phone').value.trim();
                const session = document.getElementById('register-session').value.trim();

                if (!username || !password) {
                    errorEl.textContent = 'Username dan password wajib diisi!';
                    return;
                }

                const result = handleRegister(username, password, phone, session);
                if (result.success) {
                    errorEl.textContent = '';
                    btn.disabled = true;
                    const ok = await handleLogin(result.user.username, result.user.password);
                    btn.disabled = false;
                    if (ok) {
                        document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
                        document.querySelector('.login-tab[data-tab="login"]').classList.add('active');
                        document.getElementById('login-fields').style.display = 'block';
                        document.getElementById('register-fields').style.display = 'none';
                        document.getElementById('login-btn').textContent = 'Masuk';
                    }
                } else {
                    errorEl.textContent = result.error || 'Gagal mendaftar!';
                }
            }
        });

        document.querySelectorAll('#login-username, #login-password, #register-username, #register-password, #register-phone, #register-session')
            .forEach(input => {
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        document.getElementById('login-btn').click();
                    }
                });
            });

        /* ================= INIT ================= */
        function showDebugBanner(msg) {
            let el = document.getElementById('debug-banner');
            if (!el) {
                el = document.createElement('div');
                el.id = 'debug-banner';
                el.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#C9553B;color:#fff;' +
                    'padding:10px 14px;font-size:12px;font-family:monospace;line-height:1.5;white-space:pre-wrap;' +
                    'word-break:break-word;max-height:40vh;overflow-y:auto;';
                document.body.prepend(el);
            }
            el.textContent = msg;
        }

        async function boot() {
            hasCloud = await (window.firebaseReadyPromise || Promise.resolve(false));
            if (window.firebaseInitError) {
                showDebugBanner("❌ " + window.firebaseInitError);
            }
            if (hasCloud) {
                await ensureOwnerAccount();
                try {
                    const snap = await usersCol().get();
                    USERS = snap.docs.map(d => d.data());
                    if (USERS.length === 0) console.warn("USERS kosong, tapi tidak error -- kemungkinan Firestore memang baru.");
                } catch (e) {
                    const msg = "❌ Gagal ambil data dari Firestore: " + (e && e.message ? e.message : e) +
                        (e && e.code ? " (code: " + e.code + ")" : "");
                    console.error(msg, e);
                    showDebugBanner(msg);
                }
                listenUsers();
                listenBanRequests();
                await ensureSeedChannels();
            } else {
                const msg = "❌ Firebase gagal tersambung (hasCloud = false). " +
                    (window.firebaseInitError || "Cek firebase-config.js & Environment Variables.");
                console.error(msg);
                showDebugBanner(msg);
            }

            if (loadSession()) {
                isOwner = !!loggedInUser.isOwner;
                document.getElementById('login-screen').classList.add('hidden');
                initApp();
            } else {
                document.getElementById('login-screen').classList.remove('hidden');
            }
        }
        boot();
