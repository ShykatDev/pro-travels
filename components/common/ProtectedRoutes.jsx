"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem("signInData"));

    const isObjEmpty = (obj) => {
      return Object.keys(obj).length === 0;
    };

    if (isObjEmpty(isAuthenticated)) {
      router.push("/sign-in");
      toast.error("Please sign in first!");
    }
  }, [router]);

  return children;
};

export default ProtectedRoute;
