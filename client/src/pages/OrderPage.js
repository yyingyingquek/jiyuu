import React, { useState, useEffect } from "react";
import UsersOrderCard from "../components/UsersOrderCard";
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
    mapOrders = orders.map((order, index) => {
      return (
        <UsersOrderCard
          key={index}
          id={order.id}
          orderDate={order.order_created}
          deliveryDate={order.delivered_date}
          deliveryStatus={order.delivery_status}
          paymentDate={order.payment_date}
          totalPrice={order.total_price}
        />
      );
    });
  }

  return (
    <>
      {orders.length === 0 ? (
        <div className="md:p-4 justify-center">
          <div className="max-w-4xl px-20 py-1 mx-auto">
            <h1 className="md:text-2xl md:font-semibold text-center">
              Start Shopping Now!
            </h1>
          </div>
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md p-1">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Price Paid
                </th>
                <th scope="col" className="px-6 py-3">
                  Delivery Status
                </th>
              </tr>
            </thead>
            {mapOrders}
          </table>
        </div>
      )}
    </>
  );
};

export default OrderPage;

// address: "321 test again"
// delivered_date: null
// delivery_status: false
// id: 12
// order_created: "2022-05-04T17:39:09.861913+08:00"
// payment_date: "2022-05-04T17:42:33.522822+08:00"
// payment_method: "paypal"
// payment_status: true
// postal_code: 123456
// price_paid: "552.00"
// shipping: "2.00"
// total_price: "554.00"
// user: 3
