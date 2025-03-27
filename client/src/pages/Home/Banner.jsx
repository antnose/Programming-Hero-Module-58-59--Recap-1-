import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-gray-900 min-h-96 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="flex-1">
          <motion.img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-full max-w-md rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
        <div className="flex-1 text-gray-200">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              color: ["#38b2ac", "#818cf8", "#ec4899", "#f59e0b"],
            }}
            transition={{
              duration: 2,
              delay: 0.3,
              color: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
              },
            }}
          >
            Latest Job Opportunities
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Discover your dream career with our curated selection of top-tier
            job openings. We connect talent with opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <button className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="relative z-10">Get Started</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
