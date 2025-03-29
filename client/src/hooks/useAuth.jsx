import { useContext } from "react";
import AuthContext from "../context/AuthInfo/AuthContext";

const useAuth = () => {
  return (context = useContext(AuthContext));
};

export default useAuth;
