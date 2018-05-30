import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import createMeetUps from '../components/Meetups/createMeetUps.vue'
import meetUps from '../components/Meetups/meetups.vue'
import profile from '../components/User/profile.vue'
import signIn from '../components/User/signIn.vue'
import signUp from '../components/User/signUp.vue'
import meetup from '../components/Meetups/meetup.vue'
import authGuard from './auth-guard'

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
      component: profile,
      beforeEnter: authGuard
    },
    {
      path: '/meetups/new',
      name: 'createMeetUps',
      component: createMeetUps,
      beforeEnter: authGuard
    },
    {
      path: '/meetups/:id',
      name: 'meetup',
      props: true,
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
