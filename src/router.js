import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
