import { user } from "@/public";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const ReviewCard = () => {
  return (
    <div className=" w-full dark:bg-white bg-black dark:bg-opacity-10 bg-opacity-5 p-3 flex items-start gap-3 rounded-md">
      <div className="">
        <Image src={user} alt="user" />
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h2>Mr. Unknown</h2>
          <p className="text-yellow-500 flex items-center gap-1">
            <FaStar /> 4.6
          </p>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
