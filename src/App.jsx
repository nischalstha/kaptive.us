import React from "react";
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

const tagManagerArgs = {
  gtmId: "G-JVXP6PRWDQ"
};

TagManager.initialize(tagManagerArgs);

const App = () => {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kaptiv.us</title>
        <link rel="canonical" href="http://kaptive.us" />
        <meta
          name="description"
          content="Our mission at kaptiv.us is
              to connect job seekers with fulfilling roles and help businesses
              find the talent they need to thrive."
        ></meta>
      </Helmet>
      <div className="bg-primary w-full overflow-hidden">
        {/* Navbar always visible */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
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
          {/* Terms and Services Route */}
          <Route path="/terms-and-services" element={<Terms />} />
          {/* About Route */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
