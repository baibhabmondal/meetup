<template>
  <div>
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from './navbar'
export default {
  name: 'HelloWorld',
  components: {
    'navbar': navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
