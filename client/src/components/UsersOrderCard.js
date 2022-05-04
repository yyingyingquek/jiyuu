import React from "react";

function UsersOrderCard(props) {
  return (
    <tbody>
      <tr className="bg-white border-b ">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
          {props.id}
        </th>
        <td className="px-6 py-4">{props.orderDate}</td>
        <td className="px-6 py-4">${props.totalPrice}</td>
        <td className="px-6 py-4">
          {props.deliveryStatus ? "Delivered" : "Not delivered"}
        </td>
      </tr>
    </tbody>
  );
}

export default UsersOrderCard;
