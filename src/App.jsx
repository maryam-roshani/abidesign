import { useState } from 'react'
import Navbar from './components/navbar/navbar';
import Topbar from './components/topbar/topbar';
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home';
import Business from './pages/business';
import Catalog from './pages/catalog';
import Envelope from './pages/envelope';
import Header from './pages/header';
import Invoice from './pages/invoice';
import Label from './pages/label';
import Pamphlet from './pages/pamphlet';
import Tract from './pages/tract';


function App() {

  return (
    <>
      <BrowserRouter>
      <Topbar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/business-card' element={<Business/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/envelope' element={<Envelope/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/label' element={<Label/>}/>
        <Route path='/pamphlet' element={<Pamphlet/>}/>
        <Route path='/flyer' element={<Tract/>}/>
        <Route path='/advertising-folder' element={<Home/>}/>
        <Route path='/paper-folder' element={<Home/>}/>
        <Route path='/advertising-magazine' element={<Home/>}/>
        <Route path='/poster' element={<Home/>}/>
        <Route path='/cd-label' element={<Home/>}/>
        <Route path='/paper-cup' element={<Home/>}/>
        <Route path='/exclusive-gift-paper' element={<Home/>}/>
        <Route path='/bubble-envelope' element={<Home/>}/>
        <Route path='/confidential-postal-envelope' element={<Home/>}/>
        <Route path='/dedicated-keyboard-box' element={<Home/>}/>
        <Route path='/hanging-tags' element={<Home/>}/>
        <Route path='/promotional-ribbon' element={<Home/>}/>
        <Route path='/special-1404-yearbook' element={<Home/>}/>
        <Route path='/wall-calendar' element={<Home/>}/>
        <Route path='/single-sheet-wall-calendar' element={<Home/>}/>
        <Route path='/dedicated-4-sheet-desktop-calendar' element={<Home/>}/>
        <Route path='/radiology-envelope-and-mri' element={<Home/>}/>
        <Route path='/test-answer-cd-envelope' element={<Home/>}/>
        <Route path='/lab-envelope' element={<Home/>}/>
        <Route path='/cardex-and-patient-file' element={<Home/>}/>
        <Route path='/patient-appointment-card' element={<Home/>}/>
        <Route path='/headline' element={<Home/>}/>
        <Route path='/box-packing' element={<Home/>}/>
        <Route path='/carwash-sole-paper' element={<Home/>}/>
        <Route path='/design-price' element={<Home/>}/>
        <Route path='/ready-designs' element={<Home/>}/>
        <Route path='/design-order-registration' element={<Home/>}/>
        <Route path='/tehran-orders' element={<Home/>}/>
        <Route path='/other-city-orders' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
