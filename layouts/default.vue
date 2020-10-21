<template>
  <div>
    <nav
      v-if="isLogin"
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1>Mooreview</h1>
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
    <b-loading is-full-page :active="loading"></b-loading>
    <section v-if="isLogin" class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
    <login v-else />
  </div>
</template>

<script>
export default {
  components: {
    login: () => import('@/components/login'),
  },
  data() {
    return {
      items: [
        {
          title: 'Movies',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Me',
          icon: 'face',
          to: { name: 'me' },
        },
      ],
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    isLogin() {
      return this.$store.state.auth.isLogin
    },
  },
  created() {
    const token = localStorage.getItem('token')
    const refresh = localStorage.getItem('refresh')
    const email = localStorage.getItem('email')
    if (token && refresh && email) {
      this.$store.commit('auth/login', {
        token,
        refresh,
        email,
      })
    }
  },
}
</script>
