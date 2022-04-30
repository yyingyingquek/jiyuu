import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import placeholder from "../images/placeholder.jpeg";

function ProductDetails(props) {
  const [showProduct, setShowProduct] = useState([]);

  const { id } = useParams();

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
      console.log(data);
      setShowProduct(data);
    });
  }, []);

  return (
    <>
      <div className="my-8">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center">
            <div className="w-full h-64 md:w-1/2 lg:h-96">
              <img
                className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                src={placeholder}
                alt="product"
              />
            </div>
            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
              <h3 claclassNames="text-gray-700 uppercase text-lg">
                {showProduct.product_name}
              </h3>
              <span className="text-gray-500 mt-3">
                ${showProduct.product_price}
              </span>
              <hr className="my-3" />
              <div className="mt-2">
                <label className="text-gray-700 text-sm" for="count">
                  Count:
                </label>
                <div className="flex items-center mt-1">
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
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
                  <span className="text-gray-700 text-lg mx-2">20</span>
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
