import React, { useState, useEffect } from "react";
import axios from "axios";
import AllOrderCard from "../components/AllOrderCard";

const AllOrdersPage = () => {
  const [order, setOrder] = useState([]);

  const fetchAllOrders = async () => {
    const config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/view-order/",
      headers: {
        "Content-Type": "application/json",
      },
      data: "",
    };

    const response = await axios(config);
    return response.data;
  };

  useEffect(() => {
    fetchAllOrders().then((data) => setOrder(data));
  });

  let mapAllOrders = [];
  if (order.length > 0) {
    mapAllOrders = order.map((element, index) => {
      return (
        <AllOrderCard
          key={index}
          id={element.id}
          orderDate={element.order_created}
          deliveryDate={element.delivered_date}
          deliveryStatus={element.delivery_status}
          user={element.user}
        />
      );
    });
  }

  return (
    <div className="relative overflow-x-auto shadow-md p-1">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order No.
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              User
            </th>
            <th scope="col" className="px-6 py-3">
              Delivery Status
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        {mapAllOrders}
      </table>
    </div>
  );
};

export default AllOrdersPage;

// address: "123 road"
// delivered_date: null
// delivery_status: false
// id: 1
// order_created: "2022-05-03T15:52:02.328420+08:00"
// payment_date: null
// payment_method: "paypal"
// payment_status: true
// postal_code: 123456
// price_paid: "1.00"
// shipping: "1.00"
// total_price: "2.00"
// user: 1
