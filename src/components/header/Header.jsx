import { useLoaderData } from "react-router-dom";
import Alldata from "../All data/Alldata"; 

const Header = () => { 

    // const allProduct = useLoaderData();
    return (
        <div>
            {
                allProduct.map(product =><Alldata key={product.product_id} product={product}></Alldata>)
            } 
            
            <div>
                <p> header product : {allProduct.length}</p>
            </div>

            
            <h1 className="text-3xl"> Alhamdulilah its working</h1> 
        </div>
    );
};

export default Header;