import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../home/Home';
import Footer from '../Footer/Footer';

const MacBook = () => {
    return (
        <div>
             <Navbar/>
            <Home/>
            <div className='text-center'>Macbook</div>
            <Footer/>

        </div>
    );
};

export default MacBook;