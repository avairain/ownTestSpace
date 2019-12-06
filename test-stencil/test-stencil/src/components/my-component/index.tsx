import { Component, Prop, /* State, */ h, Watch } from '@stencil/core';
import { format } from '../../utils/utils';
// import TestRain from '../test-rain/test-rain';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  // shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string = '';

  /**
   * The middle name
   */
  @Prop() middle: string = '';

  /**
   * The last name
   */
  @Prop() last: string = '';
  
  @Prop() changeLast: (s: string) => void = () => {}

  // @State() private string: string
  @Watch('last')
  handle () {
    this.getText()
  }
  private getText(): string {
    // this.string = format(this.first, this.middle, this.last);
    return format(this.first, this.middle, this.last);
  }

  private changeTest(): void {
    this.changeLast(this.last + 'new string')
    console.log(this.last)
    // this.getText()
  }

  componentDidUpdate(): void {
    console.log(this)
    // this.getText()
  }

  componentWillLoad(): void {
    this.getText() 
  }

  render() {
    const string = this.getText()
    return (<div part="my-div">
      Hello, World! I'm { string  }
      <div onClick={() => this.changeTest()}>changeTest</div>
      {/* <test-rain /> */}
      <test-rain part="test-component">
        <div slot="h">slot1</div>
        <div slot="f">slot2</div>
        <div>default slot</div>
      </test-rain>
    </div>)
  }
}
