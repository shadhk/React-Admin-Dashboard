const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = "development"
let target = "web"

if (process.env.NODE_ENV === "production") {
  mode = "production"
  target = "browserslist"
}

module.exports = {
  mode: mode,
  target: target,

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require.resolve("sass")
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: "only"
  }
}
