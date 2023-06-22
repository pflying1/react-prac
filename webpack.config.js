const path = require("path")

const clientConfig = {
  entry: "./develop/src/index.tsx",
  mode: "development",
  module: {
    rules : [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
    ],
  },
  resolve:{
    extensions:[".tsx",".ts","js"],
  },
  output:{
    filename: "main-bundle.js",
    path: path.resolve(__dirname,"dist"),
  }
}

module.exports = [clientConfig]