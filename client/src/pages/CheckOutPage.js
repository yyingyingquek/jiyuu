import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import cartContext from "../context/cartContext";
import placeholder from "../images/placeholder.jpeg";

const CheckOutPage = (props) => {
  // console.log(props.value.cart);
  const checkOutItems = props.value.cart;

  const calPrice = [];

  const mapCheckOut = checkOutItems.map((item, index) => {
    return (
      <div key={index}>
        <div className="flex justify-between mt-6">
          <div className="flex">
            {calPrice.push(item.showProduct.product_price)}
            <img
              className="h-20 w-20 object-cover rounded"
              src={placeholder}
              alt=""
            />
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">
                {item.showProduct.product_name}
              </h3>
            </div>
          </div>
          <span className="text-gray-600">
            ${item.showProduct.product_price}
          </span>
        </div>
      </div>
    );
  });

  // console.log(calPrice);

  const toInt = calPrice.map(Number);
  // console.log(toInt);

  const totalPrice = toInt.reduce((a, b) => a + b).toFixed(2);
  // console.log(totalPrice);

  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState(0);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  let getUser = "";
  if (localStorage.getItem("decoded_token") === null) {
    // console.log("0");
  } else {
    getUser = JSON.parse(localStorage.getItem("decoded_token"));
    // console.log(getUser.user_id);
  }

  const createOrder = async () => {
    const data = JSON.stringify({
      user: getUser.user_id,
      payment_method: "paypal",
      price_paid: totalPrice,
      address: address,
      postal_code: postalCode,
      shipping: 2,
      total_price: JSON.parse(totalPrice) + 2,
    });

    const config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/add-order/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response);
    props.setOrderNum(response.data);
  };

  let navigate = useNavigate();
  const handleOrderSubmit = (event) => {
    if (getUser === "") {
      alert("Please login or register to check out");
      navigate("/login");
    } else {
      event.preventDefault();
      createOrder();
      setAddress("");
      setPostalCode(0);
      navigate("/payment");
    }
  };

  return (
    <>
      {checkOutItems.length === 0 ? (
        "add items"
      ) : (
        <>
          <div className="my-8">
            <div className="container mx-auto px-6">
              <h3 className="text-gray-700 text-2xl font-medium">Checkout</h3>
              <div className="flex flex-col lg:flex-row mt-8">
                <div className="w-full lg:w-1/2 order-2">
                  <div className="flex items-center">
                    <button className="flex text-sm text-gray-700 ml-8 focus:outline-none">
                      <span className="flex items-center justify-center border-2 border-indigo-500 rounded-full h-5 w-5 mr-2">
                        1
                      </span>{" "}
                      Shipping
                    </button>
                    <button
                      className="flex text-sm text-gray-500 ml-8 focus:outline-none"
                      disabled
                    >
                      <span className="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">
                        2
                      </span>{" "}
                      Payments
                    </button>
                  </div>
                  <div className="mt-8 lg:w-3/4">
                    <div>
                      <h4 className="text-sm text-gray-500 font-medium">
                        Shipping Cost
                      </h4>
                      <div className="mt-6">
                        <button className="flex items-center justify-between w-full bg-white rounded-md border-2 border-indigo-500 p-4 focus:outline-none">
                          <label className="flex items-center">
                            <input
                              readOnly
                              type="radio"
                              className="form-radio h-5 w-5 text-indigo-500"
                              checked
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Standard
                            </span>
                          </label>

                          <span className="text-gray-600 text-sm">$2</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-sm text-gray-500 font-medium">
                        Delivery Address
                      </h4>
                      <form onSubmit={handleOrderSubmit}>
                        <div className="mt-6 flex">
                          <label className="block flex-1 ml-3">
                            <input
                              type="text"
                              className="form-input mt-1 block w-full text-gray-700 border-2 rounded px-1"
                              placeholder="Address"
                              onChange={handleAddressChange}
                            />
                          </label>
                        </div>
                        <div className="mt-6 flex">
                          <label className="block flex-1 ml-3">
                            <input
                              type="text"
                              className="form-input mt-1 block w-full text-gray-700 border-2 rounded px-1"
                              placeholder="Postal Code"
                              onChange={handlePostalCodeChange}
                            />
                          </label>
                        </div>
                        <div className="flex items-center justify-between mt-8">
                          <button className="flex items-center px-3 py-2 bg-indigo-500 text-white text-sm font-medium rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">
                            <span>Payment</span>
                            <svg
                              className="h-5 w-5 mx-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
                  <div className="flex justify-center lg:justify-end">
                    <div className="border rounded-md max-w-md w-full px-4 py-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-gray-700 font-medium">
                          Order total
                        </h3>

                      </div>
                      {mapCheckOut}
                      <div className="flex justify-between mt-6">
                        <div className="flex">
                          <span className="relative left-64">{totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CheckOutPage;
