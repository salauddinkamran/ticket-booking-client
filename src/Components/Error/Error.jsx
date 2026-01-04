import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <h1 className='text-red-400 font-bold text-7xl text-center'>Opps Error</h1>
      <Link to="/" className="btn btn-error text-white mt-10">Go To Home</Link>
    </div>
  );
};

export default Error;