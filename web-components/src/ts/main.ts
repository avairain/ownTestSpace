import App from './app.js'
// import { createComponentAndGot } from '../tools/tools'

// console.log(createComponentAndGot)
window.addEventListener('load', () => {
  // const rootWrap = window.document.querySelector('#app')

  class RainRoot extends HTMLElement {
    constructor() {
      super()
      this.init()
    }
    connectedCallback() {
      console.log('app-start')
    }
    init() {
      const shadowRoot = this.attachShadow({ mode: 'closed' })
      window.customElements.define('rain-app', App)
      const el = window.customElements.get('rain-app')
      const slot = document.createElement('div')
      slot.setAttribute('slot', 'slot')
      slot.innerText = 'slotdev'
      const _e = new el()
      const template: HTMLTemplateElement | null = document.querySelector('#template')
      shadowRoot.appendChild(_e)
      shadowRoot.appendChild(template!.content.cloneNode(true))
      // console.dir(shadowRoot)
    }
  }
  window.customElements.define('rain-root', RainRoot)
  // const el = window.customElements.get('rain-root');
  // (<HTMLElement>rootWrap).appendChild(new el())
})