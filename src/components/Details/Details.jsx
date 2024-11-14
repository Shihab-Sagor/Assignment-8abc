import { useLoaderData } from "react-router-dom";
import "./detail.css";
const Details = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="w-11/12 places bg-purple-600 mx-auto rounded-md  text-white">
          <p className='text-xl text-center  pt-10 text-white'>Product Details </p>
          <p className='text-sm text-center pt-10 text-gray-300'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all! </p>
         <div className='text-center pb-40 mb-96 mt-10'></div>
         <div className="w-9/12 mx-auto images h-96 ">
            <img className="rounded-3xl border-8 border-purple-400 h-96 w-11/12 bg-gray-700 "  alt="" />
         </div>
         </div>
    </div>
  );
};

export default Details;
