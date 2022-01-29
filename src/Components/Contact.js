import React from 'react';
import SocialMedia from './SocialMedia';
import Title from './Title';

const Contact = () => {
  return <div>
    <Title title={"Contact me"}/>
    <div className='md:flex md:flex-row '>

    
      <div className='flex basis-1/2'>

      <form className='p-4'>
      <h4 className='text-2xl p-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600'>Have an interesting project to work on?</h4>
<div class="form-control">
  <label class="label">
    <span class="label-text">Name</span>
  </label> 
  <input type="text" placeholder="Name" class="input input-bordered"/>

</div>

<div class="form-control">
  <label class="label">
    <span class="label-text">Email</span>
  </label> 
  <input type="text" placeholder="Email" class="input input-bordered"/>
  
</div>
<div class="form-control">
  <label class="label">
    <span class="label-text">Subject</span>
  </label> 
  <input type="text" placeholder="Subject" class="input input-bordered"/>
  
</div>

<div class="form-control">
  <label class="label">
    <span class="label-text">Describe project</span>
  </label> 
  <textarea class="textarea h-24 textarea-bordered" placeholder="Describe project"></textarea>
</div>
<button className='m-4 btn glass hover:bg-gradient-to-r from-green-600 to-purple-400'>Help me!</button>
    </form>
    
      </div>
      <div className='flex basis-1/2'>
        
      <SocialMedia/>
      </div>
    </div>
    
    </div>
};

export default Contact;
