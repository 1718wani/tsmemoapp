const path = require("path")

module.exports = {

    entry: '.ser',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.js|jsx|ts|tsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };