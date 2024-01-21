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
        <div className="flex flex-col sm:mt-10 mt-6">
          <div className="flex flex-col sm:flex-row items-center py-2 sm:py-3 px-4 bg-discount-gradient rounded-lg mb-3">
            <img
              src={discount}
              alt="discount"
              className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-0 mr-4"
            />
            <div>
              <p className="text-white text-sm sm:text-base font-semibold mb-1">
                Volume Discount Package
              </p>
              <span className="text-white text-sm sm:text-base">
                Customized pricing offered for clients with over 10 positions,
                fostering budget flexibility.
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center py-2 sm:py-3 px-4 bg-discount-gradient rounded-lg mb-3">
            <img
              src={discount}
              alt="discount"
              className="w-12 h-12 sm:w-14 sm:h-14 mb-2 sm:mb-0 mr-4"
            />
            <div>
              <p className="text-white text-sm sm:text-base font-semibold mb-1">
                Flat Fee Pricing Model
              </p>
              <span className="text-white text-sm sm:text-base">
                Consistent fees regardless of scale or complexity, ensuring
                transparent and budget-friendly costs for clients.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
