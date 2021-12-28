import React from "react";
import ProductCardList from "../components/ProductCardList";

function AllProducts() {
    return ( 
        <div className="row justify-content-around">
           <h2 className="text-center">Products</h2>
           <ProductCardList/>

        </div>
     );
}

export default AllProducts;