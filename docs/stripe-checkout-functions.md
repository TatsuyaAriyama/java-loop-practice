# Stripe Checkout / Firebase Functions 設計メモ

このサイトでは、カード情報をフロントエンドで入力・保存しません。
フロントはログイン中ユーザーの Firebase ID トークンを Firebase Functions へ送り、Functions 側で Stripe Checkout Session を作成します。

## フロント側の責務

- `支援する`: 1回支払い想定、`plan: "support"`、`mode: "payment"`
- `月額プランに参加する`: サブスクリプション想定、`plan: "monthly"`、`mode: "subscription"`
- Firebase Auth の ID トークンを `Authorization: Bearer ...` で送る
- Stripe秘密鍵は一切持たない
- Functionsから返された `url` へ遷移する
- 成功時は `success/`、キャンセル時は `cancel/` に戻す

## Functions側で行うこと

1. `Authorization` ヘッダーの Firebase ID トークンを検証する
2. `plan` に応じて Stripe Price ID を選ぶ
3. Stripe Checkout Session を作成する
4. `client_reference_id` と `metadata.firebaseUid` に Firebase UID を入れる
5. Checkout作成履歴を Firestore に保存する
6. Webhookで `checkout.session.completed` や `customer.subscription.updated` を受け、Firestoreの決済状態を更新する

## 現在のPrice ID

月額プラン用のPrice IDは、Firebase Functions側で次の環境変数に設定してください。

```text
STRIPE_MONTHLY_PRICE_ID=price_1TYK62R04gxdDcT8Ok26saqS
```

`支援する` ボタンを1回払いとして使う場合は、Stripe Dashboardで別途1回払い用のPriceを作成し、次の環境変数へ設定します。

```text
STRIPE_SUPPORT_PRICE_ID=price_xxxxxxxxxxxxxxxxxxxxxxxx
```

Price ID自体は秘密鍵ではありませんが、料金の選択ロジックはFunctions側に置きます。フロントから任意のPrice IDを送らせないことで、想定外の価格へ差し替えられる余地を減らします。

## Firestore保存先の例

- `billingCheckoutSessions/{sessionId}`
- `billingStatus/{uid}`

`billingStatus/{uid}` には、たとえば以下を保存します。

```json
{
  "uid": "firebase uid",
  "plan": "monthly",
  "status": "active",
  "stripeCustomerId": "cus_xxx",
  "stripeSubscriptionId": "sub_xxx",
  "updatedAt": "serverTimestamp"
}
```

## デプロイ手順

このリポジトリには `functions/index.js` と `firebase.json` を追加済みです。

前提として、Firebase FunctionsをデプロイするにはFirebaseプロジェクトをBlazeプランへアップグレードする必要があります。Spark無料プランのままだと `artifactregistry.googleapis.com`、`cloudfunctions.googleapis.com`、`cloudbuild.googleapis.com` を有効化できず、Checkout用Functionsは公開できません。

```text
https://console.firebase.google.com/project/java-output-practice/usage/details
```

1. Stripe秘密鍵をFirebase Functionsに設定します。

```bash
firebase functions:config:set stripe.secret_key="sk_live_xxx"
```

2. 月額プランのPrice IDを設定します。

```bash
firebase functions:config:set stripe.monthly_price_id="price_1TYK62R04gxdDcT8Ok26saqS"
```

3. 1回払いの支援ボタンも使う場合は、別途Price IDを作って設定します。

```bash
firebase functions:config:set stripe.support_price_id="price_xxx"
```

4. Functionsをデプロイします。

```bash
firebase deploy --only functions
```

5. Stripe DashboardでWebhook送信先を追加します。

```text
https://us-central1-java-output-practice.cloudfunctions.net/stripeWebhook
```

Webhookの署名シークレットを設定します。

```bash
firebase functions:config:set stripe.webhook_secret="whsec_xxx"
firebase deploy --only functions
```

## Functions実装例

実運用では `STRIPE_SECRET_KEY`、`STRIPE_WEBHOOK_SECRET`、各Price IDをFirebase FunctionsのSecret Managerまたは環境変数で管理してください。このリポジトリのFunctionsは `functions.config().stripe` からも読み取れるようにしています。

```js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Stripe = require("stripe");

admin.initializeApp();
const db = admin.firestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.createStripeCheckoutSession = functions.https.onRequest(async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "https://tatsuyaariyama.github.io");
    res.set("Access-Control-Allow-Headers", "Authorization, Content-Type");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    if (req.method === "OPTIONS") return res.status(204).send("");
    if (req.method !== "POST") return res.status(405).json({ error: "method-not-allowed" });

    const token = (req.get("Authorization") || "").replace("Bearer ", "");
    const decoded = await admin.auth().verifyIdToken(token);
    const uid = decoded.uid;
    const { plan, mode, successUrl, cancelUrl } = req.body || {};

    const price = plan === "monthly"
      ? process.env.STRIPE_MONTHLY_PRICE_ID
      : process.env.STRIPE_SUPPORT_PRICE_ID;

    const session = await stripe.checkout.sessions.create({
      mode: mode === "subscription" ? "subscription" : "payment",
      line_items: [{ price, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      client_reference_id: uid,
      customer_email: decoded.email,
      metadata: { firebaseUid: uid, plan }
    });

    await db.collection("billingCheckoutSessions").doc(session.id).set({
      uid,
      plan,
      mode,
      status: "created",
      stripeSessionId: session.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: "checkout-session-failed" });
  }
});
```

Webhook側では、Stripe署名を必ず検証してから `billingStatus/{uid}` を更新してください。フロントから「支払い済み」を直接書き込ませないことが重要です。
