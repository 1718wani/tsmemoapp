const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".tsx"],
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      url: require.resolve("url/"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      querystring: require.resolve("querystring-es3"),
      http: require.resolve("stream-http"),
      zlib: require.resolve("browserify-zlib"),
      assert: require.resolve("assert/"),
      async_hooks: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { targets: "defaults" }],
              ["@babel/preset-typescript", { targets: "defaults" }],
            ],
          },
        },
      },
    ],
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        
        exclude: /node_modules/,
      },
    ],
  },
};
