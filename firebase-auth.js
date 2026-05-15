import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
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
let latestLearningStatus = "Java学習中";

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
  return user?.displayName?.trim() || "Learner";
}

function getAvatarLetter(name) {
  return (name || "U").trim().charAt(0).toUpperCase() || "U";
}

function dispatchTraceUsers(users) {
  window.dispatchEvent(new CustomEvent("java-practice-trace-users", {
    detail: { users }
  }));
}

function serializeTraceUser(docSnap) {
  const data = docSnap.data();
  return {
    userName: data.userName || "@Learner",
    displayName: data.displayName || "Learner",
    avatar: data.avatar || getAvatarLetter(data.displayName),
    role: "Learner",
    status: data.status || "Java学習中",
    lastActive: data.lastActiveAt?.toDate?.()?.toISOString() || null,
    online: Boolean(data.online)
  };
}

function startTraceRoomSubscription() {
  if (unsubscribeTraceUsers) return;

  try {
    const usersQuery = query(
      collection(db, "traceRoomUsers"),
      orderBy("lastActiveAt", "desc"),
      limit(30)
    );
    unsubscribeTraceUsers = onSnapshot(usersQuery, (snapshot) => {
      dispatchTraceUsers(snapshot.docs.map(serializeTraceUser));
    }, () => {
      dispatchTraceUsers([]);
    });
  } catch {
    dispatchTraceUsers([]);
  }
}

async function saveTracePresence(user, overrides = {}) {
  if (!user) return;

  const displayName = getPublicName(user);
  tracePresenceRef = doc(db, "traceRoomUsers", user.uid);

  try {
    await setDoc(tracePresenceRef, {
      userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
      displayName,
      avatar: getAvatarLetter(displayName),
      role: "Learner",
      status: latestLearningStatus,
      online: true,
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

document.addEventListener("visibilitychange", () => {
  updateTracePresence({
    online: document.visibilityState === "visible",
    status: latestLearningStatus
  });
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
  await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  const signedIn = Boolean(user);
  try {
    if (signedIn) {
      const userName = getPublicName(user);
      localStorage.setItem("java-output-practice-auth", "signed-in");
      localStorage.setItem("java-output-practice-auth-scope", user.uid);
      localStorage.setItem("java-output-practice-auth-name", userName);
      localStorage.setItem("java-output-practice-auth-display-name", userName);
    } else {
      localStorage.removeItem("java-output-practice-auth");
      localStorage.removeItem("java-output-practice-auth-scope");
      localStorage.removeItem("java-output-practice-auth-name");
      localStorage.removeItem("java-output-practice-auth-display-name");
      tracePresenceRef = null;
      dispatchTraceUsers([]);
    }
  } catch {}

  if (signedIn) {
    saveTracePresence(user);
    startTraceRoomSubscription();
  }

  window.dispatchEvent(new CustomEvent("java-practice-auth-ready", {
    detail: {
      uid: signedIn ? user.uid : "local",
      name: signedIn ? getPublicName(user) : "User",
      displayName: signedIn ? getPublicName(user) : "User"
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
