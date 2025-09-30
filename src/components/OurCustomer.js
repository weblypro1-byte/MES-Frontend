
import React from "react";
import { motion } from "framer-motion";
import FederalCustomers from '../OurCustomer/FederalCustomers';
import Experience from '../OurCustomer/Experience';

import Logos from '../OurCustomer/Logos';

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
        <FederalCustomers/>
      </motion.div>

        <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariant}
            >
           <Logos/>
            </motion.div>

            <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        
        <Experience/>
      
      </motion.div>
    






    </div>
  );
};

export default Home;
