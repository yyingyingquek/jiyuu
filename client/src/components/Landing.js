import React, { useState, useEffect } from "react";
import placeholder from "../images/placeholder.jpeg";
import { NavLink } from "react-router-dom";

const Landing = () => {
  const [logIn, setLogIn] = useState(false);

  let accessToken = localStorage.getItem("access_token");

  const checkLogIn = () => {
    if (accessToken !== null) {
      setLogIn(true);
    }
  };

  useEffect(() => {
    checkLogIn();
  }, [logIn]);

  return (
    <>
      <section className="bg-white justify-center">
        <div className="max-w-6xl px-20 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Lorem ipsum dolor sit <br />
                amet, consectetur
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <NavLink
                to="/shop"
                className="block mt-8 border-2 w-24 text-center hover:bg-indigo-300"
              >
                Shop Now
              </NavLink>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    className="object-cover object-center w-full rounded-md shadow"
                    src={placeholder}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    className="object-cover object-center w-full rounded-md shadow"
                    src={placeholder}
                  ></img>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Lorem ipsum dolor sit <br />
                amet, consectetur
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <NavLink
                to="/shop"
                className="block mt-8 border-2 w-24 text-center hover:bg-indigo-300"
              >
                Shop Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
