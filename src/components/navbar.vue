<template>
    <div>
        <v-navigation-drawer temporary absolute class="hidden-sm-and-up" v-model="drawer">
            <v-list>
                <v-list-tile
                  v-for='item in menuItems'
                  :key='item.title'
                  :to='item.link'>
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
            <v-toolbar-side-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
            <router-link to="/" tag='span' style="cursor: pointer">
                Developers Meet Up
            </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat v-for='item in menuItems' :key='item.title' :to='item.link'>
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
          icon: 'supervisor_account',
          link: '/meetups'
        },
        {
          title: 'Organise Meetups',
          icon: 'room',
          link: '/meetups/new'
        },
        {
          title: 'Profile',
          icon: 'person',
          link: '/profile'
        },
        {
          title: 'Sign Up',
          icon: 'face',
          link: '/signup'
        },
        {
          title: 'Sign In',
          icon: 'lock_open',
          link: '/signin'
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
