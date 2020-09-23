/**
 * webpackはjsをビルドするためだけに使用。
 * アウトプットは_task/babel.jsの方に記載されてる。
 * 今のところvueの使用を許可
 * @var srcDir === 開発ディレクトリを配列に入れて、回してる
 */

import path from 'path';
const { VueLoaderPlugin } = require('vue-loader');
const glob = require('glob');

const srcDir = "./src"
const entries = {}

glob.sync("**/*.js", {
  ignore: '**/_*.js',
  cwd: srcDir
}).map(function (key) {
  entries[key] = path.resolve(srcDir, key);
});
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',

  // メインのJS
  entry: entries,
  // 出力ファイル

  output: {
    filename: '[name]'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // 変更前は 'env'
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              // CSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: false,
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無
              sourceMap: false
            },
          },
          {
            loader: "import-glob-loader"
          },
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()

  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']

  }
}