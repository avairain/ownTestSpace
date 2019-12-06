import { Component, State, h } from '@stencil/core'
// import * as hydrateDocument from '../../../hydrate'
// 
// console.log(hydrateDocument)

@Component({
  tag: 'app-component',
  styleUrl: 'app-component.less',
  shadow: true
})
export class AppComponent {
  constructor () {
    this.changeLast = this.changeLast.bind(this)
  }
  @State() private last: string = `'Don't call me a framework' JS`
  private ref1: HTMLElement | undefined
  changeLast(s: string): void {
    console.log('AppComponent', s)
    this.last = s
    console.dir(this.ref1)
  }

  render () {
    return (
      <div
        ref={(e) => this.ref1 = e}
        part="app-div"
        class="app">
        MyComponent
        <my-component  first="Stencil" last={ this.last } changeLast={this.changeLast} />
        TestRain
      </div>
    )
  }
}
