<template>
  <div>
    <slot name="btn-inner"></slot>
    <!-- <slot></slot> -->
    <!-- <slot></slot> -->
    <hr>
    <demo @nativeClick="clickDemo">
      <demo-child :defaultP="2" slot="demo-child">demo demo-child inner</demo-child>
      <!-- <div>123</div> -->
      <!-- <div>1</div> -->
      <template slot="demo-scope-slot" slot-scope="propss">
        <div><span>{{propss}}</span></div>
      </template>
      <template slot-scope="propss">
        <div><span :class="[$style.red]">{{propss}}</span></div>
      </template>
      <!-- <slot name="demo-slot">123</slot> -->
      <div><slot>122</slot></div>
    </demo>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('demo-child', {
  props: {
    defaultP: {
      type: [String, Number],
      required: true,
      validator: function (value) {
        return [1, 2, 3, 4].find(v => v === value)
      }
    }
  },
  data: function () {
    return {
      a: 1
    }
  },
  methods: {
    clickDemoChild: function (e) {
      e.stopPropagation()
      console.log('click demo child')
      // this.a ++
      this.$emit('clickDemo1')
    }
  },
  // template: `<span>demo-child${this.a}</span>`
  render: function (createElement) {
    // console.log(123)
    // console.log(this.$slots)
    return createElement('div', {
      domProps: {
        // innerHTML: 'demo-child' + this.a
      },
      props: {
        myProp: 'bar'
      },
      on: {
        click: this.clickDemoChild
      }
    }, [...this.$slots.default, this.defaultP, createElement('div', {
      // 在数据对象中传递 `scopedSlots`
      // 格式：{ name: props => VNode | Array<VNode> }
      scopedSlots: {
        default: function (props) {
          console.log(props)
          return createElement('span', props.text)
        }
      }
    })])
  }
})
Vue.component('demo', {
  data: function () {
    return {
      b: 2
    }
  },
  render: function (createElement) {
    console.log(this.$slots)
    return createElement('demo-child',
      {
        domProps: {
          // innerHTML: 'demo #demo innerHTML'
        },
        attrs: {
          id: 'demow'
        },
        props: {
          myProp: 'bar',
          defaultP: 1
        },
        on: {
          clickDemo1: this.nativeClick
        },
        nativeOn: {
          click: this.nativeClick
        },
        scopedSlots: {
          default: props => {
            console.log(props)
            return createElement('span', props.myProp)
          }
        },
        slot: 'demo-slot'
      },
      [this.$slots['demo-child'][0], createElement('br'), 'after demo demo-child', this.$scopedSlots.default({myProp: this.myProp || 1}), this.$scopedSlots['demo-scope-slot']({ myProp: 'bar' }), ...this.$slots.default
        /* createElement('div', {
          component: {
            demoChild: demoChild
          },
          domProps: {
            // innerHTML: 'demo #demo innerHTML'
          },
          attrs: {
            id: 'demo'
          },
          props: {
            myProp: 'bar'
          },
          on: {
            click: this.clickDemo
          }
          // nativeOn: {
          //   clickDemoChild: this.nativeClick
          // },
          scopedSlots: {
            'demo-slot': props => {
              console.log(props)
              return createElement('span', 123)
            }
          }
          // slot: 'demoChild'
        }, 'demo #demo'), // createElement('<demo-child slot="demo-child">1</demo-child>', 123),
        createElement('span', 'obj after innerHTML' + this.b) */
        // createElement('br'),
        // ...this.$slots.default
      ])
  },
  methods: {
    clickDemo (e) {
      console.log('click demo')
      e.stopPropagation()
      this.$emit('nativeClick')
    },
    clickDemow () {
      console.log('click demow')
      // this.$emit('nativeClick')
    },
    nativeClick () {
      console.log('native click')
    }
  }
})

export default {
  mixins: [],
  inheritAttrs: false,
  components: {},
  data () {
    return {}
  },
  computed: {},
  mounted () {
    // console.log(this.$slots)
    console.log(this)
  },
  methods: {
    clickDemo () {
      console.log('click demo（parent）')
    }
  },
  watch: {}
}
</script>

<style lang="less" module>
.red {
  color: red
}
</style>
