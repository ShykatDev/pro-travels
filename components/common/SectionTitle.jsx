import { luggage } from "@/public";
import Image from "next/image";

const SectionTitle = ({ title, desc }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-1">
        <h2 className="text-2xl font-medium">{title}</h2>
        <Image
          src={luggage}
          alt="luggage"
          width={30}
          height={30}
          className="-rotate-[20deg] -mt-2"
        />
      </div>
      <p className="text-neutral-500 text-center">{desc}</p>
    </>
  );
};

export default SectionTitle;
