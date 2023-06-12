const path = require("path")

module.exports = {
    mode:""

    entry: './server/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".json", ".jsx",".tsx"],
    },
    
    module: {
      rules: [
        {
          test: /\.js|jsx|ts|tsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env', '@babel/preset-react' ,{ targets: "defaults" }]
                ]
            }
          }
        }
      ]
    }
  };