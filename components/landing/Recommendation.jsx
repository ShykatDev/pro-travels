"use client";

import Image from "next/image";
import PlaceName from "../common/PlaceName";
import { Button } from "../ui/button";
import Link from "next/link";
import { handleFetchRecommended } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const Recommendation = () => {
  const { data: recommended } = useQuery({
    queryKey: ["recommendedData"],
    queryFn: handleFetchRecommended,
    staleTime: 10000,
  });
  const japan = recommended && recommended[0];
  const india = recommended && recommended[1];
  const thailand = recommended && recommended[2];
  const sylhet = recommended && recommended[3];
  const iceland = recommended && recommended[4];

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6">
      <div className="h-[40vh] flex flex-col items-start justify-center">
        <h2 className="text-2xl">Recommendation</h2>
        <p className="text-neutral-400 mt-3 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          doloremque doloribus facilis quae cumque amet temporibus aliquid,
          architecto non distinctio?
        </p>

        <Button>
          <Link href="/packages">View all plans</Link>
        </Button>
      </div>
      <div className="border row-span-2 relative rounded-lg overflow-hidden">
        <Link href={`packages/${japan?.id}`}>
          <Image
            src={japan?.banner}
            alt="japan"
            width={500}
            height={500}
            priority={true}
            className="w-full h-full"
          />
        </Link>
        <PlaceName place={japan?.placeName} price={japan?.price} />
      </div>
      <div className="border relative rounded-lg overflow-hidden">
        <Link href={`packages/${india?.id}`}>
          <Image
            src={india?.banner}
            alt="japan"
            width={500}
            height={500}
            priority={true}
            className="w-full h-full"
          />
        </Link>
        <PlaceName place={india?.placeName} price={india?.price} />
      </div>
      <div className="flex justify-between gap-6">
        <div className="border w-1/2 relative rounded-lg overflow-hidden">
          <Link href={`packages/${sylhet?.id}`}>
            <Image
              src={sylhet?.banner}
              alt="japan"
              width={500}
              height={500}
              priority={true}
              className="w-full h-full"
            />
          </Link>
          <PlaceName place={sylhet?.placeName} price={sylhet?.price} />
        </div>
        <div className="border w-1/2 relative rounded-lg overflow-hidden">
          <Link href={`packages/${iceland?.id}`}>
            <Image
              src={iceland?.banner}
              alt="japan"
              width={500}
              height={500}
              priority={true}
              className="w-full h-full"
            />
          </Link>
          <PlaceName place={iceland?.placeName} price={iceland?.price} />
        </div>
      </div>
      <div className="border relative rounded-lg overflow-hidden">
        <Link href={`packages/${thailand?.id}`}>
          <Image
            src={thailand?.banner}
            alt="japan"
            width={500}
            height={500}
            priority={true}
            className="w-full h-full"
          />
        </Link>
        <PlaceName place={thailand?.placeName} price={thailand?.price} />
      </div>
    </div>
  );
};

export default Recommendation;
