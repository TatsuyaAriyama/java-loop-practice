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
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  limit,
  limitToLast,
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
const progressSchemaVersion = 3;

const authScreen = document.querySelector("#authScreen");
const appShell = document.querySelector("#appShell");
const authForm = document.querySelector("#authForm");
const emailInput = document.querySelector("#authEmail");
const passwordInput = document.querySelector("#authPassword");
const googleLoginButton = document.querySelector("#googleLoginButton");
const createAccountButton = document.querySelector("#createAccountButton");
const signOutButton = document.querySelector("#signOutButton");
const authMessage = document.querySelector("#authMessage");
const hasRoomChat = Boolean(document.querySelector("#roomChatList"));
const languageKey = "java-output-practice-language";
let tracePresenceRef = null;
let unsubscribeTraceUsers = null;
let unsubscribeRegisteredUsers = null;
let unsubscribeAccountProgress = null;
let unsubscribeRoomMessages = null;
let unsubscribeRoomTyping = null;
let unsubscribeBillingStatus = null;
let tracePresenceUsers = [];
let registeredTraceUsers = [];
let traceHeartbeatTimer = null;
let latestLearningStatus = "Java学習中";
let latestProgress = {
  totalCleared: 0,
  lessonsCleared: "0/9"
};
let latestCompletedByLesson = {};
let hasExactProgressSnapshot = false;
let isApplyingRemoteProgress = false;
let roomTypingTimer = null;
let activeAccountUid = null;
let currentLanguage = "ja";
const profileNameKey = "java-output-practice-auth-name";
const profileDisplayNameKey = "java-output-practice-auth-display-name";
const profileAvatarKey = "java-output-practice-auth-avatar";
const profileScopeKey = "java-output-practice-auth-profile-scope";
const profileSetupKeyPrefix = "java-output-practice-profile-setup-complete";
const checkoutFunctionUrl = "https://us-central1-java-output-practice.cloudfunctions.net/createStripeCheckoutSession";

function getScopedProfileSetupKey(uid) {
  return `${profileSetupKeyPrefix}:${uid || "local"}`;
}

function getAuthBaseName(user) {
  return user?.displayName?.trim() || publicNameFromEmail(user?.email) || "Learner";
}

function hasLocalProfileSetup(uid) {
  try {
    return localStorage.getItem(getScopedProfileSetupKey(uid)) === "true";
  } catch {
    return false;
  }
}

try {
  currentLanguage = localStorage.getItem(languageKey) || "ja";
} catch {}

const authCopy = {
  ja: {
    authAria: "ログイン画面",
    title: "ログイン",
    intro: "メール、パスワード、またはGoogleアカウントで学習ページに入ります。",
    email: "メールアドレス",
    password: "パスワード",
    signIn: "メールでログイン",
    create: "新規作成",
    google: "Googleアカウントでログイン",
    invalidEmail: "メールアドレスの形式を確認してください。",
    missingPassword: "パスワードを入力してください。",
    weakPassword: "パスワードは6文字以上にしてください。",
    emailInUse: "このメールアドレスはすでに登録されています。ログインを試してください。",
    invalidCredential: "メールアドレスまたはパスワードが違います。",
    popupClosed: "Googleログインがキャンセルされました。",
    unauthorizedDomain: "Firebase Authenticationの承認済みドメイン設定を確認してください。",
    loginFailed: "ログインに失敗しました。Firebaseのログイン方法設定を確認してください。"
  },
  en: {
    authAria: "Sign-in screen",
    title: "Sign in",
    intro: "Continue with email, password, or your Google account to enter your Java learning workspace.",
    email: "Email address",
    password: "Password",
    signIn: "Sign in with email",
    create: "Create account",
    google: "Continue with Google",
    invalidEmail: "Please check the email address format.",
    missingPassword: "Please enter your password.",
    weakPassword: "Use a password with at least 6 characters.",
    emailInUse: "This email address is already registered. Try signing in instead.",
    invalidCredential: "The email address or password is incorrect.",
    popupClosed: "Google sign-in was canceled.",
    unauthorizedDomain: "Please check the authorized domains in Firebase Authentication.",
    loginFailed: "Sign-in failed. Please check the Firebase sign-in method settings."
  }
};

function authT(key) {
  return authCopy[currentLanguage]?.[key] || authCopy.ja[key] || key;
}

