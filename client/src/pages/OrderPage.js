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

  let mapOrders = [];
  if (orders.length !== 0) {
    mapOrders = orders.map((order) => {
      return (
        <div>
          order id: {order.id}
          <br />
          address: {order.address}
          <br />
          payment status: {order.payment_status} <br />
          delivery date: {order.delivered_date} <br />
          total price: {order.total_price}
        </div>
      );
    });
  }

  return <div>{orders.length === 0 ? "start shopping" : mapOrders}</div>;
};

export default OrderPage;
