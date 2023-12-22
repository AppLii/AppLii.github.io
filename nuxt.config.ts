// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // baseURL: process.env.ENV_BUILD !== "production" ? "/pages/" : "/",
    head: {
      link: [{ rel: "icon", type: "image/png", href: process.env.ENV_BUILD !== "production" ? "/pages/favicon.png" : "/favicon.png" }],
    },
  },
});
