import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const rePassword = form.rePassword.value;
    console.log(name, email, password, rePassword);
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <h1 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border focus:outline-none focus:ring-1 focus:ring-purple-400`}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border focus:outline-none focus:ring-1 focus:ring-purple-400`}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border  focus:outline-none focus:ring-1 focus:ring-purple-400`}
                placeholder="••••••••"
              />
            </div>

            <div>
              <label
                htmlFor="rePassword"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="rePassword"
                name="rePassword"
                className={`w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border focus:outline-none focus:ring-1 focus:ring-purple-400`}
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

// 8.06
