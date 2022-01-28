import React from 'react';
import logo from '../assets/images/md.png'
const WorkItem = ({name,stack1,stack2}) => {
  return (
    <div class="card bg- hover:bg-green-600  ">
                      <img src={logo} class="w-full object-cover" alt=""/>
                      <div class="m-4">
                          <span class="font-bold">
                              {name}
                          </span>
                          <span class="block text-gray-600 text-sm">
                              {stack1}
                          </span>
                          <span class="block text-gray-600 text-sm">
                              {stack2}
                          </span>
                      </div>
                      <div class="badge absolute bottom-2 left-2">
                        <span><svg class="w-5 inline-block"xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg></span>
                        <span>5 mins</span> 
                      </div>
                     
                  </div>
  );
};

export default WorkItem;
