import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        id: '1',
        imageURL: 'https://www.jetairways.com/Explore/Chennai2-1024x400.jpg',
        title: 'Meetup in Chennai',
        link: '/meetups/1',
        date: '08-02-2019'
      },
      {
        id: '2',
        imageURL: 'https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2017/03/Hyderabad-city-e1508867439150.jpg',
        title: 'Meetup in Hyderabad',
        link: '/meetups/2',
        date: '13-12-2018'
      },
      {
        id: '3',
        imageURL: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F7aa2929ae744a13e7063aa26eca9c046%2F204824160%2F474676074.jpg',
        title: 'Meetup in Bangalore',
        link: '/meetups/3',
        date: '07-11-2018'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((MeetUpA, MeetUpB) => {
        return MeetUpA.date > MeetUpB.date
      })
    //   return state.loadedMeetups
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
