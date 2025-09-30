import React from "react";
import { motion } from "framer-motion";
import CompanyHistory from "./CompanyHistory";

import AboutPage from './AboutPage';
import Bestitsolutions from './Bestitsolutions';

import Whatwedo from './Whatwedo';
import CallltoAction from './CallltoAction'
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <CompanyHistory/>
      </motion.div>

       

            <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <AboutPage />
      
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <Bestitsolutions />
      </motion.div>


       <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariant}
            >
              <Whatwedo />
            </motion.div>
      
            {/* COUNTER */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariant}
            >
                <CallltoAction/>
              
            </motion.div>
      




    </div>
  );
};

export default Home;