function ensureAuthLanguageSwitch() {
  if (!authForm || authForm.querySelector("[data-auth-language-switch]")) return;

  const switcher = document.createElement("div");
  switcher.className = "auth-language-switch";
  switcher.setAttribute("data-auth-language-switch", "");
  switcher.setAttribute("aria-label", "Language");
  switcher.innerHTML = `
    <button type="button" data-lang-choice="ja">日本語</button>
    <button type="button" data-lang-choice="en">English</button>
  `;

  authForm.insertBefore(switcher, authForm.firstElementChild);
}

function setGoogleButtonText() {
  if (!googleLoginButton) return;
  googleLoginButton.textContent = "";
  const mark = document.createElement("span");
  mark.textContent = "G";
  googleLoginButton.append(mark, document.createTextNode(authT("google")));
}

function applyAuthLanguage() {
  document.documentElement.lang = currentLanguage === "en" ? "en" : "ja";

  if (authScreen) {
    authScreen.setAttribute("aria-label", authT("authAria"));
  }

  const title = authScreen?.querySelector(".auth-brand h1");
  const intro = authScreen?.querySelector(".auth-brand p:last-child");
  const labels = authForm?.querySelectorAll("label > span");
  const signInButton = authForm?.querySelector(".auth-submit");
  const createButton = authForm?.querySelector(".auth-create");

  if (title) title.textContent = authT("title");
  if (intro) intro.textContent = authT("intro");
  if (labels?.[0]) labels[0].textContent = authT("email");
  if (labels?.[1]) labels[1].textContent = authT("password");
  if (signInButton) signInButton.textContent = authT("signIn");
  if (createButton) createButton.textContent = authT("create");
  setGoogleButtonText();

  authForm?.querySelectorAll("[data-lang-choice]").forEach((button) => {
    const active = button.dataset.langChoice === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "ja";
  try {
    localStorage.setItem(languageKey, currentLanguage);
  } catch {}
  applyAuthLanguage();
  window.dispatchEvent(new CustomEvent("java-practice-language-changed", {
    detail: { language: currentLanguage }
  }));
}

function getCheckoutReturnUrl(path) {
  const currentPath = window.location.pathname;
  const directory = currentPath.endsWith("/")
    ? currentPath
    : currentPath.slice(0, currentPath.lastIndexOf("/") + 1);
  return `${window.location.origin}${directory}${path}`;
}

function checkoutErrorMessage(errorCode) {
  if (errorCode.includes("stripe-secret-key-missing")) {
    return "Stripe秘密鍵がFunctions側に設定されていません。STRIPE_SECRET_KEYを設定してください。";
  }
  if (errorCode.includes("stripe-secret-key-invalid-prefix")) {
    return "Stripe秘密鍵の形式が違います。pk_liveではなく、sk_liveで始まる秘密鍵を設定してください。";
  }
  if (errorCode.includes("stripe-secret-key-rejected")) {
    return "Stripe秘密鍵がStripeに拒否されました。ライブ環境のsk_liveキーが正しいか確認してください。";
  }
  if (errorCode.includes("stripe-price-not-found")) {
    return "StripeのPrice IDが見つかりません。秘密鍵とPrice IDが同じライブ環境のものか確認してください。";
  }
  if (errorCode.includes("monthly-price-missing")) {
    return "月額プランのPrice IDがFunctions側に設定されていません。";
  }
  if (errorCode.includes("monthly-price-not-recurring")) {
    return "月額プランのPrice IDが単発決済用になっています。Stripeでrecurringの月額Priceを作成し、そのPrice IDをFunctions側に設定してください。";
  }
  if (errorCode.includes("monthly-price-inactive")) {
    return "月額プランのPriceがStripe側で無効です。StripeでPriceが有効か確認してください。";
  }
  if (errorCode.includes("support-price-is-recurring")) {
    return "支援用のPrice IDが月額課金用になっています。単発支援にはone-timeのPrice IDを設定してください。";
  }
  if (errorCode.includes("support-price-inactive")) {
    return "支援用のPriceがStripe側で無効です。StripeでPriceが有効か確認してください。";
  }
  if (errorCode.includes("support-price-missing")) {
    return "支援用のPrice IDがFunctions側に設定されていません。";
  }
  if (errorCode.includes("Failed to fetch")) {
    return "Checkout用のFirebase Functionsに接続できません。ページを再読み込みして、もう一度試してください。";
  }
  return "Checkout画面を作成できませんでした。Firebase Functionsの設定を確認してください。";
}

async function startStripeCheckout(plan) {
  const user = auth.currentUser;
  const cleanPlan = plan === "support" ? "support" : "monthly";

  if (!user) {
    window.dispatchEvent(new CustomEvent("java-practice-checkout-error", {
      detail: { message: "ログイン後に決済へ進めます。" }
    }));
    return;
  }

  try {
    const idToken = await user.getIdToken();
    const response = await fetch(window.JAVA_PRACTICE_CHECKOUT_ENDPOINT || checkoutFunctionUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${idToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        plan: cleanPlan,
        mode: cleanPlan === "monthly" ? "subscription" : "payment",
        successUrl: getCheckoutReturnUrl("success/"),
        cancelUrl: getCheckoutReturnUrl("cancel/")
      })
    });

    if (!response.ok) {
      let errorCode = "checkout-request-failed";
      try {
        const errorData = await response.json();
        errorCode = errorData?.error || errorCode;
      } catch {}
      throw new Error(errorCode);
    }

    const data = await response.json();
    if (!data?.url) {
      throw new Error("checkout-url-missing");
    }

    window.dispatchEvent(new CustomEvent("java-practice-checkout-redirecting", {
      detail: { plan: cleanPlan }
    }));
    window.location.assign(data.url);
  } catch (error) {
    const errorCode = error?.message || "";
    const message = checkoutErrorMessage(errorCode);

    window.dispatchEvent(new CustomEvent("java-practice-checkout-error", {
      detail: { message }
    }));
  }
}

