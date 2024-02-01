import React, { useState } from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials
} from "./components";
import styles from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./components/Terms";
import TagManager from "react-gtm-module";
import AboutPage from "./components/AboutPage";
import { Helmet } from "react-helmet";
import ContactPage from "./components/ContactPage";

const tagManagerArgs = {
  gtmId: "G-JVXP6PRWDQ"
};

TagManager.initialize(tagManagerArgs);

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = () => {
    setIsLoading(true);
    console.log("im here");
    setTimeout(() => {
      setIsLoading(false);
    }, 100); // Adjust time based on your needs
  };

  return (
    <Router>
      <Helmet>
        <title>Kaptiv.us</title>
        <h1>Kaptiv.us</h1>
        <link rel="canonical" href="http://kaptiv.us" />
        <meta
          name="description"
          content="At Kaptiv, we redefine excellence in IT Staffing and Managed Service Solutions. As a leading technical consulting company, we are committed to delivering unparalleled expertise, innovation, and personalized services to propel your business into the digital future."
        ></meta>
      </Helmet>

      <div className="bg-primary w-full overflow-hidden">
        {/* Navbar always visible */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Add your loading animation here */}
              <div className="loader">Loading...</div>
            </div>
          </div>
        )}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar handleNavigation={handleNavigation} />
          </div>
        </div>

        {/* Main Content Area */}
        <Routes>
          {/* Default/Home Route */}
          <Route
            path="/"
            element={
              <>
                <div className={`bg-primary ${styles.flexStart}`}>
                  <div className={`${styles.boxWidth}`}>
                    <Hero />
                  </div>
                </div>
                <div
                  className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
                >
                  <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    {/* <CardDeal/> */}
                    <Testimonials />
                    {/* <Clients/> */}
                    <CTA />
                    <Footer />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/terms-and-services" element={<Terms />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
