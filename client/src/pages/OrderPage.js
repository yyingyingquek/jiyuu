import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  const decodedToken = JSON.parse(localStorage.getItem("decoded_token"));
  console.log(decodedToken.user_id);
  const authorization = localStorage.getItem("access_token");
  console.log(authorization);

  const getOrder = async () => {
    var data = '{\n    "email": \n}';

    var config = {
      method: "get",
      url: `http://127.0.0.1:8000/api/view-order/${decodedToken.user_id}/`,
      headers: {
        Authorization: `Bearer ${authorization}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response.data);
    setOrders(response.data);
  };

  console.log(orders);

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      {orders.length === 0
        ? "start shopping"
        : "return their orders here if length > 0"}
    </div>
  );
};

export default OrderPage;
