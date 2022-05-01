import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div className="flex items-center justify-center mt-16 mx-6">
      <div className="p-6 max-w-sm w-full shadow rounded-md">
        <h3 className="text-xl text-center">Register</h3>
        <form className="p-4" onSubmit={handleRegisterSubmit}>
          <label className="text-sm" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="form-input mt-1 px-1 w-full rounded-md border-2"
            onChange={handleEmailChange}
          ></input>{" "}
          <br />
          <label className="text-sm" htmlFor="name">
            Name:{" "}
          </label>
          <input
            className="form-input mt-1 px-1 w-full rounded-md border-2"
            onChange={handleNameChange}
          ></input>{" "}
          <br />
          <label className="text-sm" htmlFor="surname">
            Surname:{" "}
          </label>
          <input
            className="form-input mt-1 px-1 w-full rounded-md border-2"
            onChange={handleSurnameChange}
          ></input>{" "}
          <br />
          <label className="text-sm" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="form-input mt-1 px-1 w-full rounded-md border-2"
            type="password"
            onChange={handlePasswordChange}
          ></input>
          <br />
          <div className="mt-3">
            <button className="w-full py-2 px-4 text-center bg-indigo-500 rounded-md text-white text-sm hover:bg-indigo-400">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
