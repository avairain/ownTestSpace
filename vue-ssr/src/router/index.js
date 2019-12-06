import Vue from 'vue'
import Router from 'vue-router'
// import App from '../component/app.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        // component: App
        component: Vue.component('Home', {
          template: '<div>home</div>'
        })
      }
    ]
  })
}