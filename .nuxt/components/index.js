export { default as Login } from '../../components/login.vue'

export const LazyLogin = import('../../components/login.vue' /* webpackChunkName: "components/login" */).then(c => c.default || c)
