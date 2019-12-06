import React from 'react'

const InheritanceInversionHOC = c => WrappedComponent => class InheritanceInversionHOCFn extends
  WrappedComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ color: c }}>
        <div>InheritanceInversionHOC</div>
        <div>{super.render()}</div>
      </div>
    )
  }
}

export default InheritanceInversionHOC
