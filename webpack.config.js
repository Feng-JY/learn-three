var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    index: ["./index.js"],
    ch01: ["./src/ch01/ch01.js"],
    'ch01-1': ["./src/ch01/ch01-1.js"],
    'ch01-2': ["./src/ch01/ch01-2.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "[name].js"
  },
  devtool: "source-map"
};