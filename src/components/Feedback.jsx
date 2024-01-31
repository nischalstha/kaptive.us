import React from "react";
import styles from "../style";

import { quotes } from "../assets";

const Feedback = ({ content, name, title, img, includeTitle }) => {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] ${
        includeTitle ? "max-w-[370px]" : " max-w-[360px]"
      } md:mr-10 feedback-card`}
    >
      {!includeTitle && (
        <div className="flex items-center space-x-4">
          <img
            src={img}
            alt="double-quotes"
            className="w-[60px] h-[60px] object-contain"
          />
          <h6 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h6>
        </div>
      )}
      {/* <img
          src={img}
          alt={name}
          className='w-[48px] h-[48px] rounded-full'
        /> */}
      <p className="font-poppins font-normal text-[16px] leading-[32px] text-white my-10">
        {content}
      </p>
      {includeTitle && (
        <div className="flex flex-row">
          <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            -
          </h1>
          <div className="flex flex-col ml-4">
            <div>
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                {name}
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
                {title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
