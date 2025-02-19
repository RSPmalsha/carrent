import React from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Register from '../pages/Register'
//import setRegisteredUser from '../pages/Login'
//import registeredUser from '../pages/Login'


 
 




const Roters = () => {
   
  return (
    
  <Routes>
    <Route path='/' element={<Navigate to='/home' />}  />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/cars' element={<CarListing/>} />
    <Route path='/cars/:slug' element={<CarDetails/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='*' element={<NotFound/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
 
   
     
     
 </Routes>

);    
      
    
  
};

export default Roters
