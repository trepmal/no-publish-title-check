module.exports = {
  mode: "production",
  entry: "./assets/no-publish-title-check.js",
  output: {
    path: __dirname,
    filename: "assets/no-publish-title-check.build.js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
