import toastcon from "@/components/common/toast/Toast";

const obj = {};

obj.install = function(Vue) {
  // console.log("hjkfh")
  const toastcontrustor = Vue.extend(toastcon);

  const toast = new toastcontrustor();

  toast.$mount(document.createElement("div"));

  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
};

export default obj;
