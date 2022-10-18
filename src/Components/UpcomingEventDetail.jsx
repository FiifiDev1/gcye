import React, { Component } from "react";

export class UpcomingEventDetail extends Component {
  render() {
    return (
      <div className="grid pd-v-max" style={{height: 'auto', gridTemplateColumns: 'auto 1fr', gridTemplateRows: '19px 19px', gridGap: '10.5px'}}>
        <span className="material-symbols-outlined">calendar_month</span>
        <div className="asc grid">
            <h4 style={{fontSize: '14px'}}>Start Date</h4>
        </div>
      </div>
    );
  }
}

export default UpcomingEventDetail;
