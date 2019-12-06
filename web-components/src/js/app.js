class App extends HTMLElement {
    constructor() {
        super();
        this.init();
    }
    connectedCallback() {
        console.log(this);
    }
    init() {
        // const shadowRoot = this.attachShadow({ mode: 'open' });
        // console.dir(shadowRoot)
        // shadowRoot.innerHTML = `<span>123</span>`
        const span = document.createElement('span');
        span.innerText = 'span ';
        this.appendChild(span);
        this.append(' spanAfter');
        // this.attachShadow({ mode: 'closed' })
    }
}
export default App;
