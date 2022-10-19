import React, { Component } from 'react'
// import Bubble from './Bubble'

export class Tab extends Component {
  render() {
    return (
      <button style={{background: 'white'}} className={ this.props.status ? 'tab active-tab' : 'tab closed-tab'}>
        {this.props.title}
      </button>
    )
  }
}

// toggle border and display type when active

export default Tab