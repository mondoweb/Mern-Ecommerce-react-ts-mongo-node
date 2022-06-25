import React from 'react'
import "../style_FormLogin/FormLogin.css";

import {BrowserRouter as Router,  Routes, Route , Link   } from "react-router-dom";

import Login from '../pages_Login/Login';
import Logout from '../pages_Login/Logout';
import Register from '../pages_Login/Register';
import Secret from '../pages_Login/Secret';

const  formLogin = () =>  {
  return (
    <div className='FormLogin'>

             
<Router>

        

        <Routes >
            <Route path="/"   element={<Login />} />  
            <Route path="/Register"   element={<Register />}  /> 
            <Route path='/Logout'  element= { <Logout /> } />
            <Route path="*"   element={<Secret />} />    
        </Routes>

        <div className="navbar-login">
            <Link  to="/">  Login  </Link>
            <Link  to="/Register">  Registrati  </Link>
            <Link to="/Logout " >  Logout </Link>
            
        </div>

</Router>



    </div>
  )
}

export default formLogin  ;