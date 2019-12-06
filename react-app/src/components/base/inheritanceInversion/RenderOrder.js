import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import COMMONHOC from 'HOC/Common-HOC'
import RenderOrderHOC from '../../HOC/inheritanceInversion/RenderOrder-HOC'

/**
 * by Rain
 * 高阶组件(inheritance inversion)[反向继承]
 * componentWillMount 是从内到外顶替执行(B组件包裹A组件, 两个都有componentWillMount生命钩子, A的生命钩子不会执行) ?
 * render 是从外到内执行
 * componentDidMount 是从内到外顶替执行 ?
 */

@COMMONHOC
@RenderOrderHOC('green')
class RenderOrder extends Component {
  // static propTypes = {
  //   text: PropTypes.string,
  //   color: PropTypes.string,
  // }

  // static defaultProps = {
  //   text: '',
  //   color: '',
  // }

  static _name = 'RenderOrder'

  constructor(props) {
    super(props)
    this.state = {
      text: 'RenderOrder',
    }
    this.changeValue = this.changeValue.bind(this)
  }

  // componentWillMount() {
  //   // 1
  //   console.log('componentWillMount RenderOrder')
  // }

  // componentDidMount() {
  //   // 1
  //   console.log('componentDidMount RenderOrder')
  // }

  // componentWillUnmount() {
  //   // 1
  //   console.log('componentWillUnmount RenderOrder')
  // }

  changeValue() {
    // console.log(this)
    this.setState({
      text: 'changedValue',
    })
  }

  render() {
    // 2
    // console.log('render RenderOrder')
    const { text } = this.state
    return (
      <div>
        <div>{text}</div>
      </div>
    )
  }
}

export default RenderOrder
