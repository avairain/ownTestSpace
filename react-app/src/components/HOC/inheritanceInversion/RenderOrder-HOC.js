import React from 'react'

const RenderOrderHOC = c => WrappedComponent => class RenderOrderHOCFn extends
  WrappedComponent {
  // componentWillMount() {
  //   // 2
  //   console.log('componentWillMount RenderOrderHOC')
  // }

  // componentDidMount() {
  //   // 2
  //   console.log('componentDidMount RenderOrderHOC')
  // }

  // componentWillUnmount() {
  //   // 2
  //   console.log('componentWillUnmount RenderOrderHOC')
  // }

  changeV() {
    console.log(this)
  }

  render() {
    // 1
    // console.log('render RenderOrderHOC')
    const a = super.render()
    const b = super.render()
    return (
      <div style={{ color: c }}>
        <div
          onClick={() => { this.changeValue() }}
          onKeyPress={this.changeV.bind(this)}
          role="button"
          tabIndex="0"
        >
          {a}
        </div>
        <div>{b}</div>
        {/* <div><WrappedComponent /></div> */}
      </div>
    )
  }
}

export default RenderOrderHOC
