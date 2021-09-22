import React, { useState, useEffect } from 'react';
import {getProductData} from "./utils/API"

function ProductList() {

    const [productData, setProductData] = useState({})

    useEffect(() => {
        const apiCall = async () => {

            const products = await getProductData()
            console.log(products);
            
        }
        apiCall()
    },[])

    return (
        <div className="card" style={{ width: "25vw", margin: "2vw" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default ProductList;