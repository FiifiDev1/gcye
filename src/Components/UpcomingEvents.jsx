import React, { Component } from "react";
import UpcomingEventDetail from "./UpcomingEventDetail";
import image from "../Assets/upcomingEvent.jpeg";

export class UpcomingEvents extends Component {
  render() {
    return (
      <div onClick={this.props.onclick} className="upcoming-event-container br mg-top mg-down" >
        <img className="upcoming-event-image" src={image} alt="" />
        <div
          className="upcoming-event-name-container "
          style={{ borderBottom: "1px solid #E5E5E5"}}
        >
          <p className="upcoming-event-name pd-max ">{this.props.description}</p>
        </div>
        <div className={this.props.showContent === this.props.item ? "upcoming-event-content-show pd-h-min" : "upcoming-event-content-hide pd-h-min"}>
          <UpcomingEventDetail
            icon="calendar_month"
            detailTitleOne="Start Date"
            detailTitleTwo="End Date"
            detailOne={this.props.startDate}
            detailTwo={this.props.endDate}
          ></UpcomingEventDetail>
          <UpcomingEventDetail
            icon="schedule"
            detailTitleOne="Start Time"
            detailTitleTwo="End Time"
            detailOne={this.props.startTime}
            detailTwo={this.props.endTime}
          ></UpcomingEventDetail>
          <UpcomingEventDetail
            icon="location_on"
            detailTitleOne="Location"
            detailOne={this.props.location}
          ></UpcomingEventDetail>
          <UpcomingEventDetail
            icon="event_available"
            detailTitleOne="Event Type"
            detailOne={this.props.eventType}
          ></UpcomingEventDetail>
          <UpcomingEventDetail
            icon="folder"
            detailTitleOne="Category"
            detailOne={this.props.category}
          ></UpcomingEventDetail>
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
