"use client";

import { routes } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Logo from "./Logo";
import Search from "./Search";
import { ThemeModeToggle } from "./ThemeModeToggler";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const pathName = usePathname();

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setIsScroll(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full bg-white dark:bg-neutral-950 dark:bg-opacity-70 bg-opacity-70 backdrop-blur-md h-20 flex items-center fixed top-0 left-0 z-40 ${
        isScroll ? "border-b dark:border-neutral-700" : ""
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-10">
          <Logo />
          <div className="hidden lg:block">
            <Search />
          </div>
        </div>

        <div className="desktopMenu hidden lg:flex items-center">
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

          {Object.keys(user).length === 0 ? (
            <Button className="mx-6">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          ) : (
            <Button className="mx-6">
              <Link href="/profile">{user?.name}</Link>
            </Button>
          )}

          <ThemeModeToggle />
        </div>

        <div className="mobileMenu lg:hidden">
          <button className="" onClick={() => setIsMobileNav(!isMobileNav)}>
            {isMobileNav ? <FaXmark /> : <FaBars />}
          </button>

          <div
            className={`fixed z-30 w-1/2 h-screen top-20 border-l duration-300 ${
              isMobileNav ? "right-0" : "-right-full"
            }`}
          >
            <div className="w-full h-full backdrop-blur-md dark:bg-black bg-white dark:bg-opacity-70 bg-opacity-80 py-6">
              <div className="pl-3 mb-10">
                <ThemeModeToggle />
              </div>

              <div className="flex flex-col items-start mb-6">
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
              </div>
              {Object.keys(user).length === 0 ? (
                <Button className="ml-3">
                  <Link href="/sign-in">Sign in</Link>
                </Button>
              ) : (
                <Button className="ml-3">
                  <Link href="/profile">{user?.name}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
