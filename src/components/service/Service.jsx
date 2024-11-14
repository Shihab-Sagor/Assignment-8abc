import React from 'react';

const Service = () => {
    return (
        <div>
            <div className="w-11/12 place bg-purple-600 mx-auto rounded-md  text-white">
          <p className='text-5xl text-center  pt-10 text-white'>Our Services</p>
          <p className='text-sm text-center pb-10 pt-10 text-gray-300'> Provide all category of It product some of them under as a list. You can visite our home page for more details </p>
          
         </div>
         <ol className=' text-center grid grid-cols-3 w-11/12 mt-10 mx-auto'>
            
            <li><img className='rounded-2xl' src="https://i.ibb.co.com/vQVVWJt/laptop-4.jpg" alt="" />Laptops</li>
            
            <li><img className='rounded-2xl' src="https://i.ibb.co.com/2v72QSB/phone-1.jpg" alt="" /> Phones</li>
            
            <li><img src="https://i.ibb.co.com/yW3LXrn/watch.jpg" alt="" /> Smart Watch</li>
            
            <li><img src="https://i.ibb.co.com/mvZSHbq/buds.jpg" alt="" /> Buds</li>
            
            <li> <img className='rounded-2xl' src="https://i.ibb.co.com/GJxZXvj/charging-dock.jpg" alt="" /> Charging doc</li>
          </ol>
        </div>
    );
};

export default Service;