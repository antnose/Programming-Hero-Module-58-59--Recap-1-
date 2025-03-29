import { useContext } from "react";
import AuthContext from "../context/AuthInfo/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
