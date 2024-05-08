import ProtectedRoute from "@/components/common/ProtectedRoutes";
import Profile from "@/components/profile/Profile";
import React from "react";

const page = () => {
  return (
    <>
      <ProtectedRoute>
        <div className="container">
          <Profile />
        </div>
      </ProtectedRoute>
    </>
  );
};

export default page;
