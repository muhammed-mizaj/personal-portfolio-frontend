import React from 'react';
import '../App.css'
import logo from '../assets/images/md.png'
const WorkItem = ({name,stack1,stack2,stack3}) => {
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

<div class="  rounded-lg shadow-lg hover:opacity-[20%] bg-slate-600 h-[350px] w-[300px]">
<a href="#">
<img class="rounded-t-lg w-full h-[200px] bg-black"  src={logo} alt=""/>
</a>
<div class="p-2">
<a href="#">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{name}</h5>
</a>


<span class="badge inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg:gray-900 rounded m-2">{stack1}</span>
<span class="badge inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg:gray-900 rounded m-2">{stack2}</span>
<span class="badge inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg:gray-900 rounded m-2">{stack3}</span>


</div>
</div>

  );
};

export default WorkItem;
