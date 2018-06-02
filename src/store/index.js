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
    editedMeetup (state, payload) {
      const meetup = state.loadedMeetups.find(meetup => {
        return meetup.id === payload.id
      })
      if (payload.title) {
        meetup.title = payload.title
      }
      if (payload.description) {
        meetup.description = payload.description
      }
      if (payload.date) {
        meetup.date = payload.date
      }
    },
    onRegister (state, payload) {
      const id = state.user.id
      if (state.user.registeredMeetups.findIndex(meetup => {
        return meetup.id === payload.id
      }) >= 0) {
        return
      }
      state.user.registeredMeetups.push(payload.id)
      state.user.fbkey[id] = payload.fbkey
    },
    onUnregister (state, payload) {
      const user = state.user
      const registeredMeetups = state.user.registeredMeetups
      registeredMeetups.slice(registeredMeetups.findIndex(meetupid => {
        return meetupid === payload
      }), 1)
      Reflect.deleteProperty(user.fbkey, payload)
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
    onRegister ({commit, getters}, payload) {
      commit('onLoading', true)
      const user = getters.users
      firebase.database().ref('users/' + user.id).child('registration').push(payload)
        .then(data => {
          commit('onLoading', false)
          const obj = {id: payload, fbkey: data.key}
          commit('onRegister', obj)
        })
        .catch(error => {
          console.log(error)
          commit('onLoading', false)
        })
    },
    onUnregister ({commit, getters}, payload) {
      commit('onLoading', true)
      const user = getters.users
      if (!user.fbkey) {
        return
      }
      const fbkey = user.fbkey[payload]
      firebase.database().ref('users/' + user.id + '/registration').child(fbkey).remove()
        .then(() => {
          commit('onLoading', false)
          commit('onUnregister', payload)
        })
        .catch(error => {
          console.log(error)
          commit('onLoading', false)
        })
    },
    createMeetups ({commit, getters}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorID: getters.users.id
      }
      let key
      let imageURL
      let ext
      firebase.database().ref('meetups').push(meetup)
        .then(
          data => {
            console.log(data)
            key = data.key
            return key
          }
        )
        .then(key => {
          const filename = payload.image.name
          ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          console.log(key)
          console.log(fileData)
          return firebase.storage().ref('meetups/' + key + '.' + ext).getDownloadURL()
        })
        .then(URL => {
          imageURL = URL
          console.log(imageURL)
          return firebase.database().ref('meetups').child(key).update({ imageURL: imageURL })
        })
        .then(() => {
          commit('createMeetups', {
            ...meetup,
            id: key,
            link: '/meetups/' + key,
            imageURL: imageURL
          })
        })
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    editedMeetup ({commit}, payload) {
      commit('onLoading', true)
      const editedObj = {}
      if (payload.title) {
        editedObj.title = payload.title
      }
      if (payload.description) {
        editedObj.description = payload.description
      }
      if (payload.date) {
        editedObj.date = payload.date
      }
      firebase.database().ref('meetups').child(payload.id).update(editedObj)
        .then(data => {
          commit('onLoading', false)
          commit('editedMeetup', payload)
        })
        .catch(error => {
          commit('onLoading', false)
          console.log(error)
        })
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
              registeredMeetups: [],
              fbkey: []
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
            commit('onLoading', false)
            const newUser = {
              id: user.user.uid,
              registeredMeetups: [],
              fbkey: []
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
                creatorID: obj[key].creatorID
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
