import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import createMeetUps from '../components/Meetups/createMeetUps.vue'
import meetUps from '../components/Meetups/meetups.vue'
import profile from '../components/User/profile.vue'
import signIn from '../components/User/signIn.vue'
import signUp from '../components/User/signUp.vue'
import meetup from '../components/Meetups/meetup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/meetups/new',
      name: 'createMeetUps',
      component: createMeetUps
    },
    {
      path: '/meetups/:id',
      name: 'meetup',
      component: meetup
    },
    {
      path: '/meetups',
      name: 'meetUps',
      component: meetUps
    },
    {
      path: '/signin',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/signup',
      name: 'signUp',
      component: signUp
    }
  ],
  mode: 'history'

})
