import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import AboutUs from "../views/AboutUs.vue";
import AboutCafeApp from "../views/AboutCafeApp.vue";
import ContactUs from "../views/Contact.vue";
import AboutDevelopment from "../views/AboutDevelopment.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: AboutUs,
    },
    {
      path: "/main",
      component: AboutUs,
    },
    {
      path: "/about-us",
      component: AboutUs,
    },
    {
      path: "/about-cafe-app",
      component: AboutCafeApp,
    },
    {
      path: "/contact",
      component: ContactUs,
    },
    {
      path: "/development",
      component: AboutDevelopment,
    },
  ],
});

export default router;
