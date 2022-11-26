import React from 'react'
import Button, { ButtonProps }  from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import './More.css'
import { textAlign } from '@mui/system';

function More() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `https://cnu.edu/polic/`; 
    navigate(path);
  }
  

  return (
   
    <div className="page">
    <h1 className='header'>Reports and Resources</h1>

    <section>
      <Button variant="contained" className='buttons-fun' 
      style={{
        background:"grey",
        padding:"0px 0px",
        height:"100px",
        width:"100px",
        margin:"10px",
        textAlign:"center"
      }}href="/reportCrime"> Report a Crime</Button>
      <Button variant="contained" className='buttons-fun'
      style={{
        background:"grey",
        padding:"0px 0px",
        height:"100px",
        width:"100px",
        margin:"10px",
        textAlign:"center"
      }}
      href="/silentwitness">Silent Witness</Button>
      <Button  variant="contained"className='buttons-fun'
      style={{
        background:"grey",
        padding:"0px 0px",
        height:"100px",
        width:"100px",
        margin:"10px"
      }}>Contact PD anonymous</Button>
      <Button  variant="contained" className='buttons-fun'
      style={{
        background:"grey",
        padding:"0px 0px",
        height:"100px",
        width:"100px",
        margin:"10px",
        textAlign:"center"
      }}>Campus Report</Button>
      <Button  variant="contained"  className='buttons-fun'
      style={{
        background:"grey",
        padding:"0px 0px",
        height:"100px",
        width:"100px",
        margin:"10px",
        textAlign:"center"
      }}href="/requestEscort"> Request Escort</Button>
      <Button  variant="contained" className='buttons-fun'
      style={{
        background:"grey",
        padding:"0px 0px",
        height:"100px",
        width:"100px",
        margin:"10px"
      }}
      href="/campusmap">Campus Map</Button>
      <Button variant="contained" className='buttons-fun'
      style={{
        background:"grey",
        padding:"0px 0px",
        height:"100px",
        width:"100px",
        margin:"10px",
        textAlign:"center"
      }}href="/userReports">View Your Reports</Button>
      <Button  variant="contained" className='buttons-fun'
        href="/securityreources"
        style={{
          background:"grey",
          padding:"0px 0px",
          height:"100px",
          width:"100px",
          margin:"10px",
          textAlign:"center"
        }}>Security Resources</Button>
    </section>

 
  </div>
  )
}

export default More