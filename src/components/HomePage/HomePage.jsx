import React from 'react';
import './HomePage.css';
import backgroundImg from '../../assets/shutterstock_21897737431.png';
import redberryLogo from '../../assets/redberry-logo.svg';
import redberryAgency from '../../assets/home-page-logo.svg';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const Router = useNavigate();
    

  return (
    <div className='home-page-wrapper'>
        <img src={backgroundImg} alt='bg image'/>
        <img src={redberryAgency} alt='agency logo' className='agency-logo'/>
        <div className='logo-wrapper'>
            <div>
                <img src={redberryLogo} alt='redberry logo'/>
            </div>
        </div>

        <button onClick={() => Router('/personal-information')}>რეზიუმეს დამატება</button>
    </div>
  )
}

export default HomePage