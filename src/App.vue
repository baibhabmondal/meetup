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
 .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
