/// <reference path="../types/index.d.ts" />

import * as tools from 'tools'

// createComponentAndGot
// export {
//   createComponentAndGot
// }
let createComponentAndGot: tools.Common.CreateComponentAndGot
createComponentAndGot = function (name: string, constr: tools.constr) {
  window.customElements.define(name, constr)
  return window.customElements.get(name)
}
