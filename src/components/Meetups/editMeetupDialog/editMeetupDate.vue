<template>
    <v-dialog v-model="dialog" persistent max-width="350">
        <v-btn slot="activator" class="primary">
            Edit Date
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title class="blue--text">
                            <h3>Edit Meetup Date</h3>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-text>
                        <v-date-picker v-model="editedDate" color="primary"></v-date-picker>
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
      editedDate: null
    }
  },
  methods: {
    onSave () {
      this.dialog = false
      const newDate = new Date(this.meetup.date)
      const newDay = new Date(this.editedDate).getUTCDate()
      const newMonth = new Date(this.editedDate).getUTCMonth()
      const newYear = new Date(this.editedDate).getUTCFullYear()
      newDate.setUTCDate(newDay)
      newDate.setUTCMonth(newMonth)
      newDate.setUTCFullYear(newYear)
      this.$store.dispatch('editedMeetup', {
        id: this.meetup.id,
        date: newDate
      })
      // here we are using the day, month and year separatly
      // because the date picker returns the date.
      // we still need the time of old meet up
      // because Date object holds the time value as well.
    }
  },
  created () {
    var d = new Date(this.meetup.date)
    var month = '' + (d.getMonth() + 1)
    var day = '' + d.getDate()
    var year = d.getFullYear()
    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day
    }
    this.editedDate = [year, month, day].join('-')
  }
}
</script>
