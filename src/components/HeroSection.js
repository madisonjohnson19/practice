import '../App.css'
import Button from '@mui/material/Button';
import './HeroSection.css'
import React, { useState, useEffect } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import useGetMaxIdReqAssistance from '../hooks/useGetMaxIdReqAssistance';
import { emails } from './email';

// import { useHistory } from "react-router-dom";
import Axios from 'axios';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import NewWindow from 'react-new-window'
import Popout from 'react-popout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// var src = [38.898556, -77.037852];
// const [Lat_more, setLatMore] = useState('');
// const [Lon_more, setLonMore] = useState('');
var Lat_more="";
var Lon_more="";
function convertToDMS(src) {
  function toDMS(n) {
    // The sign doesn't matter
    n = Math.abs(n);

    // Get the degrees
    // var d = n;
   
    var d = Math.floor(n);
    console.log("D: "+n)
    // Strip off the answer we already have
    n = n - d;
    // And then put the minutes before the '.'
    n *= 60;
    
    // Get the minutes
    var m = Math.floor(n);
    // Remove them from the answer
    n = n - m;
    // Put the seconds before the '.'
    n *= 60;
        
    // Get the seconds
    // Should this be round? Or rounded by special rules?
    // var s = Math.floor(n);
    var s = n;


    // Put it together.
    return "" + d + " " + m + " " + s;

  }

  // var dir0 = src[0] > 0 ? "N" : "S";
  
  // var dir1 = src[1] > 0 ? "E" : "W";
  
  
  
  Lat_more=(toDMS(src[0]) )
  Lon_more=(toDMS(src[1]) )
  // console.log("TO DMS: "+toDMS(src[0]) + dir0);
  // console.log("TO DMS: "+toDMS(src[1]) + dir1);

}


