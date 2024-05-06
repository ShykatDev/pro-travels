import { header2, sylhet } from "@/public";
import Image from "next/image";
import Logo from "../common/Logo";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const SIgnin = () => {
  return (
    <div className="container pt-10 pb-20 flex justify-between min-h-[90vh]">
      <div className="w-2/5 flex flex-col justify-between items-start">
        <Logo />
        <div className="w-full">
          <h2 className="text-2xl">Sign in</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Enter your original credentials to login
          </p>
          <form className="w-full mt-10">
            <div className="flex flex-col gap-2 mb-4">
              <Label
                htmlFor="email"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <Label
                htmlFor="password"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="w-full"
              />
            </div>

            <Button>Sign in</Button>
          </form>

          <p className="text-neutral-600 dark:text-neutral-400 mt-6">
            {"Don't have an account? "}
            <Link href="/register" className="text-brandText underline">
              Register
            </Link>{" "}
            here
          </p>
        </div>
        <div className="flex items-center gap-6 dark:text-neutral-400 text-neutral-600">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
      <div className="w-2/6">
        <Image
          src={sylhet}
          alt="login-banner"
          width="auto"
          height="auto"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SIgnin;
