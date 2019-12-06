import Vue from 'vue'
// import App from './component/App.vue'
import { createRouter } from './router'
const App = Vue.component('App', {
  template: `<router-view></router-view>`
})
export function createApp () {
  // 创建 router 实例
  const router = createRouter()

  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    render: h => h(App)
  })

  // 返回 app 和 router
  return { app, router }
}
