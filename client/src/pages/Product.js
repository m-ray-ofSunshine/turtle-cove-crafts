import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProductData} from "../components/utils/API"


function Product() {

    const {productId} = useParams();
    const [singleProductData, setSingleProductData] = useState()

    
    

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
                    <img src={`/file/${singleProductData.image}`}  className="card-img-top" alt="..." />
                    <div className="card-body">
                        
                        <p className="card-text">{singleProductData.product_description} <br /> The price is ${singleProductData.product_price}</p>
                        <a href={`/products/${singleProductData._id}`} className="btn btn-primary">Buy</a>
                    </div>
                </div>}
        </div>
     );
}

export default Product;