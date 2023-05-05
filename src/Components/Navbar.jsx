import React from 'react'
import user from './stepone.png'

function Navbar() {
  return (
    <>
    <div
    className='nav' style={{backgroundColor:"#ED8E83 "}}>
    <div  className='logo'>
      <img  className='imglogo'  src={user}/>
       <h2 style={{fontWeight:"bold" , margin:"2px"}}>Cv Manager</h2>
    </div>
  </div>
      
  
    </>
  )
}

export default Navbar
