import React from 'react';
import About from '../Components/About';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Services from './Services';
import Skills from './Skills';
import Works from './Works';

const Home = () => {
  return (<div className='bg-slate-900'>
      <Banner />
      {/* <About />
      <Skills />
      <Works />
      <Services />
      <Contact /> */}
      <Footer />
  </div>);
};

export default Home;
