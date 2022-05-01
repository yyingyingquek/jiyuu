import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const addNewProduct = async () => {
    const data = JSON.stringify({
      product_name: productName,
      product_description: description,
      product_price: price,
      product_size: size,
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
    setSize("");
    // navigate("/shop");
  };

  return (
    <div className="p-4">
      <form onSubmit={handleAddNewProduct}>
        <label htmlFor="productname">Product Name: </label>
        <input className="border-2" onChange={handleProductNameChange}></input>
        <br />
        <label htmlFor="description">Product Description: </label>
        <input className="border-2" onChange={handleDescriptionChange}></input>
        <br />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          className="border-2"
          onChange={handlePriceChange}
        ></input>
        <br />
        <label htmlFor="size">Size: </label>
        <input className="border-2" onChange={handleSizeChange}></input> <br />
        <button className="border-2">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
