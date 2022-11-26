import React, { useState, useEffect } from "react";
import "./UserReports.css";
import Button, { ButtonProps }  from '@mui/material/Button';
import Table from "../Table";
import { Outlet, Link } from "react-router-dom";
import Axios from 'axios';


function UserReports() {
  const [cnuID, setcnuID] = useState("");
  const [category, setCategory] = useState([]);
  const [crimeReport, setCrimeReport] = useState([]);
  const [showStudentInfo, setShowStudentInfo] = useState(false);
  const [showCrime, setShowCrime] = useState(false);
  const [temp, setTemp] = useState("");




  const  HandleOpenCrime= async(c)=>{
    // c = "12345";
    console.log("HandleOpenCrime ID: "+c)

    try{
      console.log("TRYING")
       await Axios.get(`http://localhost:3001/api/get/reportCrime/crimeReport/${c}`)
      .then(res => setCrimeReport(res.data))
        .catch(err => console.log("FDS " +err))
        {setSetShowCrime()}
        // console.log("CR: "+crimeReport.length)
    }catch(e){
      console.log("CATCCH")
    }};
    const openInNewTab = url => {

      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null 
  };

    const HandleOpen= async(c) =>{
      {HandleOpenCrime(c)}
      // c = "12345";
      console.log("HandleOpen ID: "+c)
  
      try{
        console.log("TRYING")
        await Axios.get(`http://localhost:3001/api/get/reportCrime/assistanceRequest/${c}`)
        .then(res => setCategory(res.data))
          .catch(err => console.log("FDS " +err))
          {setSetStudentInfo()}
          console.log("CAT: ", category)
        //  
        

         

        
        // if (category.length ==0){
        //   setCategory([])
        // }
          // console.log("HandleOpen fName: "+studentInfo[0].firstName)
      }catch(e){
        console.log("CAT CATCH: ", temp[0])
        // console.log("CATCH")
      }
    };

      const setSetStudentInfo =()=>{
        // if (studentInfo[.])
        setShowStudentInfo(true)
      }
      const setSetShowCrime =()=>{
        // if (studentInfo[.])
        setShowCrime(true)
      }

  return (
    <div className='container'>
      <div className="cnuID">
        Please enter you CNU ID:
        <br></br>
        <br></br>





      <input className="cnuIDinput"
        type="text"
        id="lastName"
        name="lastName"
        value={cnuID}
        placeholder="CNU ID"
        onChange={(event) => {
          setcnuID(event.target.value);
        }}
      />

      <br />
      <br />

      <Button 
      style={{marginLeft:"9%",
    backgroundColor:"gray",
  color:"white"}}
      type="submit" onClick={()=>HandleOpen(cnuID)}>Submit</Button>

      <br />
      <br />
      </div>
     {showStudentInfo &&<div>
      <div className="request"> Assistance Requests</div>
    
    <table className="table table-bordered text-white">
       
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Location</th>
                <th>Student ID</th>
                <th>DateTime</th>
       
              </tr>
            </thead>
            <tbody>
   
              {category.map((getcate) => (
                  
                <tr key={getcate}>
                  <td>
                    {getcate.aRID}
                    </td>
                  <td> <Link 
                  onClick={()=>openInNewTab(getcate.location)}
                  >Google Map Location</Link></td>
                  {/* onClick={handleClickToOpen()} */}
                  <td> 
                  {getcate.CNUID}
                 </td>
                  <td> 
                    {getcate.dateTime}
                    </td>
                 
                </tr>
              ))}
          
            </tbody>
          </table>
          </div>}
           


          {showCrime && <div> 
            <div className="request"> Crime Reports</div>
          <table className="table table-bordered text-white">
       
            <thead>
              <tr>
              <th>Report ID</th>
                <th>typeOfCrime</th>
                <th>Location</th>
                <th>dates</th>
                <th>description</th>
                <th>suspectName</th>
                <th>vehicleDescription</th>
              </tr>
            </thead>
            <tbody>
              {crimeReport.map((getcate) => (
                  
                <tr key={getcate}>
                  <td>
                    {crimeReport.crimeID}
                    </td>
                  <td> </td>
                  {/* onClick={handleClickToOpen()} */}
                  <td> 
          
           
                  {getcate.location}
                  </td>
                  <td> 
                    {getcate.dates}
                    </td>
                    <td> 
                    {getcate.description}
                    </td>
                    <td> 
                    {getcate.suspectName}
                    </td>
                    <td> 
                    {getcate.vehicleDescription}
                    </td>
           
                </tr>
              ))}
            </tbody>
          </table>
          </div>}

   
      
      
      
      



    </div>
  )
}

export default UserReports