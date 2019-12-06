/// <reference path="../types/index.d.ts" />
// createComponentAndGot
// export {
//   createComponentAndGot
// }
let createComponentAndGot;
createComponentAndGot = function (name, constr) {
    window.customElements.define(name, constr);
    return window.customElements.get(name);
};
