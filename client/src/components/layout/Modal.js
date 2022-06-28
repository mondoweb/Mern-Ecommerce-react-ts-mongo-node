import React from 'react'
// import Login from '../auth_Login_Form/pages_Login/Login'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 import FormLogin from '../auth_Login_Form/form-login/FormLogin'
// import Logout from '../auth_Login_Form/pages_Login/Logout'
// import Register from '../auth_Login_Form/pages_Login/Register'

const  Modal = (  { closeModal })  =>  {
  return (
    <div style={{top:"20px" , right: "2px"  , position:"absolute"}} > 
        
  <button  onClick={ ()  => closeModal(false)}  style={{margin:"10px" , padding: "10px"}}>  x  </button>


{/* <Login /> */}
<FormLogin />

    </div>
  )
}

export default Modal