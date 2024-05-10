"use client";

import { DatePicker } from "@/components/common/DatePicker";
import { Button } from "@/components/ui/button";
import { header1, header2, header3, luggage } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

const Header = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    person: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  return (
    <header className="pt-10">
      <div className="flex gap-10 overflow-x-hidden">
        <div className="hidden lg:block w-1/4 ">
          <Image alt="headerleft" src={header1} className="h-full w-full" />
        </div>
        <div className="w-full md:w-3/4 flex flex-col justify-end">
          <div>
            <Image src={luggage} alt="luggage" width={60} height={60} />
            <h2 className="text-2xl mt-3 font-medium">
              Discover the World: Wanderlust Adventures Await!
            </h2>
            <p className="text-neutral-500 mt-3">
              Welcome to Pro Travels, your passport to unforgettable
              experiences! Let us guide you on epic journeys across the globe,
              from hidden gems to iconic landmarks. Start your adventure today!
            </p>
          </div>
          <div className="mt-6 md:mt-10 flex gap-3 md:gap-10 justify-between items-end">
            <Image alt="headerRight1" src={header2} className="" />
            <Image
              alt="headerRight2"
              src={header3}
              className="hidden md:block"
            />

            <div>
              <div className="size-32 dark:bg-brand bg-brandText bg-opacity-30 dark:bg-opacity-15 border border-brand p-5 rounded-lg">
                <p className="text-4xl dark:text-neutral-100">50+</p>
              </div>
              <p className="my-6 font-light text-neutral-500">
                We Have more than 50+ packages where you can pick and enjoy your
                holiday
              </p>
              <Button
                variant="secondary"
                className="bg-neutral-300 dark:bg-neutral-800"
              >
                <Link href="/packages" as="package">
                  View Packages
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <div className="md:h-36 w-full rounded-xl bg-gradient-to-b from-neutral-200 dark:from-neutral-800 to-transparent p-[1px] overflow-hidden">
          <div className=" h-full w-full bg-white dark:bg-neutral-950 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 items-center p-4 md:px-10">
            <div className="flex flex-col gap-2 mb-4">
              <Label
                htmlFor="location"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Location
              </Label>
              <Input
                type="text"
                name="location"
                placeholder="Enter Location"
                value={searchData.location}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <Label
                htmlFor="person"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Guest
              </Label>
              <Input
                type="text"
                name="person"
                placeholder="Enter Guest Number"
                value={searchData.person}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <Label className="text-neutral-600 dark:text-neutral-300">
                Date
              </Label>
              <DatePicker />
            </div>

            <Button className="mt-2">
              <Link
                href={`searchpackages/${searchData.location}/${searchData.person}`}
              >
                Find Package
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
