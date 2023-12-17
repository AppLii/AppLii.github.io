const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "dist",
  assetsDir: "./",
  publicPath: "./",
  devServer: {
    open: true,
    historyApiFallback: true,
  },
});
