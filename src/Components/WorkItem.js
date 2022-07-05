import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


import '../App.css'
import logo from '../assets/images/md.png'
import { BASE_URL } from '../constants/urls';
AOS.init();
const WorkItem = ({project}) => {
  return (
    // <div class="card  hover:bg-green-600  ">
    //                   <img src={logo} class="w-full object-cover" alt=""/>
    //                   <div class="m-4">
    //                       <span class="font-bold">
    //                           {name}
    //                       </span>
    //                       <span class="block text-gray-600 text-sm">
    //                           {stack1}
    //                       </span>
    //                       <span class="block text-gray-600 text-sm">
    //                           {stack2}
    //                       </span>
    //                   </div>
    //                   <div class="badge absolute bottom-2 left-2">
    //                     <span><svg class="w-5 badge inline-block"xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    //                       </svg></span>
    //                     <span>5 mins</span> 
    //                   </div>
                     
    //               </div>
<div >
<div class="card2 rounded-lg shadow-lg bg-slate-800 h-[350px] w-[300px] card aos-init aos-animate" data-aos="fade-down" aos-delay="4000">
  <div className='card_front'>
  <a href="#">
<img class="rounded-t-lg w-full h-[250px] bg-slate-700"  src={BASE_URL+project.image} alt=""/>

</a>
<div class="h1-2">
<a href="#">
<h5 class=" mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{project.name}</h5>
</a>


<span class="badge inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-gray-900 rounded m-2">{project.stack1}</span>
<span class="badge inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-gray-900 rounded m-2">{project.stack2}</span>
<span class="badge inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-gray-900 rounded m-2">{project.stack3}</span>
<span class="badge inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-gray-900 rounded m-2">{project.stack4}</span>


</div>

  </div>
  <div className='card_back relative h-full w-full p-5 glass'> 
  
  <h1 className='text-black text-2xl inline-flex'>
    {project.description}
    </h1>
    
  
  <div className='absolute bottom-4 pl-[100px] flex '>
    <a href={project.sourcecodelink} className='p-2 text-blue-700 rounded-full bg-black hover:text-blue-500 cursor-pointer ' target="_blank">
    <i class="fas fa-code"></i>

    </a>
    &nbsp;
    
    <a href={project.view_link} className='p-2  text-blue-700 rounded-full bg-black hover:text-blue-500 cursor-pointer' target="_blank">
    <i class="far fa-eye"></i>
    </a>
  
  
  
  </div>
    </div>
</div>

</div>

  );
};

export default WorkItem;
