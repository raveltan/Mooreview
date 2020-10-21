import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _40539dd7 = () => interopDefault(import('../pages/me.vue' /* webpackChunkName: "pages/me" */))
const _5352e642 = () => interopDefault(import('../pages/review/_id.vue' /* webpackChunkName: "pages/review/_id" */))
const _24070363 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/me",
    component: _40539dd7,
    name: "me"
  }, {
    path: "/review/:id?",
    component: _5352e642,
    name: "review-id"
  }, {
    path: "/",
    component: _24070363,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
