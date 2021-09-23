const router = require("express").Router()
const {createProduct, getAllProducts, getSingleProduct} = require("../../controllers/product-controller")


router.route("/").get(getAllProducts).post(createProduct)
router.route("/:productId").get(getSingleProduct)

module.exports = router;