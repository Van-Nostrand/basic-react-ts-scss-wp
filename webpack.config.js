const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".sass"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body"
    })
  ]
}

if(!isProd){
  config.devServer = {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
  }
}

module.exports = config;