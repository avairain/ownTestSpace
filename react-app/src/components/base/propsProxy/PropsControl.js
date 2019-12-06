import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PropsControlHOC from '../../HOC/propsProxy/PropsControl-HOC'
import COMMONHOC from 'HOC/Common-HOC'

@COMMONHOC
@PropsControlHOC()
class PropsControl extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
  }

  static defaultProps = {
    text: '',
    color: '',
  }

  constructor(props) {
    super(props)
    this.text = props.text
    this.color = props.color
  }

  render() {
    const style = {
      color: this.color,
    }
    return (
      <div style={style}>
        <div>PropsControl</div>
        <div>
          {this.text}
          <span>+</span>
          {this.color}
        </div>
      </div>
    )
  }
}

export default PropsControl
