import React from 'react'
import { useState } from 'react';
import './ReportCrime.css'
import Axios from 'axios';
import Button, { ButtonProps }  from '@mui/material/Button';


function ReportCrime() {
  const [inputs, setInputs] = useState({});
  const [cnuID, setcnuID] = useState("");
  const [typeOfCrime, settypeOfCrime] = useState("crime");
  const [location, setlocation] = useState("");
  const [dates, setdates] = useState("");
  const [description, setdescription] = useState("");
  const [suspectName, setsuspectName] = useState("");
  const [vehicleDescription, setvehicleDescription] = useState("");
  
  const handleClick=async (e)=>{
    const instance = Axios.create();
    console.log("handleClick CNUID: "+cnuID," typeOfCrime: " +typeOfCrime,
    " location "+location," dates "+dates,
    " description: "+description," suspectName" +suspectName,
    " vehicleDescription: " +vehicleDescription)
    try {
      // e.preventDefault();
      await instance.post("http://localhost:3001/api/insert/reportCrime/reportCrime", 
      {cnuID: cnuID,typeOfCrime:typeOfCrime, location:location, dates: dates,
        description: description, suspectName:suspectName, vehicleDescription: vehicleDescription});
      
    
        // window.location.reload();
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
  };
  return (

    <div className='form-box'>
    <form 
    // onSubmit={handleSubmit} 
    
    className="form">
      <div className='cnuID'>
      <label> CNU ID
      <input
      name='CNU ID'
      onChange={e => setcnuID(e.target.value)}></input>
      </label>
      </div>
      
      
    <div className = "field1">
    
      <label>Type of Crime
      <select className="item" value={typeOfCrime} 
      onChange={e => settypeOfCrime(e.target.value)}
      // onChange={handleChange}
      >
        <option value="Rape / Sexual Assault">Rape / Sexual Assault</option>
        <option value="Assault">Assault</option>
        <option value="Weapons">Weapons</option>
        <option value="Drugs">Drugs</option>
        <option value="Alcohol">Alcohol</option>
        <option value="Larceny / Theft">Larceny / Theft</option>
        <option value="Vandelism">Vandelism </option>
        <option value="Assault">Assault</option>
        <option value="Others (Please Specify Below)">Others (Please Specify Below)</option>
      </select>
      </label>
      
    <label className="item">Specific location or address:
    <input
   
   onChange={e => setlocation(e.target.value)}
      
    />
    </label>
    
    <label>Relevant Dates / Times:
    <input
    onChange={e => setdates(e.target.value)}
     
      
        // onChange={handleChange}
      />
      </label>
      <label>Description of Incident:
    <input
    onChange={e => setdescription(e.target.value)}/>
      </label>
      <label>Suspect's Name and Description:
    <input
    onChange={e => setsuspectName(e.target.value)}/>
      </label>
      <label>Vehicle Description (if applicable):
    <input
    onChange={e => setvehicleDescription(e.target.value)} />
      </label>
      
      </div>
      
  </form>
  <Button type="submit" onClick={handleClick}>SUBMIT</Button>
  </div>

  )
}

export default ReportCrime