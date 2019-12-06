import React, { Component } from 'react'

const CommonHOC = WrapperComponent => class CommonHOCFn extends Component {
  // componentDidMount() {
  //   console.log('componentDidMount CommonHOC')
  // }

  render() {
    // console.log('render CommonHOC')
    return (
      <div>
        <WrapperComponent {...this.props} />
        <hr />
      </div>
    )
  }
}

export default CommonHOC
