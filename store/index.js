export const state = () => ({
  loading: false,
})

export const mutations = {
  loading(state, to) {
    state.loading = to
  },
}
