import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa"; // Importing the Google icon
import AuthContext from "../../../context/AuthInfo/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleAuth = (e) => {
    signInWithGoogle()
      .then((result) => console.log(result.user))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center py-6">
      <button
        onClick={handleGoogleAuth}
        className="flex items-center bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        {/* Google icon with some spacing */}
        <FaGoogle className="mr-3 text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
