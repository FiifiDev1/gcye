import React, { Component } from "react";
import InputLabel from "./InputLabel";

export class TextInputControl extends Component {
  render() {
    return (
      // alter pd-h-max on help desk form also add margin to props on help desk
      <div className={`text-input-control ` + this.props.margin }>
        <InputLabel text={this.props.label}></InputLabel>
        <input
          id={this.props.label}
          className="text-input input-border br text-input-padding"
          type="text"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default TextInputControl;
