import { Component, Build, h } from '@stencil/core'

@Component({
  tag: 'test-rain',
  styleUrl: 'test-rain.css',
  // shadow: true
})
export class TestRain {
  private string: string = 'test'

  componentDidLoad (): void {
    console.log(this)
    console.log(Build)
  }

  componentOnReady():void {
    console.log('componentOnReady')
  }

  render () {
    return (
      <div>
        { this.string }
        <slot name="h"></slot>
        <slot/>
        <slot name="f"></slot>
      </div>
    )
  }
}
