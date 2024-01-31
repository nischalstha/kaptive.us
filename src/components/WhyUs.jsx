import React from "react";
import { feedback, whyUs } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";
import { elephant } from "../assets";

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Use flex-col-reverse to put the image on top for mobile */}
      <section
        className={`${styles.flexCenter} ${styles.padding} my-2 sm:my-10 ml-10 mr-10 flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        {/* Rest of the content */}
        <div className="flex-1 flex flex-col mt-4 sm:mt-0">
          <h2 className={`${styles.heading2} text-center sm:text-left`}>
            Why <span className="text-gradient">kaptiv.us</span>?
            <br className="sm:block hidden" />
          </h2>
          <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {whyUs.map(card => (
              <Feedback key={card.id} {...card} includeTitle={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
