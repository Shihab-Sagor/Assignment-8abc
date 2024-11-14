import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import './navbar.css';
 const Navbar = () => {
    return (
        <div>
            <div className="navbar w-11/12 mx-auto sticky">
  <div className="navbar-start">
    <p className="text-xl font-bold bg-gray-100 p-1 rounded-md" >Gadget Heaven</p>
  </div>

  <nav className="navbar-center gap-10 text-gray-600">
  <NavLink className={'bg-gray-100 px-3 rounded-md'} to='/home'>Home</NavLink> 
  <NavLink className={'bg-gray-100 px-3 rounded-md'} to='/statistics'>Statistics</NavLink>
   <NavLink className={'bg-gray-100 px-3 rounded-md'} to='/dashboard'>Dashboard</NavLink>
   <NavLink className={'bg-gray-100 px-3 rounded-md'} to='/service'>Service</NavLink>
  </nav> 

  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle border bg-gray-100 border-gray-300">
         <IoCartOutline />
    </button>
    <button className="btn btn-ghost btn-circle border bg-gray-100 border-gray-300">
         <CiHeart />
      
    </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;