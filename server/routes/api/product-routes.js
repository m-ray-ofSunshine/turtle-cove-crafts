const router = require("express").Router()
const {createProduct, getAllProducts, getSingleProduct,deleteProduct, updateProduct} = require("../../controllers/product-controller")
const upload = require("../../utils/upload")


router.route("/").get(getAllProducts).post(createProduct)
router.route("/:productId").get(getSingleProduct).delete(deleteProduct).put(updateProduct)

router.post("/upload", upload.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
   
    const imgUrl = `http://localhost:3001/file/${req.file.filename}`;
    return res.send(imgUrl);
});


module.exports = router;