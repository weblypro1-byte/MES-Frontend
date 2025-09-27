import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Services from './services';
import ChannelPartners from '../Pages/ChannelPartners';
import KeyDifferentiate from '../Pages/KeyDifferentiate';
import ClientStories from '../Pages/ClientStories';
import ProductsPage from '../Pages/ProductsPage';
import Counter from '../Pages/Counter';
import TechnologyChallenges from '../Pages/TechnologyChallenges';
import OurMissions from '../components/OurMissions'

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
        <Hero />
      </motion.div>

      {/* SERVICES */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <Services />
      </motion.div>

      {/* CHANNEL PARTNERS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <ChannelPartners />
      
      </motion.div>
      <motion.div
       
      >
        <OurMissions />
      
      </motion.div>





      {/* CLIENT STORIES */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <ClientStories />
      </motion.div>

      {/* KEY DIFFERENTIATE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <KeyDifferentiate />
      </motion.div>

      {/* PRODUCTS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <ProductsPage />
       
      </motion.div>

      {/* COUNTER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <Counter />
      </motion.div>

      {/* TECHNOLOGY CHALLENGES */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <TechnologyChallenges />
      </motion.div>

    </div>
  );
};

export default Home;
