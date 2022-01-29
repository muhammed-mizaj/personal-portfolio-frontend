import React from 'react';
import Title from '../Components/Title';
import WorkItem from '../Components/WorkItem';

const Works = () => {
  return (
    <div >
      <Title title={"Projects"}/>
      <div className='flex justify-center pb-4'>
      <div className=' grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6'>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"} stack3={""}/>
      <WorkItem name={"Community chat"} stack1={"javascript"} stack2={"html"} stack3={"css"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
     
    </div>


      </div>
      
    </div>
      );
};

export default Works;
