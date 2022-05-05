import React, { useContext } from "react";
import placeholder from "../images/placeholder.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../context/userContext";

function Product(props) {
  // console.log(props.user);

  // const userCtx = useContext(userContext);
  let navigate = useNavigate();
  // console.log(props);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const addNewProduct = () => {
    navigate(`/newproduct`);
  };

  const mapProduct = props.product.map((product) => {
    return (
      <div key={product.id}>
        {/* {console.log(product.product_name)} */}
        <div className="w-full max-w-sm py-4 mx-auto my-1 rounded-md shadow-md overflow-hidden">
          <div
            className="flex items-end justify-end h-96 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${product.product_image})` }}
            onClick={() => handleProductClick(product.id)}
          ></div>
          <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">{product.product_name}</h3>
            <span className="text-gray-500 mt-2">{product.product_price}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {mapProduct}
      {props.user.superUser ? (
        <button className="border-2 w-36 h-8" onClick={addNewProduct}>
          Add new product
        </button>
      ) : null}
    </>
  );
}

export default Product;
