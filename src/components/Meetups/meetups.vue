<template>
  <v-container>
      <v-layout row wrap class="mb-3" v-for='meetup in meetups' :key='meetup.id'>
          <v-flex xs12>
            <v-card class="secondary white--text">
                <v-container fluid>
                  <v-layout row wrap>
                      <v-flex lg5>
                        <v-card-media :src="meetup.imageURL" height="200px"></v-card-media>
                     </v-flex>
                     <v-flex lg7>
                         <v-card-title>
                             <div>
                            <h3>{{ meetup.title }}</h3>
                            <h4>{{ meetup.location }}</h4>
                             <h4>{{ meetup.date | date }}</h4>
                            </div>
                         </v-card-title>
                         <v-card-actions>
                             <v-btn flat :to='meetup.link'><v-icon light left>arrow_forward</v-icon>View Meetup</v-btn>
                         </v-card-actions>
                     </v-flex>
                  </v-layout>
                </v-container>
            </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
// import { store } from ''
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}

</script>
