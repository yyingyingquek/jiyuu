import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageFile, setImageFile] = useState(null);

  let navigate = useNavigate();

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const addNewProduct = async () => {
    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("product_description", description);
    formData.append("product_price", price);
    formData.append("product_image", imageFile);

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    const response = await fetch(
      "http://127.0.0.1:8000/api/create/",
      requestOptions
    );
    console.log(response);
  };

  const handleAddNewProduct = (event) => {
    event.preventDefault();
    addNewProduct();
    setProductName("");
    setDescription("");
    setPrice(0);
    setImageFile(null);
    navigate("/shop");
  };

  const handleUploadImage = async (event) => {
    event.preventDefault();
    console.log(event.target.files);
    console.log(event.target.files[0]);
    console.log("image is uploading");
    // on file upload via choose file
    setImageFile(event.target.files[0]);
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
            value={productName}
            onChange={handleProductNameChange}
          ></input>
          <label htmlFor="description">Product Description: </label>
          <input
            className="border-2 my-1 w-full"
            value={description}
            onChange={handleDescriptionChange}
          ></input>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            className="border-2 my-1 w-full"
            value={price}
            onChange={handlePriceChange}
          ></input>
          <label htmlFor="price">Product Image: </label>
          <input
            type="file"
            className="border-2 my-1 w-full"
            onChange={handleUploadImage}
          ></input>
          <br />
          <button className="border-2 p-1">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
