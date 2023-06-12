const path = require("path");

module.exports = {
  mode: "development",
  entry: "./server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".tsx"],
    fallback:{
        crypto : require.resolve("crypto-browserify"),
        "url": require.resolve("url/") 

    }
    
    
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
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
  },
};
