import React from 'react';
import '../App.css';
import myImage from '../assets/images/md.jpg';
const Banner = () => {
  const TypeIt=document.querySelector('#type1')

  return (

<div class="hero  bg-slate-900 h:full md:h-screen">
  <div class="md:flex-col md:hero-content lg:flex-row-reverse">
    <img src={myImage} class="max-w-sm rounded-lg shadow-2xl"/> 
    <div>
      <h1 class="mb-5 text-2xl font-bold">
            Hello,My name is  
          </h1>

      <h1 class="mb-5 font-extrabold text-transparent text-2xl md:text-8xl bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-purple-600">
            Muhammed
          </h1>
      <p class="mb-5">
        <h4>
        And I'm <span id='type1'>Devoloper</span>
        </h4>
          
          </p> 
      
    </div>
  </div>
  
</div>)
};

export default Banner;
