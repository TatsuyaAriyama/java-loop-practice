"use strict";

const admin = require("firebase-admin");
const functions = require("firebase-functions/v1");
const Stripe = require("stripe");

admin.initializeApp();

const db = admin.firestore();
const monthlyPriceId = process.env.STRIPE_MONTHLY_PRICE_ID
  || functions.config().stripe?.monthly_price_id
  || "price_1TYK62R04gxdDcT8Ok26saqS";
const supportPriceId = process.env.STRIPE_SUPPORT_PRICE_ID
  || functions.config().stripe?.support_price_id
  || "";
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
  || functions.config().stripe?.secret_key
  || "";
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  || functions.config().stripe?.webhook_secret
  || "";

const allowedOrigins = new Set([
  "https://tatsuyaariyama.github.io",
  "http://localhost:5000",
  "http://localhost:5173",
  "http://localhost:8080",
  "http://127.0.0.1:5000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:8080"
]);

function setCors(req, res) {
  const origin = req.get("origin") || "";
  if (origin === "null") {
    res.set("Access-Control-Allow-Origin", "*");
  } else if (allowedOrigins.has(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  } else {
    res.set("Access-Control-Allow-Origin", "https://tatsuyaariyama.github.io");
  }
  res.set("Vary", "Origin");
  res.set("Access-Control-Allow-Headers", "Authorization, Content-Type");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
}

function getStripe() {
  if (!stripeSecretKey) {
    throw new Error("stripe-secret-key-missing");
  }
  return new Stripe(stripeSecretKey, {
    apiVersion: "2024-12-18.acacia"
  });
}

function assertAllowedReturnUrl(value, fallbackPath) {
  const fallback = `https://tatsuyaariyama.github.io/java-loop-practice/${fallbackPath}`;

  try {
    const url = new URL(String(value || fallback));
    if (!allowedOrigins.has(url.origin)) return fallback;
    return url.toString();
  } catch {
    return fallback;
  }
}

function getBearerToken(req) {
  return String(req.get("authorization") || "").replace(/^Bearer\s+/i, "").trim();
}

function resolveCheckoutPlan(rawPlan) {
  const plan = rawPlan === "support" ? "support" : "monthly";
  const isMonthly = plan === "monthly";
  const price = isMonthly ? monthlyPriceId : supportPriceId;

  if (!price) {
    throw new Error(isMonthly ? "monthly-price-missing" : "support-price-missing");
  }

  return {
    plan,
    mode: isMonthly ? "subscription" : "payment",
    price
  };
}

exports.createStripeCheckoutSession = functions
  .runWith({ invoker: "public" })
  .region("us-central1")
  .https.onRequest(async (req, res) => {
    setCors(req, res);
    if (req.method === "OPTIONS") return res.status(204).send("");
    if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });

    try {
      const token = getBearerToken(req);
      if (!token) return res.status(401).json({ error: "auth-token-required" });

      const decoded = await admin.auth().verifyIdToken(token);
      const { plan, mode, price } = resolveCheckoutPlan(req.body?.plan);
      const successUrl = assertAllowedReturnUrl(req.body?.successUrl, "success/");
      const cancelUrl = assertAllowedReturnUrl(req.body?.cancelUrl, "cancel/");
      const stripe = getStripe();

      const session = await stripe.checkout.sessions.create({
        mode,
        payment_method_types: ["card"],
        line_items: [{ price, quantity: 1 }],
        success_url: successUrl,
        cancel_url: cancelUrl,
        client_reference_id: decoded.uid,
        customer_email: decoded.email || undefined,
        metadata: {
          firebaseUid: decoded.uid,
          plan
        },
        subscription_data: mode === "subscription"
          ? { metadata: { firebaseUid: decoded.uid, plan } }
          : undefined
      });

      await db.collection("billingCheckoutSessions").doc(session.id).set({
        uid: decoded.uid,
        plan,
        mode,
        status: "created",
        stripeSessionId: session.id,
        stripeCustomerId: session.customer || null,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

      return res.json({ url: session.url });
    } catch (error) {
      const message = error?.message || "checkout-session-failed";
      const status = message.includes("missing") ? 500 : 400;
      return res.status(status).json({ error: message });
    }
  });

exports.stripeWebhook = functions
  .runWith({ invoker: "public" })
  .region("us-central1")
  .https.onRequest(async (req, res) => {
    if (!stripeWebhookSecret) {
      return res.status(500).send("stripe-webhook-secret-missing");
    }

    let event;
    try {
      const stripe = getStripe();
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        req.get("stripe-signature"),
        stripeWebhookSecret
      );
    } catch (error) {
      return res.status(400).send("invalid-signature");
    }

    try {
      if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        const uid = session.metadata?.firebaseUid || session.client_reference_id;
        if (uid) {
          await db.collection("billingStatus").doc(uid).set({
            uid,
            plan: session.metadata?.plan || "monthly",
            status: session.mode === "subscription" ? "active" : "paid",
            stripeCustomerId: session.customer || null,
            stripeSubscriptionId: session.subscription || null,
            stripeSessionId: session.id,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
          }, { merge: true });

          await db.collection("billingCheckoutSessions").doc(session.id).set({
            status: "completed",
            completedAt: admin.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        }
      }

      if (
        event.type === "customer.subscription.updated"
        || event.type === "customer.subscription.deleted"
      ) {
        const subscription = event.data.object;
        const uid = subscription.metadata?.firebaseUid;
        if (uid) {
          await db.collection("billingStatus").doc(uid).set({
            uid,
            plan: subscription.metadata?.plan || "monthly",
            status: subscription.status,
            stripeCustomerId: subscription.customer || null,
            stripeSubscriptionId: subscription.id,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        }
      }

      return res.json({ received: true });
    } catch (error) {
      return res.status(500).send("webhook-handler-failed");
    }
  });
