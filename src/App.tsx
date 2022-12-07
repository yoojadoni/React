import React, { useState, useReducer, useEffect, useContext } from 'react';
// import './assets/main.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from './components/Header';
import Menu from './pages/Menu.js';
import Login from './pages/login/Login';
import LoginSuccess from './pages/login/LoginSuccess';
import Home from './pages/home';

export default function App() {
  
  return (
      
    <div className="flex flex-col h-screen">
        <Header />
      {/* 메인 바디 영역 */}
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path ="/menu" element = {<Menu/>} />
          <Route path ="/login" element = {<Login/>} />
          <Route path ="/oauth2/loginSuccess" element = {<LoginSuccess/>} />
        </Routes>
    </div>
    
  );
}