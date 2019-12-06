<template>
  <div>vuet</div>
</template>

<script>
//  import  from ''

export default {
  // el: '', // 1
  // name: '', // 2
  // parent: null, // 2 vm
  // functional: false, // 3
  // delimiters: [], // 4 模板修改器 {{}} ==> ${} ===> ['${', '}']
  // comments: false, // 4
  // components: {}, // 5
  // directives: {}, // 5
  // filters: {}, // 5
  // extends: {} || function, // 6
  // mixins: [], // 6
  // inheritAttrs: true, // 7 父组件挂在子组件根元素上的属性
  // model: {}, // 7
  // [props || propsData]: {}, // 7
  data () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
  // [template | render]: ``,
  // renderError: function,
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.Index)
  }
}
</script>

<style lang="less">

</style>
