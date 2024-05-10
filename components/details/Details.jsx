import {
  FaClock,
  FaPersonWalkingLuggage,
  FaPlane,
  FaRegHeart,
  FaStar,
} from "react-icons/fa6";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Details = ({ pack }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src={pack?.thumbnail}
            alt={pack?.placeName}
            width={600}
            height={500}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="md:w-1/2 mt-[740px] md:mt-0">
          <div className="size-10 border dark:border-neutral-500 rounded-full dark:bg-black dark:bg-opacity-50 bg-opacity-50 backdrop-blur flex justify-center items-center">
            <button>
              <FaRegHeart className="text-xl text-rose-600" />
            </button>
          </div>

          <p className="my-3 text-2xl font-medium dark:text-brandText text-white">
            ${pack?.price}/person
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-neutral-200 dark:text-white">
              {pack?.placeName}
            </h2>
            <div className="flex items-center gap-1 px-4 py-1.5 rounded-md bg-yellow-400 bg-opacity-25">
              <FaStar className="text-sm text-yellow-500 mb-1" />
              <p className="text-sm">{pack?.ratings}</p>
            </div>
          </div>

          <div className="mt-3 flex items-center">
            <div className="size-2 rounded-full dark:bg-neutral-500 bg-neutral-300"></div>
            <div className="w-1/2 h-[1px] dark:bg-neutral-500 bg-neutral-300"></div>
            <FaPlane className="text-neutral-300 dark:text-neutral-300" />
            <div className="w-1/2 h-[1px] dark:bg-neutral-500 bg-neutral-300"></div>
            <div className="size-2 rounded-full dark:bg-brandText bg-sky-400"></div>
          </div>

          <div className="flex justify-between text-neutral-300 dark:text-neutral-300">
            <small>{pack?.from}</small>
            <small>{pack?.to}</small>
          </div>

          <p className="mt-3 text-neutral-300 dark:text-neutral-300 line-clamp-4">
            {pack?.description}
          </p>

          <div className="my-6 flex gap-3">
            <div className="flex gap-1 items-center px-3 py-1.5 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 rounded-md">
              <FaPersonWalkingLuggage className="text-neutral-300 dark:text-neutral-300" />
              <p className="text-sm text-neutral-300 dark:text-neutral-300">
                {pack?.totalPerson} person
              </p>
            </div>
            <div className="flex gap-1 items-center px-3 py-1.5 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 rounded-md">
              <FaClock className="text-neutral-300 dark:text-neutral-300" />
              <p className="text-sm text-neutral-300 dark:text-neutral-300">
                {pack?.totalDuration}
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <Button className="w-1/2">
              <Link href={`/booking/${pack.id}`}>Book Now</Link>
            </Button>

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
