<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-btn fab slot="activator" class="primary"><v-icon>edit</v-icon></v-btn>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>
