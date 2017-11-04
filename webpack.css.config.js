const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    path.join(__dirname, "src", "css", "index.css")
  ],
  output: {
    filename: "bundle.js", // this is not used
    path: path.join(__dirname, "public", "static")
  },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, "src", "css")
        ],
        exclude: [
          /node_modules/
        ],
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              // options: {
              //   config: {
              //     path: path.join(__dirname, "webpack.css.config.js")
              //   }
              // }
            }
          ]
        })
      },
      {
        include: [
          path.resolve(__dirname, "src", "ttf")
        ],
        test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              mimetype: "application/octet-stream"
            }
          }
        ]
      }
    ] 
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "bundle.css",
      allChunks: true
    })
  ]
};
