<template>
  <section class="section">
    <b-modal
      v-model="addMovieModal"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <template>
        <form @submit.prevent="addMovie()">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">Add New Movie</p>
              <button
                type="button"
                class="delete"
                @click="addMovieModal = false"
              />
            </header>
            <section class="modal-card-body">
              <b-field label="Movie Name">
                <b-input
                  v-model="newMovieName"
                  type="text"
                  placeholder="Hua Mu Lan"
                >
                </b-input>
              </b-field>
            </section>
            <footer class="modal-card-foot">
              <button
                class="button"
                type="button"
                @click="addMovieModal = false"
              >
                Close
              </button>
              <button type="submit" class="button is-primary">Add</button>
            </footer>
          </div>
        </form>
      </template>
    </b-modal>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="is-size-2">Movies ({{ data.length }})</h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <b-button type="is-primary is-light" @click="addMovieModal = true"
            >Add Movie</b-button
          >
        </div>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column">
        <b-table
          :data="data"
          striped
          hoverable
          mobile-cards
          paginated
          :sort-multiple="false"
          pagination-size="40"
        >
          <b-table-column v-slot="props" label="Added By" width="150">
            {{ props.row.AddedBy }}
          </b-table-column>
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
          <b-table-column label="Action" width="100">
            <b-button type="is-small is-primary" rounded>Review</b-button>
          </b-table-column>
        </b-table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    setLoading(data) {
      this.$store.commit('loading', data)
    },
    async addMovie() {
      if (this.newMovieName === '') return
      this.setLoading(true)
      try {
        await this.$axios.$post(
          'https://moo-api.lightbear.net/api/movie/add',
          { name: this.newMovieName },
          {
            headers: {
              Authorization: 'Bearer '.concat(this.$store.state.auth.token),
            },
          }
        )
      } catch (e) {
        if (e) {
          alert('Unable to add new movie')
        }
      } finally {
        this.setLoading(false)
        this.getData()
        this.newMovieName = ''
        this.addMovieModal = false
      }
    },
    async getData() {
      this.setLoading(true)
      let result
      try {
        result = await this.$axios.$get(
          'https://moo-api.lightbear.net/api/movies',
          {
            headers: {
              Authorization: 'Bearer '.concat(this.$store.state.auth.token),
            },
          }
        )
      } catch (e) {
        if (e) {
          this.data = []
        }
      } finally {
        this.setLoading(false)
      }
      if (result) {
        this.data = result
      }
    },
  },
  data() {
    return {
      data: [],
      addMovieModal: false,
      newMovieName: '',
    }
  },
  created() {
    this.getData()
  },
}
</script>
