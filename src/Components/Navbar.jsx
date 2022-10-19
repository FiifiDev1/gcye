import React, { Component } from "react";
import Menu from "./Menu";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.navbar = React.createRef();

    this.state = {
      showMenu: false,
    };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
    return;
  };

  render() {
    return (
      <nav ref={this.navbar} className="navbar general-padding">
        <span
          onClick={() => {
            this.toggleMenu();
          }}
          className="material-symbols-outlined menu"
          style={{ cursor: "pointer" }}
        >
          {this.state.showMenu ? "close" : "menu"}
        </span>
        <h3 className="h1-mobile" style={{justifySelf: 'start'}}>{this.props.page}</h3>
        <span
          className="avatar material-symbols-outlined"
          style={{
            fontSize: "1.5rem",
            color: "#727272",
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {" "}
          search{" "}
        </span>
        <span
          className="avatar material-symbols-outlined"
          style={{
            fontSize: "1.5rem",
            color: "#727272",
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {" "}
          notifications{" "}
        </span>
        <span
          className="avatar material-symbols-outlined"
          style={{
            fontSize: "2rem",
            color: "#727272",
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {" "}
          person{" "}
        </span>
        {this.state.showMenu ? <Menu></Menu> : null}
      </nav>
    );
  }
}
// show image if the user has already uploaded it
/* <img className='avatar' src='' alt="" /> */

export default Navbar;
