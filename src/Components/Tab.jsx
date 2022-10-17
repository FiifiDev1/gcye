import React, { Component } from 'react'
// import Bubble from './Bubble'

export class Tab extends Component {
  render() {
    return (
      <div className={ this.props.status ? 'tab active-tab' : 'tab closed-tab'}>
        {this.props.title}
      </div>
    )
  }
}

// toggle border and display type when active

export default Tab