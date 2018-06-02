import * as firebase from 'firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    onRegister (state, payload) {
      const id = payload.id
      if (state.user.registeredMeetups.findIndex(meetup => {
        return meetup.id === id
      }) >= 0) {
        return
      }
      state.user.registeredMeetups.push(id)
      state.user.fbkey[id] = payload.fbkey
    },
    onUnregister (state, payload) {
      const user = state.user
      const registeredMeetups = state.user.registeredMeetups
      registeredMeetups.splice(registeredMeetups.findIndex(meetupid => {
        return meetupid === payload
      }), 1)
      Reflect.deleteProperty(user.fbkey, payload)
    },
    createUser (state, payload) {
      state.user = payload
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
          console.log(obj)
          commit('onRegister', { id: payload, fbkey: data.key })
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
              fbkey: {}
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
        registeredMeetups: [],
        fbkey: {}
      })
    },
    fetchUserData ({commit, getters}) {
      commit('onLoading', true)
      const user = getters.users
      firebase.database().ref('users/' + user.id + '/registration').once('value')
        .then(data => {
          const dataPairs = data.val()
          const registeredMeetups = []
          const swappedPairs = {}
          for (let key in dataPairs) {
            registeredMeetups.push(dataPairs[key])
            swappedPairs[dataPairs[key]] = key // meetup id and registration id gets swapped
          }
          commit('onLoading', false)
          commit('createUser', {
            id: user.id,
            registeredMeetups: registeredMeetups,
            fbkey: swappedPairs
          })
        })
        .catch(error => {
          console.log(error)
          commit('onLoading', false)
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
              fbkey: {}
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
    }
  },
  getters: {
    users (state) {
      return state.user
    }
  }
}
