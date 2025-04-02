import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/Login.json";
import AuthContext from "../../context/AuthInfo/AuthContext";
import axios from "axios";
import { data, Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../shared/SharedAuth/SocialLogin";
import { motion } from "framer-motion";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const locateFrom = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("Sign in", result.user.email);
        const user = { email: email };
        axios.post("http://localhost:3001/jwt", user).then((data) => {
          console.log(data);
        });
        // navigate(locateFrom);
      })
      .catch((error) => {
        setError(error.message || "Sign in failed");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col lg:flex-row items-center justify-center p-4 gap-8 lg:gap-16">
      {/* Lottie Animation - Left Side */}
      <motion.div
        className="w-full lg:w-1/2 max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Lottie
          animationData={loginAnimation}
          loop={true}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Sign In Form - Right Side */}
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <motion.h1
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Welcome Back
            </motion.h1>
            <p className="text-gray-400 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
              <div className="text-right mt-1">
                <Link
                  to="/forgot-password"
                  className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                className="text-red-400 text-sm py-2 px-3 bg-red-900/30 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-700"></div>
          </div>

          {/* Social Login */}
          <SocialLogin />

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
