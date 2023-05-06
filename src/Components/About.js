import React from 'react';
import mypic from '../assets/images/Muhammed_.jpg';
import resume from '../assets/pdf/MyResume.pdf';

function About({ isDarkTheme }) {
  const buttonBgColor = isDarkTheme ? 'bg-[#111]' : 'bg-black';
  const buttonTextColor = isDarkTheme ? 'text-white' : 'text-white';

  return (
    <section className="py-16">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:flex-row-reverse items-center">
          <div className="md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <img src={mypic} alt="Muhammed" className="rounded-full w-64 h-64 mx-auto md:mx-0" />
          </div>
          <div className="md:w-1/2 lg:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6">Muhammed</h1>
            <p className="text-lg mb-8">I am a passionate developer based in Calicut, India. With experience in both backend and frontend development, I specialize in building scalable and performant web applications. I am always eager to learn new technologies and frameworks to improve my skillset and deliver better solutions.</p>
            <div className="flex justify-center md:justify-start">
              <a href={resume} className={`${buttonBgColor} ${buttonTextColor} hover:${buttonBgColor === 'bg-indigo-600' ? 'bg-indigo-700' : 'bg-white'} font-bold py-3 px-8 rounded-full uppercase tracking-wide transition duration-300 ease-in-out`} download>My Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
