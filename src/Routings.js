import '../src/index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importing components;
import Header from './Mainmenu/header.js';
import Userdata from './components/Userdata'

export default function Routings(){


  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/userdata' element={<Userdata/>}/>
    </Routes>
    </BrowserRouter>
  )
}