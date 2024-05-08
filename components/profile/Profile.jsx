"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context";
import toast from "react-hot-toast";
import Image from "next/image";
import { FaPlane, FaCircleCheck } from "react-icons/fa6";

const Profile = () => {
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    router.push("/");
    toast.success("Logout successfully!");
    setTimeout(() => {
      setUser({});
    }, 500);
  };
  return (
    <div className="py-10">
      <div className="text-center">
        <h2 className="text-2xl font-medium">
          Welcome <span className="text-brandText">{user.name}</span>
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400">{user.email}</p>
        <Button className="mt-3" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex gap-6 items-start mt-10">
        <div className="w-3/4 p-6 border rounded-lg">
          <h2>Booked Package</h2>

          <div>
            <div className="flex gap-6">
              <Image src="" alt="" width={400} height={400} />

              <div className="">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-medium">PlaceName</h2>
                  <p>Booked on</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  harum!
                </p>
                <div className="mt-3 flex items-center">
                  <div className="size-2 rounded-full bg-neutral-500"></div>
                  <div className="w-1/2 h-[1px] bg-neutral-500"></div>
                  <FaPlane className="text-neutral-500 dark:text-neutral-400" />
                  <div className="w-1/2 h-[1px] bg-neutral-500"></div>
                  <div className="size-2 rounded-full bg-brandText"></div>
                </div>
                <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                  <small>from</small>
                  <small>to</small>
                </div>

                <Button className="mt-6 bg-rose-500 bg-opacity-20 dark:text-white text-black border border-rose-600 hover:bg-rose-300 dark:hover:bg-rose-900">
                  Cancel booking
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <h2>Completed Package</h2>

          <div className="mt-6">
            <div className="flex items-start gap-3">
              <Image src="" alt="" width={50} height={50} />
              <div>
                <h2>Place name</h2>
                <p className="flex items-center gap-2">
                  <FaCircleCheck className="text-green-500" />{" "}
                  <span className="text-green-500">Completed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
