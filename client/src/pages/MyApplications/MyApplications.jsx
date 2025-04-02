import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiTrash2,
  FiExternalLink,
  FiClock,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";
import {
  FaBusinessTime,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import axios from "axios";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  accepted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const statusIcons = {
  pending: <FiClock className="mr-1" />,
  accepted: <FiCheckCircle className="mr-1" />,
  rejected: <FiXCircle className="mr-1" />,
};

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setLoading(true);
    // fetch(`http://localhost:3001/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //     setLoading(false);
    //   });

    axios
      .get(`http://localhost:3001/job-application?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => setJobs(res.data));
  }, [user.email]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const deleteApplication = (id) => {
    // Add your delete logic here
    console.log("Deleting application:", id);
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const deleteSelected = () => {
    // Add your delete logic for multiple items here
    console.log("Deleting selected applications:", selected);
    setJobs(jobs.filter((job) => !selected.includes(job.id)));
    setSelected([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            My Job Applications
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {jobs.length} {jobs.length === 1 ? "application" : "applications"}{" "}
            found
          </p>
        </div>

        {loading ? (
          <div className="p-8 flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"
            />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={
                        selected.length === jobs.length && jobs.length > 0
                      }
                      onChange={() => {
                        if (selected.length === jobs.length) {
                          setSelected([]);
                        } else {
                          setSelected(jobs.map((job) => job.id));
                        }
                      }}
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <AnimatePresence>
                  {jobs.map((job) => (
                    <motion.tr
                      key={job.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                        selected.includes(job.id)
                          ? "bg-indigo-50/50 dark:bg-indigo-900/10"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary"
                          checked={selected.includes(job.id)}
                          onChange={() => toggleSelect(job.id)}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden bg-white shadow"
                          >
                            <img
                              className="h-full w-full object-contain p-1"
                              src={
                                job.company_logo ||
                                "https://via.placeholder.com/50"
                              }
                              alt={job.company}
                            />
                          </motion.div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {job.title}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {job.company}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <FaBusinessTime className="mr-2 text-indigo-500" />
                            {job.type || "Full-time"}
                          </div>
                          {job.salary && (
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <FaMoneyBillWave className="mr-2 text-indigo-500" />
                              {job.salary}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            statusColors[job.status] ||
                            "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {statusIcons[job.status]}
                          {job.status?.toUpperCase() || "PENDING"}
                        </motion.span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300"
                          >
                            <FiExternalLink />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300"
                            onClick={() => deleteApplication(job.id)}
                          >
                            <FiTrash2 />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected.length > 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 right-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 flex items-center space-x-4"
        >
          <span className="text-gray-700 dark:text-gray-300">
            {selected.length} selected
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"
            onClick={deleteSelected}
          >
            <FiTrash2 className="mr-2" />
            Delete Selected
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MyApplications;
