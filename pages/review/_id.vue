<template>
  <section class="section">
    <b-modal
      v-model="addReviewModal"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <template>
        <form @submit.prevent="addReview()">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">Add New Review</p>
              <button
                type="button"
                class="delete"
                @click="addReviewModal = false"
              />
            </header>
            <section class="modal-card-body">
              <b-field label="Comment">
                <b-input
                  v-model="newComment"
                  type="text"
                  placeholder="This movie is amazing!"
                >
                </b-input>
              </b-field>
              <b-field label="Rating">
                <b-input
                  v-model="newRating"
                  type="number"
                  placeholder="5"
                  max="5"
                  min="0"
                >
                </b-input>
              </b-field>
            </section>
            <footer class="modal-card-foot">
              <button
                class="button"
                type="button"
                @click="addReviewModal = false"
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
          <h1 class="mr-3 is-size-3">{{ movieData.Name }}</h1>
          <b-taglist attached>
            <b-tag type="is-primary is-dark">{{ movieData.Rating }}</b-tag>
            <b-tag type="is-primary is-light">Star(s)</b-tag>
          </b-taglist>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <b-button type="is-primary is-light" @click="addReviewModal = true"
            >Add Review</b-button
          >
        </div>
      </div>
    </div>
    <div class="columns is-multiline">
      <div
        v-for="r in reviewData"
        :key="r.AddedOn"
        class="column is-5-tablet is-4-desktop is-3-widescreen"
      >
        <div class="card">
          <div class="card-content">
            <p class="title">"{{ r.Comment }}"</p>
            <p class="subtitle">{{ r.Author }}</p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                {{ r.AddedOn }}
              </span>
            </p>
            <p class="card-footer-item">
              <span> {{ r.Rating }} Stars </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      movieData: {
        Name: '',
        Rating: '',
      },
      addReviewModal: false,
      reviewData: [],
      newComment: '',
      newRating: 5,
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getMovieData()
    this.getReviewData()
  },
  methods: {
    setLoading(data) {
      this.$store.commit('loading', data)
    },
    async getMovieData() {
      this.setLoading(true)
      let result
      try {
        result = await this.$axios.$get(
          'https://moo-api.lightbear.net/api/movie/' + this.id,
          {
            headers: {
              Authorization: 'Bearer '.concat(this.$store.state.auth.token),
            },
          }
        )
      } catch (e) {
        if (e) {
          alert('Unable to get movie data')
        }
      } finally {
        this.setLoading(false)
      }
      if (result) {
        this.movieData = result
      }
    },
    async getReviewData() {
      this.setLoading(true)
      let result
      try {
        result = await this.$axios.$get(
          'https://moo-api.lightbear.net/api/review/' + this.id,
          {
            headers: {
              Authorization: 'Bearer '.concat(this.$store.state.auth.token),
            },
          }
        )
      } catch (e) {
        if (e) {
          alert('Unable to get movie data')
        }
      } finally {
        this.setLoading(false)
      }
      if (result) {
        this.reviewData = result
      }
    },
    async addReview() {
      if (this.newComment === '' || this.newRating > 5 || this.newRating < 0)
        return
      this.setLoading(true)
      try {
        await this.$axios.$post(
          'https://moo-api.lightbear.net/api/review/' + this.id + '/add',
          { Rating: parseInt(this.newRating), Comment: this.newComment },
          {
            headers: {
              Authorization: 'Bearer '.concat(this.$store.state.auth.token),
            },
          }
        )
      } catch (e) {
        if (e) {
          alert('Unable to add new review')
        }
      } finally {
        this.setLoading(false)
        this.getMovieData()
        this.getReviewData()
        this.newComment = ''
        this.newRating = 5
        this.addReviewModal = false
      }
    },
  },
}
</script>
