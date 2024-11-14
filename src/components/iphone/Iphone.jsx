import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../home/Home';
import Footer from '../Footer/Footer';

const Iphone = () => {
    return (
        <div>
             <Navbar/>
            <Home/>
            <div className='text-center'>Iphones</div>
            <Footer/>

            
        </div>
    );
};

export default Iphone;