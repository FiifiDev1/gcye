import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import EventsProjects from './Components/EventsProjects'
import HelpDesk from './Components/HelpDesk'
import MemberLogin from './Components/MemberLogin'
import MemberSignup from './Components/MemberSignup'
import Menu from './Components/Menu'
import YessFund from './Components/YessFund'

 class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={ Dashboard }></Route>
          <Route path='/eventsandprojects' component={ EventsProjects }></Route>
          <Route path='/helpdesk' component={ HelpDesk }></Route>
          <Route path='/yessfund' component={ YessFund }></Route> 
          <Route path='/membersignup' component={ MemberSignup }></Route> 
          <Route path='/memberlogin' component={ MemberLogin }></Route> 
          <Route path='/menu' component={ Menu }></Route> 
        </Switch>
      </Router>
    )
  }
}

export default App

