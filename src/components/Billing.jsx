import React from "react";
import { apple, bill, google, headway, discount } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={headway}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[20]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Affordable tech
          <br className="sm:block hidden" />
          staffing solutions.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We offer top tech talent at unbeatable prices, fitting quality into
          your budget.
        </p>
        <div></div>
        <div className="flex flex-col sm:mt-10 mt-6 ">
          <div
            className={`flex flex-row p-6 rounded-[20px] ${"mb-0"} feature-card`}
          >
            <img
              src={discount}
              alt="discount"
              className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-0 mr-4"
            />
            <div className="flex-1 flex flex-col ml-3">
              <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                Volume Discount Package
              </h4>
              <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                Customized pricing offered for clients with over 10 positions,
                fostering budget flexibility.{" "}
              </p>
            </div>
          </div>
          <div
            className={`flex flex-row p-6 rounded-[20px] ${"mb-0"} feature-card`}
          >
            <img
              src={discount}
              alt="discount"
              className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-0 mr-4"
            />
            <div className="flex-1 flex flex-col ml-3">
              <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                Flat Fee Pricing Model
              </h4>
              <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                Consistent fees regardless of scale or complexity, ensuring
                transparent and budget-friendly costs for clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
