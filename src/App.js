import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Main from './Components/Main/Main'
import About from './Components/Pages-2/About';
import ContactUs from './Components/Pages-2/ContactUs';
import Login from './Components/Account/Login';
import Registration from './Components/Account/Registration';
import Service from './Components/Pages-2/Service';
import XResource from './Components/Pages-2/XResource';
import Blogs from './Components/Pages-2/Blogs';
import Career from './Components/Pages-2/Career';
import BrowseJob from './Components/Pages-2/BrowseJob';
import TermCondition from './Components/Pages-2/TermCondition';
import Privacy from './Components/Pages-2/Privacy';
import BlogDetails from './Components/Pages-2/BlogDetails';

import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/DashboardPage/Profile';
import SalarySlip from './Components/DashboardPage/SalarySlip';
import ApplyLeave from './Components/DashboardPage/ApplyLeave';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/service" element={<Service/>}/>
        {/* <Route path="/service/:id" element={<XService/>}/> */}
        <Route path="/resource/:id" element={<XResource/>}/>
        <Route path="/resource" element={<Blogs/>}/>
        <Route path="/blogDetails/:id" element={<BlogDetails/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/browsejob" element={<BrowseJob/>}/>
        <Route path="/termCondition" element={<TermCondition/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/salaryslip" element={<SalarySlip/>}/>
        <Route path="/applyleave" element={<ApplyLeave/>}/>
        
      </Routes>
    </Router>
  
    </>
 
  )
}

export default App
