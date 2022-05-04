import React, { useState } from "react";
import axios from "axios";

const AllOrderCard = (props) => {
  const [status, setStatus] = useState(false);

  const updateAsDelivered = () => {
    const config = {
      method: "put",
      url: `http://127.0.0.1:8000/api/delivered/${props.id}/`,
      headers: {},
    };

    axios(config);
  };

  const handleStatusClick = () => {
    updateAsDelivered()
    setStatus(true);
  };

  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {props.id}
        </th>
        <td className="px-6 py-4">{props.orderDate}</td>
        <td className="px-6 py-4">{props.user}</td>
        <td className="px-6 py-4">{props.deliveryStatus ? "true" : "false"}</td>
        {props.deliveryStatus ? null : (
          <td className="px-6 py-4 text-right">
            <button
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              onClick={handleStatusClick}
            >
              Mark as delivered
            </button>
          </td>
        )}
      </tr>
    </tbody>
  );
};

export default AllOrderCard;
