import React from "react";
import { CiLocationOn, CiCalendar, CiEdit } from "react-icons/ci";

const HotJobCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    description,
    location,
    salaryRange,
    applicationDeadline,
    requirements,
  } = job;

  return (
    <div className="max-w-xs w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full">
      {/* Company Header */}
      <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
          {company_logo ? (
            <img
              src={company_logo}
              alt={`${company} logo`}
              className="w-full h-full object-contain p-1"
            />
          ) : (
            <span className="text-gray-400 dark:text-gray-300 text-xs">
              No Logo
            </span>
          )}
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{company}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex-1 p-4">
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Requirements */}
        {requirements && (
          <div className="mb-3">
            <div className="flex items-center text-gray-800 dark:text-gray-100 font-semibold text-sm mb-1">
              <CiEdit className="mr-1" />
              Requirements:
            </div>
            <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-300 space-y-1">
              {requirements.map((requirement) => (
                <li className="text-indigo-600 list-none dark:text-indigo-400">
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Salary Range */}
        <div className="mb-3">
          <div className="text-gray-800 dark:text-gray-100 font-semibold text-sm mb-1">
            Salary Range:
          </div>
          <div className="flex justify-between items-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-md text-xs">
            <span>
              Min: {salaryRange.currency}
              {salaryRange.min}
            </span>
            <span>
              Max: {salaryRange.currency}
              {salaryRange.max}
            </span>
          </div>
        </div>

        {/* Application Deadline */}
        {applicationDeadline && (
          <div className="mb-4 flex items-center text-xs text-gray-600 dark:text-gray-300">
            <CiCalendar className="mr-1" />
            Apply before: {new Date(applicationDeadline).toLocaleDateString()}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            <CiLocationOn className="mr-1" />
            {location}
          </span>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
