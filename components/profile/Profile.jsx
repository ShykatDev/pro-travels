"use client";
import { redirect, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";

const Profile = () => {
  const router = useRouter();
  const [_, setSignData] = useLocalStorage("signInData", {});

  const handleLogout = () => {
    if (window !== undefined) {
      setSignData({});
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
