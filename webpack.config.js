const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer).BundleAnalyzerPlugin

module.exports = {
  entry: {
    'home': ['babel-polyfill', './src/home/index.js']
  },
  target: 'web',
  output: {
    filename: '[name].bundle.js', // name of bundle files
    path: path.resolve(__dirname, 'dist', 'home'),
    publicPath: '/home/' // URL context path to index.html page in dist 
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'] // allow omit of extensions when importing
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', MiniCssExtractPlugin.loader]
      },
      {
        test: /\.(png|svg|jpg|gif|ico|img)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|tff|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/shared/assets/favicon.ico',
      template: './src/home/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './[name].css'
    }),
    //new BundleAnalyzerPlugin()
  ]
}