function setMessage(message) {
  authMessage.textContent = message;
}

function friendlyError(error) {
  const code = error?.code || "";

  if (code.includes("invalid-email")) return authT("invalidEmail");
  if (code.includes("missing-password")) return authT("missingPassword");
  if (code.includes("weak-password")) return authT("weakPassword");
  if (code.includes("email-already-in-use")) return authT("emailInUse");
  if (code.includes("invalid-credential") || code.includes("wrong-password") || code.includes("user-not-found")) {
    return authT("invalidCredential");
  }
  if (code.includes("popup-closed-by-user")) return authT("popupClosed");
  if (code.includes("unauthorized-domain")) return authT("unauthorizedDomain");

  return authT("loginFailed");
}

function setLoading(isLoading) {
  authForm.querySelectorAll("button, input").forEach((element) => {
    element.disabled = isLoading;
  });
}

function getPublicName(user) {
  try {
    if (localStorage.getItem(profileScopeKey) !== user?.uid) return getAuthBaseName(user);
    return localStorage.getItem(profileDisplayNameKey)?.trim() || getAuthBaseName(user);
  } catch {
    return getAuthBaseName(user);
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
    if (localStorage.getItem(profileScopeKey) !== auth.currentUser?.uid) return getAvatarLetter(displayName);
    return localStorage.getItem(profileAvatarKey) || getAvatarLetter(displayName);
  } catch {
    return getAvatarLetter(displayName);
  }
}

function clearLocalProfileCache() {
  try {
    localStorage.removeItem(profileNameKey);
    localStorage.removeItem(profileDisplayNameKey);
    localStorage.removeItem(profileAvatarKey);
    localStorage.removeItem(profileScopeKey);
  } catch {}
}

function getTrustedProgressDisplay(data = {}, uid = "") {
  const trusted = data.progressSchemaVersion === progressSchemaVersion && data.progressOwnerUid === uid;
  return {
    totalCleared: trusted ? (data.totalCleared ?? "未取得") : "未取得",
    lessonsCleared: trusted ? (data.lessonsCleared ?? "未取得") : "未取得"
  };
}

function dispatchTraceUsers(users) {
  window.dispatchEvent(new CustomEvent("java-practice-trace-users", {
    detail: { users }
  }));
}

function serializeTraceUser(docSnap) {
  const data = docSnap.data();
  const progressDisplay = getTrustedProgressDisplay(data, docSnap.id);
  return {
    uid: docSnap.id,
    userName: data.userName || "@Learner",
    displayName: data.displayName || "Learner",
    avatar: data.avatar || getAvatarLetter(data.displayName),
    role: "Learner",
    status: data.status || "学習履歴なし",
    lastActive: data.lastActiveAt?.toDate?.()?.toISOString() || null,
    online: Boolean(data.online),
    ...progressDisplay
  };
}

