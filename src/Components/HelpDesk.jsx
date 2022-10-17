import React, { Component } from 'react'
import HelpDeskForm from './HelpDeskForm';
import Navbar from './Navbar';
import PhoneEmail from './PhoneEmail';


export class HelpDesk extends Component {
  render() {
    return (
      <div className="helpdesk-main-container">
        <Navbar page="Help Desk"></Navbar>
        <div className="content-container mg-top-sm general-padding">
            <PhoneEmail></PhoneEmail>
            <HelpDeskForm></HelpDeskForm>
        </div>
      </div>
    );
  }
}

export default HelpDesk