import React from 'react';

const Dash  = () => {
    return (
        <div>
            <div className="w-11/12 place bg-purple-600 mx-auto rounded-md  text-white">
          <p className='text-5xl text-center  pt-10 text-white'>Dashboard </p>
          <p className='text-sm text-center pb-10 pt-10 text-gray-300'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all! </p>
          <div className='flex pb-10 justify-center items-center'>
          <button className='mr-2 px-8 py-3 bg-blue-900 rounded-xl'>Cart</button>
          <button className='px-6 py-3 bg-blue-900 rounded-xl'>Wishlist</button>
          </div>
         </div>
        </div>
    );
};

export default Dash ;