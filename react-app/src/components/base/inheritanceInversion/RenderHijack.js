import React, { Component } from 'react'
import PropTypes from 'prop-types'
import COMMONHOC from 'HOC/Common-HOC'
import RenderHijackHOC from '../../HOC/inheritanceInversion/RenderHijackHOC'
// import RenderOrder from './RenderOrder'
// import FuncComponent from './FuncComponent'

@COMMONHOC
@RenderHijackHOC('red')
class RenderHijack extends Component {
  static propTypes = {
    value: PropTypes.string,
  }

  static defaultProps = {
    value: '',
  }

  constructor(props) {
    super(props)
    const { value } = props
    console.log(this.props)
    console.log(value)
    console.log(props)
    this.state = {
      value: value || '',
    }
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    const { value } = this.props
    const { value: val } = this.state
    console.log(this.props)
    console.log(val)
    return (
      <div content={value}>
        {/* {value}
        <div><input value={value} readOnly disabled /></div>
        <div>{value}</div>
        <div>RenderHijack</div>
        <div><RenderOrder /></div>
        <div><FuncComponent /></div> */}
      </div>
    )
  }
}

export default RenderHijack
