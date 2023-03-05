import '../src/index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importing components;
import Header from './Mainmenu/header.js';
import Userdata from './components/Userdata';
import View from './components/view';
import Edit from './components/edit'
import Signup from './components/signup'

export default function Routings(){


  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/userdata' element={<Userdata/>}/>
      <Route path='/Userdata/view/:idno' element={<View/>} />
      <Route path='/Userdata/edit/:idno' element={<Edit/>} />
      <Route path='/signup' element={<Signup/>}  />
    </Routes>
    </BrowserRouter>
  )
}