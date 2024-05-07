"use client";

import Image from "next/image";
import PlaceName from "../common/PlaceName";
import { SampleNextArrow, SamplePrevArrow } from "@/utils/slider";
import Slider from "react-slick";
import { card, india, japan, thailand } from "@/public";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { handleFetchAllPackages } from "@/utils";
import Link from "next/link";

const Related = () => {
  const { data } = useQuery({
    queryKey: ["related"],
    queryFn: handleFetchAllPackages,
    staleTime: 10000,
  });

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

  const { id } = useParams();

  const relatedData = data?.filter((item) => item.id !== id);

  return (
    <div className="w-1/4 h-full">
      <h2 className="text-xl">Related Packages</h2>

      <Slider {...settings}>
        {relatedData?.slice(0, 10)?.map((item) => {
          return (
            <Link
              href={`/packages/${item.id}`}
              key={item.id}
              className="p-3 bg-brandText rounded-lg mt-3 dark:bg-brand"
            >
              <div className="relative bg-opacity-30 dark:bg-opacity-30">
                <Image
                  src={item.thumbnail}
                  alt={item.placeName}
                  width={200}
                  height={200}
                  className=" rounded-md w-full border-brand h-[25vh] object-cover"
                />

                <PlaceName place={item.placeName} price={item.price} />
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Related;
