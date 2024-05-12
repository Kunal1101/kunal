import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";


const UserInputBox = () => {
  return (
    <div className='userInputBox'>
      <h2>Say Hi</h2>
      <p className='socialLinks'>
        <span><IoMailUnreadOutline className='me-2' />Kunal.codecraft@gmail.com</span>
      </p>
      <p className='description'>Want to create something awesome? Or, you have any query? Drop an email.</p>
      <a title='Lets Connect' href="https://calendly.com/kunalmishra8127/30min?month=2024-05" target='_blank' className='meetingBtn'>Let's Connect</a>
    </div>
  )
}

export default UserInputBox