import React, { Component } from 'react'
import Button from './Button'
import TextArea from './TextArea'
import TextInputControl from './TextInputControl'

export class HelpDeskForm extends Component {
  render() {
    return (
      <div className='helpdesk-form-con mg-top mg-down br'>
        <div className='form-title-con bb pd-h-max'>
                <h2 className='h2'>
                    Lodge Complaint
                </h2>
            </div>        
        <form action="" className='helpdesk-form'>
            <TextInputControl margin="mg-v pd-h-max" label="Issue" placeholder="Issue"></TextInputControl>
            <TextArea></TextArea>
            <div className='pd-h-max'>
                <Button classNames='' style={{background: '#F4A933', color: 'white', width: '100%', border: 'none'}} text="Submit"></Button>
            </div>
        </form>
      </div>
    )
  }
}

export default HelpDeskForm