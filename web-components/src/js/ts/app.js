class App extends HTMLElement {
    constructor() {
        super();
        this.init();
    }
    init() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        console.log(shadowRoot);
    }
}
export default App;
