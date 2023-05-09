import React, { useContext } from 'react';
import timelineData from './timelineData.json';
import ThemeContext from '../contexts/ThemeContext';

const Timeline = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`container mx-auto px-4 py-8 ${isDarkTheme?'bg-[#111] text-white':'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {timelineData.map((item) => (
          <div className={`shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="bg-[#111] rounded-full h-8 w-8 flex items-center justify-center">
                  <span className="font-bold text-lg">{item.year}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{item.event}</h3>
                  <p className="">{item.organization}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
