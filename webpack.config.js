const path = require("path");

module.exports = {
  entry: path.join(__dirname, "index.js"),
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 9000,
    overlay: true, // Show a black overlay if there are errors
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        /**
         * This is needed for loading .css files in our project
         * todo: currently this is injecting styles in head section we need
         * todo: a separate file for css
         */
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.worker\.(c|m)?js$/i,
        use: [
          {
            loader: "worker-loader",
          },
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
