# Java 繰り返し処理 穴埋め演習

GitHub Pagesで公開できる静的教材サイトです。

## 公開するファイル

- `index.html`
- `styles.css`
- `app.js`

## GitHub Pagesでの公開

1. このフォルダのファイルをGitHubリポジトリに置く
2. GitHubの `Settings` → `Pages` を開く
3. `Deploy from a branch` を選ぶ
4. `main` ブランチの `/root` を指定する
5. 表示されたURLを開く

## Stripe Checkout

課金導線はフロントにStripe秘密鍵を置かず、Firebase FunctionsでCheckout Sessionを作成する前提です。
Functions側の設計メモは `docs/stripe-checkout-functions.md` を参照してください。
