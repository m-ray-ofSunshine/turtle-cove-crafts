import React, {useState, useEffect} from "react";
import { getProductData, getSingleProductData } from "./utils/API"

function ProductListing(props) {

    const [productData, setProductData] = useState()
   
    

    useEffect(() => {
        const apiCall = async () => {

            const products = await getProductData()

            setProductData(products.products)

        }
        apiCall()
    }, [])

    

    const handleClick = async (e) => {
        e.preventDefault()
        const product = await getSingleProductData(e.target.id)
        props.setSelectedProduct(product)
        
    }
    const clearData =() => {
        props.setSelectedProduct(false)
    }
    const generateButtons = () => {
        if (productData) {
            let productList = productData.map((product, i) => {
                return (
                    <button className="list-group-item list-group-item-action" id={product._id} key={i} onClick={handleClick}>{product.product_name}</button>
                )
            })
            return productList
        }else {
            return null;
        }
    }



    return ( 
        <div className="col  p-2 m-2 justify-content-center" >
            <h5 className="card-title cardHeaders">All Products</h5>
            <ul className="list-group" style={{width: "25vw"}}>
                {generateButtons()}
                <button className="list-group-item list-group-item-action" onClick={clearData}>Add new product</button>
            </ul>
        </div>
    );
}

export default ProductListing;