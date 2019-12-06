import React, { Component } from 'react'

const PropsProxyHOC = WrappedComponent => class PropsProxyHOCFn extends Component {
  // componentWillMount() {
  //   // secend
  //   console.log('PropsProxyHOC WillMount')
  // }

  // componentDidMount() {
  //   // secend
  //   console.log('PropsProxyHOC DidMount')
  // }

  // componentWillUnmount() {
  //   // first
  //   console.log('PropsProxyHOC WillUnmount')
  // }

  render() {
    // first
    // console.log('PropsProxyHOC render')
    const newProps = {
      text: 'PropsProxyHOC-WrappedComponent',
      color: 'yellow',
    }
    // 可以用其他元素包裹
    const code = (
      <div>
        <div>PropsProxyHOC</div>
        <WrappedComponent {...this.props} {...newProps} />
      </div>
    )
    return code
  }
}

export default PropsProxyHOC
