export default {
  devtools: { enabled: true },
  app: {
    baseURL: "/pages/",
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/pages/favicon.png" }],
    },
  },
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    path: "/sitemap.xml",
    exclude: ["/404", "/500", "/robots.txt", "/sitemap.xml", "/template-page", "/theme-color"],
  },
};
