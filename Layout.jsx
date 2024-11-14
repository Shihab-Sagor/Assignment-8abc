import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./src/components/header/Header";
import Footer from "./src/components/Footer/Footer"
import Navbar from "./src/components/Navbar/Navbar";
import Home from "./src/components/home/Home";

const Layout = () => {
    
    return (
        <div> 
        
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;