import React, { Component } from 'react'
import PropTypes from 'prop-types'
import COMMONHOC from 'HOC/Common-HOC'
import AbstractStateHOC from '../../HOC/propsProxy/AbstractState-HOC'

@COMMONHOC
@AbstractStateHOC('red')
class AbstractState extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    changeColor: PropTypes.func,
  }

  static defaultProps = {
    text: '',
    color: '',
    changeColor: () => {},
  }

  render() {
    const { text, color, changeColor } = this.props
    return (
      <div style={{ color }}>
        <div>AbstractState</div>
        <div>{text}</div>
        <div>
          <span>change color</span>
          <span><input onChange={changeColor} /></span>
        </div>
      </div>
    )
  }
}

export default AbstractState
