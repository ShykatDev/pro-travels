"use client";

import Details from "./Details";
import Reviews from "./Reviews";
import Related from "./Related";
import { useQuery } from "@tanstack/react-query";
import { handleFetchAllPackages } from "@/utils";

const PackageDetailsReload = ({ params }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["package", params.id],
    queryFn: handleFetchAllPackages,
    staleTime: 10000,
  });

  const pack = !isLoading && data?.find((d) => d.id === params.id);

  return (
    <div className="w-full h-screen absolute top-0 left-0 z-40 dark:bg-red-500 backdrop-blur-xl flex justify-center items-center">
      <div className="w-full h-[90vh] container relative">
        <Details pack={pack} />

        <div className="mt-6 flex gap-6">
          <Reviews />
          <Related />
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsReload;
