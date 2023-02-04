import React from 'react'
import './AboutForm.css'
const AboutForm = ({formCounter,setFormCounter}) => {
  return (
    <div className='about-from-wrapper'>
      <h2>პირადი ინფო</h2>
      <p>{formCounter}/3</p>
    </div>
  )
}

export default AboutForm