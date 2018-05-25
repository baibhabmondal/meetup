<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12>
        <v-card>
            <v-card-title class='primary--text'>
                <h3>Meet up in {{ place }}</h3>
            </v-card-title>
            <v-card-media :src="imageURL" height="300px"></v-card-media>
            <v-card-text class="pb-0">
                <h4>{{ date }}
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Error fugit, sunt perspiciatis
                    culpa repudiandae molestias vel hic sed, saepe non
                    repellat et explicabo dolor? Itaque nostrum eligendi
                    nemo accusamus voluptatibus!
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
  data () {
    return {
      place: 'Chennai',
      imageURL: 'https://www.jetairways.com/Explore/Chennai2-1024x400.jpg',
      date: '13-12-2018'
    }
  }
}
</script>
