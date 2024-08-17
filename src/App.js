import React from 'react';
import { Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LOGIN_signup from './LOGIN_signup';
import Notfoundpage from './Notfoundpage';
import DisplayingLandingpage from './LandinPage/DisplayingLandingpage';
import Admin from './Admin/Admin';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DisplayingLandingpage/>}/>
      <Route path='/signup' element={<LOGIN_signup/>}/>
      <Route path='/login' element={<Navigate to={"/signup"}/>}/>
      <Route path='*' element={<Notfoundpage/>}/>
      <Route path='/AdminPage' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
