import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { CiLocationOn, CiCalendar, CiMoneyBill } from "react-icons/ci";
import { FiArrowLeft, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listItemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const JobDetails = () => {
  const navigate = useNavigate();
  const job = useLoaderData();
  const {
    _id,
    title,
    jobType,
    category,
    applicationDeadline,
    description,
    company,
    hr_email,
    hr_name,
    company_logo,
    salaryRange,
    requirements,
    responsibilities,
  } = job;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      {/* Header with logo bounce */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 border-b border-gray-200 dark:border-gray-700"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600"
          >
            {company_logo ? (
              <motion.img
                src={company_logo}
                alt={company}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full h-full object-contain p-1"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-300 text-xs">
                No Logo
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {company}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <motion.span
                whileHover={{ y: -2 }}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {jobType}
              </motion.span>
              <motion.span
                whileHover={{ y: -2 }}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
              >
                {category}
              </motion.span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main content with staggered animations */}
      <motion.div className="p-6 space-y-6" initial="hidden" animate="visible">
        {/* Job Description */}
        <motion.div
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h2
            className="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            whileHover={{ x: 5 }}
          >
            Job Description
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Salary Range - Money wiggle */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              >
                <CiMoneyBill className="text-xl text-indigo-500" />
              </motion.span>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Salary Range
              </h3>
            </div>
            <motion.div
              className="flex justify-between items-center bg-white dark:bg-gray-600 px-4 py-2 rounded-md"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-gray-700 dark:text-gray-200">
                {salaryRange.currency} {salaryRange.min.toLocaleString()}
              </span>
              <span className="text-gray-500 dark:text-gray-400">to</span>
              <span className="text-gray-700 dark:text-gray-200">
                {salaryRange.currency} {salaryRange.max.toLocaleString()}
              </span>
            </motion.div>
          </motion.div>

          {/* Deadline - Calendar pulse */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 5 }}
              >
                <CiCalendar className="text-xl text-indigo-500" />
              </motion.span>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Application Deadline
              </h3>
            </div>
            <motion.p
              className="text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 px-4 py-2 rounded-md"
              whileHover={{ scale: 1.02 }}
            >
              {new Date(applicationDeadline).toLocaleDateString()}
            </motion.p>
          </motion.div>
        </div>

        {/* Requirements - Staggered list */}
        <motion.div>
          <motion.h2
            className="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            whileHover={{ x: 5 }}
          >
            Requirements
          </motion.h2>
          <motion.ul className="space-y-2">
            {requirements.map((req, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={listItemVariants}
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <motion.span
                  className="text-indigo-500 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, repeatDelay: 2 }}
                >
                  •
                </motion.span>
                <span className="text-gray-600 dark:text-gray-300">{req}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Responsibilities - Staggered list */}
        <motion.div>
          <motion.h2
            className="text-xl font-semibold text-gray-800 dark:text-white mb-3"
            whileHover={{ x: 5 }}
          >
            Responsibilities
          </motion.h2>
          <motion.ul className="space-y-2">
            {responsibilities.map((resp, index) => (
              <motion.li
                key={index}
                custom={index + requirements.length}
                initial="hidden"
                animate="visible"
                variants={listItemVariants}
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <motion.span
                  className="text-indigo-500 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, repeatDelay: 2 }}
                >
                  •
                </motion.span>
                <span className="text-gray-600 dark:text-gray-300">{resp}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* HR Contact - Bounce effect */}
        <motion.div
          className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg"
          whileHover={{ scale: 1.01 }}
        >
          <motion.h3
            className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2"
            animate={{
              color: ["#6366f1", "#8b5cf6", "#6366f1"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            HR Contact
          </motion.h3>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">{hr_name}</span> - {hr_email}
          </p>
        </motion.div>
      </motion.div>

      {/* Animated Buttons */}
      <motion.div
        className="p-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{
            x: -3,
            backgroundColor: "#f3f4f6",
            color: "#1f2937",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 transition-colors"
        >
          <FiArrowLeft />
          Go Back
        </motion.button>

        <Link to={`/jobApply/${_id}`} className=" flex flex-1">
          <motion.button
            whileHover={{
              y: -2,
              scale: 1.02,
              boxShadow: "0 5px 15px rgba(79, 70, 229, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all"
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 5 }}
            >
              <FiSend />
            </motion.span>
            Apply Now
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default JobDetails;
