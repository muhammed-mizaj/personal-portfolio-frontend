import React from 'react';
import Title from '../Components/Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const Services = () => {
  return <div className='h-screen bg-slate-900'>
      <Title title={"Services"}/>
      <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-2 flex-1 justify-center'>
          
          <div className='p-5 bg-slate-800 shadow-lg card-bordered mb-2 h-36 w-50 rounded-full flex flex-row justify-center items-center aos-init aos-animate' data-aos="fade-down" aos-delay="4000">
          <i class="fas fa-desktop pr-2"></i>
 Frontend Devolopment
  
</div>
<div className='p-5 bg-slate-800 shadow-lg card-bordered mb-2 h-36 w-50 rounded-full flex flex-row justify-center items-center aos-init aos-animate' data-aos="fade-down" aos-delay="4000">

<i class="fas fa-server pr-2"></i>
 Backend API Devolopment
  
</div>
<div className=' bg-slate-800 shadow-lg card-bordered  mb-2 p-5 h-36 w-50 rounded-full flex flex-row justify-center items-center aos-init aos-animate' data-aos="fade-down" aos-delay="4000">
<i class="fas fa-mobile-alt pr-2"></i>
  App Devolopment
  
</div>
            
        </div>
      
  </div>;
};

export default Services;
