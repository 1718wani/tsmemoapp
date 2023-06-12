const path = require("path")

module.exports = {

    entry: '/Users/mitaniikuya/tstodolist/server/index.js',
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