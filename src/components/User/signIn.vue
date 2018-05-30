<template>
    <v-container>
      <v-layout row v-if="error">
        <v-flex xs12 sm6 offset-sm3>
          <app-alert :text="error.message" @dismissed="onClose"></app-alert>
        </v-flex>
      </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-container>
                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-form @submit.prevent="submit">
                                        <v-text-field
                                          v-model="email"
                                          label="EMAIL"
                                          id="email"
                                          type="email"
                                          :rules="emailRules"
                                          required>
                                        </v-text-field>
                                        <v-text-field
                                          v-model="password"
                                          label="PASSWORD"
                                          id="password"
                                          type="password"
                                          :rules="passwordRules"
                                          required>
                                        </v-text-field>
                                        <v-btn
                                           type="submit"
                                           class="primary"
                                           :loading="loading"
                                           :disabled="loading">
                                           Sign In
                                        </v-btn>
                                    </v-form>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      emailRules: [
        v => !!v || 'email is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'password is required'
      ]
    }
  },
  methods: {
    submit () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('onSignIn', user)
    },
    onClose () {
      console.log('dismissed')
      this.$store.dispatch('clearErr')
    }
  },
  computed: {
    user () {
      return this.$store.getters.users
    },
    error () {
      return this.$store.getters.errors
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  }
}
</script>
