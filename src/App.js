import './App.css';
import React, { useState }  from 'react';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import More from './components/pages/More'
import SecurityResources from './components/pages/SecurityResourcs';
import CampusMap from './components/pages/CampusMap';
import SilentWitness from './components/pages/SilentWitness';
import ReportCrime from './components/pages/ReportCrime';
import RequestEscort from './components/pages/RequestEscort';
import UserReports from './components/pages/UserReports';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import PdDashboard from './components/pages/pdDashboard';
import AssistanceReq from './components/pages/AssistanceReq';
import ViewReports from './components/pages/viewReports';
// import useToken from './components/useToken';
import gMaps from './components/pages/gMaps';




function App() {

 
  return (

    
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/more' exact element={<More/>}/>
        <Route path="/securityreources" exact element={<SecurityResources />} />
        <Route path="/gMaps" exact element={<gMaps />} />
        <Route path="/campusmap" exact element={<CampusMap />} />
        <Route path="/silentwitness" exact element={<SilentWitness />} />
        <Route path="/reportCrime" exact element={<ReportCrime />} />
        <Route path="/requestEscort" exact element={<RequestEscort />} />
        <Route path="/userReports" exact element={<UserReports />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signUp" exact element={<SignUp />} />
        <Route path="/pdDashboard" exact element={<PdDashboard />} />
        <Route path="/viewAssistance" exact element={<AssistanceReq />} />
        <Route path="/viewReports" exact element={<ViewReports />} />
      </Routes>
    </Router>  
    </>
  );
}

export default App;