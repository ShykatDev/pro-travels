import { google, luggage } from "@/public";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa6";
import Gradient from "../common/Gradient";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";

const Features = () => {
  return (
    <div className="py-20 relative">
      <Gradient positionX="-left-96" positionY="-top-96" color="bg-[#01B3FF]" />
      <SectionTitle
        title="Discover the exciting features only with us"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, sequi."
      />

      <div className="px-20 mt-16 h-[60vh] flex justify-between items-end">
        <div className="w-[60%] h-full flex items-end">
          <div className="bg-brandText dark:bg-brand dark:bg-opacity-15 bg-opacity-15 w-[45%] h-3/4 border-l border-t border-b px-10 py-20 border-brandText dark:border-brand rounded-tl-xl rounded-bl-xl">
            <p className="text-3xl font-extralight mb-6">01</p>
            <h2 className="text-2xl">Travel with everything</h2>
          </div>
          <div className="bg-brandText dark:bg-brand flex flex-col justify-between items-start w-[55%] h-full px-10 py-20 rounded-tr-xl rounded-br-xl rounded-tl-xl relative overflow-hidden">
            <div className="circle1 absolute -right-8 -top-12 bg-[#78bbd879] dark:bg-[#024561] size-40 rounded-full"></div>
            <div className="circle2 absolute right-32 top-16 bg-[#78bbd879] dark:bg-[#024561] size-10 rounded-full"></div>
            <div className="circle3 absolute right-16 top-28 bg-[#78bbd879] dark:bg-[#024561] size-24 rounded-full"></div>

            <div className="relative z-20">
              <p className="text-3xl font-extralight mb-6">02</p>
              <h2 className="text-2xl">Everything is Included</h2>

              <p className="mt-10 text-neutral-700 dark:text-neutral-400">
                Select your favorite social network and share our icons with
                your contacts or friends. If you don’t have these social
                networks
              </p>
            </div>
            <Button className=" bg-black text-white dark:hover:text-black">
              <Link href="/packages">View packages</Link>
            </Button>
          </div>
        </div>
        <div className="w-[30%] h-full flex justify-between flex-col">
          <div>
            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <div className="size-6 bg-brandText dark:bg-brand rounded-lg"></div>
                <h2 className="text-lg dark:text-neutral-300">
                  Air tickets are included
                </h2>
              </div>
              <p className="text-neutral-500 pl-8">
                Tickets are included with the package you select.
              </p>
            </div>
            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <div className="size-6 bg-brandText dark:bg-brand rounded-lg"></div>
                <h2 className="text-lg dark:text-neutral-300">
                  {"Don't worry about hotels."}
                </h2>
              </div>
              <p className="text-neutral-500 pl-8">
                {
                  "We provide the best hotels for our guests and it's all included."
                }
              </p>
            </div>
            <div className="">
              <div className="flex gap-2 items-center">
                <div className="size-6 bg-brandText dark:bg-brand rounded-lg"></div>
                <h2 className="text-lg dark:text-neutral-300">
                  We provide foods also.
                </h2>
              </div>
              <p className="text-neutral-500 pl-8">
                {
                  "Yes, it's unblivable right? But we provide breakfast, lunch and dinner also."
                }
              </p>
            </div>
          </div>
          <div className="w-full flex items-start gap-3 dark:bg-white bg-black dark:bg-opacity-5 bg-opacity-5 border border-neutral-600 rounded-full px-6 py-4">
            <Image
              alt="google"
              src={google}
              className="mt-1"
              width={40}
              height={40}
            />
            <div>
              <p className="flex items-center gap-2 text-lg">
                4.7 rating out of 5{" "}
                <span>
                  <FaStar className="text-yellow-500" />
                </span>
              </p>
              <p className="font-light text-neutral-500">
                People just love to travel with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
