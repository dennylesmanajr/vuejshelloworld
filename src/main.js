import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";

extend("min", {
  validate(val, args) {
  return val.length >= args.minlength;
  },
  params: ["minlength"],
  message: "{_field_} is too short. Enter {minlength} or more characters."
  });
  Vue.component("ValidationProvider", ValidationProvider);
  Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
