<template>
  <v-dialog v-model="dialog" persistent max-width="350">
    <v-btn fab slot="activator" class="primary"><v-icon>edit</v-icon></v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title class="blue--text">
              <h3>Edit Meetup</h3>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                v-model="editedTitle"
                :rules="titleRules"
                :counter="50"
                label="Title"
                required>
              </v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <v-text-field
                name="description"
                :rules="desRules"
                :counter="100"
                label="Description"
                v-model="editedDescription"
                multi-line>
              </v-text-field>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs6>
            <v-card-actions>
            <v-btn flat @click="onClose" class="blue--text">Close</v-btn>
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
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 50) || 'Title must be less than 50 characters'
      ],
      desRules: [
        v => !!v || 'Description is required',
        v => (v && v.length <= 100) || 'Description must be less than 100 characters'
      ],
      dialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    }
  },
  methods: {
    onClose () {
      this.dialog = false
    },
    onSave () {
      if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
        return
      }
      this.dialog = false
      this.$store.dispatch('editedMeetup', {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
    }
  }
}
</script>
