import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../common/Logo";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { register } from "@/public";

const Register = () => {
  return (
    <div className="container py-20 flex justify-between h-screen">
      <div className="w-2/6">
        <Image
          src={register}
          alt="login-banner"
          width="auto"
          height="auto"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-2/5 flex flex-col justify-between items-start">
        <Logo />
        <div className="w-full">
          <h2 className="text-2xl">Register</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Enter your original credentials to create new account
          </p>
          <form className="w-full mt-10">
            <div className="flex flex-col gap-2 mb-4">
              <Label
                htmlFor="name"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Full Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter Full Name"
                className="w-full"
              />
            </div>
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

            <Button>Register</Button>
          </form>

          <p className="text-neutral-600 dark:text-neutral-400 mt-6">
            {"Already have account? "}
            <Link href="/sign-in" className="text-brandText underline">
              Sign in
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
    </div>
  );
};

export default Register;
