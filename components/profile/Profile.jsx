"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const Profile = () => {
  const router = useRouter();
  const handleLogout = () => {
    if (window !== undefined) {
      localStorage.removeItem("signInData");
    }

    router.push("/");
  };
  return (
    <div>
      Profile Page
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Profile;
