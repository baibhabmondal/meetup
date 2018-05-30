import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import { store } from './store'
import dateFilter from './filters/date'
import * as firebase from 'firebase'
import alertCmp from './components/shared/alert.vue'
import localfirebase from '../localfirebase'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)

Vue.component('app-alert', alertCmp)

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken2,
    secondary: colors.grey.lighten1,
    accent: colors.red.accent2,
    error: colors.red.accent4
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    console.log(process.env.api_key)
    var config = {
      ...localfirebase
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('setLoadedMeetups')
  }

})
