import React, { useState, useEffect, lazy, Suspense } from 'react';
import Footer from './Components/Footer';
import ThemeContext from './contexts/ThemeContext';
const Hero = lazy(() => import('./pages/Hero'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const About = lazy(() => import('./Components/About'));
const Timeline = lazy(() => import('./Components/TImeline'));


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
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={`${themeClasses} min-h-screen`}>
        <button className={`absolute top-0 right-0 m-4 p-2 rounded-lg font-bold focus:outline-none focus:ring-1  focus:ring-offset-2 ${isDarkTheme ? 'bg-[#111] text-white' : 'bg-white text-black'}`} onClick={toggleTheme}>
          {isDarkTheme ? 'Dark Mode' : 'Light Mode'}
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero/>
          <div class="border-t border-[#111]"></div>

          <About/>
          <div class="border-t border-[#111]"></div>
          <Projects/>
          <div class="border-t border-[#111]"></div>
          <Skills/>
          <div class="border-t border-[#111]"></div>
          <Timeline/>
        </Suspense>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
