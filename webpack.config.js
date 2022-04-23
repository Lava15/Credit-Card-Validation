const miniCssExtract = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  plugins: [
    new miniCssExtract(),
    new HtmlWebpackPlugin({
      template: "/index.html",
      inject: "body",
    }),
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.scss$/i,
        use: [
          miniCssExtract.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // {
      //   test: /\.(gif|png|jpe?g)$/,
      //   type: "asset",
      // },
      // {
      //   test: /\.html$/,
      //   use: ["html-loader"],
      // },
      ,
    ],
  },

  devtool: "source-map",

  devServer: {
    static: "./dist",
  },
};
