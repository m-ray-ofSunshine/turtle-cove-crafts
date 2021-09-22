import React, { useState, useEffect } from 'react';

import { getProductData } from "./utils/API"
import coasters from "../assets/images/coasters.jpg"
import cornhole from "../assets/images/cornhole.jpg"
import cribbage from "../assets/images/cribbage.jpg"
import sign from "../assets/images/sign.jpg"

function Featured() {

    const [productData, setProductData] = useState()

    useEffect(() => {
        const apiCall = async () => {

            const products = await getProductData()
            
            setProductData(products.products)

        }
        apiCall()
    }, [])

    

    const getImage= (image)=> {
        if(image === "coasters") {
            return coasters
        }else if(image === "cornhole"){
            return cornhole
        }else if(image === "cribbage"){
            return cribbage
        }else if(image === "sign"){
            return sign
        }

    }

    const renderProducts = () => {
        if (productData) {
            let productCards = productData.map((product) => {
                return (
                    <div className="card" key={product._id} style={{ width: "25vw", margin: "2vw" }}>
                        <img src={getImage(product.image)} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.product_name}</h5>
                            <p className="card-text">{product.product_description} <br /> The price is ${product.product_price}</p>
                            <a href="www.google.com" className="btn btn-primary">Buy</a>
                        </div>
                    </div>
                )
            })
            return productCards
        }
    }

    return (
        <div className="row justify-content-center">
            <h2>Featured Products</h2>
            { renderProducts() }
            
        </div>


    );
}

export default Featured;