import React, { Component } from "react";
import UpcomingEventDetail from "./UpcomingEventDetail";
import image from '../Assets/upcomingEvent.png'

export class UpcomingEvents extends Component {
  render() {
    return (
      <div className="upcoming-event-container br mg-top mg-down">
        <img className="upcoming-event-image" src={image} alt="" />
        <div className="upcoming-event-name-container " style={{borderBottom: '1px solid #E5E5E5'}}>
          <p className="upcoming-event-name pd-h-min">Lorem, ipsum dolor.</p>
        </div>
        <div className="upcoming-event-content pd-h-min">
            <UpcomingEventDetail></UpcomingEventDetail>
          </div>
      </div>
    );
  }
}

export default UpcomingEvents;
