"use client";

import Details from "./Details";
import Reviews from "./Reviews";
import Related from "./Related";
import { useQuery } from "@tanstack/react-query";
import { handleFetchAllPackages } from "@/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PackageDetails = ({ params }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["package", params.id],
    queryFn: handleFetchAllPackages,
    staleTime: 10000,
  });

  const pack = !isLoading && data?.find((d) => d.id === params.id);

  return isLoading ? (
    <div className="w-full h-screen container relative flex justify-center items-center">
      <AiOutlineLoading3Quarters className="animate-spin" /> Loading
    </div>
  ) : (
    <>
      <div className="w-full container relative">
        <Details pack={pack} />

        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <Reviews pack={pack} />
          <Related />
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
