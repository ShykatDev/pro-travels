import Image from "next/image";
import PlaceName from "../common/PlaceName";
import { Button } from "../ui/button";
import { FaLocationDot } from "react-icons/fa6";
import { iceland, india, japan, nepal, thailand, usa } from "@/public";
import Link from "next/link";

const Recommendation = () => {
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
        <Image
          src={japan}
          alt="japan"
          width="auto"
          height="auto"
          className="w-full h-full"
        />
        <PlaceName place="Japan" price="699" />
      </div>
      <div className="border relative rounded-lg overflow-hidden">
        <PlaceName place="India" price="299" />
        <Image
          src={india}
          alt="india"
          width="auto"
          height="auto"
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-between gap-6">
        <div className="border w-1/2 relative rounded-lg overflow-hidden">
          <PlaceName place="Nepal" price="499" />
          <Image
            src={nepal}
            alt="nepal"
            width="auto"
            height="auto"
            className="w-full h-full"
          />
        </div>
        <div className="border w-1/2 relative rounded-lg overflow-hidden">
          <PlaceName place="Iceland" price="899" />
          <Image
            src={iceland}
            alt="iceland"
            width="auto"
            height="auto"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="border relative rounded-lg overflow-hidden">
        <PlaceName place="USA" price="799" />
        <Image
          src={thailand}
          alt="thailand"
          width="auto"
          height="auto"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Recommendation;
