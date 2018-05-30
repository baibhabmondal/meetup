<template>
  <div>
    <v-app class=".background">
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
  padding-top: 5%;
}
 .background {
    background: #CFD8DC;
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
