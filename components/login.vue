<template>
  <div class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-5-desktop is-4-widescreen">
            <div class="box">
              <div class="field has-text-centered is-size-2">Mooreview</div>
              <form @submit.prevent="doAuth()">
                <b-field
                  label="Email"
                  :type="error ? 'is-danger' : ''"
                  :message="error ? errorMessage : ''"
                >
                  <b-input
                    v-model="email"
                    icon="email"
                    placeholder="john@gemeail.com"
                    required
                  />
                </b-field>
                <b-field v-if="register" label="First Name">
                  <b-input
                    v-model="firstName"
                    icon="account"
                    placeholder="John"
                    required
                  />
                </b-field>
                <b-field v-if="register" label="Last Name">
                  <b-input
                    v-model="lastName"
                    icon="account"
                    placeholder="LightBlue"
                    required
                  />
                </b-field>
                <b-field label="Password">
                  <b-input
                    v-model="password"
                    minlength="8"
                    icon="security"
                    placeholder="*******"
                    password-reveal
                    type="password"
                    maxlength="15"
                    required
                  />
                </b-field>

                <div class="field has-text-centered is-size-6">
                  <a @click="register = !register">
                    {{
                      register
                        ? 'Already had an account?'
                        : 'Create an account?'
                    }}
                  </a>
                </div>
                <b-field>
                  <button
                    class="expanded is-primary button is-fullwidth"
                    type="submit"
                  >
                    {{ register ? 'Register' : 'Login' }}
                  </button>
                </b-field>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      register: false,
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      error: false,
      errorMessage: '',
    }
  },
  methods: {
    async doAuth() {
      this.error = false
      if (this.email === '' || this.password === '') {
        if (this.register) {
          if (this.firstName === '' || this.lastName === '') return
        }
        return
      }
      this.$store.commit('loading', true)
      let result = {
        token: '',
        refresh: '',
      }
      if (this.register) {
        try {
          result = await this.$axios.$post(
            'https://moo-api.lightbear.net/api/register',

            {
              email: this.email,
              password: this.password,
              firstName: this.firstName,
              lastName: this.lastName,
            }
          )
        } catch (e) {
          this.error = true
          if (e.response.status === 409) {
            this.errorMessage = 'User Exists'
          } else {
            this.errorMessage = 'Unknown error'
          }
          return
        } finally {
          this.$store.commit('loading', false)
        }
      } else {
        try {
          result = await this.$axios.$post(
            'https://moo-api.lightbear.net/api/login',
            {
              Email: this.email,
              Password: this.password,
            }
          )
        } catch (e) {
          this.error = true
          if (e.response.status === 404) {
            this.errorMessage = 'Invalid Credentials'
          } else {
            this.errorMessage = 'Unknown error'
          }
          return
        } finally {
          this.$store.commit('loading', false)
        }
      }
      this.$store.commit('auth/login', result.token, result.refresh, this.email)
    },
  },
}
</script>
