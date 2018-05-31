<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 text-xs-center>
        <h1 class="secondary--text">Create a meetup</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mb-5">
      <v-flex xs12 sm6 offset-sm3 text-xs-center>
        <v-form @submit.prevent='onCreateMeetup' ref="form" v-model="valid" lazy-validation>
           <v-text-field v-model="title"
             :rules="titleRules"
             :counter="50"
             label="Title"
             required>
            </v-text-field>
          <v-text-field v-model="location"
             :rules="locationRules"
             :counter="20"
             label="Location"
             required>
            </v-text-field>
            <h5>Upload an Image</h5>
            <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
            <v-btn
              raised
              class="primary"
              @click="onPickFile">
              <v-icon left dark>cloud_upload</v-icon>Upload</v-btn>
            <input type="file"
              ref="fileInput"
              style="display: none"
              accept="image/*"
              @change="onUpload">
              </v-flex>
              </v-layout>
            <img :src="imageURL" height="100px">
            <v-text-field name="description" :rules="desRules" :counter="100" label="Description" v-model="description" multi-line></v-text-field>
            <v-layout row class="mb-2">
              <v-flex xs12 sm6 offset-sm3>
               <h3 class="secondary--text">Choose a date for meetup</h3>
              </v-flex>
              </v-layout>
            <v-layout row wrap class="mb-2">
              <v-flex xs12 sm6 offset-sm3>
            <v-date-picker v-model="date" color="primary"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="mb-3">
            <v-flex xs12 sm6 offset-sm3>
              <h3 class="secondary--text">Choose a time for meetup</h3>
            </v-flex>
          </v-layout>
            <v-layout row wrap class="mb-4">
              <v-flex xs12 sm6 offset-sm3>
            <v-time-picker format="24hr" v-model="time" color="primary"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-btn @click="clear" :disabled="!validation || !valid">clear</v-btn>
              <v-btn class="primary" type="submit" :disabled="!validation || !valid">
                  Create Meetup
              </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '',
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 50) || 'Title must be less than 50 characters'
    ],
    date: '',
    time: '00:00',
    valid: true,
    image: null,
    location: '',
    description: '',
    desRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 100) || 'Description must be less than 100 characters'
    ],
    locationRules: [
      v => !!v || 'Location is required',
      v => (v && v.length <= 20) || 'Location must be less than 20 characters'
    ],
    imageURL: '',
    imageRules: [
      v => !!v || 'Image URL is required'
    ]
  }),
  computed: {
    validation () {
      return this.location !== '' && this.imageURL !== '' && this.description !== ''
    },
    submittedDateAndTime () {
      let date = new Date(this.date)
      const hours = this.time.match(/^(\d+)/)[1]
      const minutes = this.time.match(/:(\d+)/)[1]
      date.setHours(hours)
      date.setMinutes(minutes)
      console.log(date)
      return date
    }
  },
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onUpload (event) {
      const files = event.target.files
      const filename = files[0].name
      console.log(filename)
      if (filename.lastIndexOf('.') <= 0) {
        alert('Please upload a valid image')
      }
      const fileReader = new FileReader()
      fileReader.readAsDataURL(files[0])
      fileReader.addEventListener('load', () => {
        this.imageURL = fileReader.result
      })
      this.image = files[0]
      console.log(this.image)
    },
    onCreateMeetup () {
      const meetupData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description,
        date: this.submittedDateAndTime
      }
      this.$store.dispatch('createMeetups', meetupData)
      this.$refs.form.reset()
      this.$router.push('/meetups')
    }
  }
}
</script>
