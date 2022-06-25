import React , { useState  } from 'react'
import {  UserIcon } from "@heroicons/react/outline";
import Modal from './Modal';



const Profilo = () =>  {

  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
        
    
        <button onClick={ () =>  setIsOpen(true) } style={{margin:"10px"}} >  <UserIcon className="nav-icon" /> </button>
     
     {  modalIsOpen && <Modal   closeModal={ setIsOpen}/>  }
     
    </div>
  )
}

export default Profilo ;