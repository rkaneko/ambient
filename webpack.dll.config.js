const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    vendor: [
      "react",
      "react-dom"
    ]
  },
  output: {
    path: path.join(__dirname, "public", "static"),
    filename: "[name].dll.js",
    library: "[name]_library"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dll", "[name]-manifest.json"),
      name: "[name]_library"
    })
  ]
};
