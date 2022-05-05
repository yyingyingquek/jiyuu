import React, { useState, useEffect } from "react";

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
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="https://res.cloudinary.com/yingyingq/image/upload/v1651758672/images/image1_algu5n.jpg"
              className="object-contain object-center block w-6/12 mx-auto"
              alt="pose with logo"
            />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img
              src="https://res.cloudinary.com/yingyingq/image/upload/v1651758681/images/image2_pvg39q.jpg"
              className="object-contain object-center block w-6/12 mx-auto"
              alt="random"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Landing;
