import React from 'react';
import ProductCardList from "../components/ProductCardList";



function Featured() {

    

    return (
        <div className="row justify-content-center">
            <h2 className="text-center">Featured Products</h2>
            <ProductCardList/>
            
        </div>


    );
}

export default Featured;