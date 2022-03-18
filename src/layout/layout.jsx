import React from 'react'
import Aboutus from '../pages/Aboutus'
import Homepage from '../pages/Homepage'
import Footer from './Footer/Footer'
import Header from './header/header'
import Menu from './header/nav'
import Newsletter from './Newsletter/Newsletter'
import Responsive from './Partners/Partners';
import {  BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";


export default function Layout() {
  return (
    <div>
        <Header/>
        <Menu/>
        
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
    </Routes>
        <Newsletter/>
        <Responsive/>
        <Footer/>
    </div>
  )
}
