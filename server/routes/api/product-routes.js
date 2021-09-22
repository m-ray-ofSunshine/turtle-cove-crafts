const router = require("express").Router()
const {createProduct, getAllProducts} = require("../../controllers/product-controller")


router.route("/").get(getAllProducts).post(createProduct)

module.exports = router;