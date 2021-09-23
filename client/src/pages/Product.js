import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProductData} from "../components/utils/API"
import coasters from "../assets/images/coasters.jpg"
import cornhole from "../assets/images/cornhole.jpg"
import cribbage from "../assets/images/cribbage.jpg"
import sign from "../assets/images/sign.jpg"

function Product() {

    const {productId} = useParams();
    const [singleProductData, setSingleProductData] = useState()

    const getImage = (image) => {
        if (image === "coasters") {
            return coasters
        } else if (image === "cornhole") {
            return cornhole
        } else if (image === "cribbage") {
            return cribbage
        } else if (image === "sign") {
            return sign
        }

    }

    useEffect(() => {
        const apiCall = async () => {

            const product = await getSingleProductData(productId)

           
            setSingleProductData(product.product)

        }
        apiCall()
    })
    
   
    return ( 
        <div className="row justify-content-center">
        
        {singleProductData &&
            <div className="card" key={singleProductData._id} style={{ width: "50vw", margin: "2vw" }}>
                <h2 className="text-center">{singleProductData.product_name}</h2>
                    <img src={getImage(singleProductData.image)}  className="card-img-top" alt="..." />
                    <div className="card-body">
                        
                        <p className="card-text">{singleProductData.product_description} <br /> The price is ${singleProductData.product_price}</p>
                        <a href={`/products/${singleProductData._id}`} className="btn btn-primary">Buy</a>
                    </div>
                </div>}
        </div>
     );
}

export default Product;