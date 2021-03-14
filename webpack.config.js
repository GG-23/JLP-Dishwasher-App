const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 8000,
    publicPath: "http://localhost:8000/dist/",
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/search': {
        target: 'https://api.johnlewis.com',
        changeOrigin: true
      },
      '/mobile-apps': {
        target: 'https://api.johnlewis.com',
        changeOrigin: true
      },
    }
  }
};