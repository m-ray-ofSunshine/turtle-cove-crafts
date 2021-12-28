import React, { useState, useEffect } from 'react';

import { getProductData } from "./utils/API"


function ProductList() {
    const [productData, setProductData] = useState()

    useEffect(() => {
        const apiCall = async () => {

            const products = await getProductData()

            setProductData(products.products)

        }
        apiCall()
    }, [productData])



    


    if (productData) {
        let productCards = productData.map((product) => {
            return (
                <div className="card" key={product._id} style={{ width: "25vw", margin: "2vw" }}>
                    <img src={`/file/${product.image}`} className="card-img-top mt-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.product_name}</h5>
                        <p className="card-text">{product.product_description} <br /> The price is ${product.product_price}</p>
                        <a href={`/products/${product._id}`} className="btn btn-primary">Buy</a>
                    </div>
                </div>
            )
        })
        return productCards
    }else {
        return null;
    }



}

export default ProductList;