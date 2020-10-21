export const state = () => ({
  token: '',
  refresh: '',
  email: '',
  isLogin: false,
})

export const mutations = {
  login(state, token, refresh, email) {
    state.email = email
    state.token = token
    state.refresh = refresh
    state.isLogin = true
  },
  logout(state) {
    state.isLogin = false
    state.email = ''
    state.token = ''
    state.refresh = ''
  },
}
