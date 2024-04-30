"use client";

import { airplane } from "@/public";
import { routes } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="w-full bg-neutral-950 bg-opacity-50 backdrop-blur-md h-20 flex items-center border-b border-neutral-800 fixed top-0 left-0">
      <div className="container flex justify-between items-center">
        <Link href="/" className="logo flex items-center">
          <span className="text-2xl font-bold text-blue-600">PR</span>
          <Image
            src={airplane}
            alt="airplane"
            width={30}
            height={30}
            className="p-1 object-cover"
          />
          <span className="text-2xl font-light text-white">Travels</span>
        </Link>

        <div className="menu flex items-center">
          {routes.map((route, index) => {
            return (
              <Button key={index} variant="link">
                <Link
                  href={route.url}
                  className={`navLink ${
                    pathName === route.url ? "activeLink" : ""
                  }`}
                >
                  {route.route}
                </Link>
              </Button>
            );
          })}

          <div className="flex items-center gap-3">
            <Button>
              <Link href="/">Book Now</Link>
            </Button>

            <Button className="flex items-center gap-2" variant="ghost">
              <RiAccountPinBoxFill />
              <p>Login</p>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
