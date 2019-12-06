import React, { Component } from 'react'

const ABstractStateHOC = c => WrapperComponent => class ABstractStateHOCFn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'ABstractStateHOC',
      color: c,
    }
  }

  changeColor(e) {
    this.setState({
      color: e.target.value,
    })
  }

  render() {
    const newProps = {
      ...this.state,
      changeColor: this.changeColor.bind(this),
    }
    return <WrapperComponent {...newProps} />
  }
}

export default ABstractStateHOC
