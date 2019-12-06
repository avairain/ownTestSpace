import * as Vue3 from "vue-next/packages/vue";

const t = {
  setup() {
    const msg = Vue3.ref("hello");
    console.log(msg);
    Vue3.onMounted(() => {
      console.log(`mounted`);
    });
    return {
      msg
    };
  },
  template: `<span>{{ msg }}</span>`
};
const _t = Vue3.createApp(t, document.querySelector("#app"));
_t.mount(t, document.querySelector("#app"));
