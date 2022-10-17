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
        <div ref={this.menu} id="iPhone_13_12_Pro_Max__10">
        <div id="Group_4992">
            <Link  className='link-item pd-v-max' to={"/"} id="Dashboard">
                <span>Dashboard</span>
            </Link>
            <Link to={"#"} className='link-item pd-v-max' id="Resource_Centers">
                <span>Resource Centers</span>
            </Link>
            <Link  className='link-item pd-v-max'  to={'eventsandprojects'} id="Events__Project">
                <span>Events & Project</span>
            </Link >
            <Link  className='link-item pd-v-max' to={"helpdesk"} id="Help_Desk">
                <span className='link-item'>Help Desk</span>
            </Link>
            <Link  className='link-item pd-v-max' to={'yessfund'} id="Yess_Fund">
                <span>Yess Fund</span>
            </Link >
            <Link className='link-item pd-v-max' to={"#"} id="Feedback_Center">
                <span>Feedback Center</span>
            </Link>
            <Link className='link-item pd-v-max' to={"#"} id="RenewDues_Payment">
                <span>Renew/Dues Payment</span>
            </Link>
            <Link className='link-item pd-v-max' to={"#"} id="Forum_and_member_to_chat">
                <span>Forum and member to chat</span>
            </Link>
        </div>
    </div>
    )
  }
}

export default Menu