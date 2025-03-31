import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiMapPin,
  FiType,
  FiDollarSign,
  FiFileText,
  FiUser,
  FiMail,
  FiImage,
  FiAward,
  FiList,
  FiCheckCircle,
} from "react-icons/fi";

const AddJob = () => {
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    console.log(newJob);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <motion.form
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-md border border-gray-700"
        onSubmit={handleAddJob}
      >
        <motion.h2
          variants={itemVariants}
          className="text-white text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2"
        >
          <FiBriefcase className="text-blue-400" />
          Add New Job
        </motion.h2>

        {/* Job Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiType className="text-blue-400" />
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Senior Developer"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </motion.div>

        {/* Job Location */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiMapPin className="text-blue-400" />
            Job Location
          </label>
          <input
            type="text"
            name="jobLocation"
            placeholder="Dhaka, Bangladesh"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </motion.div>

        {/* Job Type */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiBriefcase className="text-blue-400" />
            Job Type
          </label>
          <select
            defaultValue=""
            name="jobType"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
          >
            <option value="" disabled>
              Select job type
            </option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
            <option>Remote</option>
          </select>
        </motion.div>

        {/* Job Category */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiAward className="text-blue-400" />
            Job Category
          </label>
          <select
            defaultValue=""
            name="jobCategory"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
          >
            <option value="" disabled>
              Select job field
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Design</option>
            <option>UI/UX</option>
            <option>Finance</option>
          </select>
        </motion.div>

        {/* Salary Range */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiDollarSign className="text-blue-400" />
            Salary Range
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <select
              defaultValue="BDT"
              name="currency"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
            >
              <option>BDT</option>
              <option>USD</option>
              <option>EUR</option>
              <option>INR</option>
            </select>
          </div>
        </motion.div>

        {/* Job Description */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiFileText className="text-blue-400" />
            Job Description
          </label>
          <textarea
            name="jobDescription"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[100px]"
            placeholder="Describe the job position..."
          ></textarea>
        </motion.div>

        {/* Company Name */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiBriefcase className="text-blue-400" />
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="Tech Solutions Ltd."
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </motion.div>

        {/* Requirements */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiList className="text-blue-400" />
            Requirements
          </label>
          <textarea
            name="jobRequirements"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[100px]"
            placeholder="List each requirement on a new line..."
          ></textarea>
        </motion.div>

        {/* Responsibilities */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiCheckCircle className="text-blue-400" />
            Responsibilities
          </label>
          <textarea
            name="jobResponsibilities"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[100px]"
            placeholder="List each responsibility on a new line..."
          ></textarea>
        </motion.div>

        {/* HR Contact */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiUser className="text-blue-400" />
            HR Contact Name
          </label>
          <input
            type="text"
            name="hrName"
            placeholder="John Doe"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </motion.div>

        {/* HR Email */}
        <motion.div variants={itemVariants} className="mb-4">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiMail className="text-blue-400" />
            HR Email
          </label>
          <input
            type="email"
            name="hrEmail"
            placeholder="hr@company.com"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </motion.div>

        {/* Company Logo */}
        <motion.div variants={itemVariants} className="mb-6">
          <label className="block text-gray-300 text-sm font-medium mb-1 flex items-center gap-2">
            <FiImage className="text-blue-400" />
            Company Logo URL
          </label>
          <input
            type="url"
            name="companyLogoUrl"
            placeholder="https://example.com/logo.png"
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          <FiBriefcase />
          Post Job
        </motion.button>
      </motion.form>
    </div>
  );
};

export default AddJob;
