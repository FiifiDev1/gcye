import React, { Component } from "react";
import Button from "./Button";
import { secondaryColor, faintColor, borderColor } from "../Utils/colors";
import TextInputControl from "./TextInputControl";

export class MemberSignup extends Component {
  render() {
    return (
      <div
        className="member-signup-main-con pd-h-max grid"
        style={{ background: secondaryColor, width: "100%", height: "auto" }}
      >
        <div className="member-signup-container pd-v-max br mg-v">
          <div className="pd-h-max">
            <div className="grid grid-center" style={{height: '181px'}}>
              <div className="grid" style={{gridTemplateColumns: '65px 96px', gridGap: '20px'}}>
                <img src="" className="login-logo" alt="" />
                <div className="app-title" style={{borderLeft: '1px solid' + secondaryColor, paddingLeft: '20px', color: faintColor, fontSize: '14px'}}>
                    MEMBERSHIP <br/> MANAGEMENT <br/> SYSTEM
                </div>
              </div>
            </div>

            <TextInputControl margin="mg-v" label="Full Name" placeholder='Full Name'></TextInputControl>
            <TextInputControl margin="mg-v" label="Email" placeholder='Email'></TextInputControl>
            <TextInputControl margin="mg-v" label="Phone" placeholder='Phone'></TextInputControl>
            <TextInputControl margin="mg-v" label="Business" placeholder='Business'></TextInputControl>
            <TextInputControl margin="mg-v" label="Password" placeholder='Password'></TextInputControl>
            <TextInputControl margin="mg-down-sm" label="Confirm Password" placeholder='Confirm Password'></TextInputControl>
            <Button style={{background: secondaryColor, color:'white', border: 'none', width: '100%', marginBottom: '7px'}} text="Sign up"></Button>
            <Button style={{ width: '100%' , marginBottom: '7px', border: '1px solid' + borderColor}} text="Login"></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberSignup;
