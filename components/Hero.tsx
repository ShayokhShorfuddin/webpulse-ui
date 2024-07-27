"use client";

import { motion } from "framer-motion";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 5,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      staggerChildren: 1.5,
      duration: 1.2,
    },
  },
};

// Returns the hero title and sub-heading of the landing page
export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUpAnimation}
      className="mt-14"
    >
      <motion.h1
        variants={fadeInUpAnimation}
        className="text-gray-100 text-center text-8xl"
      >
        Your <span className="text-custom-green">site</span> never sleeps
        <span className="text-custom-green">.</span>
        <br />
        Neither do we<span className="text-custom-green">.</span>
      </motion.h1>

      <motion.p
        variants={fadeInUpAnimation}
        className="text-custom-gray text-center text-lg mt-8"
      >
        Global monitoring. Instant notifications.
        <br />
        Local or cloud, we've got you covered.
      </motion.p>
    </motion.div>
  );
}
