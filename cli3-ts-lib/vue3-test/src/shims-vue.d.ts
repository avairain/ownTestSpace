declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// declare module "vue-next/packages/vue" {
//   interface t {
//     [propname: string] : any
//   }
//   const _t: t
//   export default _t
//   export const ref: (a: number | string) => {}
//   export const onMounted: (a: () => void) => {}
//   export const createApp: (a: {}, b: Element | null) => any
// }
