<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { mapState } from 'vuex'

@Component({
  components: {
    HelloWorld,
  },
  computed: mapState(['helloWordMsg'])
})
export default class Home extends Vue {
  private helloWordMsg: string
  get msg () : string {
    return this.helloWordMsg
  }
}
</script>
