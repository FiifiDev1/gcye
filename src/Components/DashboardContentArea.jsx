import React, { Component } from 'react'
import Tab from './Tab'
import UpcomingEvents from './UpcomingEvents'

export class DashboardContentArea extends Component {
  render() {
    return (
      <div className='dashboard-content-area'>
        <div className='tab-container' >
          <Tab title="Upcoming Events" status={true}></Tab>  
          <Tab title="My Contributions" status={false}></Tab>  
        </div>
        <div className='general-padding'>
          <UpcomingEvents/>
          <UpcomingEvents/>
        </div>
      </div>
    )
  }
}

export default DashboardContentArea