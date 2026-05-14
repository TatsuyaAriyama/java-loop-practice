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
  await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  const signedIn = Boolean(user);
  try {
    if (signedIn) {
      localStorage.setItem("java-output-practice-auth", "signed-in");
      localStorage.setItem("java-output-practice-auth-scope", user.uid);
    } else {
      localStorage.removeItem("java-output-practice-auth");
      localStorage.removeItem("java-output-practice-auth-scope");
    }
  } catch {}

  window.dispatchEvent(new CustomEvent("java-practice-auth-ready", {
    detail: { uid: signedIn ? user.uid : "local" }
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
