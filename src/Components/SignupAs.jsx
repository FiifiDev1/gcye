import React, { Component } from "react";
import { secondaryColor, faintColor, borderColor } from "../Utils/colors";
import Signupaslink from "./Signupaslink";

export class SignupAs extends Component {
  render() {
    return (
      <div
        className="member-signup-main-con pd-h-max grid"
        style={{ background: secondaryColor, width: "100%", height: "100vh" }}
      >
        <div className="member-signup-container pd-v-max br mg-v asc">
          <div className="pd-h-max">
            <div className="grid grid-center" style={{ height: "181px" }}>
              <div
                className="grid"
                style={{ gridTemplateColumns: "65px 96px", gridGap: "20px" }}
              >
                <img src="" className="login-logo" alt="" />
                <div
                  className="app-title"
                  style={{
                    borderLeft: "1px solid" + secondaryColor,
                    paddingLeft: "20px",
                    color: faintColor,
                    fontSize: "14px",
                  }}
                >
                  MEMBERSHIP <br /> MANAGEMENT <br /> SYSTEM
                </div>
              </div>
            </div>
            <h1 className="signupas-h1 ">Sign up as</h1> <br></br>
            <div
              style={{ gridTemplateColumns: "1fr 1fr", gridGap: "17px" }}
              className="grid"
            >
              <Signupaslink
                description="Choose this option if You’re self-employed"
                icon="person"
                type="An Individual"
                h1Color="white"
              ></Signupaslink>
              <Signupaslink
                description="Choose this option if You’re a business"
                icon="groups"
                type="An Organization"
                h1Color="#727272"
                style={{
                  color: "#727272",
                  background: "white",
                  border: "1px solid " + borderColor,
                }}
              ></Signupaslink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupAs;
