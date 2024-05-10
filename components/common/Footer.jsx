import Link from "next/link";
import { Button } from "../ui/button";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="container mb-10">
      <div className="dark:bg-brand bg-brandText rounded-3xl md:px-20 px-10 py-10">
        <div className="flex flex-col gap-y-10 md:flex-row justify-between items-start pb-10">
          <div className="">
            <h2 className="text-2xl md:w-1/2 mb-10">
              Experence world’s magnificence with our expert tours.
            </h2>
            <Button>
              <Link href="/packages">Book a tour</Link>
            </Button>
          </div>

          <div className=" flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <p>info@protravels.in</p>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone />
              <p>+8801787612333</p>
            </div>

            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="border-t pt-10 flex flex-col md:flex-row gap-y-6 justify-between md:items-center">
          <Logo />

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-sm md:text-base dark:text-neutral-300"
            >
              Terms of Service
            </Link>
            <div className="size-1 rounded-full bg-black dark:bg-neutral-300"></div>
            <Link
              href="/"
              className="text-sm md:text-base dark:text-neutral-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
