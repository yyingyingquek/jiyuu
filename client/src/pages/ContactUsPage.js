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
          <input
            className="border-2 w-1/3 px-1"
            placeholder="your name"
          ></input>
          <input className="border-2 w-1/2 px-1" placeholder="email"></input>
          <input
            className="border-2 w-96 px-1"
            placeholder="your phone number (optional)"
          ></input>{" "}
          <br />
          <textarea className="border-2 w-96 h-7"></textarea>
          <br />
          <button
            className="border-2 p-2 w-96"
            onClick={handleButtonPreventDefault}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
