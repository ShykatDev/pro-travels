import { offer } from "@/public";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Offer = () => {
  return (
    <div className="w-full dark:bg-transparent border bg-white bg-opacity-5 min-h-80 rounded-xl my-20 flex justify-between items-center px-10">
      <div className="flex flex-col items-start">
        <p className="px-3 py-1 border border-rose-400 text-rose-400 rounded-lg">
          Save 25% on your first trip
        </p>

        <h2 className="text-2xl my-3">Enjoy you travel with protravels</h2>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          quis atque officia laborum delectus, libero aliquam natus tenetur unde
          asperiores.
        </p>

        <Button className="mt-6">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
      <div>
        <Image src={offer} alt="offer" width={500} height={500} />
      </div>
    </div>
  );
};

export default Offer;
