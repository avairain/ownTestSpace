import React, { Component } from 'react'
import PropType from 'prop-types'
import COMMONHOC from 'HOC/Common-HOC'
import InheritanceInversionHOC from '../../HOC/inheritanceInversion/InheritanceInversion-HOC'

@COMMONHOC
@InheritanceInversionHOC('red')
class InheritanceInversion extends Component {
  static propTypes = {
    color: PropType.string,
    text: PropType.string,
  }

  static defaultProps = {
    color: '',
    text: '',
  }

  render() {
    const { text, color } = this.props
    return (
      <div style={{ color }}>
        <div>InheritanceInversion</div>
        <div>{text}</div>
      </div>
    )
  }
}

export default InheritanceInversion
