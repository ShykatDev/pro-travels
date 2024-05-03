import { india } from "@/public";
import Image from "next/image";
import {
  FaClock,
  FaPersonWalkingLuggage,
  FaPlane,
  FaRegHeart,
  FaStar,
} from "react-icons/fa6";
import { Button } from "../ui/button";
import ReviewCard from "../common/Cards/ReviewCard";
import PlaceName from "../common/PlaceName";
import Details from "./Details";
import Reviews from "./Reviews";
import Related from "./Related";

const PackageDetails = () => {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-40 bg-brand bg-opacity-15 backdrop-blur-xl flex justify-center items-center">
      <div className="w-full h-[90vh] container relative">
        <Button variant="destructive" className="absolute right-0 -top-6">
          Close
        </Button>

        <Details />

        <div className="mt-6 flex gap-6">
          <Reviews />
          <Related />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
