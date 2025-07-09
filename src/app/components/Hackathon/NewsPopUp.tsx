import React from "react";
import { Link } from "gatsby";
import { DiscoverButtonProps } from "../types";

const NewsPopUp = ({ newText }) => {
  return (
    <div className="w-full fixed bottom-0 left-0 pointer-events-none hidden md:flex justify-center items-center py-5 z-20 ">
      <div className="w-full max-w-[600px] bg-dark-500 px-5 py-3 rounded-lg relative pointer-events-auto drop-shadow-md">
        {newText ? (
          <div className="absolute -top-6 rounded-md px-3 p-1 bg-dark-200">
            New
          </div>
        ) : null}
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-lg font-bold">
            BSA x Sui Hackathon{" "}
            <span className="block text-sm font-medium">
              October 21-22, 2023
            </span>
          </p>
          <DiscoverButton link="/hackathon" ping={false} title="Discover" />
        </div>
      </div>
    </div>
  );
};

export default NewsPopUp;

export const DiscoverButton = ({
  ping,
  href,
  link,
  title,
}: DiscoverButtonProps) => {
  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit relative rounded-md uppercase bg-dark-100 hover:bg-transparent border border-dark-100 text-dark-500 font-medium hover:text-dark-100 duration-100 px-10 py-2"
        >
          {title}
        </a>
      ) : (
        <Link
          to={link}
          className="w-fit relative rounded-md uppercase bg-dark-100 hover:bg-transparent border border-dark-100 text-dark-500 font-medium hover:text-dark-100 duration-100 px-10 py-2"
        >
          {ping ? (
            <span className="absolute -right-1 -top-1 flex h-[12px] w-[12px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-dark-600"></span>
            </span>
          ) : null}
          {title}
        </Link>
      )}
    </>
  );
};
