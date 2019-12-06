import Vue, { VNode } from "vue";

declare global {
  const DEVOPS_ENV: string;
  let Vue3: any
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
