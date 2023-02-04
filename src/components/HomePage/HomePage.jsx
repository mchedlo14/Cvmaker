import React from 'react';
import './HomePage.css';
import backgroundImg from '../../assets/shutterstock_21897737431.png';
import redberryLogo from '../../assets/redberry-logo.svg';
import redberryAgency from '../../assets/home-page-logo.svg';
const HomePage = () => {
  return (
    <div className='home-page-wrapper'>
        <img src={backgroundImg} alt='bg image'/>
        <img src={redberryAgency} alt='agency logo' className='agency-logo'/>
        <div className='logo-wrapper'>
            <div>
                <img src={redberryLogo} alt='redberry logo'/>
            </div>
        </div>

        <button>რეზიუმეს დამატება</button>
    </div>
  )
}

export default HomePage