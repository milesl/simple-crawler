import '@babel/polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/es5/util/colors'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: { primary: '#f44336', secondary: '#e57373', accent: '#9c27b0', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50' }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
