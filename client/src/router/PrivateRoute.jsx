import React, { useContext } from "react";
import AuthContext from "../context/AuthInfo/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", stiffness: 200 },
          }}
          className="text-center space-y-6"
        >
          <motion.div
            className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-1"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              },
              scale: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              <motion.svg
                className="w-10 h-10 text-indigo-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    pathLength: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-xl font-medium text-gray-700 dark:text-gray-300"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Authenticating...
          </motion.h3>
          <motion.p
            className="text-gray-500 dark:text-gray-400"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Just a moment while we verify your session
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={location?.pathname} />;
};

export default PrivateRoute;
