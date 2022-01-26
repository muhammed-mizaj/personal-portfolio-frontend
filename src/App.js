import './App.css';
import './index.css'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';

import About from './Components/About';
import Contact from './Components/Contact';
import Works from './pages/Works'
import Services from './pages/Services'
import Skills from './pages/Skills'
import React,{useState,useEffect} from 'react';
import Home from './pages/Home';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer';
function App() {
  const [isOpen,setIsOpen]=useState(false)
  const toggle=()=>{
    setIsOpen(!isOpen)

  };
  useEffect(()=>{
    const hideMenu=   ()=>{
      if(window.innerWidth>768 && isOpen)
      {
        setIsOpen(false)
      }
    };
    window.addEventListener('resize',hideMenu);
    return ()=>
    {
      window.removeEventListener('resize',hideMenu);
    }
  }) 
  return (
    <div className="App">
      
          <Navbar toggle={toggle}/>
          <Dropdown isOpen={isOpen} toggle={toggle}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/works' element={<Works/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/services' element={<Services/>}/>
            
          </Routes>
          
          </div>
  );
}

export default App;
