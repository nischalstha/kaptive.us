import styles from "../style";
import { discount, kaptivelanding } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Exclusive Offers</span> for{" "}
            <span className="text-white">Multiple Hires</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Need help staffing your
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">technical</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          team?
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We provide premium staffing and recruitment solutions tailored to your
          unique needs.
          <br />
          <span className="text-gradient">
            Discover the difference with Kaptiv!
          </span>
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-12 relative`}
      >
        <div class=" rounded-lg shadow-lg overflow-hidden">
          <img src={kaptivelanding} alt="billing" class="w-full h-auto" />
        </div>
        <div className="absolute z-[1] w-[20%] h-[20%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
