import ProductList from "./ProductList";

function Featured() {
    return ( 
        <div className="row justify-content-center">
            <h2>Featured Products</h2>
            <ProductList/>
            <ProductList/>
            <ProductList/>
        </div>

        
     );
}

export default Featured;