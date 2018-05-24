<template>
  <div>
    <v-app>
    <navbar></navbar>
    <div class="app">
  <router-view/>
  </div>
  </v-app>
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',
  components: {
    'navbar': navbar
  }
}
</script>

<style scoped>
.app{
  margin-top: 5%;
}

</style>
