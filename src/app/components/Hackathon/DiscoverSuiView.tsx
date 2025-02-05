import React from "react";
import EventCard from "../../EventCard";
import { HiArrowLongRight } from "react-icons/hi2";
import { DiscoverButton } from "../../NewsPopUp";

const DiscoverSuiView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-dark-800 relative">
      <div className="w-full max-w-[1100px] flex flex-col items-center py-20 px-4 sm:px-10 gap-16">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-dark-100 indent-2">
          {/* Discover <span className="text-dark-450">Sui Blockchain</span> */}
          Sui Blockchain
        </h2>

        {/* <div className="w-full flex flex-row justify-between items-start border relative"> */}
        <div className="w-full grid grid-rows-2 lg:grid-rows-1 grid-cols-0 lg:grid-cols-2 justify-between gap-10 sm:gap-20 relative">
          <EventCard
            color="bg-white"
            title="Sui Documentation"
            description="Docs for Sui, a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move"
            footer={
              <div className="flex justify-center">
                <DiscoverButton
                  ping={false}
                  title="View"
                  href="https://docs.sui.io/"
                />
              </div>
            }
          />
          <EventCard
            color="bg-white"
            title="Move Language"
            description="Sui is written in Rust and supports smart contracts written in Sui Move — a powerful asset-centric adaptation of Move for the Sui blockchain — to define assets that may have an owner."
            footer={
              <div className="flex justify-center">
                <DiscoverButton
                  ping={false}
                  title="Learn More"
                  href="https://docs.sui.io/learn/why-move"
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverSuiView;