function HeroSection() {
  const [phone, setPhone] = useState('7575947777');
  const [open, setOpen] = React.useState(false);
  const [yes, setYes] = React.useState(false);
  const [time, setTime] = useState('');
  const [lastID, setLastID] = useState('');
  const [reportID, setReportId] = useState('');
  // const [location, setLocation] = useState('');
  let l ="";
  const lID =useGetMaxIdReqAssistance();
  const location =useGeolocation();
  const current = new Date();
  const [currentDate, setCurrentDate] = useState('');
  const [cnuID, setcnuID] = useState('');
  const [playAnimation, setPlayAnimation] = useState(false);
 
  // const ref = React.useRef(null);
  // const [map, setMap] = React.useState();
  // useEffect(() => {
  //   if (ref.current && !map) {
  //     setMap(new window.google.maps.Map(ref.current, {}));
  //     console.log("YELO : "+map)
  //   }

  // }, [ref, map]);

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      month + '/' + date + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);
  const handleClickToOpen = () => {
    
    setOpen(true);
  };
  
  const handleToClose = () => {
    window.location.reload();
    setOpen(false);
  };
  // const history = useHistory();
  
  
 

  const handleClick = async (e) => {
    console.log("email called in Hero")
    {emails("Assistance")}
    
   
    {handleClickToOpen()}
   
    const instance = Axios.create();
    e.preventDefault();
    try {
      
      var latitute = location.coordinates.lat;
      var longitute = location.coordinates.lng;
      var src = [latitute,longitute];
      let hold =convertToDMS(src);
      
      var la_lat=Lat_more.split(" ");
      var lo_lat=Lon_more.split(" ");
      console.log("LO: "+lo_lat)
      console.log("LA: "+la_lat)
      let lat_deg =la_lat[0]
      let lat_min =la_lat[1]
      let lat_sec =la_lat[2]
      let long_deg =lo_lat[0]
      let long_min =lo_lat[1]
      let long_sec =lo_lat[2]
      console.log("LO SEC: "+long_sec)

      let gmap_link = `https://www.google.com/maps/place/${lat_deg}%C2%B0${lat_min}'${lat_sec}%22N+${long_deg}%C2%B0${long_min}'${long_sec}%22W/@${latitute},${longitute},19z/data=!3m1!4b1!4m14!1m7!3m6!1s0x0:0xd3987d8b5ebf0e9c!2zMzjCsDA0JzI2LjEiTiA3N8KwMzAnMDcuMSJX!3b1!8m2!3d${latitute}!4d${longitute}!3m5!1s0x0:0x12227b589cc3a10!7e2!8m2!3d${latitute}!4d${longitute}`
          // let gmap_link = `https://www.google.com/search?q=googgle+maps+where+am+i&oq=googgle+maps+where+am+i&aqs=chrome..69i57j0i13i512l5j0i22i30l4.5618j0j4&sourceid=chrome&ie=UTF-8`
      // let gmap_link =`https://www.google.com/maps/@${latitute},${longitute},16z`;
      e.preventDefault();
      console.log("CNU ID WHEN REQUEST: "+ lID)
      await instance.post("http://localhost:3001/api/insert/reportCrime", {lastID:lID,dateTime:currentDate,location:gmap_link});
      // location:JSON.stringify(location)
      
      // console.log("pOSTED BITCH: "+ firstName)
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
    {GetMaxID()}
    
    
  };
  useEffect(() => {
    const Getcategory1 = async () => {
  Axios('http://localhost:3001/api/delete/cancelRequest/maxID')
    .then(res => setLastID(1+parseInt(res.data, 10)))
    .catch(err => console.log(err))
    };
    Getcategory1();
}, []);
  const GetMaxID = () => {
    console.log("GETMAXID CALLED")
    // Axios('http://localhost:3001/api/delete/cancelRequest/maxID').then(res => setLastID(res.data))
    // .catch(err => console.log(err))
    //   console.log("MAXID: "+lastID);
    
      
      console.log("MAXID: "+lID);
    console.log("GETMAXID ENDED")
    
  };
  const handleUpdate = async (e) => {
    console.log("handleUpdate")
   
   
    const instance = Axios.create();
    
    e.preventDefault();
    try {
      e.preventDefault();
      console.log("CNU ID: "+cnuID+ " LAST ID: "+ lID)
      await instance.put("http://localhost:3001/api/update/addCNUID/maxID", {cnuID: cnuID,lastID:lID});
      

      
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
    console.log("UPDATE: " +lID);
    
  };
  const deleteLast =async (e) =>{
    const instance = Axios.create();
    
    try{
      e.preventDefault();
      await instance.get('http://localhost:3001/api/delete/cancelRequest/maxID').then(res => setLastID(res.data))
      .catch(err => console.log(err))
      // results=JSON.parse(JSON.stringify(results))
 
      console.log("GET LAST ID: ",lID)
     
    }catch (err) {
        console.log("ERRO: " +err);
        // setError(true)
      }
      {deleteRequest()}
      

  };
  const deleteRequest = async (e) => {
    
    const instance = Axios.create();

    try {
     
      console.log("LAST ID: ",lastID)
      await instance.post("http://localhost:3001/api/delete/moveOpenToResolve", {aRID: lID});

      console.log("DELETE BITCH: "+ JSON.stringify(lID))
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
  };



  return (
    
          
    <div className='hero-container'>


      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Your Request Has Been Sent!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your CNU ID so PD can better assist you.
          </DialogContentText>
          <input placeholder="    CNU ID" onChange={e => setcnuID(e.target.value)}></input>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus>
            Close
          </Button>
          <Button onClick={deleteLast}
                  color="primary" autoFocus>
            Cancel Request
          </Button>
        </DialogActions>
      </Dialog>
      
        {/* <div className ='hero-btns'> */}
            <Button 
           
            
            
           onClick={handleClick} //openInNewTab('https://maps.google.com')
     
             style={{
              top: "-150px",
              color:"#fff",
              width:"200px",
              borderColor: 'white',
              backgroundColor: "#700f0f",
              padding: "8px 26px",
              fontSize: "18px"
          }}
            >
                Notify Now
            </Button>


            {/* <div className="inline-block mr-auto pt-1">
                                {location.loaded
                                    ? JSON.stringify(location)
                                    : "Location data not available yet."}
                            </div> */}
            
            <Button className="call" 
             href="/gMaps"
            style={{
              top: "-130px",
              color:"#fff",
              width:"200px",
              backgroundColor: "#d1c158",
              padding: "8px 26px",
              fontSize: "18px"
          }}>
               Call CNU PD 
            </Button>
            <Button
            // onClick={onCall}
             style={{
              top: "-110px",
              color:"#fff",
              backgroundColor: "#116319",
              width:"200px",
              padding: "8px 26px",
              fontSize: "18px"
          }} href="/more">
               More:

            </Button>
          <Button
          style={{
            top: "-50px",
            color:"#fff",
            borderColor: "#fff",
            width:"200px",
            backgroundColor: "transparent",
            padding: "8px 26px",
            fontSize: "18px"}}
            variant='outlined'
        >
          Tutorial <i className='far fa-play-circle' />
        </Button>

    </div>
  )
}
export default HeroSection
// import '../App.css'
// import Button from '@mui/material/Button';
// import './HeroSection.css'
// import React, { useState } from 'react';
// // import { getCardHeaderUtilityClass } from '@mui/material';





// function HeroSection() {
 


//   return (
//     <div className='hero-container'>
      
//         {/* <div className ='hero-btns'> */}
//             <Button 
//             // onClick={() => getPosition()}
//              style={{
//               top: "-150px",
//               color:"#fff",
//               width:"200px",
//               borderColor: 'white',
//               backgroundColor: "#700f0f",
//               padding: "8px 26px",
//               fontSize: "18px"
//           }}
//             >
//                 Notify Now
//             </Button>
            
//             <Button className="call" 
//             style={{
//               top: "-130px",
//               color:"#fff",
//               width:"200px",
//               backgroundColor: "#d1c158",
//               padding: "8px 26px",
//               fontSize: "18px"
//           }}>
//                Call CNU PD 
//             </Button>
//             <Button
//              style={{
//               top: "-110px",
//               color:"#fff",
//               backgroundColor: "#116319",
//               width:"200px",
//               padding: "8px 26px",
//               fontSize: "18px"
//           }} href="/more">
//                More:
//             </Button>
//           <Button
//           style={{
//             top: "-50px",
//             color:"#fff",
//             borderColor: "#fff",
//             width:"200px",
//             backgroundColor: "transparent",
//             padding: "8px 26px",
//             fontSize: "18px"}}
//             variant='outlined'
//         >
//           Tutorial <i className='far fa-play-circle' />
//         </Button>

//     </div>
//   )
// }

// export default HeroSection