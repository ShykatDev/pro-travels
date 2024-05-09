import { AuthContext } from "@/context";
import { useContext, useEffect, useState } from "react";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const [localAuthData, setLocalAuthData] = useState();

  const auth = localAuthData;

  useEffect(() => {
    setLocalAuthData(JSON.parse(localStorage.getItem("signInData")));
  }, []);

  return auth;
};

export default useAuth;
