<template>
    <v-app>
     <nav></nav>
    </v-app>
</template>

<script>
    import navbar from './components/navbar.vue';
    export default {
        name: 'home',
        components: {
            'nav': navbar
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>