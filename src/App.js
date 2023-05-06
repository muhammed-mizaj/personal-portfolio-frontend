import React, { useState, useEffect } from 'react';
import Hero from './pages/Hero';
import Stacks from './pages/Stacks';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import About from './Components/About';
import BottomNavBar from './Components/BottomNavBar';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Load theme preference from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
    }
  }, []);

  // Save theme preference to local storage
  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeClasses = isDarkTheme ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={`${themeClasses} min-h-screen`}>
      <button className={`absolute top-0 right-0 m-4 p-2 rounded-lg font-bold focus:outline-none focus:ring-1  focus:ring-offset-2 ${isDarkTheme ? 'bg-[#111] text-white' : 'bg-white text-black'}`} onClick={toggleTheme}>
        {isDarkTheme ? 'Dark Mode' : 'Light Mode'}
      </button>
      <Hero/>
      <div class="border-t border-[#111]"></div>

      <About isDarkTheme={isDarkTheme}/>
      <div class="border-t border-[#111]"></div>
      {/* <Stacks/> */}
      <Projects isDarkTheme={isDarkTheme}/>
      <div class="border-t border-[#111]"></div>
      <Skills/>
      <div class="border-t border-[#111]"></div>
      {/* <Contact isDarkTheme={isDarkTheme}/> */}
      <Footer/>
    </div>
  );
}

export default App;
