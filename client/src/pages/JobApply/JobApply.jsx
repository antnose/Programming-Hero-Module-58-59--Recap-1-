import React, { useState } from "react";

const JobApply = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedinUrl.value;
    const github = form.githubUrl.value;
    const resume = form.resumeUrl.value;
    console.log(linkedin, github, resume);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Job Application
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* LinkedIn URL Field */}
        <div>
          <label
            htmlFor="linkedinUrl"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            placeholder="https://www.linkedin.com/in/yourprofile"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* GitHub URL Field */}
        <div>
          <label
            htmlFor="githubUrl"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            GitHub Profile URL
          </label>
          <input
            type="url"
            id="githubUrl"
            name="githubUrl"
            placeholder="https://github.com/yourusername"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Resume URL Field */}
        <div>
          <label
            htmlFor="resumeUrl"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Resume/CV URL
          </label>
          <input
            type="url"
            id="resumeUrl"
            name="resumeUrl"
            placeholder="https://drive.google.com/yourresume"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default JobApply;
