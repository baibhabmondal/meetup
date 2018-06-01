<template>
    <v-dialog v-model="dialog" persistent max-width="350">
        <v-btn v-if="!registered" slot="activator" class="primary">
          Register
        </v-btn>
        <v-btn v-else slot="activator" class="primary">
          Unregister
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title class="blue--text">
                            <h4 v-if="!registered">Register for this meetup?</h4>
                            <h4 v-else>Unregister for this meetup?</h4>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-card-text>You can always change you decision.  :)</v-card-text>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs6>
                        <v-card-actions>
                            <v-btn flat @click="dialog = false" class="red--text darken-1">No</v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs6>
                        <v-card-actions>
                            <v-btn flat class="green--text darken-1" @click="onSave">Yes</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['meetupID'],
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    registered () {
      return this.$store.getters.users.registeredMeetups.findIndex((meetupID) => {
        return this.meetupID === meetupID
      }) >= 0
    }
  },
  methods: {
    onSave () {
    }
  }
}
</script>
