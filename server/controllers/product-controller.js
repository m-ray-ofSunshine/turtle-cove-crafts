const Product = require("../models/Product")

module.exports = {
    async createProduct({body}, res) {
        console.log(body);

        const product = await Product.create(body)

        if(!product) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        res.json({product})
    },
    async getAllProducts(req,res) {
        const products = await Product.find({})
        if(!products) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        res.json({products})
    }
}