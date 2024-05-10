"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context";
import toast from "react-hot-toast";
import BookedCard from "../common/Cards/BookedCard";

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

  const handleCanceled = (id) => {
    const newBookedItem = user?.booked?.filter((item) => item.id !== id);

    setTimeout(() => {
      setUser({
        ...user,
        booked: newBookedItem,
      });

      toast.success("Cancel request received");
    }, 1000);
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
      <div className="flex flex-col md:flex-row gap-6 items-start mt-10">
        <div className="w-full md:w-3/4 p-6 border rounded-lg">
          <h2 className="font-medium">Booked Package</h2>

          <div className="mt-3">
            {user.booked?.length === 0 && (
              <p className="text-neutral-500 mt-3">No tour booked yet.</p>
            )}
            {user?.booked?.map((item) => {
              return (
                <BookedCard
                  key={item.id}
                  item={item}
                  onCancel={handleCanceled}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="font-medium">Completed Package</h2>
          <p className="text-neutral-500 mt-3">No tour completed yet.</p>

          {/* <div className="mt-6">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
