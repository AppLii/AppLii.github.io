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
};
