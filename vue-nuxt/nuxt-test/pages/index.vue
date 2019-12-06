<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-test
      </h1>
      <h2 class="subtitle">
        My dandy Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <LL></LL>
    <div @mouseup="clickLL">{{ authUser }}</div>
    <nuxt-link to="/123">vuet</nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LL from '@/Logo.vue'
import { mapMutations, mapGetters } from 'vuex'

console.log(NODE_SET)
export default {
  components: {
    Logo,
    LL
  },
  computed: {
    ...mapGetters({
      'authUser': 'authUser',
      'authUserc': 'child/authUser'
    })
  },
  mounted () {
    this.setUser(321)
  },
  methods: {
    ...mapMutations({
      setUser: 'SET_USER'
    }),
    clickLL () {
      this.setUser(this.authUser + 1)
      console.log('====================================');
      console.log(this);
      console.log('====================================');
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
