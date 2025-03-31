import React from "react";

const AddJob = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">
            Add Job
          </h2>

          {/* Job Title */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Location */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Location
            </label>
            <input
              type="text"
              name="jobLocation"
              placeholder="Job Location"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Type */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Type
            </label>
            <select
              defaultValue=""
              name="jobType"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Pick the job type
              </option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>

          {/* Job Category */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Category
            </label>
            <select
              defaultValue=""
              name="jobCategory"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Pick the job field
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Designer</option>
              <option>UI/UX</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Salary Range
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="max"
                placeholder="Max"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                defaultValue=""
                name="currency"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
                <option>MYR</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Description
            </label>
            <textarea
              name="jobDescription"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              placeholder="Describe your job"
            ></textarea>
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Requirements */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Requirements
            </label>
            <textarea
              name="jobRequirements"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              placeholder="Put each requirement on a new line"
            ></textarea>
          </div>

          {/* Job Responsibilities */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Responsibilities
            </label>
            <textarea
              name="jobResponsibilities"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              placeholder="Write each responsibility on a new line"
            ></textarea>
          </div>

          {/* Form Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
