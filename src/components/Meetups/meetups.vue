<template>
  <v-container>
      <v-layout row wrap class="mb-3" v-for='meetup in meetups' :key='meetup.id'>
          <v-flex xs12>
            <v-card class="indigo darken-4 white--text">
                <v-container fluid>
                  <v-layout row wrap>
                      <v-flex lg5>
                        <v-card-media :src="meetup.imageURL" height="200px"></v-card-media>
                     </v-flex>
                     <v-flex lg7>
                         <v-card-title>
                             <div>
                            <h3> {{ meetup.title }} </h3>
                             {{ meetup.date }}
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
export default {
  data () {
    return {
      meetups: [
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
    }
  }
}

</script>
