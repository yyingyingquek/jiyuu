import React, { useState, useEffect, useContext } from "react";
import cartContext from "../context/cartContext";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import placeholder from "../images/placeholder.jpeg";

function ProductDetails(props) {
  // console.log(props.value);
  // fetching states
  const [showProduct, setShowProduct] = useState([]);

  // quantity change states
  const [quantity, setQuantity] = useState(1);

  // editing states
  const [edit, setEdit] = useState(false);
  const [productName, setProductName] = useState(showProduct.product_name);
  const [description, setDescription] = useState(
    showProduct.product_description
  );
  const [price, setPrice] = useState(showProduct.product_price);

  // quantity
  const reduceQuantity = () => {
    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // cart states
  const cartCtx = useContext(cartContext);

  const { id } = useParams();
  let navigate = useNavigate();

  // fetching to show single products
  const fetchProducts = async (id) => {
    const config = {
      method: "get",
      url: `http://127.0.0.1:8000/api/products/${id}`,
      headers: {},
    };
    const response = await axios(config);
    // console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    fetchProducts(id).then((data) => {
      // console.log(data);
      setShowProduct(data);
    });
  }, []);

  // adding to cart
  const handleAddArrToCart = () => {
    // cartArr.push(showProduct);
    console.log(showProduct);
    cartCtx.setCart([...cartCtx.cart, { showProduct, quantity }]);
    // navigate(`/cart`);
  };

  // deleting product
  const deleteProduct = async (id) => {
    const config = {
      method: "delete",
      url: `http://127.0.0.1:8000/api/delete/${id}`,
      headers: {},
    };
    const response = await axios(config);
    return response.data;
  };

  const handleDeleteProduct = () => {
    console.log("deleted");
    deleteProduct(id);
    navigate("/shop");
  };

  // editing
  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const editProduct = async (id) => {
    const data = JSON.stringify({
      product_name: productName,
      product_description: description,
      product_price: price,
    });
    // console.log(data);
    const config = {
      method: "put",
      url: `http://127.0.0.1:8000/api/update/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response);
    // return response.data;
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    console.log("can edit");
    setEdit(true);
  };

  const handleCancelEdit = (event) => {
    event.preventDefault();
    setEdit(false);
  };

  const handleEditProduct = (event) => {
    event.preventDefault();


    console.log(id);
    // console.log(description);
    editProduct(id);
    setEdit(false);
    setProductName("");
    setDescription("");
    setPrice("");
    // console.log(productName)
  };

  const backToShop = () => {
    navigate("/shop");
  };

  return (
    <>
      <div className="my-8">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center">
            <div className="w-full h-64 md:w-1/2 lg:h-96">
              <button onClick={backToShop}>back to shop</button>
              <img
                className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                src={placeholder}
                alt="product"
              />
            </div>
            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
              {edit ? (
                <div>
                  <input
                    className="border-2 w-full"
                    defaultValue={showProduct.product_name}
                    onChange={handleProductNameChange}
                  ></input>
                  <input
                    className="border-2 w-full"
                    defaultValue={showProduct.product_price}
                    onChange={handlePriceChange}
                  ></input>
                  <input
                    className="border-2 w-full"
                    defaultValue={showProduct.product_description}
                    onChange={handleDescriptionChange}
                  ></input>
                </div>
              ) : (
                <div>
                  <h3 className="text-gray-700 uppercase text-lg">
                    {showProduct.product_name}
                  </h3>
                  <span className="text-gray-500 mt-3">
                    ${showProduct.product_price}
                  </span>{" "}
                  <br />
                  <span className="text-gray-500 mt-3">
                    {showProduct.product_description}
                  </span>
                </div>
              )}

              <hr className="my-3" />
              <div className="mt-2">
                <label className="text-gray-700 text-sm" htmlFor="Quantity">
                  Quantity:
                </label>
                <div className="flex items-center mt-1">
                  {quantity === 0 ? (
                    <button
                      className="text-gray-500 focus:outline-none focus:text-gray-600"
                      disabled
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                  ) : (
                    <button
                      className="text-gray-500 focus:outline-none focus:text-gray-600"
                      onClick={reduceQuantity}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </button>
                  )}
                  <span className="text-gray-700 text-lg mx-2">{quantity}</span>
                  <button
                    className="text-gray-500 focus:outline-none focus:text-gray-600"
                    onClick={increaseQuantity}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <button
                  className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                  onClick={handleAddArrToCart}
                >
                  Add to Cart
                </button>

                {!props.value.superUser ? null : edit ? (
                  <>
                    <button
                      className="mx-1 px-3 py-2 bg-indigo-300 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                      onClick={handleEditProduct}
                    >
                      Submit
                    </button>
                    <button
                      className="px-3 py-2 bg-indigo-300 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="mx-1 px-3 py-2 bg-indigo-300 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-2 bg-indigo-100 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                      onClick={handleDeleteProduct}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

{
  /* {edit ? (
                  <>
                    <button
                      className="mx-1 px-3 py-2 bg-indigo-300 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                      onClick={handleEditProduct}
                    >
                      Submit
                    </button>
                    <button
                      className="px-3 py-2 bg-indigo-300 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="mx-1 px-3 py-2 bg-indigo-300 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-2 bg-indigo-100 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                      onClick={handleDeleteProduct}
                    >
                      Delete
                    </button>
                  </>
                )} */
}
