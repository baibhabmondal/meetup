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
    user: null
  },
  mutations: {
    createMeetups (state, payload) {
      state.loadedMeetups.push(payload)
    },
    createUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetups ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        imageURL: payload.imageURL,
        date: payload.date,
        id: payload.id,
        link: '/meetups/' + payload.id
        // date: new Date()
      }
      commit('createMeetups', meetup)
    },
    onSignUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
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
            console.log(error)
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
    }
  }
})
