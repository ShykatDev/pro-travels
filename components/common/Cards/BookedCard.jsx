import { Button } from "@/components/ui/button";
import { handleFetchAllPackages } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FaPlane } from "react-icons/fa6";

const BookedCard = ({ item, onCancel }) => {
  const { data } = useQuery({
    queryKey: ["bookedData"],
    queryFn: handleFetchAllPackages,
    staleTime: 10000,
  });

  const bookedItem = data?.find((pack) => pack.id === item.id);

  console.log(bookedItem);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 mb-3">
      <Image
        src={bookedItem?.thumbnail}
        alt={bookedItem?.placeName}
        width={300}
        height={200}
        className="w-full rounded-lg"
      />

      <div className="">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-medium">{bookedItem?.placeName}</h2>
          <p className="text-brandText underline">Booked on: 10-05-24</p>
        </div>
        <p className="text-neutral-500 dark:text-neutral-400">
          {bookedItem?.description}
        </p>
        <div className="mt-3 flex items-center">
          <div className="size-2 rounded-full bg-neutral-500"></div>
          <div className="w-1/2 h-[1px] bg-neutral-500"></div>
          <FaPlane className="text-neutral-500 dark:text-neutral-400" />
          <div className="w-1/2 h-[1px] bg-neutral-500"></div>
          <div className="size-2 rounded-full bg-brandText"></div>
        </div>
        <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
          <small>{bookedItem?.from}</small>
          <small>{bookedItem?.to}</small>
        </div>

        <Button
          onClick={() => onCancel(bookedItem.id)}
          className="mt-6 bg-rose-500 bg-opacity-20 dark:text-white text-black border border-rose-600 hover:bg-rose-300 dark:hover:bg-rose-900"
        >
          Cancel booking
        </Button>
      </div>
    </div>
  );
};

export default BookedCard;
