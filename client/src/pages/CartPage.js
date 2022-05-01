import React from "react";
import placeholder from "../images/placeholder.jpeg";

const CartPage = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-3">
            <h1 className="font-semibold text-2xl">Cart</h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
              Total
            </h3>
          </div>
          <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              {/* product */}
              <div className="w-20">
                <img className="h-24" src={placeholder} alt="" />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">test 1</span>
                <button className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left">
                  Remove
                </button>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <h4 className="mx-2 text-center w-8">1</h4>
            </div>

            <span className="text-center w-1/5 font-semibold text-sm">
              $400.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              $400.00
            </span>
          </div>

          <button className="relative left-3/4 bg-indigo-500 font-semibold hover:bg-indigo-400 py-3 text-sm text-white uppercase w-32">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
