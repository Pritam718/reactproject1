import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './Contact'
import Home from './Home'
import Service from './Service'
import About from './About'
import Navbar from './Navbar'
import Footer from './Footer';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Navigate replace to='/' />} />  
      </Routes> 
      <Footer/>     
    </>
  )
}

export default App
