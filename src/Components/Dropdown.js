import React from 'react';
import { Link } from 'react-router-dom';
const Dropdown = ({isOpen,toggle}) => {
  return <div className={isOpen? 'grid grid-rows-4 text-center items-center bg-violet-500':'hidden'} onClick={toggle}>
      
     <Link className='p-4' to='/'>Home</Link>
     <Link className='p-4' to='/about'>About</Link>
     <Link className='p-4' to='/works'>My Works</Link>
     <Link className='p-4' to='/skills'>Skills</Link>
     <Link className='p-4' to='/services'>Services</Link>
    
   
  </div>;
};

export default Dropdown;
