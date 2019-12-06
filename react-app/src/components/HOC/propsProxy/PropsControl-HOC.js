import React, { Component } from 'react'

const PropsControlHOC = c => WrapperComponent => class PropsControlHOCFn extends Component {
  // componentWillMount() {
  //   // third
  //   console.log('PropsControlHOC WillMount')
  // }

  // componentDidMount() {
  //   // third
  //   console.log('PropsControlHOC DidMount')
  // }

  // componentWillUnmount() {
  //   // secend
  //   console.log('PropsControlHOC WillUnmount')
  // }

  clickFn(obj = {}) {
    const { color, text } = obj
    console.log(text, color)
    console.log('clickFn', this)
  }

  render() {
    // secend
    // console.log('PropsControlHOC render')
    const newProps = {
      text: 'PropsControl-HOC-WrapperComponent',
      color: c || 'red',
      clickHandler: this.clickFn.bind(this),
    }
    return <WrapperComponent {...this.props} {...newProps} />
  }
}

export default PropsControlHOC
