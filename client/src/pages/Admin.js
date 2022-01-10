import React, { useState, useEffect, useContext } from "react";
import { createProduct, uploadImage, deleteSingleProduct, updateSingleProduct } from "../utils/API";
import ProductListing from "../components/ProductListing";
var mongoose = require("mongoose")

function Admin() {
  const [formData, setFormData] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  //const user = useContext(UserContext)

  //if (user) {
  //  console.log(user);
  //}

  useEffect(() => {
    if (selectedProduct) {
      setFormData({ ...selectedProduct.product });
      setShowDeleteButton(true);
    } else {
      setFormData(false);
      setShowDeleteButton(false);
    }
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImage = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
      image: e.target.files[0].name,
    });
  };

  const deleteProduct = async () => {
    let id = mongoose.Types.ObjectId(`${selectedProduct.product._id}`) 
    const res = await deleteSingleProduct(id)
    if (res) {
      alert(`${selectedProduct.product.product_name} was deleted!`)
    } else {
      alert(`Something went wrong!`)
    }
    window.location.reload(false)
    console.log(res);
    
  }
  const updateProduct = async () => {
    let id = mongoose.Types.ObjectId(`${selectedProduct.product._id}`) 
    const res = await updateSingleProduct(id, formData)
    

    if (res) {
      alert(`${selectedProduct.product.product_name} was updated!`)
    } else {
      alert(`Something went wrong!`)
    }
    window.location.reload(false)
    
  }
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await createProduct(formData);
      if (!res.ok) {
        throw new Error("something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
    try {
      var data = new FormData();
      data.append("file", formData.file);
      
      const res = await uploadImage(data);
      if (!res.ok) {
        throw new Error("something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
    window.location.reload(false)
  };

  return (
    <div className="row ">
      <h3 style={{textAlign: "center"}} className="col-12" >Admin Page</h3>
      <form className="col" onSubmit={(e) => handleFormSubmit(e)}>
        {/* Product Name */}
        <div className="row g-3 align-items-center m-2">
          <div className="col-auto">
            <label className="col-form-label">Product Name</label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="product_name"
              name="product_name"
              className="form-control"
              onChange={handleInputChange}
              value={formData ? formData.product_name : ""}
            />
          </div>
          <div className="col-auto">
            <span className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
        {/* Product Decscription */}
        <div className="row g-3 align-items-center m-2">
          <div className="col-auto">
            <label className="col-form-label">Product Description</label>
          </div>
          <div className="col-auto">
            <textarea
              style={{width: "200px", height: "20vh"}}
              type="text"
              id="product_description"
              name="product_description"
              className="form-control"
              onChange={handleInputChange}
              value={formData ? formData.product_description : ""}
            />
          </div>
          <div className="col-auto">
            <span className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
        {/* Product Price */}
        <div className="row g-3 align-items-center m-2">
          <div className="col-auto">
            <label className="col-form-label">Product Price</label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="product_price"
              name="product_price"
              className="form-control"
              onChange={handleInputChange}
              value={formData ? formData.product_price : ""}
            />
          </div>
          <div className="col-auto">
            <span className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
        {/* Image Upload */}
        <div className="row g-3 align-items-center m-2">
          <div className="col-auto">
            <label className="col-form-label">Upload an image</label>
          </div>
          <div className="col-auto">
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              className="form-control"
              onChange={handleImage}
            />
          </div>
          {showDeleteButton && (
            <div>
              <p>Current image:</p>
              <img src={`/file/${selectedProduct.product.image}`} alt="..." style={{width: "20vw"}}/>
            </div>
          )}
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
        {!showDeleteButton && (
          <button type="submit" className="m-2 btn-primary">
          Create
        </button>
        )}
        
        {showDeleteButton && (
          <>
          <button 
          type="button" 
          className="m-2 btn-primary"
          onClick={updateProduct}
          >
          Update
        </button>
          <button
            type="button"
            className="m-2 btn-danger"
            onClick={deleteProduct}
          >
            Delete
          </button>
          </>
          
        )}
      </form>
      <ProductListing
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
        setFormData={setFormData}
        setShowDeleteButton={setShowDeleteButton}
      />
    </div>
  );
}

export default Admin;
