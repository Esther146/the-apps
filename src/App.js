import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";


//next is to import my work pages

import Login from './mypage/login';
import Signup from './mypage/signup';
import Forgotpassword from './mypage/forgotpassword';
import Home from './mypage/home';
import Navbar from './mycomponent/navbar';


function App() {
  return (
    <div className='w-full h-screen bg-gray-200'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgotpassword' element={<Forgotpassword />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
