<template>
  <div><input v-bind="$attrs" v-on="inputListeners" :value="val" type="text"></div>
</template>

<script>
// import  from ''

export default {
  mixins: [],
  components: {},
  props: ['value'],
  data () {
    return {
      val: this.value || ''
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            // vm.
            vm.$emit('input', event.target.value)
            vm.val = event.target.value
          }
        }
      )
    }
  },
  mounted () {},
  methods: {},
  watch: {
  }
}
</script>

<style scoped>

</style>
