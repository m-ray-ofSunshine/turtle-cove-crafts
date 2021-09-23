

export const getProductData = async (req,res) => {
    return await fetch("/api/products").then(res => res.json())
    
};
export const getSingleProductData = async (id) => {
    
    return await fetch(`/api/products/${id}`).then(res => res.json())
    
};