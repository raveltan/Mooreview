<template>
  <section class="section">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="is-size-3">{{ email }}</h1>
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
      <b-tab-item label="Movies added by">
        <b-table
          :data="movieData"
          striped
          hoverable
          mobile-cards
          paginated
          :sort-multiple="false"
          pagination-size="40"
        >
          <b-table-column v-slot="props" field="name" label="Name" width="500">
            {{ props.row.Name }}
          </b-table-column>

          <b-table-column v-slot="props" label="Added On" width="250">
            {{ props.row.AddedOn }}
          </b-table-column>

          <b-table-column v-slot="props" label="Rating" width="100">
            {{ props.row.Rating }}
          </b-table-column>

          <b-table-column
            v-slot="props"
            field="voters"
            label="Voters"
            width="100"
          >
            <span class="tag is-primary">
              {{ props.row.Voters }}
            </span>
          </b-table-column>
          <b-table-column v-slot="props" label="Action" width="100">
            <b-button
              type="is-small is-primary"
              rounded
              @click="navigate(props.row.ID)"
              >Review</b-button
            >
          </b-table-column>
        </b-table>
      </b-tab-item>
    </b-tabs>
  </section>
</template>
<script>
export default {
  data() {
    return {
      movieData: [],
      reviewData: [],
      email: 'ravel@ravel.com',
      tab: 0,
    }
  },
  created() {
    this.email = this.$store.state.auth.email
    this.getMovieData()
  },
  methods: {
    navigate(id) {
      this.$router.replace({
        path: '/review/' + id,
      })
    },
    setLoading(data) {
      this.$store.commit('loading', data)
    },
    signOut() {
      localStorage.clear()
      this.$store.commit('auth/logout')
      this.$router.replace({
        path: '/',
      })
    },
    async getMovieData() {
      this.setLoading(true)
      let result
      try {
        result = await this.$axios.$get(
          'https://moo-api.lightbear.net/api/user/' +
            this.$store.state.auth.email +
            '/movie',
          {
            headers: {
              Authorization: 'Bearer '.concat(this.$store.state.auth.token),
            },
          }
        )
      } catch (e) {
        if (e) {
          this.movieData = []
        }
      } finally {
        this.setLoading(false)
      }
      if (result) {
        this.movieData = result
      }
    },
  },
}
</script>
