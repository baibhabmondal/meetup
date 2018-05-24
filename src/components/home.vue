<template>
  <div>
   <v-container>
     <v-layout row wrap >
       <v-flex xs12 sm6 text-xs-center text-sm-right>
         <v-btn large router to="/meetups/new" class='primary'>
           Organize Meetups
         </v-btn>
       </v-flex>
       <v-flex xs12 sm6 text-xs-center text-sm-left>
         <v-btn large router to="/meetups" class='primary'>
           Explore Meetups
         </v-btn>
       </v-flex>
     </v-layout>
     <v-layout row wrap class="mt-2">
        <v-carousel>
          <v-carousel-item v-for="meetup in meetups" :src="meetup.imageURL" :key="meetup.id">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
     </v-layout>
     <v-layout row wrap class="mt-3">
        <v-flex text-xs-center>
           Join Our MEETUPS!!!
        </v-flex>
     </v-layout>
   </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        {
          id: '1',
          imageURL: 'https://www.jetairways.com/Explore/Chennai2-1024x400.jpg',
          title: 'Meetup in Chennai'
        },
        {
          id: '2',
          imageURL: 'https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2017/03/Hyderabad-city-e1508867439150.jpg',
          title: 'Meetup in Hyderabad'
        },
        {
          id: '3',
          imageURL: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F7aa2929ae744a13e7063aa26eca9c046%2F204824160%2F474676074.jpg',
          title: 'Meetup in Bangalore'
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  background: rgba(0,0,0,0.5);
  font-size: 2em;
  color: white;
  position: absolute;
  bottom: 50px;
  padding: 20px;
  margin-left: 40%;
}
</style>
