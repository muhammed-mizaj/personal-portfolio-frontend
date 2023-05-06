import React from 'react';
import '../App.css';
import mypic from '../assets/images/md.jpg';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="h-screen bg-cover bg-center flex justify-center items-center" >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">I am Muhammed</h1>
        <Typed
          className="text-xl"
          strings={['Developer', 'Programmer', 'Creator']}
          typeSpeed={80}
          backSpeed={50}
          backDelay={1500}
          loop
        />
      </div>
    </div>
  );
}

export default Hero;
