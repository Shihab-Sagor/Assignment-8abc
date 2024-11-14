import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../home/Home';
import Footer from '../Footer/Footer';

const Accesories = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <div className=' pb-40 pt-20 -mt-80'>
                 
                <h1 className='text-center text-5xl text-fuchsia-950'> This item is unavailable now !! </h1>
            </div>
            <Footer/>

        </div>
    );
};

export default Accesories;