import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Banner from "./Banner";
import Banner1 from "./Banner1";
import Services from "../Pages/Services/Services";
import TESTIMONIALS from "./TESTIMONIALS";
import Artical from "./Artical";

const Homepage = () => {
  useEffect(() => {
    // You can add Framer Motion or other animation library initialization here if needed
  }, []);

  return (
    <>
      <Helmet>
        <title>Pest Control | Home</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Banner1 />
        <Banner />

        <Services />

        <TESTIMONIALS />
        <Artical />
      </motion.div>
    </>
  );
};

export default Homepage;
