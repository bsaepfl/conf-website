import { Disclosure } from "@headlessui/react";
import React from "react";
import { FiChevronUp } from "react-icons/fi";
import { faqQuestions } from "../../../assets";

const FaqView = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 bg-dark-800 relative">
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-6 text-sm sm:text-base ">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-dark-100 indent-2 pb-10">
          FAQ
        </h2>
        <div className="p-2 bg-white rounded-lg">
          {faqQuestions.map((ques, index) => (
            <Disclosure
              as="div"
              className={index === 0 ? "mt-0" : "mt-2"}
              key={`faq-question${index}`}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between gap-2 rounded-md duration-100 bg-white px-4 py-2 text-left font-medium text-dark-100 hover:bg-dark-800 focus:outline-none focus-visible:ring focus-visible:ring-dark-100 focus-visible:ring-opacity-75">
                    <span>{ques.question}</span>
                    <FiChevronUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-dark-100 shrink-0 `}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
                    {ques.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqView;
