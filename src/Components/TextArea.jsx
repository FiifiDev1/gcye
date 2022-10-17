import React, { Component } from "react";
import InputLabel from "./InputLabel";

export class TextArea extends Component {
  render() {
    return (
      <div className="text-input-control pd-h-max" style={{marginBottom: '18px'}}>
        <InputLabel text="Description"></InputLabel>
        <textarea
          rows="10"
          cols=""
          id="Description"
          className="input-border br text-input-padding text-area"
          type=""
          placeholder="Description"
        />
      </div>
    );
  }
}

export default TextArea;
