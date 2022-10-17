import React, { Component } from 'react'
import Navbar from './Navbar'
import UpcomingEvents from './UpcomingEvents'

export class EventsProjects extends Component {
  render() {
    return (
      <div className='events-and-projects-main-container'>
        <Navbar page="Events & Projects"></Navbar>        
        <div className='events-and-projects-container mg-top-sm general-padding'>
            <UpcomingEvents></UpcomingEvents>
        </div>
      </div>
    )
  }
}

export default EventsProjects