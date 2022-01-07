const Product = require("../models/Product")

module.exports = {
    async createProduct({body}, res) {
        //console.log(body);

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
    },
    async getSingleProduct( req, res) {
        var id = req.params.productId
        const product = await Product.findById(id).then(function (data ) {
            
            return data
        })
        res.json({product})
    },
    async deleteProduct(req, res) {
        var id = req.params.productId
        const product = await Product.deleteOne({_id: id})
    
        if(!product) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        res.json("success")
    },
    async updateProduct(req, res) {
        var id = req.params.productId
        const product = await Product.findOneAndUpdate({_id: id},{body: req.body})
        console.log(product);
        if(!product) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        res.json("success")
    }
}