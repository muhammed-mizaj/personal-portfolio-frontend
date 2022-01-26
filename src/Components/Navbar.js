import React from 'react';
import '../index.css'

import logo from '../assets/images/md.png'; 
import { Link } from 'react-router-dom';
const Navbar = ({toggle}) => {
  return (
      <nav className='flex justify-between items-end h-16 text-white relative shadow-sm font-roboto bg-black' role='navigation'>
   <Link to='/' className='pl-8'>
     <img src={logo} class='w-10 h-10 p-1'></img>
     
   </Link>
   <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
   </div>
   <div className="pr-8 md:block hidden">
     <Link className='p-4' to='/'>Home</Link>
     <Link className='p-4' to='/about'>About</Link>
    <Link className='p-4' to='/works'>My Works</Link>
     <Link className='p-4' to='/skills'>Skills</Link>
     <Link className='p-4' to='/services'>Services</Link>
     <Link className='p-4' to='/contact'>Contact</Link>
    
   </div>

 </nav>
  )
  ;
};

export default Navbar;
