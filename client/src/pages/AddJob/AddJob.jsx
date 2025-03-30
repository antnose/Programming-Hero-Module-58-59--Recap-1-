import React from "react";

const AddJob = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-white text-2xl font-bold mb-4 text-center">
            Sign Up
          </h2>

          {/* Job Title */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Title
            </label>
            <input
              type="text"
              placeholder="Job Title"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Location */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Location
            </label>
            <input
              type="text"
              placeholder="Job Location"
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Type */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Job Type
            </label>
            <select defaultValue="Pick a font" className="select select-ghost">
              <option disabled={true}>Pick the job type</option>
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
            <select defaultValue="Pick a font" className="select select-ghost">
              <option disabled={true}>Pick the job field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Designer</option>
              <option>UI/UX</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Salary min */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Salary Range
              </label>
              <input
                type="text"
                placeholder="Min"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Salary max */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Max"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* It's salary Currency */}
              <div className="mb-4">
                <select defaultValue="Currency" className="select select-ghost">
                  <option disabled={true}>Currency</option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>INR</option>
                  <option>MYR</option>
                </select>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Job description
              </label>
              <textarea
                name="description"
                className="textarea textarea-ghost"
                placeholder="Describe your job"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
