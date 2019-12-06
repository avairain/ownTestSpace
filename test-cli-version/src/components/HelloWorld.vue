<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <input v-model.lazy="v">
    v: {{v}}
    <d-input v-model="iv" v-on:focus="focusInput"/> <br>
    iv: {{iv}}

    <hr>
    <d-button a="a" title="d-button">
      <span>{{123}}</span>
      <d-button-inner slot="btn-inner"></d-button-inner>
    </d-button>
    <temp-jade></temp-jade>
  </div>
</template>

<script>
import dInput from './dInput.vue'
import dButton from './dButton.vue'
import dButtonInner from './dButtonInner.vue'
import tempJade from './tempJade.vue'

export default {
  name: 'HelloWorld',
  components: {dInput, dButton, dButtonInner, tempJade},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      v: '',
      iv: ''
    }
  },
  methods: {
    focusInput (v) {
      console.log(v, this.iv)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
