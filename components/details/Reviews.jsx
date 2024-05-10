import React from "react";
import { FaStar } from "react-icons/fa6";
import ReviewCard from "../common/Cards/ReviewCard";

const Reviews = ({ pack }) => {
  return (
    <div className="md:w-3/4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl">Reviews</h2>
        <p className=" flex items-center text-sms gap-1 px-3 py-2 rounded-md bg-yellow-500 bg-opacity-10">
          <FaStar className="text-yellow-500" /> {pack.ratings} rating out of 5
        </p>
      </div>
      <p className="text-neutal-500 dark:text-neutral-400 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-3">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
