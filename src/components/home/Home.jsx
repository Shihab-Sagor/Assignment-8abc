 import { NavLink, Outlet, useLoaderData, } from 'react-router-dom';
import './home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../header/Header';
import Fetch from '../fatchdata/Fetch';
import Alldata from '../All data/Alldata';
 const Home = () => {
   
    return (
        <div>
          <div className="w-11/12 place bg-purple-600 mx-auto -mt-14 rounded-md  text-white">
          <p className='text-5xl text-center  pt-28 text-white'>Upgrade Your Tech Accessorize with  <br/> Gadget Heaven Accessories </p>
          <p className='text-sm text-center pt-10 text-gray-300'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all! </p>
         <div className='text-center pb-80 mb-96 mt-10'> 
            <button className='btn rounded-3xl py-3 px-4 text-black'>
                <NavLink to='/dashboard'>Shop Now</NavLink>

         </button>
         </div>
         <div className="w-9/12 mx-auto image h-96 ">
            <img className="rounded-3xl border-8 border-purple-400 " src="https://i.ibb.co.com/Sm5zMRn/banner.jpg" alt="" />
         </div>
         </div>
                {/* show all data  */}
                <div className='w-11/12 mx-auto mb-20'>
                    <h1 className='text-3xl font-bold text-center'> Explore Cutting-Edge gadgets</h1>
                </div>

            <div className=' grid grid-cols-2 w-11/12 sidebar mx-auto'>
                <div className='border-2 p-2 w-3/12 rounded-3xl  border-gray-600'>
                <button className='mt-5'> <NavLink className={'ml-4 rounded-3xl border-2 px-3  text-center hover:bg-purple-500 hover:text-black py-1'} to='/all'>All Product</NavLink></button>
                <button className='mt-5'><NavLink className={'ml-4 rounded-3xl border-2 px-6 text-center hover:bg-purple-500 hover:text-black py-1'} to='/laptop'>Laptops</NavLink></button>
                <button className='mt-5'><NavLink className={'ml-4 rounded-3xl border-2 px-6 text-center hover:bg-purple-500 hover:text-black py-1'} to='/phone'>Phones</NavLink></button>
                <button className='mt-5'><NavLink className={'ml-4 rounded-3xl border-2 px-2 text-center hover:bg-purple-500 hover:text-black py-1'} to='/accessories'>Accessories</NavLink></button>
                <button className='mt-5'><NavLink className={'ml-4 rounded-3xl border-2 px-1 text-center hover:bg-purple-500 hover:text-black py-1'} to='/watch'>Smart Watch</NavLink></button>
                <button className='mt-5'><NavLink className={'ml-4 rounded-3xl border-2 px-4 text-center hover:bg-purple-500 hover:text-black py-1'} to='/mac'>MacBook</NavLink></button>
                <button className='mt-5 mb-5'><NavLink className={'ml-4 rounded-3xl border-2  px-6  text-center hover:bg-purple-500 hover:text-black py-1'} to='/iphone'>Iphone</NavLink></button>
                <NavLink to='/fetch'> </NavLink>
                
                </div> 
                <div className=' data secton grid grid-cols-2'>
                <Outlet/> 
                    
                   
                </div>
            </div>

        </div>
    );
};

export default Home;