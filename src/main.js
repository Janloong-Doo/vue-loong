import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from 'axios';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  // axios
}).$mount("#app");
