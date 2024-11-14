import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Alldata from "../All data/Alldata";

const Fetch = ({ product }) => {
  
  return (
    <div className="card  bg-base-100 w-72  mb-6 hover:shadow-gray-500 shadow-xl">
      <figure>
        <img
          src={product.product_image}
          alt="IT product"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.product_title}</h2>
        <p>Price: {product.price}$</p>
        <div className="card-actions">
        <button className='mt-3'><NavLink className={' rounded-3xl border-2 border-purple-400  px-6  text-center hover:bg-purple-500 hover:text-white py-1'} to={`/details/${product.product_id}`}>View Details</NavLink></button>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
