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
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
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
      </div>
    </nav>
  );
};

export default Navbar;
