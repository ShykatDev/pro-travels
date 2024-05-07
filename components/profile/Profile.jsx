"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context";

const Profile = () => {
  const router = useRouter();
  const { _, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    router.push("/");
    setTimeout(() => {
      setUser({});
    }, 500);
  };
  return (
    <div>
      Profile Page
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Profile;
