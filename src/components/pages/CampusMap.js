import React from 'react'
import logo from './CampusMap.png'
import './CampusMap.css'

function CampusMap() {
  return (
    <div
   style={{
    justifyContent:"center"

   }}
     className='img'>
        <img 
        
         style={{
          alignContent:"center",
          width:"60%",
          height: "60%"
        }}
        src={logo} alt="Logo" />
        
    </div>

 

  )
}

export default CampusMap