import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassWord] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassWord(event.target.value);
  };

  const createUser = async () => {
    const data = JSON.stringify({
      email: email,
      name: name,
      surname: surname,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/account/users/register/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    console.log(response);
  };

  let navigate = useNavigate();

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    createUser();
    console.log(email);
    console.log(name);
    navigate("/login");
  };

  return (
    <form className="p-4" onSubmit={handleRegisterSubmit}>
      <label htmlFor="email">Email: </label>
      <input
        className="border-2"
        placeholder="email"
        onChange={handleEmailChange}
      ></input>{" "}
      <br />
      <label htmlFor="name">Name: </label>
      <input
        className="border-2"
        placeholder="name"
        onChange={handleNameChange}
      ></input>{" "}
      <br />
      <label htmlFor="surname">Surname: </label>
      <input
        className="border-2"
        placeholder="surname"
        onChange={handleSurnameChange}
      ></input>{" "}
      <br />
      <label htmlFor="password">Password: </label>
      <input
        className="border-2"
        type="password"
        placeholder="password"
        onChange={handlePasswordChange}
      ></input>
      <br />
      {/* <label htmlFor="confirm-password">Confirm Password: </label>
      <input
        className="border-2"
        type="password"
        placeholder="confirm password"
        onChange={handleConfirmPasswordChange}
      ></input>{" "} */}
      {/* <br /> */}
      <button className="border-2">Register</button>
    </form>
  );
};

export default RegisterPage;
