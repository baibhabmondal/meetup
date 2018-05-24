<template>
    <v-app>
        <v-navigation-drawer temporary absolute class="hidden-sm-and-up" v-model="drawer">
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>
                            supervisor_account
                        </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        View Meetups
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app absolute>
            <v-toolbar-side-icon class="hidden-sm-and-up" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                Developers Meet Up
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat>
                    <v-icon left>supervisor_account </v-icon>
                    View Meetups
                </v-btn>
            </v-toolbar-items>
       </v-toolbar>
    </v-app>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      drawer: false
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
