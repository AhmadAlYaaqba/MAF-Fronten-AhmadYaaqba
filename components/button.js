import React from 'react';

export default function Button({ displayText }) {
  return (
    <div className="relative w-max">
      <button className='font-Larsseit-bold py-5 px-14 bg-turquoise-400 text-white rounded-full shadow-md hover:bg-turquoise-500 ml-8 uppercase tracking-widest text-base font-bold'>
        {displayText}
      </button>
      <div className="absolute inset-y-2/4 -right-4 -right-1 h-1 w-8 bg-white" />
    </div>
  );
}
