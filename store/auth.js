export const state = () => ({
  token: '',
  refresh: '',
  email: '',
  isLogin: false,
})

export const mutations = {
  login(state, data) {
    state.email = data.email
    state.token = data.token
    state.refresh = data.refresh
    state.isLogin = true
  },
  logout(state) {
    state.isLogin = false
    state.email = ''
    state.token = ''
    state.refresh = ''
  },
}
