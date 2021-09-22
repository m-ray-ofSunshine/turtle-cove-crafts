const {Schema, model} = require("mongoose");


const productSchema = new Schema(
    {
        
        product_name: {
            type: String,
            required: true
        },
        product_description: {
            type: String
        },
        product_price: {
            type: Number
        },
        image: {
            type: String
        }
    }
)

const Product = model("Product", productSchema)

module.exports = Product;