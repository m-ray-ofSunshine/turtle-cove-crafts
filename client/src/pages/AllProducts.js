import React from "react";
import ProductList from "../components/ProductList";

function AllProducts() {
    return ( 
        <div className="row justify-content-around">
           <h2 className="text-center">Products</h2>
           <ProductList/>

        </div>
     );
}

export default AllProducts;