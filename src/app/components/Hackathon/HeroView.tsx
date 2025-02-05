'use client';
import React, { useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import BoxText from "./Style/BoxText";
import { ImSpinner2 } from "react-icons/im";
import Image from "next/image";

const Hero = () => {
  const goToPrizes = () => {
    document.getElementById("Prizes")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className=" bg-dark-800 flex flex-col items-center justify-center py-20  md:py-10 font-semibold min-h-[700px] h-screen w-full relative">
      {/* NEW POP UP */}
      <div className="flex flex-col lg:flex-row w-full h-full p-0 items-center justify-evenly px-4 sm:px-10">
        <div className="flex flex-col items-center gap-10 w-full 2xl:w-[700px]">
          <BoxText
            text={
              <p className="text-dark-900 max-w-[400px] m-5 mb-3 font-normal text-center">
                Participate in the second edition of the{" "}
                <span className="font-semibold">BSA X Sui Hackathon</span> at EPFL
                campus and compete for an outstanding{" "}
                <span className="font-semibold">$20,000</span> prize pool.
              </p>
            }
            boxColor="border-dark-450"
          />
          <p className=" md:text-xl font-light text-center">
            12 - 13 OCTOBER — EPFL CAMPUS
          </p>
          <div className="flex flex-col items-center w-full relative z-[2]">
            <div className="absolute top-0 h-[44px] w-[312px]  pointer-events-none  bg-dark-100/30 rounded-[4px] z-[-1] flex items-center justify-center">
              <ImSpinner2 className="h-7 w-7 text-white animate-spin" />
            </div>
            <div
              data-hackathon-slug="sui-x-bsa-student-hackathon-v"
              data-button-theme="dark"
              className="h-[44px] w-[312px] apply-button z-[2]"
            />
          </div>
        </div>
        <div className="relative w-full h-full md:w-1/2 max-w-[1000px] overflow-hidden hidden lg:flex justify-center py-20">
          <Image
            height={500}
            width={500}
            src="/images/batiment-bc-epfl.jpg" // Set src to the path in public folder
            alt="BC builduing EPFL"
            className="w-full h-full z-10 object-contain "
          />
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1536 1689"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-[11] absolute top-0 left-0 fill-dark-800 w-full h-full py-20"
          >
            {/* <rect x="0" y="0" width="100%" height="100%" fill="red" /> */}
            <path d="M -3 1692 L -3 1400 L 300 1692 Z" />
            <path d="M 1539 -3 L 1539 300 L 1250 -3 Z" />
          </svg>
        </div>
      </div>
      <button
        type="button"
        onClick={goToPrizes}
        className=" h-20 flex flex-col items-center justify-center w-auto px-4 group hover:opacity-80"
      >
        <p className="text-sm sm:text-base md:text-lg font-light text-dark-100 uppercase">
          Discover
        </p>
        <SlArrowDown className="group-hover:translate-y-[2px] duration-100" />
      </button>
    </div>
  );
};

export default Hero;
