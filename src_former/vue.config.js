const { defineConfig } = require("@vue/cli-service");
const PrerenderSpaPlugin = require("prerender-spa-plugin");
const webpack = require("webpack");
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "dist",
  assetsDir: "./",
  publicPath: "./",
  devServer: {
    open: true,
    historyApiFallback: true,
  },
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: ["/", "/about-us", "/about-app", "/contact"],
        renderer: new Renderer({
          injectProperty: "__PRERENDER_INJECTED",
          inject: {
            prerendered: true,
          },
          renderAfterElementExists: "#app",
          renderAfterDocumentEvent: "app-mounted",
          renderAfterTime: 1000,
          maxConcurrentRoutes: 5,
          ignoreJSErrors: false,
          headless: false,
        }),
      }),
    ],
  },
});
