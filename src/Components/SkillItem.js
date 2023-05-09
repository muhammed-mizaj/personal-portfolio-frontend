import React from 'react';

const SkillItem = ({name, image}) => {
  return (
    <div
      className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <img
        className="w-64 h-64 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-full  mb-6 sm:mb-8"
        src={image}
        alt={name}
      />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">{name}</h2>
    </div>
  );
};

export default SkillItem;
