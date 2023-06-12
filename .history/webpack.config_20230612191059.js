const path = require("path")

module.exports = {

    entry: './server/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, "dist")
    },
    resolve:{
        async_hooks: false,
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