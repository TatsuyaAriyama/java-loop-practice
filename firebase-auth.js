import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  collection,
  doc,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA9AqCq_pdveDf_8Vimh99XXDjbo9LpahQ",
  authDomain: "java-output-practice.firebaseapp.com",
  projectId: "java-output-practice",
  storageBucket: "java-output-practice.firebasestorage.app",
  messagingSenderId: "256727694609",
  appId: "1:256727694609:web:0f4f810453e197d07c60b0",
  measurementId: "G-8RFFFHX451"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

const authScreen = document.querySelector("#authScreen");
const appShell = document.querySelector("#appShell");
const authForm = document.querySelector("#authForm");
const emailInput = document.querySelector("#authEmail");
const passwordInput = document.querySelector("#authPassword");
const googleLoginButton = document.querySelector("#googleLoginButton");
const createAccountButton = document.querySelector("#createAccountButton");
const signOutButton = document.querySelector("#signOutButton");
const authMessage = document.querySelector("#authMessage");
let tracePresenceRef = null;
let unsubscribeTraceUsers = null;
let unsubscribeRegisteredUsers = null;
let tracePresenceUsers = [];
let registeredTraceUsers = [];
let latestLearningStatus = "Java学習中";
let latestProgress = {
  totalCleared: 0,
  lessonsCleared: "0/7"
};
const profileNameKey = "java-output-practice-auth-name";
const profileDisplayNameKey = "java-output-practice-auth-display-name";
const profileAvatarKey = "java-output-practice-auth-avatar";

function setMessage(message) {
  authMessage.textContent = message;
}

function friendlyError(error) {
  const code = error?.code || "";

  if (code.includes("invalid-email")) return "メールアドレスの形式を確認してください。";
  if (code.includes("missing-password")) return "パスワードを入力してください。";
  if (code.includes("weak-password")) return "パスワードは6文字以上にしてください。";
  if (code.includes("email-already-in-use")) return "このメールアドレスはすでに登録されています。ログインを試してください。";
  if (code.includes("invalid-credential") || code.includes("wrong-password") || code.includes("user-not-found")) {
    return "メールアドレスまたはパスワードが違います。";
  }
  if (code.includes("popup-closed-by-user")) return "Googleログインがキャンセルされました。";
  if (code.includes("unauthorized-domain")) return "Firebase Authenticationの承認済みドメイン設定を確認してください。";

  return "ログインに失敗しました。Firebaseのログイン方法設定を確認してください。";
}

function setLoading(isLoading) {
  authForm.querySelectorAll("button, input").forEach((element) => {
    element.disabled = isLoading;
  });
}

function getPublicName(user) {
  try {
    return localStorage.getItem(profileDisplayNameKey)?.trim() || user?.displayName?.trim() || "Learner";
  } catch {
    return user?.displayName?.trim() || "Learner";
  }
}

function publicNameFromEmail(email) {
  const localPart = String(email || "").split("@")[0] || "Learner";
  const cleaned = localPart
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return cleaned || "Learner";
}

function getAvatarLetter(name) {
  return (name || "U").trim().charAt(0).toUpperCase() || "U";
}

function getPublicAvatar(displayName) {
  try {
    return localStorage.getItem(profileAvatarKey) || getAvatarLetter(displayName);
  } catch {
    return getAvatarLetter(displayName);
  }
}

function dispatchTraceUsers(users) {
  window.dispatchEvent(new CustomEvent("java-practice-trace-users", {
    detail: { users }
  }));
}

function serializeTraceUser(docSnap) {
  const data = docSnap.data();
  return {
    uid: docSnap.id,
    userName: data.userName || "@Learner",
    displayName: data.displayName || "Learner",
    avatar: data.avatar || getAvatarLetter(data.displayName),
    role: "Learner",
    status: data.status || "Java学習中",
    lastActive: data.lastActiveAt?.toDate?.()?.toISOString() || null,
    online: Boolean(data.online),
    totalCleared: data.totalCleared ?? "未取得",
    lessonsCleared: data.lessonsCleared ?? "未取得"
  };
}

