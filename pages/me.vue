<template>
  <section class="section">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="is-size-3">{{ name }}</h1>
          <h2 class="is-size-5">({{ email }})</h2>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <b-button type="is-primary is-light" @click="signOut"
            >Sign Out</b-button
          >
        </div>
      </div>
    </div>
    <b-tabs v-model="tab">
      <b-tab-item label="Movies"> Lorem ipsum dolor sit amet. </b-tab-item>

      <b-tab-item label="Review">
        Lorem <br />
        ipsum <br />
        dolor <br />
        sit <br />
        amet.
      </b-tab-item>
    </b-tabs>
  </section>
</template>
<script lang="ts">
export default {
  data() {
    return {
      name: 'Ravel Tan',
      email: 'ravel@ravel.com',
      tab: 0,
    }
  },
  methods: {
    signOut() {
      this.$store.commit('auth/logout')
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>
