import React, { useEffect } from "react";
import { DiscoverButton } from "../../NewsPopUp";
import { BsArrowRight } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

const ApplyView = () => {
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
    <div className="w-full flex flex-col justify-start items-center bg-white text-black z-[2]">
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base z-[2]">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-dark-100 indent-2 pb-8">
          How To Apply - Join a Team
        </h2>
        <p>
          <BsArrowRight className="inline" /> Sign in or sign up for a Devfolio
          account using your email, Google, GitHub, or Ethereum. <br />
          <BsArrowRight className="inline" /> Apply to the Privacy and Verifiability 
          Hackathon on Devfolio.
          <br />
          <BsArrowRight className="inline" /> Join or create a team, or you can
          also choose to hack alone.
        </p>
        <div className="w-full flex items-center justify-center lg:justify-start relative z-[2] ">
          <div className="absolute top-0 lg:left-0 h-[44px] w-[312px] pointer-events-none  bg-dark-100/30 rounded-[4px] z-[-1] flex items-center justify-center">
            <ImSpinner2 className="h-7 w-7 text-white animate-spin" />
          </div>
          <div
            data-hackathon-slug="sui-bsa-hackathon"
            data-button-theme="dark"
            className="h-[44px] w-[312px] apply-button z-[2]"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplyView;
