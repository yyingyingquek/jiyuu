import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import cartContext from "../context/cartContext";
import placeholder from "../images/placeholder.jpeg";

const CartPage = (props) => {
  console.log(props.value.cart);
  const productsInCart = props.value.cart;
  const cartCtx = useContext(cartContext);

  const handleRemoveFromCart = (id) => {
    console.log(id);

    const filterCart = productsInCart.filter(
      (element) => element.showProduct.id !== id
    );
    console.log(filterCart);
    cartCtx.setCart(filterCart);
  };

  let navigate = useNavigate();

  const handleToCheckOut = () => {
    navigate("/checkout");
  };

  const mapCart = productsInCart.map((item) => {
    return (
      <div key={item.showProduct.id}>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24" src={item.showProduct.product_image} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">
                {item.showProduct.product_name}
              </span>
              <button
                className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left"
                onClick={() => handleRemoveFromCart(item.showProduct.id)}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <h4 className="mx-2 text-center w-8">{item.quantity}</h4>
          </div>

          <span className="text-center w-1/5 font-semibold text-sm">
            {item.showProduct.product_price}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            {(item.showProduct.product_price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    );
  });

  return (
    <>
      {productsInCart.length === 0 ? (
        <div className="md:p-4 justify-center">
          <div className="max-w-4xl px-20 py-1 mx-auto">
            <h1 className="md:text-2xl md:font-semibold text-center">
              Start Shopping Now!
            </h1>
          </div>
        </div>
      ) : (
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
            {mapCart}

            <button
              className="relative left-3/4 bg-indigo-500 font-semibold hover:bg-indigo-400 py-3 text-sm text-white uppercase w-32"
              onClick={handleToCheckOut}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
