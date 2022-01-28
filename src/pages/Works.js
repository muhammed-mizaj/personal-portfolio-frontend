import React from 'react';
import Title from '../Components/Title';
import WorkItem from '../Components/WorkItem';

const Works = () => {
  return (
    <div>
      <Title title={"Projects"}/>
      <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-2'>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"} />
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
      <WorkItem name={"Personal portfolio"} stack1={"django"} stack2={"react"}/>
     
    </div>


    </div>
      );
};

export default Works;
