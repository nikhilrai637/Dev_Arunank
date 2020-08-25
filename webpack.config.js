const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require("@babel/polyfill");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ], 
  devServer: {
    historyApiFallback: true
  }
};   
