# 開発環境何度も作るのめんどくさい人向け
本プロジェクトは表題の通り時間の無いときに新規案件振られたりした人向けの開発環境です。

- 特に難しいことはしていません。
- webpackも`dev`と`prod`で分けているので、見通しがよいです。
- node v10〜　がはいっていれば誰でもつかえます。

### Developers meta
- Pug・SCSSをメタ言語として使用、JavaScriptはwebpackを使用しています。
- _develop配下に画像は置く必要はありません。_previewディレクトリで配置し呼び出してください。
- リポジトリの肥大化を防ぐめ、`_preview配下`の `HTML、CSS、JSなど` のソースコードはignoreとし、`当配下は画像` のみを管理します。
- 差分を抽出するために、納品ファイルにあたる`htdocs`配下はignoreしていません。
- src/distはwebpackを動作させるためだけに置いています。

## Usage

1. `npm install` or `yarn install` 
2. `npm start` or `yarn start`
3. `npm run deploy` of `yarn deploy`


## Author

[Migii](https://twitter.com/migii_1001)

## License

[MIT](http://b4b4r07.mit-license.org)