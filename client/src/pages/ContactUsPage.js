import React from "react";

const ContactUsPage = () => {

  const handleButtonPreventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div className="md:p-4 justify-center">
      <div className="max-w-4xl px-20 py-1 mx-auto">
        <h1 className="md:text-2xl md:font-semibold text-center">Contact Us</h1>
        <p className="text-left font-semibold">You are important!</p>
        <p className="text-left py-4">
          We believe the constant refinement of our products. Do drop us an
          email, or visit us on our socials to contact us!
        </p>
        <form className="py-2">
          <div className="p-1">
            <input
              className="border-2 w-full px-1"
              placeholder="your name"
            ></input>
          </div>
          <div className="p-1">
            <input className="border-2 w-full px-1" placeholder="email"></input>
          </div>
          <div className="p-1">
            <input
              className="border-2 w-full px-1"
              placeholder="your phone number (optional)"
            ></input>
          </div>{" "}
          <div className="p-1">
            <textarea className="border-2 w-full px-1"></textarea>
          </div>
          <div className="p-1">
            <button
              className="py-2 px-4 text-center bg-indigo-500 rounded-md text-white text-sm hover:bg-indigo-200"
              onClick={handleButtonPreventDefault}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
