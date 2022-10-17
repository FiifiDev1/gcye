import React, { Component } from 'react'
import Button from './Button'

export class Profile extends Component {
  render() {
    return (
      <div className='profile-container'>
        <span className="material-symbols-outlined profile-avatar" style={{fontSize: '10rem', color: '#b6b6b6',  display: 'flex', justifyContent: 'center', alignItems: 'center'}}> account_circle </span>
         <div className='profile-text-details'>
            <h6 className='profile-fullname'>Lorem ipsum</h6>
            <p className='faint-text'>Financial Analyst • Bipoli Technologies</p>
            <Button style={{justifySelf:'center'}} text='Edit Profile'></Button>
         </div>
      </div>
    )
  }
}
// show image if user has uploaded an image
/* <img className='profile-avatar' src="" alt="" /> }  */

export default Profile