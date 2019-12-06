import App from './app.js';
import { createComponentAndGot } from '../tools/tools';
console.log(createComponentAndGot);
window.addEventListener('load', () => {
    const rootWrap = window.document.querySelector('#app');
    class RainRoot extends HTMLElement {
        constructor() {
            super();
            this.init();
        }
        connectedCallback() {
            console.log('app-start');
        }
        init() {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            window.customElements.define('rain-app', App);
            const el = window.customElements.get('rain-app');
            shadowRoot.appendChild(new el());
        }
    }
    window.customElements.define('rain-root', RainRoot);
    const el = window.customElements.get('rain-root');
    rootWrap.appendChild(new el());
});
