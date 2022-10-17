import React, { Component } from "react";

export class Bubble extends Component {
  render() {
    return (
      <div
        className="bubble"
        style={{ width: "25px", 
                 height: "25px", 
                 borderRadius: "100%", 
                 display: 'grid',
                 justifyItems: 'center',
                 alignItems: "center",
                 background: '#F4A933',
                 color: 'white'
                }}
      >
        1
      </div>
    );
  }
}

export default Bubble;
