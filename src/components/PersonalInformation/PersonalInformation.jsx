import React, { useState } from 'react'
import CvPage from '../CvPage/CvPage'
import FirstForm from '../FirstForm/FirstForm'
import './PersonalInformation.css'
const PersonalInformation = () => {
    const [formCounter,setFormCounter] = useState(1)
  return (
    <div className='personal-information-wrapper'>
        {
            formCounter === 1 ? <FirstForm formCounter={formCounter} setFormCounter={setFormCounter}/>
            :
            formCounter === 2 ? <p>Second Form Component</p>
            :
            <p>Third Form Component</p>
        }
        <CvPage />
    </div>
  )
}

export default PersonalInformation