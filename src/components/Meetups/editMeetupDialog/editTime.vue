<template>
    <v-dialog v-model="dialog" persistent max-width="350">
        <v-btn slot="activator" class="primary">
            Edit Time
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title class="blue--text">
                            <h3>Edit Meetup Time</h3>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-text>
                            <v-time-picker format="24hr" v-model="editedTime" color="primary"></v-time-picker>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs6>
                        <v-card-actions>
                            <v-btn flat @click="dialog = false" class="blue--text">Close</v-btn>
                        </v-card-actions>
                    </v-flex>
                    <v-flex xs6>
                        <v-card-actions>
                            <v-btn flat class="blue--text" @click="onSave">Save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      dialog: false,
      editedTime: '00:00'
    }
  },
  methods: {
    onSave () {
      this.dialog = false
      let date = new Date(this.meetup.date)
      const hours = this.editedTime.match(/^(\d+)/)[1]
      const minutes = this.editedTime.match(/:(\d+)/)[1]
      date.setHours(hours)
      date.setMinutes(minutes)
      this.$store.dispatch('editedMeetup', {
        id: this.meetup.id,
        date: date
      })
    }
  },
  created () {
    const hours = new Date(this.meetup.date).getHours()
    const minutes = new Date(this.meetup.date).getMinutes()
    this.editedTime = hours + ':' + minutes
    // console.log(hours + ':' + minutes)
  }
}
</script>
