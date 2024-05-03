"use client";

import Image from "next/image";
import PlaceName from "../common/PlaceName";
import { SampleNextArrow, SamplePrevArrow } from "@/utils/slider";
import Slider from "react-slick";
import { card, india, japan, thailand } from "@/public";

const Related = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: (
      <SampleNextArrow place="-bottom-10 right-3 lg:-right-0 z-20 cursor-pointer" />
    ),
    prevArrow: (
      <SamplePrevArrow place="-bottom-10 right-14 lg:right-14 z-20 cursor-pointer" />
    ),
  };
  return (
    <div className="w-1/4 h-full">
      <h2 className="text-xl">Related Packages</h2>

      <Slider {...settings}>
        <div className="p-3 bg-brandText rounded-lg mt-3 dark:bg-brand">
          <div className="relative bg-opacity-30 dark:bg-opacity-30">
            <Image
              src={india}
              alt="india"
              width="auto"
              height="auto"
              className=" rounded-md w-full border-brand h-[25vh] object-cover"
            />

            <PlaceName place="India" price="$100" />
          </div>
        </div>
        <div className="p-3 bg-brandText rounded-lg mt-3 dark:bg-brand">
          <div className="relative bg-opacity-30 dark:bg-opacity-30">
            <Image
              src={card}
              alt="india"
              width="auto"
              height="auto"
              className=" rounded-md w-full border-brand h-[25vh] object-cover"
            />

            <PlaceName place="Japan" price="$100" />
          </div>
        </div>
        <div className="p-3 bg-brandText rounded-lg mt-3 dark:bg-brand">
          <div className="relative bg-opacity-30 dark:bg-opacity-30">
            <Image
              src={thailand}
              alt="india"
              width={300}
              height={500}
              className=" rounded-md w-full border-brand h-full object-cover"
            />

            <PlaceName place="Thailand" price="$100" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Related;
