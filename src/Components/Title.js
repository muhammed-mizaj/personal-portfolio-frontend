import React from 'react';

const Title = ({title}) => {
  return <div>
      <h1 className='font-extrabold underline text-transparent text-4xl  bg-clip-text text-center bg-gradient-to-r from-green-500 to-purple-500 pb-4'>{title}</h1>
      
  </div>;
};

export default Title;
