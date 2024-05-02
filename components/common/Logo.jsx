import { airplane } from "@/public";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="logo flex items-center">
      <span className="text-2xl font-bold text-brand dark:text-brandText">
        PR
      </span>
      <Image
        src={airplane}
        alt="airplane"
        width={30}
        height={30}
        className="p-1 object-cover"
      />
      <span className="text-2xl font-light dark:text-white">Travels</span>
    </Link>
  );
};

export default Logo;
