import React, { Component } from "react";

export class PhoneEmail extends Component {
  render() {
    return (
      <div className="phone-and-email-container br mg-top box-shadow" >
        <div style={{ borderBottom: "1px solid #E5E5E5", display: "grid" }}>
          <div
            className="phone-and-email-header"
            style={{
              justifySelf: "center",
              alignSelf: "center",
              fontWeight: "700",
              fontSize: "26px",
              color: "#F4A933",
            }}
          >
            Email and Phone
          </div>
        </div>
        <div className="phone-and-email">
            <div style={{display: 'grid', gridGap: '13.7px'}}>
                <div
                    style={{ 
                        display: "inline-flex", 
                        alignItems: "center", gap: "5px",
                    }}
                >
                    <span className="material-icons mail-icon">mail_outline</span>{" "}
                    <span className="ptc">helpdesk@gcye.com</span>
                </div>
                <div style={{
                    justifySelf: 'center',
                    display: "inline-flex", 
                    alignItems: "center", gap: "5px"
                    }}>
                    <span className="material-icons mail-icon">call</span>{" "}
                    <span className="ptc">+233 (0) 12345678</span>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneEmail;
