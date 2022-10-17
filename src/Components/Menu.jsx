import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Menu extends Component {
    constructor(props){
        super(props)
        
        this.menu = React.createRef('menu')
    }
    // fix issue with menu showing and disappearing

  render() {
    return (
        <div ref={this.menu} id="menu">
        <div id="menu-links" className=''>
            <Link  className='link-item pd' to={"/"} id="Dashboard" >
                <span>Dashboard</span>
            </Link>
            <Link to={"#"} className='link-item pd' id="Resource_Centers">
                <span>Resource Centers</span>
            </Link>
            <Link  className='link-item pd' to={'eventsandprojects'} id="Events__Project">
                <span>Events & Project</span>
            </Link >
            <Link  className='link-item pd' to={"helpdesk"} id="Help_Desk">
                <span >Help Desk</span>
            </Link>
            <Link  className='link-item pd' to={'yessfund'} id="Yess_Fund">
                <span>Yess Fund</span>
            </Link >
            <Link className='link-item pd' to={"#"} id="RenewDues_Payment">
                <span>Renew/Dues Payment</span>
            </Link>
            <Link className='link-item pd' to={"#"} id="Forum_and_member_to_chat">
                <span>Forum and member to chat</span>
            </Link>
        </div>
    </div>
    )
  }
}

export default Menu