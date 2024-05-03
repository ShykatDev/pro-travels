import {
  FaClock,
  FaPersonWalkingLuggage,
  FaPlane,
  FaRegHeart,
  FaStar,
} from "react-icons/fa6";
import { Button } from "../ui/button";
import Image from "next/image";
import { india } from "@/public";

const Details = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-10">
        <div className="w-1/2 ">
          <Image
            src={india}
            alt="india"
            width="auto"
            height="auto"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-1/2">
          <div className="size-10 border dark:border-neutral-500 rounded-full dark:bg-black dark:bg-opacity-50 bg-opacity-50 backdrop-blur flex justify-center items-center">
            <button>
              <FaRegHeart className="text-xl text-rose-600" />
            </button>
          </div>

          <p className="my-3 text-2xl font-medium text-brandText">
            $1000/person
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-xl">Bali, Thailand</h2>
            <div className="flex items-center gap-1 px-4 py-1.5 rounded-md bg-yellow-400 bg-opacity-25">
              <FaStar className="text-sm text-yellow-500 mb-1" />
              <p className="text-sm">4.6</p>
            </div>
          </div>

          <div className="mt-3 flex items-center">
            <div className="size-2 rounded-full bg-neutral-500"></div>
            <div className="w-1/2 h-[1px] bg-neutral-500"></div>
            <FaPlane className="text-neutral-500 dark:text-neutral-300" />
            <div className="w-1/2 h-[1px] bg-neutral-500"></div>
            <div className="size-2 rounded-full bg-brandText"></div>
          </div>

          <div className="flex justify-between text-neutral-500 dark:text-neutral-300">
            <small>Bangladesh</small>
            <small>Indonesia</small>
          </div>

          <p className="mt-3 text-neutral-600 dark:text-neutral-300 line-clamp-4">
            Select your favorite social network and share our icons with your
            contacts or friends. If you don’t have these social networks, Select
            your favorite social network and share our icons with your contacts
            or friends. If you don’t have these social networks, Select your
            favorite social network and share our icons with your contacts or
            friends. If you don’t have these social networks, Select your
            favorite social network and share our icons with your.
          </p>

          <div className="my-6 flex gap-3">
            <div className="flex gap-1 items-center px-3 py-1.5 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 rounded-md">
              <FaPersonWalkingLuggage className="text-neutral-600 dark:text-neutral-300" />
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                10 person
              </p>
            </div>
            <div className="flex gap-1 items-center px-3 py-1.5 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 rounded-md">
              <FaClock className="text-neutral-600 dark:text-neutral-300" />
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                5 days/6 nights
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <Button className="w-1/2">Book Now</Button>
            <Button variant="outline" className="w-1/2">
              Save on wishlist
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
