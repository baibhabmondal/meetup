<template>
  <div>
   <v-container>
     <v-layout row wrap >
       <v-flex xs12 sm6 text-xs-center text-sm-right>
         <v-btn large to="/meetups/new" class='primary'>
           Organize Meetups
         </v-btn>
       </v-flex>
       <v-flex xs12 sm6 text-xs-center text-sm-left>
         <v-btn large to="/meetups" class='primary'>
           Explore Meetups
         </v-btn>
       </v-flex>
     </v-layout>
     <v-layout row wrap class="mt-2">
        <v-carousel style='height: 70vh;'>
          <v-carousel-item v-for="meetup in meetups" :src="meetup.imageURL" :to='meetup.link' :key="meetup.id">
            <div class="title">
              Meetup in {{ meetup.location }}
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
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
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