function serializeRegisteredUser(docSnap) {
  const data = docSnap.data();
  const displayName = data.displayName || publicNameFromEmail(data.email);

  return {
    uid: docSnap.id,
    userName: data.userName || `@${String(displayName).replace(/\s+/g, "") || "Learner"}`,
    displayName,
    avatar: data.avatar || getAvatarLetter(displayName),
    role: "Learner",
    status: data.status || "ログイン済み",
    lastActive: data.lastSeenAt?.toDate?.()?.toISOString() || data.lastLoginAt?.toDate?.()?.toISOString() || null,
    online: Boolean(data.online),
    totalCleared: data.totalCleared ?? "未取得",
    lessonsCleared: data.lessonsCleared ?? "未取得"
  };
}

function mergeTraceUsers() {
  const usersById = new Map();

  registeredTraceUsers.forEach((user) => {
    usersById.set(user.uid || user.userName, user);
  });

  tracePresenceUsers.forEach((user) => {
    usersById.set(user.uid || user.userName, {
      ...usersById.get(user.uid || user.userName),
      ...user
    });
  });

  return [...usersById.values()].sort((a, b) => {
    if (a.online !== b.online) return a.online ? -1 : 1;
    return new Date(b.lastActive || 0).getTime() - new Date(a.lastActive || 0).getTime();
  });
}

function dispatchMergedTraceUsers() {
  dispatchTraceUsers(mergeTraceUsers());
}

function startTraceRoomSubscription() {
  if (!unsubscribeTraceUsers) {
    try {
      const usersQuery = query(
        collection(db, "traceRoomUsers"),
        orderBy("lastActiveAt", "desc"),
        limit(30)
      );
      unsubscribeTraceUsers = onSnapshot(usersQuery, (snapshot) => {
        tracePresenceUsers = snapshot.docs.map(serializeTraceUser);
        dispatchMergedTraceUsers();
      }, () => {
        tracePresenceUsers = [];
        dispatchMergedTraceUsers();
      });
    } catch {
      tracePresenceUsers = [];
      dispatchMergedTraceUsers();
    }
  }

  if (!unsubscribeRegisteredUsers) {
    try {
      const registeredUsersQuery = query(
        collection(db, "javaPracticeUsers"),
        orderBy("lastLoginAt", "desc"),
        limit(100)
      );
      unsubscribeRegisteredUsers = onSnapshot(registeredUsersQuery, (snapshot) => {
        registeredTraceUsers = snapshot.docs.map(serializeRegisteredUser);
        dispatchMergedTraceUsers();
      }, () => {
        registeredTraceUsers = [];
        dispatchMergedTraceUsers();
      });
    } catch {
      registeredTraceUsers = [];
      dispatchMergedTraceUsers();
    }
  }
}

async function saveRegisteredUser(user, overrides = {}) {
  if (!user) return;

  const displayName = getPublicName(user);
  const avatar = getPublicAvatar(displayName);

  try {
    await setDoc(doc(db, "javaPracticeUsers", user.uid), {
      userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
      displayName,
      avatar,
      email: user.email || "",
      role: "Learner",
      status: latestLearningStatus,
      online: true,
      ...latestProgress,
      lastLoginAt: serverTimestamp(),
      lastSeenAt: serverTimestamp(),
      ...overrides
    }, { merge: true });
  } catch {}
}

async function saveTracePresence(user, overrides = {}) {
  if (!user) return;

  const displayName = getPublicName(user);
  const avatar = getPublicAvatar(displayName);
  tracePresenceRef = doc(db, "traceRoomUsers", user.uid);

  try {
    await setDoc(tracePresenceRef, {
      userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
      displayName,
      avatar,
      role: "Learner",
      status: latestLearningStatus,
      online: true,
      ...latestProgress,
      lastActiveAt: serverTimestamp(),
      ...overrides
    }, { merge: true });
  } catch {}
}

async function updateTracePresence(fields) {
  if (!tracePresenceRef) return;

  try {
    await updateDoc(tracePresenceRef, {
      ...fields,
      lastActiveAt: serverTimestamp()
    });
  } catch {}
}

window.addEventListener("java-practice-learning-status", (event) => {
  latestLearningStatus = event.detail?.status || "Java学習中";
  updateTracePresence({
    status: latestLearningStatus,
    online: true
  });
});

window.addEventListener("java-practice-progress-updated", (event) => {
  latestProgress = {
    totalCleared: event.detail?.totalCleared ?? latestProgress.totalCleared,
    lessonsCleared: event.detail?.lessonsCleared ?? latestProgress.lessonsCleared
  };

  updateTracePresence({
    ...latestProgress,
    status: latestLearningStatus,
    online: true
  });

  if (auth.currentUser) {
    saveRegisteredUser(auth.currentUser, {
      ...latestProgress,
      status: latestLearningStatus,
      lastSeenAt: serverTimestamp()
    });
  }
});

