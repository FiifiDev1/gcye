import React, { Component } from "react";
import Tab from "./Tab";
import UpcomingEvents from "./UpcomingEvents";
import { upcomingEvents } from "../Data/upcomingEvents";

export class DashboardContentArea extends Component {
  constructor(props){
    super(props);

    this.state = {
      selected: null
    }
  }

  toggle = (item) => {
    if(this.state.selected === item){
      return this.setState({selected: null})
    }
    console.log(true)
    this.setState({selected: item})
  }
  
  render() {
    return (
      <div className="dashboard-content-area">
        <div className="tab-container">
          <Tab title="Upcoming Events" status={true}></Tab>
          <Tab title="My Contributions" status={false}></Tab>
        </div>
        <div className="general-padding">
          {upcomingEvents.map((event, i) => (
            <UpcomingEvents
              onclick={()=> this.toggle(i)}
              description={event.description}
              startDate={event.startDate}
              endDate={event.endDate}
              startTime={event.startTime}
              endTime={event.endTime}
              location={event.location}
              eventType={event.eventType}
              category={event.category}
              showContent={this.state.selected}
              item={i}
            key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default DashboardContentArea;
