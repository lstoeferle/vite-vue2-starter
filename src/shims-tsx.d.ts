import type Vue from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    type IntrinsicElements = Record<string, any>
  }

  interface ImportMeta {
    env: Record<any, string>
  }
}
