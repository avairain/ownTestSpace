const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'none',
  entry: {
    index: './src/index',
    login: './src/login',
    app: './src/app',
    page1: './src/page1'
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime', ['@babel/plugin-proposal-decorators', { 'legacy': true }]]
          }
        },
        exclude: /node_modules/,
        include: [path.join(__dirname, '/src/')],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
    }),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/page/index.html',
      chunks: ['index']
    }),
    new htmlWebpackPlugin({
      title: 'login',
      filename: 'login.html',
      template: './src/page/login.html',
      chunks: ['login']
    }),
    new htmlWebpackPlugin({
      title: 'app',
      filename: 'app.html',
      template: './src/page/app.html',
      chunks: ['app']
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    host: '0.0.0.0',
    hot: true,
    openPage: 'app.html'
  }
}
