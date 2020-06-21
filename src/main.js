import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMeta from "vue-meta";
import infiniteScroll from "vue-infinite-scroll";
import i18n from "@/plugins/i18n";
import FlagIcon from "vue-flag-icon";

import "./assets/styles/index.css";

Vue.use(FlagIcon);
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});
Vue.use(infiniteScroll);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");
