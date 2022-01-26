import React from 'react';
import '../App.css';
import myImage from '../assets/images/md.jpg';
const Banner = () => {
  const TypeIt=document.querySelector('#type1')

  return (

<div class="hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img src={myImage} class="max-w-sm rounded-lg shadow-2xl"/> 
    <div>
      <h1 class="mb-5 text-2xl font-bold">
            Hello,My name is  
          </h1>

      <h1 class="mb-5 text-6xl font-bold text-green-600">
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
