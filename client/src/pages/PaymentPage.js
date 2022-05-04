import React, { useState, useContext } from "react";
import axios from "axios";

import cartContext from "../context/cartContext";

import dbsPayLah from "../images/dbspaylah.png";
import grabPay from "../images/grabpay.png";
import shopeePay from "../images/shopee.webp";
import qrcode from "../images/qrcode.webp";

const PaymentPage = (props) => {
  const [showQR, setShowQR] = useState(false);

  console.log(props);
  console.log(props.orderNum.id);
  const cartCtx = useContext(cartContext);

  const updateToPaidStatus = async () => {
    const config = {
      method: "put",
      url: `http://127.0.0.1:8000/api/payment/${props.orderNum.id}/`,
      headers: {},
    };

    const response = await axios(config);
    console.log(response);
  };

  const handlePaymentAsPaid = () => {
    updateToPaidStatus();
    cartCtx.setCart([]);
    props.setOrderNum([]);
  };

  const openQRCode = () => {
    setShowQR(true);
    cartCtx.setCart([])
  };

  return (
    <>
      <div className="my-8">
        <div className="container mx-auto px-6">
          <h3 className="text-gray-700 text-2xl font-medium">Payment</h3>
          <div className="flex flex-col lg:flex-row mt-8">
            <div className="w-full lg:w-1/2 order-2">
              <div className="flex items-center">
                <button className="flex text-sm text-gray-700 ml-8 focus:outline-none">
                  <span className="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">
                    1
                  </span>{" "}
                  Shipping
                </button>
                <button
                  className="flex text-sm text-gray-500 ml-8 focus:outline-none"
                  disabled
                >
                  <span className="flex items-center justify-center border-2 border-indigo-500 rounded-full h-5 w-5 mr-2">
                    2
                  </span>{" "}
                  Payment
                </button>
              </div>
              <div className="mt-8 lg:w-3/4">
                <div>
                  <h4 className="text-sm text-gray-500 font-medium">
                    Payment Method
                  </h4>
                  <div className="flex mt-6">
                    <img
                      className="w-11 mx-1"
                      src={dbsPayLah}
                      onClick={openQRCode}
                    ></img>
                    <img
                      className="w-11 mx-1"
                      src={grabPay}
                      onClick={openQRCode}
                    ></img>
                    <img
                      className="w-11 mx-1"
                      src={shopeePay}
                      onClick={openQRCode}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            {showQR ? (
              <div className="w-full mb-8 flex-shrink-0 lg:w-1/2 lg:mb-0 lg:order-2">
                <div className="flex justify-center lg:justify-end">
                  <div className="border rounded-md max-w-md px-4 py-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-700 font-medium">Payment QR</h3>
                    </div>
                    <img src={qrcode}></img>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <button className="text-xs text-gray-100" onClick={handlePaymentAsPaid}>
        Paid
      </button>
    </>
  );
};

export default PaymentPage;

// test button - grab pay icon to generate modal create modal - with rick
// roll <br />
// things to do on this page: <br />
// 1. create a payment state in checkout page to get the id of the id to put
// in the url call <br />
// 2. styling
// <br />