window.addEventListener("java-practice-profile-updated", async (event) => {
  const user = auth.currentUser;
  if (!user) return;

  const displayName = event.detail?.displayName || getPublicName(user);
  const avatar = event.detail?.avatar || getPublicAvatar(displayName);

  try {
    await updateProfile(user, { displayName });
  } catch {}

  await saveTracePresence(user, {
    userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
    displayName,
    avatar,
    online: true,
    status: latestLearningStatus
  });
  await saveRegisteredUser(user, {
    userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
    displayName,
    avatar,
    online: true,
    status: latestLearningStatus,
    lastSeenAt: serverTimestamp()
  });
});

document.addEventListener("visibilitychange", () => {
  updateTracePresence({
    online: document.visibilityState === "visible",
    status: latestLearningStatus
  });
  if (auth.currentUser) {
    saveRegisteredUser(auth.currentUser, {
      online: document.visibilityState === "visible",
      status: latestLearningStatus,
      lastSeenAt: serverTimestamp()
    });
  }
});

window.addEventListener("beforeunload", () => {
  updateTracePresence({
    online: false,
    status: latestLearningStatus
  });
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    await signInWithEmailAndPassword(auth, emailInput.value.trim(), passwordInput.value);
  } catch (error) {
    setMessage(friendlyError(error));
  } finally {
    setLoading(false);
  }
});

createAccountButton.addEventListener("click", async () => {
  setLoading(true);
  setMessage("");

  try {
    await createUserWithEmailAndPassword(auth, emailInput.value.trim(), passwordInput.value);
  } catch (error) {
    setMessage(friendlyError(error));
  } finally {
    setLoading(false);
  }
});

googleLoginButton.addEventListener("click", async () => {
  setLoading(true);
  setMessage("");

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    setMessage(friendlyError(error));
  } finally {
    setLoading(false);
  }
});

signOutButton.addEventListener("click", async () => {
  try {
    localStorage.removeItem("java-output-practice-auth");
  } catch {}
  await updateTracePresence({
    online: false,
    status: "ログアウト"
  });
  if (auth.currentUser) {
    await saveRegisteredUser(auth.currentUser, {
      online: false,
      status: "ログアウト",
      lastSeenAt: serverTimestamp()
    });
  }
  await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  const signedIn = Boolean(user);
  try {
    if (signedIn) {
      const userName = getPublicName(user);
      const avatar = getPublicAvatar(userName);
      localStorage.setItem("java-output-practice-auth", "signed-in");
      localStorage.setItem("java-output-practice-auth-scope", user.uid);
      localStorage.setItem(profileNameKey, userName);
      localStorage.setItem(profileDisplayNameKey, userName);
      localStorage.setItem(profileAvatarKey, avatar);
    } else {
      localStorage.removeItem("java-output-practice-auth");
      localStorage.removeItem("java-output-practice-auth-scope");
      localStorage.removeItem(profileNameKey);
      localStorage.removeItem(profileDisplayNameKey);
      localStorage.removeItem(profileAvatarKey);
      tracePresenceRef = null;
      tracePresenceUsers = [];
      registeredTraceUsers = [];
      dispatchMergedTraceUsers();
    }
  } catch {}

  if (signedIn) {
    saveRegisteredUser(user);
    saveTracePresence(user);
    startTraceRoomSubscription();
  }

  window.dispatchEvent(new CustomEvent("java-practice-auth-ready", {
    detail: {
      uid: signedIn ? user.uid : "local",
      name: signedIn ? getPublicName(user) : "User",
      displayName: signedIn ? getPublicName(user) : "User",
      avatar: signedIn ? getPublicAvatar(getPublicName(user)) : "U"
    }
  }));

  document.documentElement.classList.toggle("auth-optimistic", signedIn);
  document.body.classList.remove("auth-pending");
  authScreen.classList.toggle("ready", !signedIn);
  authScreen.classList.toggle("hidden", signedIn);
  appShell.classList.toggle("visible", signedIn);
  appShell.setAttribute("aria-hidden", String(!signedIn));

  if (signedIn) {
    setMessage("");
  }
});
