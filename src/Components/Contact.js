import React from 'react';
import Title from './Title';

const Contact = ({isDarkTheme}) => {
  return (
    <div className=''>
      <h1 className="text-3xl font-bold mb-5">Get in touch</h1>

      <div className=''>
        <div className=''>
          <form className='p-4'>
            <h4 className='text-2xl p-2'>Have an interesting project to work on?</h4>
            <div className="form-control">
              <label className="label">
              <span className={`label-text ${isDarkTheme ? 'text-white' : 'text-black'}`}>Subject</span>
              </label> 
              <input type="text" placeholder="Let Me Know How can i help you ?" className="input input-bordered bg-[#111]"/>
            </div>
            <div className="form-control">
              <label className="label">
              <span className={`label-text ${isDarkTheme ? 'text-white' : 'text-black'}`}>Describe project</span>
              </label> 
              <textarea className="textarea h-24 textarea-bordered bg-[#111]" placeholder="Describe project"></textarea>
            </div>
            <button className={`m-4 p-2 rounded-lg font-bold focus:outline-none focus:ring-1  focus:ring-offset-2 ${isDarkTheme ? 'bg-[#111] text-white' : 'bg-[#111] text-white'}`} >
              Help me !
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
