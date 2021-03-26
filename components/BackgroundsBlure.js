import React from 'react';

export default function BackgroundsBlure() {
  return (
    <>
      <div
        className='bg-turquoise-500 h-60 w-60 absolute top-5 opacity-70'
        style={{
          filter: 'blur(250px)',
          transform: 'matrix(0.84, -0.25, 0.75, 0.94, 0, 0)',
        }}
      />
      <div
        className='h-60 w-60 absolute top-10 opacity-60 left-96'
        style={{
          filter: 'blur(250px)',
          background: '#BE41EA',
        }}
      />
      <div
        className='h-80 w-80 absolute top-80 opacity-20 right-12'
        style={{
          filter: 'blur(250px)',
          background: '#7741EA'
        }}
      />
      <div
        className='h-80 w-80 absolute bottom-80 opacity-20 right-12'
        style={{
          filter: 'blur(250px)',
          background: '#7741EA'
        }}
      />
      <div
        className='h-60 w-60 absolute bottom-80 opacity-70 right-80'
        style={{
          filter: 'blur(250px)',
          background: '#41EAD4',
          transform: 'matrix(-1, 0, 0, 1, 0, 0)'
        }}
      />
    </>
  );
}
