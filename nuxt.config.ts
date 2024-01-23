// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: "/pages/",
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/pages/favicon.png" }],
    },
  },
  module: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "KQ3ZSCDG3B",
      },
    ],
  ],
});
