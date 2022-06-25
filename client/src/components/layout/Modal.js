import React from 'react'
import Login from '../auth_Login_Form/form-login/FormLogin'

const  Modal = (  { closeModal })  =>  {
  return (
    <div> 
        
  <button  onClick={ ()  => closeModal(false)}  style={{margin:"10px" , padding: "10px"}}>  x  </button>


<Login />

    </div>
  )
}

export default Modal