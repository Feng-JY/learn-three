var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    index: ["./index.js"],
    ch01: ["./src/ch01/ch01.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "[name].js"  
  },
  devtool: "source-map"
};