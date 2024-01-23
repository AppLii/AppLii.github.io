export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Google Analytics script
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-KQ3ZSCDG3B");

    let script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-KQ3ZSCDG3B`;
    document.head.appendChild(script);
  }
});
