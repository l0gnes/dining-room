import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router";
import App from "./App.vue";

import "./assets/scss/main.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin); // TODO(l0gnes): Consider switch to FontAwesome for their abundance of icons that relate better to this site

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
