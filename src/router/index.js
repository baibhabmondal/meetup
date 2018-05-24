import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import createMeetUps from '../components/Meetups/createMeetUps.vue'
import meetUps from '../components/Meetups/meetups.vue'
import profile from '../components/User/profile.vue'
import signIn from '../components/User/signIn.vue'
import signUp from '../components/User/signUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/createMeetUps',
      name: 'createMeetUps',
      component: createMeetUps
    },
    {
      path: '/meetUps',
      name: 'meetUps',
      component: meetUps
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    }

  ]
})
