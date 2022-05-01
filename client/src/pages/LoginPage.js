import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

//   const dispatch = useDispatch();

//   const storeAuth = useSelector((state) => {
//     state.user.auth;
//   });
//   const storeEmail = useSelector((state) => {
//     state.user.email;
//   });

//   const logInUser = (event) => {
//     event.preventDefault();
//     dispatch(userActions.login(email));
//   };

//   const logOutUser = () => {
//     dispatch(userActions.logout());
//   };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassWord(event.target.value);
  };

  let navigate = useNavigate();

  const logIn = async () => {
    const data = JSON.stringify({
      email: "yingying@gmail.com",
      password: "example123",
    });

    const config = {
      method: "post",
      url: "http://127.0.0.1:8000/jwt_api/token/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = axios(config);
    console.log(response);
    return response;
  };

  const handleAdminLogIn = (event) => {
    event.preventDefault();
    logIn();
    setEmail("");
    setPassWord("");
    // navigate("/home");
  };

  return (
    <div className="flex items-center justify-center mt-16 mx-6">
      <div className="p-6 max-w-sm w-full shadow rounded-md">
        <h3 className="text-xl text-center">Login</h3>

        <form className="mt-4" onSubmit={handleAdminLogIn}>
          <label className="block">
            <span className="text-sm">E-Mail Address</span>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input mt-1 block w-full rounded-md border-2 "
              //   required
              autoComplete="email"
              onChange={handleEmailChange}
            />
          </label>

          <label className="block mt-3">
            <span className="text-sm">Password</span>
            <input
              id="password"
              type="password"
              className="form-input mt-1 block w-full rounded-md border-2"
              name="password"
              //   required
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
          </label>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 text-center bg-indigo-600 rounded-md text-white text-sm hover:bg-indigo-500 focus:outline-none"
            >
              Login
            </button>
            {/* {storeAuth ? "logged in" : "logged out"}
            {storeEmail} */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
