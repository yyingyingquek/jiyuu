import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import userContext from "../context/userContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [successfulLogIn, setSuccessfulLogIn] = useState(false);

  const userCtx = useContext(userContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassWord(event.target.value);
  };

  let navigate = useNavigate();

  const logIn = async () => {
    const data = JSON.stringify({
      email: email,
      password: password,
    });

    const config = {
      method: "post",
      url: "http://127.0.0.1:8000/jwt_api/token/",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("access_token")
          ? "JWT" + localStorage.getItem("access_token")
          : null,
        accept: "application/json",
      },
      data: data,
    };

    const response = await axios(config)
      .then((response) => {
        setSuccessfulLogIn(true);
        console.log(response.data);
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        console.log(response);

        const token = localStorage.getItem("access_token");
        console.log(token);
        const decoded = jwt_decode(token);
        console.log(decoded);
        localStorage.setItem("decoded_token", JSON.stringify(decoded));
        console.log(JSON.parse(localStorage.getItem("decoded_token")));

        const checkSuperUser = JSON.parse(
          localStorage.getItem("decoded_token")
        );
        if (checkSuperUser.user_id === 1) {
          userCtx.setSuperUser(true);
        } else {
          userCtx.setSuperUser(false);
        }
        navigate("/home");
      })
      .catch((error) => {
        setSuccessfulLogIn(false);
        console.log(error);
        alert("Please enter the correct email or password");
      });

    return response;
  };

  const handleAdminLogIn = (event) => {
    event.preventDefault();
    logIn();
    setEmail("");
    setPassWord("");
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
              className="form-input mt-1 block w-full rounded-md border-2"
              //   required
              autoComplete="email"
              value={email}
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
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 text-center bg-indigo-500 rounded-md text-white text-sm hover:bg-indigo-400 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
