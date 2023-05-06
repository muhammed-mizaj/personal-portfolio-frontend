import React from 'react';
import '../App.css'
import mypic from '../assets/images/md.jpg'
const SocialMedia = () => {
  return (
    <div className='aboutcard '>
      <div className='aboutcard2 '>
      <div className='card bg-slate-800'>
          <div className='imgBox '>
<img src={mypic}/>
          </div>
          <div className='details'>
            <div className='content'>
              <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-purple-600 text-4xl'>Muhammed
                <br />
                <span className=''>
                  <h6 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-green-600 text-lg'>Student</h6>               
                </span>
                
              </h2>
              <div className='social-icons text-black'>
                <a href='https://www.instagram.com/muh_ammed_10/' className='hover:text-gray-400 p-2 cursor-pointer' target="_blank">
                <i class="fab fa-instagram"></i>
                </a>
                <a href='https://www.facebook.com/muhammed.mizaj.3' className='hover:text-gray-400 p-2 cursor-pointer' target="_blank">
                <i class="fab fa-facebook"></i>
                </a>
                <a href='https://wa.me/qr/5X5P2OMGIVKAC1' className='hover:text-gray-400 p-2 cursor-pointer' target="_blank">
                <i class="fab fa-whatsapp"></i>
                </a>
                <a href='https://www.linkedin.com/in/muhammed-852a461b0' className='hover:text-gray-400 p-2 cursor-pointer' target="_blank">
                <i class="fab fa-linkedin"></i>
                </a>
                <a href='https://github.com/mdthegamer' className='hover:text-gray-400 p-2 cursor-pointer' target="_blank">
                <i class="fab fa-github"></i>
                </a>
                <a href='https://twitter.com/mizaj_muhammed' className='hover:text-gray-400 p-2 cursor-pointer' target="_blank">
                <i class="fab fa-twitter"></i>
                </a>
                <a href='https://www.youtube.com/channel/UC4f6w95BfQziD3f_DuZzvyQ/featured' className='hover:text-gray-400 p-2 cursor-pointer' target="_blank">
                <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
      </div>



      </div>
    </div>
        );
};

export default SocialMedia;

