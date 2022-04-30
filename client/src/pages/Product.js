import React, { useState } from "react";
import placeholder from "../images/placeholder.jpeg";

function Product(props) {
  const mapProduct = props.product.map((product) => {
    return (
      <>
        {console.log(product.product_name)}
        <div className="w-full max-w-sm py-4 mx-auto my-1 rounded-md shadow-md overflow-hidden">
          <div
            className="flex items-end justify-end h-96 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${placeholder})` }}
          >
            <button className="p-2 rounded-full bg-indigo-600 text-white mx-5 -mb-4 hover:bg-indigo-500 focus:outline-none focus:bg-blue-500">
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
          </div>
          <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">{product.product_name}</h3>
            <span className="text-gray-500 mt-2">{product.product_price}</span>
          </div>
        </div>
      </>
    );
  });

  return <>{mapProduct}</>;
}

export default Product;
