import React, { Component } from "react";
import UpcomingEventDetail from "./UpcomingEventDetail";
import image from "../Assets/upcomingEvent.jpeg";

export class UpcomingEvents extends Component {
  render() {
    return (
      <div className="upcoming-event-container br mg-top mg-down" >
        <img className="upcoming-event-image" src={image} alt="" />
        <div
          className="upcoming-event-name-container "
          style={{ borderBottom: "1px solid #E5E5E5" }}
        >
          <p className="upcoming-event-name pd-h-min">Lorem, ipsum dolor.</p>
        </div>
        <div className="upcoming-event-content pd-h-min">
          <UpcomingEventDetail
            icon="calendar_month"
            detailTitleOne="Start Date"
            detailTitleTwo="End Date"
            detailOne="2022-05-22"
            detailTwo="2022-05-22"
          ></UpcomingEventDetail>
          <UpcomingEventDetail
            icon="schedule"
            detailTitleOne="Start Time"
            detailTitleTwo="End Time"
            detailOne="09:00 AM"
            detailTwo="12:00 PM"
          ></UpcomingEventDetail>
          <UpcomingEventDetail
            icon="location_on"
            detailTitleOne="Location"
            detailOne="La Palm Royal Beach Hotel, GhanaM"
          ></UpcomingEventDetail>
          <UpcomingEventDetail
            icon="event_available"
            detailTitleOne="Event Type"
            detailOne="Conference"
          ></UpcomingEventDetail>
          <UpcomingEventDetail
            icon="folder"
            detailTitleOne="Category"
            detailOne="Business & Professional"
          ></UpcomingEventDetail>
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
