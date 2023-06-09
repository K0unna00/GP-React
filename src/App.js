// import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main.jsx'
import SelectRole from './components/selectRole/SelectRole';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Complation from './components/complation/Complation';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/selectRole' element={<SelectRole />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/complation' element={<Complation/>} />
      </Routes>
    </>
  )
}


export default App;
