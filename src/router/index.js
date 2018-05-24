import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from '../components/home.vue'
import navbar from '../components/navbar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nav',
      name: 'navbar',
      component: navbar
    }
  ]
})
