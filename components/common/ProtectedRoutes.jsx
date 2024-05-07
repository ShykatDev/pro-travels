"use client";
import { AuthContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user, _ } = useContext(AuthContext);

  useEffect(() => {
    const isObjEmpty = (obj) => {
      return Object.keys(obj).length === 0;
    };

    if (isObjEmpty(user)) {
      router.push("/sign-in");
      toast.error("Please sign in first!");
    }
  }, [router, user]);

  return children;
};

export default ProtectedRoute;
