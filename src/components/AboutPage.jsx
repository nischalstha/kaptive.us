import React, { useEffect } from "react";
import styles from "../style";
import Button from "./Button";
import { letterK, elephant } from "../assets";
import WhyUs from "./WhyUs";
import Footer from "./Footer";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect runs only once, when the component mounts
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className="min-h-screen flex flex-col px-44">
        <section
          className={`${styles.paddingX} ${styles.flexCenter}${styles.padding} ml-10 mr-10 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
          <img
            src={letterK}
            alt="letter"
            class="w-auto h-40 rounded-lg mx-auto"
          />
          <div className="ml-10 flex-1 flex flex-col">
            <h3 className={styles.heading2}>Our Mission</h3>
            <p className={`${styles.paragraph}  max-w-[100%] mt-5`}>
              Our mission at <span className="text-gradient">kaptiv.us</span> is
              to connect job seekers with fulfilling roles and help businesses
              find the talent they need to thrive.
            </p>
            <p className={`${styles.paragraph}  max-w-[100%] mt-1`}>
              We believe that everyone deserves the opportunity to work in a job
              they love. 
            </p>
          </div>
        </section>
        <WhyUs />
        <section
          className={`${styles.flexCenter}${styles.padding} ml-10 mr-10 my-10 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
          <img
            src={elephant}
            alt="letter"
            class="w-auto h-40 rounded-lg mx-auto mr-50"
          />
          <div className="ml-10 flex-1 flex flex-col">
            <h2 className={styles.heading2}>Lets chat about your needs!</h2>
            <p className={`${styles.paragraph} max-w-[100%] mt-5`}>
              Your Partner for Tailored Solutions, Exceptional Talent, and
              Industry Expertise.
            </p>
          </div>
          <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
            <Button />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
