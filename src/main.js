import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import 'animate.css';
// import wow from 'wowjs'
// import { KinesisContainer, KinesisElement} from 'vue-kinesis'
Vue.use(ElementUI)
// Vue.use(VueKinesis)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
