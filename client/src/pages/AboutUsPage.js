import React from "react";

const AboutUsPage = () => {
  return (
    <div className="md:p-4 justify-center">
      <div className="max-w-4xl px-40 py-1 mx-auto">
        <h1 className="md:text-2xl md:font-semibold text-center">About Us</h1>
        <h3 className="font-semibold text-xl text-center py-4">
          自由 (じゆう), Jiyū
        </h3>
        <p className="text-justify text-gray-600 text-sm">
          Jiyū means freedom in Japanese. We created this brand with freedom in
          mind. We want to create a brand of workout gear where everyone can
          feel comfortable in, be it while working out, going for business
          meetings, wearing it out as athleisure, yoga classes, everything.
          <br />
          <br />
          To achieve freedom, versatility and adaptability, our technical
          apparel are fashionable without compromising on the support and
          comfort. We believe that these criteria are not mutually exclusive. We
          want to be what you reach for,{" "}
          <strong>every workout, every day, every wear.</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
