import path from 'path';

const { VueLoaderPlugin } = require('vue-loader');


const prev = __dirname + '/_preview'
const dist = __dirname + '/htdocs';
const glob = require('glob');

const srcDir = "./_develop"
const entries = {}
const outPath = path.join(__dirname + '_preview')

glob.sync("**/app.js", {
  ignore: '**/_*.js',
  cwd: srcDir
}).map(function (key) {
  entries[key] = path.resolve(srcDir, key);
});
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインのJS
  entry: entries,
  // 出力ファイル

  output: {
    filename: '[name]'
  },
  devtool: 'source-map',

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
        // options: {
        //   loaders: {
        //     scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
        //   }
        // }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
    // Other plugins...

  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']

  }
}