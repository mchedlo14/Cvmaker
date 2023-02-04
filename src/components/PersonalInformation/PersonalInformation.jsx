import React from 'react'
import CvPage from '../CvPage/CvPage'
import FirstForm from '../FirstForm/FirstForm'
import './PersonalInformation.css'
const PersonalInformation = () => {
  return (
    <div className='personal-information-wrapper'>
        <FirstForm />
        <CvPage />
    </div>
  )
}

export default PersonalInformation