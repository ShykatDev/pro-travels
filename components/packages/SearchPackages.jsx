"use client";

import { handleFetchAllPackages } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import UpcomingCard from "../common/Cards/UpcomingCard";
import { Button } from "../ui/button";
import Link from "next/link";
import LoadingCard from "../loading/Card";

const SearchPackages = ({ params }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["searchPackage"],
    queryFn: handleFetchAllPackages,
    staleTime: 10000,
  });

  const searchParams = params.searchparams;

  const searchData = data?.filter(
    (item) =>
      item.placeName.toLowerCase().includes(searchParams[0].toLowerCase()) ||
      item.from.toLowerCase().includes(searchParams[0].toLowerCase()) ||
      item.to.toLowerCase().includes(searchParams[0].toLowerCase())
  );

  if (isLoading)
    return (
      <div className="w-full grid grid-cols-4 gap-6">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    );
  return (
    <div className="pt-10">
      <div className="flex items-center justify-between pb-6">
        <h2>
          We found{" "}
          <span className="text-brandText font-medium text-2xl">
            {searchData.length}
          </span>{" "}
          matching results.
        </h2>

        <Button>
          <Link href="/packages">View All Packages</Link>
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-6 pt-10 border-t">
        {searchData.map((item) => {
          return <UpcomingCard key={item.id} pack={item} />;
        })}
      </div>

      {searchData.length === 0 && (
        <p className="text-neutral-500 dark:text-neutral-400">
          {`😞 Sorry, We couldn't able to find your desire package right now.
          Meanwhile you can check our other packages.`}
        </p>
      )}
    </div>
  );
};

export default SearchPackages;
