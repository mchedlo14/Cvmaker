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
    </div>
  )
}

export default FirstForm