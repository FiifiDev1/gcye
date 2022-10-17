import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <button className={"secondary-btn"} style={this.props.style}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
