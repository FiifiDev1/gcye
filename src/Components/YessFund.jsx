import React, { Component } from "react";
import { Navbar } from "./Navbar";
import Button from "./Button";
import { secondaryColor } from "../Utils/colors";
import MyTable from "./MyTable";

export class YessFund extends Component {
  render() {
    return (
      <div className="yess-fund-main-container">
        <Navbar page="Yess Fund"></Navbar>
        <div className="total-contributions-container mg-top-sm">
          <div className="total-contributions">
            <div className="amount-and-message">
              <h1 className="amount-text">¢2462.00</h1>
              <p className="stc fs-small">Your Total Contributions</p>
            </div>
            <Button
              style={{
                background: secondaryColor,
                color: "white",
                border: "none",
                alignSelf: "start",
              }}
              text="Contribute"
            ></Button>
          </div>

          <div
            className="pd-h-max "
            style={{ height: "370px", overflowY: "auto" }}
          >
            <MyTable></MyTable>
          </div>
        </div>

        <div className="total-contributions-container mg-top-sm">
          <div className="total-contributions">
            <div className="amount-and-message">
              <h1 className="amount-text" style={{ color: "#33AAF4" }}>
                ¢201.00
              </h1>
              <p className="stc fs-small">Your Total Contributions</p>
            </div>
            <div style={{display: 'flex', gap: '16px', alignSelf: 'start' }}>
              <Button
                style={{
                  background: "#33AAF4",
                  color: "white",
                  border: "none",
                  alignSelf: "start",
                }}
                text="Repay Loan"
              ></Button>
              <Button
             
                text="Repay Loan"
              ></Button>
            </div>
          </div>

          <div
            className="pd-h-max "
            style={{ height: "370px", overflowY: "auto", maxHeight: '370px' }}
          >
            <MyTable></MyTable>
          </div>
        </div>
      </div>
    );
  }
}

export default YessFund;
