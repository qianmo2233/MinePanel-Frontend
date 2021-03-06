import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import HighchartsVue from 'highcharts-vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import './assets/css/style.css'

Vue.config.productionTip = false

Vue.use(HighchartsVue)
Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
