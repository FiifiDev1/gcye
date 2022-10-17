import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Signupaslink extends Component {
  render() {
    return (

        <Link to={this.props.tos} style={this.props.style} className="sign-up-as-link br pd-h-max">
          <span className="material-symbols-outlined ase">{this.props.icon}</span>
          <h1 className="h1-mobile asc" style={{ color: this.props.h1Color }}>
            {this.props.type}
          </h1>
          <p>{this.props.description}</p>
        </Link>
    );
  }
}

export default Signupaslink;
