import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetifiy'
import mask from '@/plugins/mask'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  mask,
  render: h => h(App),
}).$mount('#app')
