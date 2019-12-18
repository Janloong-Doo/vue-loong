import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosinterceptor from './assets/js/AxiosInterceptor';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import signMd5Utils from "./assets/js/signMd5Utils";


Vue.config.productionTip = false;
Vue.use(elementUI);

const mVue =new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
export default mVue;

