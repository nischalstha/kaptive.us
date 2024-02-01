import React from "react";
import { feedback, whyUs } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";
import { elephant } from "../assets";

const WhyUs = () => {
  return (
    <section
      className={`${styles.paddingX} ${styles.flexCenter} ${styles.padding} m-4 lg:ml-10 lg:mr-10 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} text-center sm:text-left`}>
          Why <span className="text-gradient">kaptiv.us</span>?
          <br className="sm:block hidden" />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center w-full feedback-container relative z-[1]">
          {whyUs.map(card => (
            <Feedback key={card.id} {...card} includeTitle={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
