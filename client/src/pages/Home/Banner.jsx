// import React from "react";
// import { motion } from "framer-motion";
// import firstPic from "../../assets/Team/first.webp";
// import secondPic from "../../assets/Team/second.webp";

// const Banner = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.6, -0.05, 0.01, 0.99],
//       },
//     },
//   };

//   const floatVariants = {
//     float: {
//       y: [-20, -40, -20], // Reduced the range for smoother vertical movement
//       transition: {
//         duration: 10, // Slower duration for more fluid motion
//         repeat: Infinity,
//         ease: [0.5, 0, 0.5, 1], // Custom easing for smoother direction changes
//       },
//     },
//     floatReverse: {
//       x: [20, 40, 20], // Reduced the range for smoother horizontal movement
//       transition: {
//         duration: 8, // Slightly different duration for natural variation
//         repeat: Infinity,
//         ease: [0.5, 0, 0.5, 1],
//         delay: 0.5, // Reduced delay for more synchronized movement
//       },
//     },
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto w-full">
//         <motion.div
//           className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Text Column - Now on the LEFT */}
//           <motion.div
//             className="w-full lg:w-1/2 text-center lg:text-left"
//             variants={itemVariants}
//           >
//             <motion.h1
//               className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-amber-500 bg-clip-text text-transparent"
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               initial={{ opacity: 0, y: -30 }}
//               transition={{
//                 duration: 1.2,
//                 ease: [0.6, -0.05, 0.01, 0.99],
//               }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               Latest Job Opportunities
//             </motion.h1>

//             <motion.p
//               className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.4,
//                 ease: "easeOut",
//               }}
//             >
//               Discover your dream career with our curated selection of top-tier
//               job openings. We connect talent with opportunity.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <motion.button
//                 className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span className="relative z-10">Get Started</span>
//                 <motion.span
//                   className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100"
//                   initial={{ x: "-100%" }}
//                   whileHover={{ x: "0%" }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                 />
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           {/* Images Column - Now on the RIGHT */}
//           <motion.div
//             className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 flex items-center justify-center mt-8 lg:mt-0"
//             variants={itemVariants}
//           >
//             <motion.div
//               className="absolute w-48 sm:w-56 md:w-64"
//               variants={floatVariants}
//               animate="float"
//             >
//               <motion.img
//                 src={firstPic}
//                 className="w-full rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-amber-400/80 object-cover aspect-square"
//                 whileHover={{ scale: 1.05 }}
//               />
//             </motion.div>
//             <motion.div
//               className="absolute w-48 sm:w-56 md:w-64"
//               variants={floatVariants}
//               animate="floatReverse"
//               style={{ left: "30%", top: "20%" }}
//             >
//               <motion.img
//                 src={secondPic}
//                 className="w-full rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-amber-400/80 object-cover aspect-square"
//                 whileHover={{ scale: 1.05 }}
//               />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { motion } from "framer-motion";
import firstPic from "../../assets/Team/first.webp";
import secondPic from "../../assets/Team/second.webp";

const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatVariants = {
    float: {
      y: [-20, -80, -20], // Less extreme vertical movement for a smoother effect
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    floatReverse: {
      x: [20, 70, 20], // Subtle horizontal movement for a smoother floating effect
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Column - Now on the LEFT */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-amber-500 bg-clip-text text-transparent"
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              initial={{ opacity: 0, y: -30 }}
              transition={{
                duration: 1.2,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Latest Job Opportunities
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              Discover your dream career with our curated selection of top-tier
              job openings. We connect talent with opportunity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Started</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Images Column - Now on the RIGHT */}
          <motion.div
            className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 flex items-center justify-center mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <motion.div
              className="absolute w-48 sm:w-56 md:w-64"
              variants={floatVariants}
              animate="float"
            >
              <motion.img
                src={firstPic}
                className="w-full rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-amber-400/80 object-cover aspect-square"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
            <motion.div
              className="absolute w-48 sm:w-56 md:w-64"
              variants={floatVariants}
              animate="floatReverse"
              style={{ left: "30%", top: "20%" }}
            >
              <motion.img
                src={secondPic}
                className="w-full rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-amber-400/80 object-cover aspect-square"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
