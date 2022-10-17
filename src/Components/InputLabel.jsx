import React, { Component } from 'react'

export class InputLabel extends Component {
  render() {
    return (
        <label htmlFor={this.props.text} className='label'>
            {this.props.text}
        </label>
    )
  }
}

export default InputLabel