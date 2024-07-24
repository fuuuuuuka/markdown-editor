const path = require('path')

module.exports = {
  entry: './src/index.tsx', //最初に読み込むファイルを指定する
   module: {
     rules: [ //webpack に対してビルド時に追加で行う処理
       {
        test: /\.tsx?$/,
         use: 'ts-loader',
         exclude: /node_modules/, //除外するファイルを正規表現で指定
       },
     ],
   },
   resolve: {
    extensions: ['.js', '.ts', '.tsx'],
   },

  output: { //出力するファイルの設定
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}
