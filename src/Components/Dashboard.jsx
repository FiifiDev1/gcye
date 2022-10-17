import React, { Component } from 'react'
import DashboardContentArea from './DashboardContentArea'
import Navbar from './Navbar'
import Profile from './Profile'


export class Dashboard extends Component {
  render() {
    return (
        <div className=''>
            <Navbar page='Dashboard'></Navbar>
            <Profile></Profile>
            <DashboardContentArea></DashboardContentArea>
        </div>
    )
  }
}

export default Dashboard