"use client";
import SectionTitle from "../common/SectionTitle";
import UpcomingCard from "../common/Cards/UpcomingCard";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "@/utils/slider";
import { Button } from "../ui/button";
import Gradient from "../common/Gradient";
import { useQuery } from "@tanstack/react-query";
import { handleFetchUpcomming } from "@/utils";
import LoadingCard from "../loading/Card";

const Upcoming = () => {
  const { data: upcomming, isLoading } = useQuery({
    queryKey: ["upcommingData"],
    queryFn: handleFetchUpcomming,
    staleTime: 10000,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow place="-top-14 right-3 lg:-right-0 z-20 cursor-pointer" />
    ),
    prevArrow: (
      <SamplePrevArrow place="-top-14 right-14 lg:right-14 z-20 cursor-pointer" />
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <Gradient
        positionX="-right-96"
        positionY="-bottom-96"
        color="bg-[#01B3FF]"
      />
      <SectionTitle
        title="Upcoming Tours/Plans"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing."
      />

      <div className="mt-16">
        <div className="hidden md:flex gap-3">
          <Button variant="outline">Domestic</Button>
          <Button variant="outline">International</Button>
        </div>

        <div className="mt-6 slider-container">
          {isLoading ? (
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </div>
          ) : (
            <Slider {...settings}>
              {upcomming.map((d) => (
                <UpcomingCard key={d.id} pack={d} margin="mx-2" />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
