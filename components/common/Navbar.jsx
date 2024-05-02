"use client";

import { routes } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Logo from "./Logo";
import Search from "./Search";
import { ThemeModeToggle } from "./ThemeModeToggler";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="w-full dark:bg-neutral-950 bg-opacity-50 backdrop-blur-md h-20 flex items-center fixed top-0 left-0 z-40">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Logo />
          <Search />
        </div>

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

          <Button className="mx-6">
            <Link href="/">Sign in</Link>
          </Button>

          <ThemeModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
