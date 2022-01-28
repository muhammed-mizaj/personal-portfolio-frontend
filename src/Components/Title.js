import React from 'react';

const Title = ({title}) => {
  return <div>
      <h1 className='font-extrabold underline text-transparent text-4xl p-2 bg-clip-text text-center bg-gradient-to-r from-green-500 to-purple-500 '>{title}</h1>
      
  </div>;
};

export default Title;
