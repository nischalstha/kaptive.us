import React from "react";
import styles from "../style";

import { quotes } from "../assets";

const Feedback = ({ content, name, title, img, includeTitle }) => {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] ${
        includeTitle ? "max-w-[370px]" : " max-w-[430px]"
      } md:mr-10 feedback-card`}
    >
      <img
        src={quotes}
        alt="double-quotes"
        className="w-[40px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        {/* <img
          src={img}
          alt={name}
          className='w-[48px] h-[48px] rounded-full'
        /> */}
        <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          -
        </h1>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          {includeTitle && (
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
              {title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
