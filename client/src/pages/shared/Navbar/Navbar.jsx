import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthInfo/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = (e) => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const li = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/signIn">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {li}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Hello World
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/signIn" className="btn">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
