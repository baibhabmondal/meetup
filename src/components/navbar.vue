<template>
    <div>
        <v-navigation-drawer temporary absolute class="hidden-sm-and-up" v-model="drawer">
            <v-list>
                <v-list-tile v-for='item in menuItems' :key='item.title'>
                    <v-list-tile-action>
                        <v-icon>
                            {{item.icon}}
                        </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        {{item.title}}
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary" absolute>
            <v-toolbar-side-icon class="hidden-sm-and-up" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                Developers Meet Up
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat v-for='item in menuItems' :key='item.title'>
                    <v-icon left>{{ item.icon }}</v-icon>
                 {{ item.title }}
                </v-btn>
            </v-toolbar-items>
       </v-toolbar>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      drawer: false,
      menuItems: [
        {
          title: 'View Meetups',
          icon: 'supervisor_account'
        },
        {
          title: 'Organise Meetups',
          icon: 'room'
        },
        {
          title: 'Profile',
          icon: 'person'
        },
        {
          title: 'Sign Up',
          icon: 'face'
        },
        {
          title: 'Sign In',
          icon: 'lock_open'
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
