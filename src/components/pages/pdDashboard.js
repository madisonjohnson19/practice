import React from 'react'
import Button, { ButtonProps }  from '@mui/material/Button';


function pdDashboard() {
  return (
    <div className="page">
    <h1 className='header'>PD Home</h1>

    <section>
      <Button variant="contained" className='buttons-fun' 
      style={{
        background:"grey",
        padding:"0px 0px",
        height:"100px",
        width:"100px",
        margin:"10px",
        textAlign:"center"
      }}href="/viewAssistance"> Assistance Requested </Button>
      <Button variant="contained" className='buttons-fun'
      style={{
        background:"grey",
        padding:"0px 0px",
        height:"100px",
        width:"100px",
        margin:"10px",
        textAlign:"center"
      }}
      href="/viewReports">Crime Reports</Button>
      
      
     
    </section>

 
  </div>
  )
}

export default pdDashboard