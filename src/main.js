import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueParticlesBg from "particles-bg-vue";
import router from './router'

Vue.config.productionTip = false
Vue.use(VueParticlesBg);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
