import { luggage } from "@/public";
import Image from "next/image";

const SectionTitle = ({ title, desc }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-1">
        <h2 className="text-xl md:text-2xl font-medium text-center md:text-start">
          {title}
        </h2>
        <Image
          src={luggage}
          alt="luggage"
          width={30}
          height={30}
          className="ml-2"
        />
      </div>
      <p className="text-neutral-500 text-center">{desc}</p>
    </>
  );
};

export default SectionTitle;
