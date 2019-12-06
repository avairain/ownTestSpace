import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PropsProxyHOC from 'HOC/propsProxy/PropsProxy-HOC'
import COMMONHOC from 'HOC/Common-HOC'
import PropsControlHOC from '../../HOC/propsProxy/PropsControl-HOC'

/**
 * by Rain
 * 高阶组件(props proxy)[属性代理]是从外到内依次渲染(执行render)，挂载完成(执行componentDidMount)的顺序是从内到外
 *          卸载(执行componentWillUnmount)是从外到内
 */

@COMMONHOC
@PropsProxyHOC
@PropsControlHOC('green')
class PropsControl2 extends Component {
  static propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    clickHandler: PropTypes.func,
  }

  static defaultProps = {
    color: '',
    text: '',
    clickHandler: () => {},
  }

  // constructor(props) {
  //   super(props)
  //   const { color, text } = props
  //   this.clickHandler = props.clickHandler
  //   this.state = { color, text }
  //   console.log(this.clickHandler)
  // }

  // clickHandler() {
  //   const { color, text, clickHandler } = this.props
  //   console.log(color, text)
  //   console.log(clickHandler)
  //   console.log(this)
  //   // clickHandler()
  //   // this.props.clickHandler({ color, text })
  // }

  // componentWillMount() {
  //   // first
  //   console.log('PropsControl2 WillMount')
  // }

  // componentDidMount() {
  //   // first
  //   console.log('PropsControl2 DidMount')
  // }

  // componentWillUnmount() {
  //   // third
  //   console.log('PropsControl2 WillUnmount')
  // }

  render() {
    const { text, color, clickHandler } = this.props
    // console.log(this.clickHandler())
    // third
    // console.log('PropsControl2 render')
    // console.log(this)
    return (
      <div style={{ color }}>
        <div>
          <span>Text</span>
          <br />
          <span
            role="button"
            tabIndex="0"
            onKeyPress={() => clickHandler()}
            onClick={() => clickHandler()}
          >
            {text}
          </span>
        </div>
      </div>
    )
  }
}

export default PropsControl2
