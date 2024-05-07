import ProtectedRoute from "@/components/common/ProtectedRoutes";
import Profile from "@/components/profile/Profile";
import React from "react";

const page = () => {
  return (
    <>
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    </>
  );
};

export default page;
