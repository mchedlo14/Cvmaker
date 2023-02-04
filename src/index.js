import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PersonalInformation from './components/PersonalInformation/PersonalInformation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/personal-information' element={<PersonalInformation />}/>
    </Routes>
  </Router>
  
);


