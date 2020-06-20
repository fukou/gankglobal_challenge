import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cocktail",
    component: () => import("../views/Cocktail.vue"),
  },
  {
    path: "/recipe/:id",
    name: "DetailCocktail",
    props: true,
    component: () => import("../views/DetailCocktail.vue"),
  },
  {
    path: "/search/:id",
    name: "SearchCocktail",
    props: true,
    component: () => import("../views/SearchCocktail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.querySelector("body").scrollIntoView();
  },
});

export default router;
