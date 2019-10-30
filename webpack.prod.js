import path from 'path';
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',

  // メインのJS
  entry: './_develop/js/app.js',
  // 出力ファイル
  output: {
    filename: './htdocs/assets/js/app.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'] // 変更前は 'env'
            }
          }
        }  
    ]
  },
  plugins: [
    // Other plugins...
  ]
}
