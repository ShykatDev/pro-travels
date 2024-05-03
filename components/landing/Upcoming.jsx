"use client";
import SectionTitle from "../common/SectionTitle";
import UpcomingCard from "../common/Cards/UpcomingCard";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "@/utils/slider";
import { Button } from "../ui/button";
import Gradient from "../common/Gradient";

const Upcoming = () => {
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
        <div className="flex gap-3">
          <Button variant="outline">Domestic</Button>
          <Button variant="outline">International</Button>
        </div>

        <div className="mt-6 slider-container">
          <Slider {...settings}>
            <UpcomingCard margin="mx-2" />
            <UpcomingCard margin="mx-2" />
            <UpcomingCard margin="mx-2" />
            <UpcomingCard margin="mx-2" />
            <UpcomingCard margin="mx-2" />
            <UpcomingCard margin="mx-2" />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
