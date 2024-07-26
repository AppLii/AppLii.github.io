import TerserPlugin from "terser-webpack-plugin";

export default {
  devtools: { enabled: true },
  app: {
    baseURL: "/",
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://applii-wu.net",
    path: "/sitemap.xml",
    exclude: ["/404", "/500", "/robots.txt", "/sitemap.xml", "/template-page", "/theme-color"],
  },
  build: {
    // Babelの設定で不要なコードの削除を行う
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve("@nuxt/babel-preset-app"),
            {
              targets: isServer ? { node: "current" } : { browsers: ["last 2 versions"] },
            },
          ],
        ];
      },
      plugins: [
        // lodashのtree-shaking
        "lodash",
      ],
    },

    // 最適化オプションの設定
    optimization: {
      splitChunks: {
        layouts: true,
        pages: true,
        commons: true,
      },
      minimize: true, // Minimize the bundle using Terser
      minimizer: [
        // Terserの設定
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // コンソールログを削除
            },
          },
        }),
      ],
    },

    // PostCSSの設定
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: { preset: "default" },
      },
    },

    // Extend webpack config
    extend(config, { isDev, isClient }) {
      if (isClient && !isDev) {
        config.optimization.splitChunks.maxSize = 250000; // Split large chunks
      }
    },
  },
};
