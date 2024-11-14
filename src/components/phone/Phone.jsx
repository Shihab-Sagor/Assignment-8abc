import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../home/Home";
import Footer from "../Footer/Footer";
import { NavLink, useLoaderData } from "react-router-dom";

const Phone = () => {
  const phones = useLoaderData();
  return (
    <div>
      <Navbar />
      <Home />
      <div className="ml-72 -mt-80 grid grid-cols-3">
       {
        phones.map((phone) => {
            return(
                <div className="card  bg-base-100 w-72  mb-6 hover:shadow-gray-500 shadow-xl">
                <figure>
                  <img src={phone.product_image} alt="IT product" />
                </figure>
  
                <div className="card-body">
                  <h2 className="card-title">{phone.product_title}</h2>
                  <p>Price: {phone.price}$</p>
                  <div className="card-actions">
                    <button className="mt-3">
                      <NavLink
                        className={
                          " rounded-3xl border-2 border-purple-400  px-6  text-center hover:bg-purple-500 hover:text-white py-1"
                        }
                        to={`/details/${phone.product_id}`}
                      >
                        View Details
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            )
        })
       }
      </div>
      <Footer />
    </div>
  );
};

export default Phone;
