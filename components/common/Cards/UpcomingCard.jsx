import { Button } from "@/components/ui/button";
import { card } from "@/public";
import Image from "next/image";
import {
  FaStar,
  FaPlane,
  FaPersonWalkingLuggage,
  FaClock,
  FaRegHeart,
} from "react-icons/fa6";

const UpcomingCard = () => {
  return (
    <div className="mx-2">
      <div className="w-full overflow-hidden rounded-xl dark:bg-brand bg-neutral-400 bg-opacity-5 dark:bg-opacity-15 border dark:border-brand">
        <div className="relative">
          <Image src={card} alt="card" className="w-full" />

          <div className="size-10 border border-neutral-500 rounded-full bg-black bg-opacity-50 absolute top-4 right-4 backdrop-blur flex justify-center items-center">
            <button>
              <FaRegHeart className="text-xl text-rose-600" />
            </button>
          </div>
        </div>
        <div className="w-full p-6">
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
            <FaPlane className="text-neutral-500 dark:text-neutral-400" />
            <div className="w-1/2 h-[1px] bg-neutral-500"></div>
            <div className="size-2 rounded-full bg-brandText"></div>
          </div>

          <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
            <small>Bangladesh</small>
            <small>Indonesia</small>
          </div>

          <p className="line-clamp-2 text-neutral-500 dark:text-neutral-400 text-sm mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            doloremque nostrum neque dolorum obcaecati suscipit facere inventore
            quos dolores ipsam!
          </p>

          <div className="mt-3">
            <div className="flex gap-3">
              <div className="flex gap-1 items-center px-3 py-1.5 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 rounded-md">
                <FaPersonWalkingLuggage className="text-neutral-500 dark:text-neutral-400" />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  10 person
                </p>
              </div>
              <div className="flex gap-1 items-center px-3 py-1.5 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 rounded-md">
                <FaClock className="text-neutral-500 dark:text-neutral-400" />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  5 days/6 nights
                </p>
              </div>
            </div>

            <p className="text-xl text-brandText font-medium my-3">
              $ 1000/person
            </p>
          </div>

          <Button className="w-full bg-brandText dark:bg-brand text-white hover:text-black">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
