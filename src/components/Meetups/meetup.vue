<template>
<v-container>
    <v-layout row class="mt-5" v-if="loading">
        <v-flex xs12 class="text-xs-center">
            <v-progress-circular :size="70" :width="7" indeterminate color="amber"></v-progress-circular>
        </v-flex>
    </v-layout>
    <v-layout row wrap v-if="!loading">
        <v-flex xs12>
        <v-card>
            <v-card-title class='primary--text'>
                <h3>{{ meetup.title }} in {{ meetup.location }}</h3>
                <template v-if="creatorAuth">
                  <v-spacer></v-spacer>
                  <edit-meetups :meetup="meetup"></edit-meetups>
                </template>
            </v-card-title>
            <v-card-media :src="meetup.imageURL" height="300px"></v-card-media>
            <v-card-text class="pb-0">
                <h4>{{ meetup.date | date }}
                </h4>
                <div v-if="creatorAuth">
                  <template>
                    <edit-date :meetup="meetup"></edit-date>
                  </template>
                  <template>
                    <edit-time :meetup="meetup"></edit-time>
                  </template>
                </div>
                <p>
                    {{ meetup.description }}
                </p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <register v-if="!userIsCreator" :meetupID="meetup.id"></register>
            </v-card-actions>
        </v-card>
    </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    },
    user () {
      console.log(this.meetup)
      return this.$store.getters.users
    },
    creatorAuth () {
      if (this.user === null || this.user === undefined) {
        return false
      }
      return this.meetup.creatorID === this.user.id
    },
    userIsCreator () {
      return this.$store.getters.loadedMeetup(this.id).creatorID === this.$store.getters.users.id
    }
  }
}
</script>
