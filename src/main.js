import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/reset.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import http from "@/api/config.js";
import "./mock";

Vue.use(ElementUI);
Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
