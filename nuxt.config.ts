export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: "/pages/",
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/pages/favicon.png" }],
    },
  },
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "KQ3ZSCDG3B",
      },
    ],
  ],
  buildModules: ["@nuxtjs/google-ana1lytics"],
  googleAnalytics: {
    id: "KQ3ZSCDG3B",
  },
});
