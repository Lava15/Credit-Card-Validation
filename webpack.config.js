const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

mode = "development";
process.env.NODE_ENV === "production" ? (mode = "production") : "development";
module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/,
        type: "asset",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};
