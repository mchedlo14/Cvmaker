import React from 'react'
import AboutForm from '../AboutForm/AboutForm'
import './FirstForm.css'
import leftArrowIcon from '../../assets/left-arrow.svg'
import { useNavigate } from 'react-router-dom'
const FirstForm = ({formCounter,setFormCounter}) => {
  const Router = useNavigate()
  const backToHomePage = () => {
    Router('/')
  }
  return (
    <div className='first-form-wrapper'>
      <AboutForm formCounter={formCounter} setFormCounter={setFormCounter}/>

      <div className='nav-icon-wrapper' onClick={backToHomePage}>
        <img src={leftArrowIcon} alt='arrow icon'/>
      </div>

      <div className='information-form'>
        <div className='first-container'>
          <div className='name-container'>
            <h2>სახელი</h2>
            <input placeholder='ანზორ'/>
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>

          <div className='name-container'>
            <h2>გვარი</h2>
            <input placeholder='მუმლაზე'/>
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FirstForm