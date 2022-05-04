import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const addNewProduct = async () => {
    const data = JSON.stringify({
      product_name: productName,
      product_description: description,
      product_price: price,
      product_image: image,
    });

    const config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/create/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response);
  };

  let navigate = useNavigate();

  const handleAddNewProduct = (event) => {
    event.preventDefault();
    addNewProduct();
    setProductName("");
    setDescription("");
    setPrice(0);
    navigate("/shop");
  };

  const handleUploadImage = async (event) => {
    console.log("image is uploading");
    console.log(event);
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    // formData.append('product_id', productId)
  };

  return (
    <div className="md:p-4 justify-center">
      <div className="max-w-4xl px-20 py-1 mx-auto">
        <h1 className="md:text-2xl md:font-semibold ">Add a Product</h1>
        <form className="py-4" onSubmit={handleAddNewProduct}>
          <label className="py-1" htmlFor="productname">
            Product Name:{" "}
          </label>
          <input
            className="border-2 my-1 w-full"
            onChange={handleProductNameChange}
          ></input>
          <label htmlFor="description">Product Description: </label>
          <input
            className="border-2 my-1 w-full"
            onChange={handleDescriptionChange}
          ></input>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            className="border-2 my-1 w-full"
            onChange={handlePriceChange}
          ></input>
          <label htmlFor="price">Product Image: </label>
          <input
            type="text"
            value={image}
            className="border-2 my-1 w-full"
            onChange={handleImageChange}
          ></input>
          <input
            type="file"
            className="border-2 my-1 w-full"
            onChange={handleUploadImage}
          ></input>
          <button className="border-2 p-1">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
