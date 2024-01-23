export default {
  devtools: { enabled: true },
  app: {
    baseURL: "/pages/",
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/pages/favicon.png" }],
    },
  },
  plugin: ["~/plugins/google-analytics.js"],
};
