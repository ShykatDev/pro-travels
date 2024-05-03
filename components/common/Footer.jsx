import Link from "next/link";
import { Button } from "../ui/button";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="container  mb-10">
      <div className="dark:bg-brand bg-brandText rounded-3xl px-20 py-10">
        <div className="flex justify-between items-start pb-10">
          <div>
            <h2 className="text-2xl w-1/2 mb-10">
              Experence world’s magnificence with our expert tours.
            </h2>
            <Button>Book a tour</Button>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <p>info@protravels.in</p>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone />
              <p>+017 876 123 33</p>
            </div>

            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="border-t pt-10 flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-2">
            <Link href="/" className=" dark:text-neutral-300">
              Terms of Service
            </Link>
            <div className="size-1 rounded-full bg-black dark:bg-neutral-300"></div>
            <Link href="/" className=" dark:text-neutral-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
