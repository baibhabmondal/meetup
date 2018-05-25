<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12>
        <v-card>
            <v-card-title class='primary--text'>
                <h3>{{ meetup.location }}</h3>
            </v-card-title>
            <v-card-media :src="meetup.imageURL" height="300px"></v-card-media>
            <v-card-text class="pb-0">
                <h4>{{ meetup.date }}
                </h4>
                <p>
                    {{ meetup.description }}
                </p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="primary">
                    Register
                </v-btn>
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
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
