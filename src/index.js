import React  from 'react';
import ReactDOM from 'react-dom';

// import {BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './index.css';
import Nav from './components/Nav';
import App from './App';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import Services from './Services';
import Innovations from './Innovations';
import Education from './Education';
import Login from './Login';


ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/innovations"  element={<Innovations />} />
        <Route path="/education"  element={<Education />} />
        <Route path="/login"  element={<Login />} />
      
      </Routes>
    </Router>
    
    {/* <App /> */}
    {/* <Home/> */}
   
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
