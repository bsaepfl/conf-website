import React from "react";

const PrizeView = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 bg-white relative">
      <div
        id="Prizes"
        className="h-[52px] sm:h-[70px] w-full absolute -top-[52px] sm:-top-[70px] pointer-events-none"
      />
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base ">
        <h2 className="flex flex-col items-center justify-center gap-1 pb-10 sm:py-10">
          <span className=" font-extrabold text-6xl sm:text-7xl lg:text-9xl text-gray-700 select-none">
            $15,000
          </span>
          <span className="text-black text-2xl sm:text-3xl lg:text-4xl font-medium">
            Available in prizes
          </span>
        </h2>

        <p className="w-full max-w-[1100px] text-black">
          From <b className="font-semibold">March 8-9</b>, we are welcoming
          builders from around the globe to participate in the First Edition of the{" "}
          <b className="font-semibold">Privacy and Verifiability Hackathon</b> at EPFL, a
          prestigious institution at the forefront of technology and innovation.
          <br /> <br /> Get to win over{" "}
          <b className="font-semibold">$15,000 USD</b> in prizes and build
          something amazing in just 36 hours!
        </p>
      </div>
    </div>
  );
};

export default PrizeView;
