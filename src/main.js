import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import toast from "@/components/common/toast";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

Vue.use(toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// axios.defaults.baseURL = "http://123.207.32.32:8000"
// axios.defaults.timeout = 500

// axios({
//   url:"/home/multidata",

// }).then(res=>{
//   console.log(res)
// })

// import {request} from "./network/request"

// request({
//   url:"/home/multidata"
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