function serializeRegisteredUser(docSnap) {
  const data = docSnap.data();
  const displayName = data.displayName || publicNameFromEmail(data.email);
  const progressDisplay = getTrustedProgressDisplay(data, docSnap.id);

  return {
    uid: docSnap.id,
    userName: data.userName || `@${String(displayName).replace(/\s+/g, "") || "Learner"}`,
    displayName,
    avatar: data.avatar || getAvatarLetter(displayName),
    role: "Learner",
    status: data.status || "学習履歴なし",
    lastActive: data.lastSeenAt?.toDate?.()?.toISOString() || data.lastLoginAt?.toDate?.()?.toISOString() || null,
    online: Boolean(data.online),
    ...progressDisplay
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

function dispatchRoomMessages(messages) {
  window.dispatchEvent(new CustomEvent("java-practice-room-messages", {
    detail: { messages }
  }));
}

function dispatchRoomTypingUsers(users) {
  window.dispatchEvent(new CustomEvent("java-practice-room-typing-users", {
    detail: { users }
  }));
}

function serializeRoomMessage(docSnap) {
  const data = docSnap.data();
  const displayName = data.userName || "Learner";

  return {
    id: docSnap.id,
    userId: data.userId || "",
    userName: displayName,
    userAvatar: data.userAvatar || getAvatarLetter(displayName),
    text: data.text || "",
    createdAt: data.createdAt?.toDate?.()?.toISOString() || null,
    mentor: Boolean(data.mentor)
  };
}

function serializeTypingUser(docSnap) {
  const data = docSnap.data();
  return {
    uid: docSnap.id,
    userName: data.userName || "Learner",
    userAvatar: data.userAvatar || getAvatarLetter(data.userName),
    updatedAt: data.updatedAt?.toDate?.()?.getTime?.() || 0,
    isTyping: Boolean(data.isTyping)
  };
}

function dispatchLoadedProgress(progress) {
  window.dispatchEvent(new CustomEvent("java-practice-progress-loaded", {
    detail: progress
  }));
}

function resetAccountProgressState() {
  latestProgress = {
    totalCleared: 0,
    lessonsCleared: "0/9"
  };
  latestCompletedByLesson = {};
  hasExactProgressSnapshot = false;
  isApplyingRemoteProgress = false;
}

function normalizeProgressItem(item) {
  if (typeof item === "number" || /^\d+$/.test(String(item))) {
    return `beginner:${item}`;
  }
  return String(item);
}

function mergeCompletedByLesson(base = {}, incoming = {}) {
  const merged = { ...base };
  Object.entries(incoming || {}).forEach(([lessonId, items]) => {
    if (!Array.isArray(items)) return;
    merged[lessonId] = [...new Set([
      ...(merged[lessonId] || []).map(normalizeProgressItem),
      ...items.map(normalizeProgressItem)
    ])];
  });
  return merged;
}

function countCompletedItems(completedByLesson = {}) {
  return Object.values(completedByLesson).reduce((total, items) => {
    return total + (Array.isArray(items) ? new Set(items.map(normalizeProgressItem)).size : 0);
  }, 0);
}

function completedLessonCountLabel(label) {
  const matched = String(label || "").match(/^(\d+)/);
  return matched ? Number(matched[1]) : 0;
}

function chooseLessonsClearedLabel(currentLabel, incomingLabel) {
  return completedLessonCountLabel(incomingLabel) > completedLessonCountLabel(currentLabel)
    ? incomingLabel
    : currentLabel;
}

function normalizeProgressData(data = {}) {
  return {
    totalCleared: data.totalCleared ?? 0,
    lessonsCleared: data.lessonsCleared || latestProgress.lessonsCleared,
    completedByLesson: data.completedByLesson || {}
  };
}

function isTrustedProgressData(data = {}, user) {
  return Boolean(
    user?.uid
    && data.progressSchemaVersion === progressSchemaVersion
    && data.progressOwnerUid === user.uid
  );
}

async function loadAccountProgress(user) {
  if (!user) return null;

  hasExactProgressSnapshot = false;
  latestCompletedByLesson = {};

  try {
    const progressSnap = await getDoc(doc(db, "javaPracticeProgress", user.uid));
    if (progressSnap.exists()) {
      const data = progressSnap.data();
      if (!isTrustedProgressData(data, user)) return null;
      hasExactProgressSnapshot = true;
      const progress = normalizeProgressData(data);
      latestCompletedByLesson = progress.completedByLesson;
      latestProgress = {
        totalCleared: progress.totalCleared,
        lessonsCleared: progress.lessonsCleared
      };
      return {
        uid: user.uid,
        ...latestProgress,
        completedByLesson: latestCompletedByLesson
      };
    }
  } catch {}

  try {
    const userSnap = await getDoc(doc(db, "javaPracticeUsers", user.uid));
    if (userSnap.exists()) {
      const data = userSnap.data();
      if (!isTrustedProgressData(data, user)) return null;
      if (data.completedByLesson) {
        hasExactProgressSnapshot = true;
        latestCompletedByLesson = data.completedByLesson || {};
      }
      const progress = normalizeProgressData(data);
      latestProgress = {
        totalCleared: progress.totalCleared,
        lessonsCleared: progress.lessonsCleared
      };
      return {
        uid: user.uid,
        ...latestProgress,
        completedByLesson: latestCompletedByLesson
      };
    }
  } catch {}

  return null;
}

async function saveAccountProgress(user, progress, completedByLesson) {
  if (!user) return;

  let mergedCompletedByLesson = completedByLesson || {};
  let mergedProgress = { ...progress };

  try {
    const userSnap = await getDoc(doc(db, "javaPracticeUsers", user.uid));
    if (userSnap.exists()) {
      const existingData = userSnap.data();
      if (isTrustedProgressData(existingData, user)) {
        const existing = normalizeProgressData(existingData);
        mergedCompletedByLesson = mergeCompletedByLesson(existing.completedByLesson, mergedCompletedByLesson);
        mergedProgress = {
          totalCleared: Math.max(
            Number(progress.totalCleared || 0),
            Number(existing.totalCleared || 0),
            countCompletedItems(mergedCompletedByLesson)
          ),
          lessonsCleared: chooseLessonsClearedLabel(existing.lessonsCleared, progress.lessonsCleared)
        };
      }
    }
  } catch {}

  try {
    await setDoc(doc(db, "javaPracticeProgress", user.uid), {
      ...mergedProgress,
      completedByLesson: mergedCompletedByLesson,
      progressSchemaVersion,
      progressOwnerUid: user.uid,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch {}

  try {
    await setDoc(doc(db, "javaPracticeUsers", user.uid), {
      ...mergedProgress,
      completedByLesson: mergedCompletedByLesson,
      progressSchemaVersion,
      progressOwnerUid: user.uid,
      progressUpdatedAt: serverTimestamp()
    }, { merge: true });
  } catch {}

  latestProgress = mergedProgress;
  latestCompletedByLesson = mergedCompletedByLesson;
}

function stopAccountProgressSubscription() {
  if (!unsubscribeAccountProgress) return;
  unsubscribeAccountProgress();
  unsubscribeAccountProgress = null;
}

function startAccountProgressSubscription(user) {
  stopAccountProgressSubscription();
  if (!user) return;

  try {
    unsubscribeAccountProgress = onSnapshot(doc(db, "javaPracticeUsers", user.uid), (docSnap) => {
      if (!docSnap.exists()) return;

      const data = docSnap.data();
      if (!data.completedByLesson && data.totalCleared == null) return;
      if (!isTrustedProgressData(data, user)) {
        resetAccountProgressState();
        dispatchLoadedProgress({
          uid: user.uid,
          ...latestProgress,
          completedByLesson: latestCompletedByLesson
        });
        return;
      }

      const progress = normalizeProgressData(data);
      hasExactProgressSnapshot = Boolean(data.completedByLesson);
      latestCompletedByLesson = progress.completedByLesson;
      latestProgress = {
        totalCleared: progress.totalCleared,
        lessonsCleared: progress.lessonsCleared
      };

      isApplyingRemoteProgress = true;
      dispatchLoadedProgress({
        uid: user.uid,
        ...latestProgress,
        completedByLesson: latestCompletedByLesson
      });
      window.setTimeout(() => {
        isApplyingRemoteProgress = false;
      }, 0);
    });
  } catch {}
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
        orderBy("lastSeenAt", "desc"),
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

function stopRoomMessageSubscription() {
  if (!unsubscribeRoomMessages) return;
  unsubscribeRoomMessages();
  unsubscribeRoomMessages = null;
}

function stopRoomTypingSubscription() {
  if (!unsubscribeRoomTyping) return;
  unsubscribeRoomTyping();
  unsubscribeRoomTyping = null;
}

function stopBillingStatusSubscription() {
  if (!unsubscribeBillingStatus) return;
  unsubscribeBillingStatus();
  unsubscribeBillingStatus = null;
}

function startBillingStatusSubscription(user) {
  stopBillingStatusSubscription();
  if (!user) return;

  try {
    unsubscribeBillingStatus = onSnapshot(doc(db, "billingStatus", user.uid), (docSnap) => {
      window.dispatchEvent(new CustomEvent("java-practice-billing-status", {
        detail: docSnap.exists() ? docSnap.data() : { status: "none" }
      }));
    }, () => {
      window.dispatchEvent(new CustomEvent("java-practice-billing-status", {
        detail: { status: "unavailable" }
      }));
    });
  } catch {
    window.dispatchEvent(new CustomEvent("java-practice-billing-status", {
      detail: { status: "unavailable" }
    }));
  }
}

function startRoomMessageSubscription() {
  if (!hasRoomChat) return;
  if (unsubscribeRoomMessages) return;

  try {
    const roomMessagesQuery = query(
      collection(db, "roomMessages"),
      orderBy("createdAt", "asc"),
      limitToLast(50)
    );

    unsubscribeRoomMessages = onSnapshot(roomMessagesQuery, (snapshot) => {
      dispatchRoomMessages(snapshot.docs.map(serializeRoomMessage));
    }, () => {
      dispatchRoomMessages([]);
    });
  } catch {
    dispatchRoomMessages([]);
  }
}

function startRoomTypingSubscription() {
  if (!hasRoomChat) return;
  if (unsubscribeRoomTyping) return;

  try {
    const typingQuery = query(
      collection(db, "roomTyping"),
      orderBy("updatedAt", "desc"),
      limit(12)
    );

    unsubscribeRoomTyping = onSnapshot(typingQuery, (snapshot) => {
      const now = Date.now();
      const users = snapshot.docs
        .map(serializeTypingUser)
        .filter((user) => {
          return user.isTyping
            && user.uid !== auth.currentUser?.uid
            && now - user.updatedAt < 8000;
        });
      dispatchRoomTypingUsers(users);
    }, () => {
      dispatchRoomTypingUsers([]);
    });
  } catch {
    dispatchRoomTypingUsers([]);
  }
}

async function updateRoomTyping(isTyping) {
  const user = auth.currentUser;
  if (!hasRoomChat || !user) return;

  const displayName = getPublicName(user);
  const avatar = getPublicAvatar(displayName);

  if (roomTypingTimer) {
    clearTimeout(roomTypingTimer);
    roomTypingTimer = null;
  }

  try {
    await setDoc(doc(db, "roomTyping", user.uid), {
      userName: displayName,
      userAvatar: avatar,
      isTyping: Boolean(isTyping),
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch {}

  if (isTyping) {
    roomTypingTimer = setTimeout(() => {
      updateRoomTyping(false);
    }, 2800);
  }
}

async function postRoomMessage(text) {
  const user = auth.currentUser;
  const cleanText = String(text || "").trim().slice(0, 200);

  if (!user || !cleanText) {
    window.dispatchEvent(new CustomEvent("java-practice-room-message-error", {
      detail: { message: !user ? "ログイン後に投稿できます。" : "空のコメントは投稿できません。" }
    }));
    return;
  }

  const displayName = getPublicName(user);
  const avatar = getPublicAvatar(displayName);

  try {
    await addDoc(collection(db, "roomMessages"), {
      userId: user.uid,
      userName: displayName,
      userAvatar: avatar,
      text: cleanText,
      createdAt: serverTimestamp()
    });
    updateRoomTyping(false);
    window.dispatchEvent(new CustomEvent("java-practice-room-message-sent"));
  } catch {
    window.dispatchEvent(new CustomEvent("java-practice-room-message-error", {
      detail: { message: "投稿に失敗しました。通信状態やFirestoreルールを確認してください。" }
    }));
  }
}

async function deleteRoomMessage(messageId) {
  const user = auth.currentUser;
  const cleanId = String(messageId || "").trim();

  if (!user || !cleanId) {
    window.dispatchEvent(new CustomEvent("java-practice-room-message-error", {
      detail: {
        messageId: cleanId,
        message: !user ? "ログイン後に削除できます。" : "削除対象のコメントを確認できません。"
      }
    }));
    return;
  }

  try {
    await deleteDoc(doc(db, "roomMessages", cleanId));
    window.dispatchEvent(new CustomEvent("java-practice-room-message-deleted", {
      detail: { messageId: cleanId }
    }));
  } catch {
    window.dispatchEvent(new CustomEvent("java-practice-room-message-error", {
      detail: {
        messageId: cleanId,
        message: "削除に失敗しました。Firestoreルールで本人のみ削除が許可されているか確認してください。"
      }
    }));
  }
}

function startTraceHeartbeat(user) {
  if (traceHeartbeatTimer) {
    clearInterval(traceHeartbeatTimer);
  }

  traceHeartbeatTimer = setInterval(() => {
    if (!auth.currentUser || document.visibilityState !== "visible") return;

    saveTracePresence(user, {
      status: latestLearningStatus,
      online: true
    });
    saveRegisteredUser(user, {
      status: latestLearningStatus,
      online: true,
      lastSeenAt: serverTimestamp()
    });
  }, 30000);
}

function stopTraceHeartbeat() {
  if (!traceHeartbeatTimer) return;
  clearInterval(traceHeartbeatTimer);
  traceHeartbeatTimer = null;
}

async function saveRegisteredUser(user, overrides = {}) {
  if (!user) return;

  const displayName = getPublicName(user);
  const avatar = getPublicAvatar(displayName);

  try {
    await setDoc(doc(db, "javaPracticeUsers", user.uid), {
      profileOwnerUid: user.uid,
      userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
      displayName,
      avatar,
      email: user.email || "",
      role: "Learner",
      status: latestLearningStatus,
      online: true,
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
      profileOwnerUid: user.uid,
      userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
      displayName,
      avatar,
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
  if (auth.currentUser) {
    saveRegisteredUser(auth.currentUser, {
      status: latestLearningStatus,
      online: true,
      lastSeenAt: serverTimestamp()
    });
  }
});

window.addEventListener("java-practice-progress-updated", (event) => {
  if (isApplyingRemoteProgress) return;
  const eventUid = event.detail?.uid || "local";
  if (auth.currentUser && eventUid !== auth.currentUser.uid) return;
  if (!auth.currentUser && eventUid !== "local") return;

  const incomingCompletedByLesson = event.detail?.completedByLesson || {};
  latestCompletedByLesson = mergeCompletedByLesson(latestCompletedByLesson, incomingCompletedByLesson);
  latestProgress = {
    totalCleared: Math.max(
      Number(event.detail?.totalCleared || 0),
      Number(latestProgress.totalCleared || 0),
      countCompletedItems(latestCompletedByLesson)
    ),
    lessonsCleared: chooseLessonsClearedLabel(latestProgress.lessonsCleared, event.detail?.lessonsCleared)
  };
  hasExactProgressSnapshot = true;

  updateTracePresence({
    ...latestProgress,
    progressSchemaVersion,
    progressOwnerUid: auth.currentUser?.uid || eventUid,
    status: latestLearningStatus,
    online: true
  });

  if (auth.currentUser) {
    saveAccountProgress(auth.currentUser, latestProgress, latestCompletedByLesson);
    saveRegisteredUser(auth.currentUser, {
      ...latestProgress,
      progressSchemaVersion,
      progressOwnerUid: auth.currentUser.uid,
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
    profileOwnerUid: user.uid,
    userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
    displayName,
    avatar,
    online: true,
    status: latestLearningStatus
  });
  await saveRegisteredUser(user, {
    profileOwnerUid: user.uid,
    userName: `@${displayName.replace(/\s+/g, "") || "Learner"}`,
    displayName,
    avatar,
    online: true,
    status: latestLearningStatus,
    profileSetupCompleted: Boolean(event.detail?.profileSetupCompleted),
    lastSeenAt: serverTimestamp()
  });
});

window.addEventListener("java-practice-room-message-submit", (event) => {
  postRoomMessage(event.detail?.text);
});

window.addEventListener("java-practice-room-message-delete", (event) => {
  deleteRoomMessage(event.detail?.messageId);
});

window.addEventListener("java-practice-room-typing", (event) => {
  updateRoomTyping(Boolean(event.detail?.isTyping));
});

window.addEventListener("java-practice-checkout-requested", (event) => {
  startStripeCheckout(event.detail?.plan);
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

ensureAuthLanguageSwitch();
applyAuthLanguage();

authForm?.querySelectorAll("[data-lang-choice]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langChoice));
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
    status: latestLearningStatus
  });
  await updateRoomTyping(false);
  if (auth.currentUser) {
    await saveRegisteredUser(auth.currentUser, {
      online: false,
      status: latestLearningStatus,
      lastSeenAt: serverTimestamp()
    });
  }
  await signOut(auth);
});

onAuthStateChanged(auth, async (user) => {
  const signedIn = Boolean(user);
  let profileSetupCompleted = false;
  let needsProfileSetup = false;
  try {
    if (signedIn) {
      if (activeAccountUid !== user.uid) {
        activeAccountUid = user.uid;
        resetAccountProgressState();
        clearLocalProfileCache();
      }
      let remoteProfile = null;
      try {
        const profileSnap = await getDoc(doc(db, "javaPracticeUsers", user.uid));
        remoteProfile = profileSnap.exists() ? profileSnap.data() : null;
      } catch {}

      const trustedRemoteProfile = remoteProfile?.profileOwnerUid === user.uid;
      profileSetupCompleted = Boolean((trustedRemoteProfile && remoteProfile?.profileSetupCompleted) || hasLocalProfileSetup(user.uid));
      const userName = profileSetupCompleted && trustedRemoteProfile
        ? (remoteProfile?.displayName || getAuthBaseName(user))
        : getAuthBaseName(user);
      const avatar = profileSetupCompleted && trustedRemoteProfile
        ? (remoteProfile?.avatar || getAvatarLetter(userName))
        : getAvatarLetter(userName);
      needsProfileSetup = !profileSetupCompleted;

      localStorage.setItem("java-output-practice-auth", "signed-in");
      localStorage.setItem("java-output-practice-auth-scope", user.uid);
      localStorage.setItem(profileScopeKey, user.uid);
      localStorage.setItem(profileNameKey, userName);
      localStorage.setItem(profileDisplayNameKey, userName);
      localStorage.setItem(profileAvatarKey, avatar);
      if (profileSetupCompleted) {
        localStorage.setItem(getScopedProfileSetupKey(user.uid), "true");
      }
    } else {
      activeAccountUid = null;
      localStorage.removeItem("java-output-practice-auth");
      localStorage.removeItem("java-output-practice-auth-scope");
      localStorage.removeItem(profileNameKey);
      localStorage.removeItem(profileDisplayNameKey);
      localStorage.removeItem(profileAvatarKey);
      localStorage.removeItem(profileScopeKey);
      tracePresenceRef = null;
      tracePresenceUsers = [];
      registeredTraceUsers = [];
      resetAccountProgressState();
      stopAccountProgressSubscription();
      stopRoomMessageSubscription();
      stopRoomTypingSubscription();
      stopBillingStatusSubscription();
      updateRoomTyping(false);
      stopTraceHeartbeat();
      dispatchMergedTraceUsers();
      dispatchRoomMessages([]);
      dispatchRoomTypingUsers([]);
    }
  } catch {}

  if (signedIn) {
    const loadedProgress = await loadAccountProgress(user);
    if (loadedProgress) {
      dispatchLoadedProgress(loadedProgress);
    }
    startAccountProgressSubscription(user);
    saveRegisteredUser(user);
    saveTracePresence(user);
    startTraceHeartbeat(user);
    startTraceRoomSubscription();
    startRoomMessageSubscription();
    startRoomTypingSubscription();
    startBillingStatusSubscription(user);
  }

  window.dispatchEvent(new CustomEvent("java-practice-auth-ready", {
    detail: {
      uid: signedIn ? user.uid : "local",
      name: signedIn ? getPublicName(user) : "User",
      displayName: signedIn ? getPublicName(user) : "User",
      avatar: signedIn ? getPublicAvatar(getPublicName(user)) : "U",
      needsProfileSetup,
      profileSetupCompleted
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
