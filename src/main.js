import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMeta from "vue-meta";
import infiniteScroll from "vue-infinite-scroll";

import "./assets/styles/index.css";

Vue.config.productionTip = false;

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

Vue.use(infiniteScroll);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
