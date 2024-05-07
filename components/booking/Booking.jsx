"use client";

import { handleFetchAllPackages } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaClock, FaPersonWalkingLuggage, FaStar } from "react-icons/fa6";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DatePicker } from "../common/DatePicker";
import Select from "react-select";
import { Button } from "../ui/button";

const Booking = () => {
  const { bookingID } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["booking", bookingID],
    queryFn: handleFetchAllPackages,
    staleTime: 10000,
  });

  const bookingData = data?.find((item) => item.id === bookingID);

  const personOptions = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen gap-10">
      <div className="w-1/2 h-full">
        <Image
          src={bookingData.thumbnail}
          alt={bookingData.placeName}
          width={500}
          height={500}
          className="rounded-lg w-full"
        />
        <div className="flex items-center justify-between mt-6">
          <h2 className="text-xl text-neutral-600 font-semibold dark:text-white">
            {bookingData.placeName}
          </h2>
          <div className="flex items-center gap-1 px-4 py-1.5 rounded-md bg-yellow-400 bg-opacity-25">
            <FaStar className="text-sm text-yellow-500 mb-1" />
            <p className="text-sm">{bookingData.ratings}</p>
          </div>
        </div>
        <p className="mt-3 text-neutral-500 dark:text-neutral-300 line-clamp-4">
          {bookingData.description}
        </p>

        <div className="mt-3 flex gap-3">
          <div className="flex gap-1 items-center px-3 py-1.5 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 rounded-md">
            <FaPersonWalkingLuggage className="text-neutral-500 dark:text-neutral-300" />
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              {bookingData.totalPerson} person
            </p>
          </div>
          <div className="flex gap-1 items-center px-3 py-1.5 dark:bg-white bg-black bg-opacity-10 dark:bg-opacity-10 rounded-md">
            <FaClock className="text-neutral-500 dark:text-neutral-300" />
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              {bookingData.totalDuration}
            </p>
          </div>
        </div>

        <p className="mt-6 text-2xl font-medium text-brandText dark:text-brandText">
          ${bookingData.price}/person
        </p>
      </div>
      <div className="w-1/2 h-full p-6 border">
        <div>
          <h2 className="text-2xl">Book with your proper details:</h2>

          <p className=" text-neutral-500 dark:text-neutral-400">
            Select your favorite social network and share our icons with your
            contacts or friends. If you don’t have these social networks, 
          </p>
        </div>
        <form className="mt-6">
          <div className="flex flex-col gap-2 mb-4">
            <Label
              htmlFor="name"
              className="text-neutral-600 dark:text-neutral-300"
            >
              Full Name
            </Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label
              htmlFor="email"
              className="text-neutral-600 dark:text-neutral-300"
            >
              Email Address
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter Full Name"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label
              htmlFor="name"
              className="text-neutral-600 dark:text-neutral-300"
            >
              Select a date
            </Label>
            <DatePicker className="w-full" />
          </div>
          {/* <div className="flex">
            <Select options={personOptions} className="w-1/2 " />
            <Select options={personOptions} className="w-1/2 " />
          </div> */}

          <Button className="w-full">Book now</Button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
