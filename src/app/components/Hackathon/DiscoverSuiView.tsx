import React from "react";
import EventCard from "./Style/EventCard";
import { HiArrowLongRight } from "react-icons/hi2";
import { DiscoverButton } from "./Style/NewsPopUp";

const DiscoverSuiView = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-dark-800 relative">
      <div className="w-full max-w-[1100px] flex flex-col items-center py-20 px-4 sm:px-10 gap-16">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-black indent-2">
          {/* Discover <span className="text-dark-450">Sui Blockchain</span> */}
          Tracks
        </h2>

        {/* <div className="w-full flex flex-row justify-between items-start border relative"> */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-between gap-10 sm:gap-20 relative">
          <EventCard
            color="bg-white"
            title="Mina"
            description="To be annouced soon..."
            footer={
              <div className="flex justify-center">
                <DiscoverButton
                  ping={false}
                  title="View"
                  href="https://minaprotocol.com/"
                />
              </div>
            }
          />
          <EventCard
            color="bg-white"
            title="Hedera"
            description="To be annouced soon..."
            footer={
              <div className="flex justify-center">
                <DiscoverButton
                  ping={false}
                  title="Learn More"
                  href="https://www.hashgraph.swiss/"
                />
              </div>
            }
          />
          <EventCard
            color="bg-white"
            title="Hylé"
            description="To be annouced soon..."
            footer={
              <div className="flex justify-center">
                <DiscoverButton
                  ping={false}
                  title="Learn More"
                  href="https://www.hyle.eu/"
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
