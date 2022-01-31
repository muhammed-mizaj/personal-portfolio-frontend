import React,{useState,useEffect} from 'react';
import Loading from '../Components/Loading';
import Title from '../Components/Title';
import WorkItem from '../Components/WorkItem';

const Works = () => {
  let [projects,setProjects]=useState([]);
  let [loading,setLoading]=useState(false);
  useEffect(()=>{
    getProjects().then(()=>
    {
      setLoading(true);
    })
  },[])
  let getProjects=async()=>{
    let response=await fetch('http://127.0.0.1:8000/api/projects')
    let data = await response.json()
    setProjects(data)
    console.log("data",data);
  }
  return (
    <div className='h-full bg-gray-900'>
      {
        loading?(<div className='h-full  bg-gray-900'>
        <Title title={"Projects"}/>
        <div className='flex justify-center pb-4'>
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6'>
          {projects.map((project,index)=>(
            <WorkItem  key={index} project={project}/>
          ))}
  
      </div>
  
  
        </div>
        
      </div>
    ):(<Loading/>)
      }
    </div>
    );
};

export default Works;
