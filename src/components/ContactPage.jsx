// Import necessary components and assets
import React, { useEffect } from "react";
import styles from "../style";
import Button from "./Button";
import WhyUs from "./WhyUs";
import Footer from "./Footer";
// import ContactForm from "./ContactForm"; // A separate component for the contact form
const contactConfig = {
  YOUR_EMAIL: "sam",
  YOUR_FONE: "(555)123-4567",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id"
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Effect to scroll to the top when the page loads

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className="min-h-screen flex flex-col px-4 lg:px-44">
        {/* Contact Form Section */}
        <section
          className={`${styles.flexCenter} ${styles.padding} m-4 lg:ml-10 lg:mr-10 my-10 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
          <div className="container mx-auto px-4">
            <div className="mb-12 mt-6">
              <div className="lg:w-2/3">
                <h2
                  className={`text-xl sm:text-3xl lg:text-4xl ${styles.heading2}`}
                >
                  Contact Us
                </h2>
                <hr className="border-t-4 border-accent my-4 ml-0 text-left" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="lg:w-2/5 px-3 mb-6">
                <p className={`${styles.paragraph} max-w-[100%] mt-5`}>
                  Whether you're on the hunt for top-tier talent or seeking your
                  dream IT role,{" "}
                  <span className="text-gradient">kaptiv.us</span> is your
                  gateway to success. <br /> <br />
                  Our dedicated team is here to ensure that your unique needs
                  are met with personalized, efficient solutions. <br /> <br />{" "}
                  Connect with us, and let's start shaping your future in the
                  tech industry today!
                </p>
              </div>
              <div className="lg:w-3/5 px-3 flex items-center">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    const form = e.target;
                    const name = form.name.value;
                    const email = form.email.value;
                    const message = form.message.value;
                    window.location.href = `mailto:nischalshresthaaa@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`;
                  }}
                  className="w-full"
                >
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                  ></textarea>
                  <br />
                  <div className="flex flex-wrap -mx-3 mb-6 justify-end">
                    <div className="px-3">
                      <button
                        type="button"
                        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
                      >
                        Send Email
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
