import React, { useState, useEffect } from "react";
import axios from "axios";
// import placeholder from "../images/placeholder.jpeg";
import Product from "./Product";

const ProductPage = () => {
  const [product, setProduct] = useState([]);

  const config = {
    method: "get",
    url: "http://127.0.0.1:8000/api/products/",
    headers: {},
  };

  const fetchProducts = async () => {
    const response = await axios(config);
    console.log(response.data);
    setProduct(response.data);
    return response.data;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div class="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 px-4">
        <Product product={product} />
      </div>

    </>
  );
};

export default ProductPage;

// name: product.product_name,
// description: product.product_description,
// image: product.product_image,
// price: product.product_price,
// size: product.product_size,
// reviews: product.reviews,
// numOfReviews: product.num_of_reviews,

{
  /* <Product
key={index}
name={product.product_name}
description={product.product_description}
image={product.product_image}
price={product.product_price}
size={product.product_size}
reviews={product.reviews}
numOfReviews={product.num_of_reviews}
/> */
}
