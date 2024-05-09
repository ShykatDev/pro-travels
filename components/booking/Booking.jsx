"use client";

import { handleFetchAllPackages } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FaClock, FaPersonWalkingLuggage, FaStar } from "react-icons/fa6";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useContext, useState } from "react";
import { AuthContext } from "@/context";
import toast from "react-hot-toast";

const Booking = () => {
  const { bookingID } = useParams();
  const [bookingInfo, setBookingInfo] = useState({
    id: bookingID,
    name: "",
    email: "",
    num: "",
    person: "",
    duration: "",
    message: "",
  });

  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBookingInfo({
      ...bookingInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setUser({
        ...user,
        booked: [...user.booked, bookingInfo],
      });

      toast.success("Booking Successfull");
      router.push("/");
    }, 1000);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["booking", bookingID],
    queryFn: handleFetchAllPackages,
    staleTime: 10000,
  });

  const bookingData = data?.find((item) => item.id === bookingID);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex gap-10 pt-10">
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

      <div className="w-1/2 h-full p-6 border rounded-lg ">
        <div>
          <h2 className="text-xl">Book with your proper details:</h2>

          <p className=" text-neutral-500 dark:text-neutral-400 text-sm">
            Select your favorite social network and share our icons with your
            contacts or friends. If you don’t have these social networks, 
          </p>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
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
              value={bookingInfo.name}
              onChange={handleChange}
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
              value={bookingInfo.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full"
            />
          </div>

          <div className="flex gap-3">
            <div className="w-1/2 flex flex-col gap-2 mb-4">
              <Label
                htmlFor="dd"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Select Person
              </Label>
              <Select
                onValueChange={(val) => {
                  setBookingInfo({
                    ...bookingInfo,
                    person: val,
                  });
                }}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Select persons" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Person</SelectLabel>
                    <SelectItem value="2">2 person</SelectItem>
                    <SelectItem value="5">5 person</SelectItem>
                    <SelectItem value="10">10 person</SelectItem>
                    <SelectItem value="default">
                      As mentioned in package
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="w-1/2 flex flex-col gap-2 mb-4">
              <Label
                htmlFor="duration"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Duraion
              </Label>
              <Select
                onValueChange={(val) => {
                  setBookingInfo({
                    ...bookingInfo,
                    duration: val,
                  });
                }}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Duration</SelectLabel>
                    <SelectItem value="2">2 days</SelectItem>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="5">5 days</SelectItem>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="default">
                      As mentioned in package
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label
              htmlFor="num"
              className="text-neutral-600 dark:text-neutral-300"
            >
              Mobile Number
            </Label>
            <Input
              type="number"
              name="num"
              value={bookingInfo.num}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <Label
              htmlFor="info"
              className="text-neutral-600 dark:text-neutral-300"
            >
              Additional Information
            </Label>
            <Textarea
              placeholder="Enter message"
              name="message"
              value={bookingInfo.message}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full mt-3">
            Book now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
