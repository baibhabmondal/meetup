import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        title: 'HTML5 updates',
        id: '1',
        imageURL: 'https://www.jetairways.com/Explore/Chennai2-1024x400.jpg',
        location: 'Chennai',
        link: '/meetups/1',
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Error fugit, sunt perspiciatis culpa repudiandae molestias vel hic sed, saepe non repellat et explicabo dolor? Itaque nostrum eligendi nemo accusamus voluptatibus!'
      },
      {
        title: 'CSS3 updates',
        id: '2',
        imageURL: 'https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2017/03/Hyderabad-city-e1508867439150.jpg',
        location: 'Hyderabad',
        link: '/meetups/2',
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Error fugit, sunt perspiciatis culpa repudiandae molestias vel hic sed, saepe non repellat et explicabo dolor? Itaque nostrum eligendi nemo accusamus voluptatibus!'
      },
      {
        title: 'JavaScript updates',
        id: '3',
        imageURL: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F7aa2929ae744a13e7063aa26eca9c046%2F204824160%2F474676074.jpg',
        location: 'Bangalore',
        link: '/meetups/3',
        date: new Date(),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Error fugit, sunt perspiciatis culpa repudiandae molestias vel hic sed, saepe non repellat et explicabo dolor? Itaque nostrum eligendi nemo accusamus voluptatibus!'
      }
    ],
    user: null,
    error: null,
    loading: false
  },
  mutations: {
    createMeetups (state, payload) {
      state.loadedMeetups.push(payload)
    },
    createUser (state, payload) {
      state.user = payload
    },
    onLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    }
  },
  actions: {
    createMeetups ({commit, getters}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        imageURL: payload.imageURL,
        date: payload.date.toISOString(),
        userID: getters.users.id
      }
      firebase.database().ref('meetups').push(meetup)
        .then(
          data => {
            console.log(data)
            const key = data.key
            commit('createMeetups', {
              ...meetup,
              id: key,
              link: '/meetups/' + key
            })
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    onSignUp ({commit}, payload) {
      commit('onLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('onLoading', false)
            const newUser = {
              id: user.user.uid,
              registeredMeetups: []
            }
            console.log('Actions')
            console.log(newUser)
            commit('createUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setError', error)
            commit('onLoading', false)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('createUser', {
        id: payload.uid,
        registeredMeetups: []
      })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('createUser', null)
    },
    onSignIn ({commit}, payload) {
      commit('onLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('onLoading')
            const newUser = {
              id: user.user.uid,
              registeredMeetups: []
            }
            commit('createUser', newUser)
          }
        )
        .catch(
          error => {
            commit('onLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearErr ({commit}) {
      commit('clearError')
    },
    setLoadedMeetups ({commit}) {
      commit('onLoading', true)
      commit('clearError')
      firebase.database().ref('meetups').once('value')
        .then(
          data => {
            const meetups = []
            const obj = data.val()
            for (let key in obj) {
              meetups.push({
                id: key,
                title: obj[key].title,
                imageURL: obj[key].imageURL,
                location: obj[key].location,
                link: '/meetups/' + key,
                date: obj[key].date,
                description: obj[key].description,
                userID: obj[key].userID
              })
            }
            commit('setLoadedMeetups', meetups)
            commit('onLoading', false)
          }
        )
        .catch(
          error => {
            commit('onLoading', true)
            commit('setError', error)
          }
        )
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((MeetUpA, MeetUpB) => {
        return MeetUpA.date > MeetUpB.date
      })
    //   return state.loadedMeetups
    },
    users (state) {
      return state.user
    },

    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },

    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    errors (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    }
  }
})
