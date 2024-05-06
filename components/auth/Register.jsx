"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Logo from "../common/Logo";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { register } from "@/public";
import { useFormik } from "formik";
import { registerSchema } from "@/schemas";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cPassword: "",
};

const Register = () => {
  const router = useRouter();
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        setSubmitting(false);
        console.log(values);
        resetForm();
        toast.success("Register Successfully");
        router.push("/sign-in");
      }, 2000);
    },
  });

  return (
    <div className="container pt-10 pb-20 flex justify-between min-h-[90vh]">
      <div className="w-2/6">
        <Image
          src={register}
          alt="login-banner"
          width="auto"
          height="auto"
          priority={true}
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
          <form className="w-full mt-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mb-4">
              <Label
                htmlFor="name"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Full Name
              </Label>
              <Input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Full Name"
                className="w-full"
              />
              {errors.name && touched.name && (
                <small className="text-rose-500">{errors.name}</small>
              )}
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
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Email"
                className="w-full"
              />
              {errors.email && touched.email && (
                <small className="text-rose-500">{errors.email}</small>
              )}
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
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Password"
                className="w-full"
              />
              {errors.password && touched.password && (
                <small className="text-rose-500">{errors.password}</small>
              )}
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <Label
                htmlFor="cPassword"
                className="text-neutral-600 dark:text-neutral-300"
              >
                Confim Password
              </Label>
              <Input
                type="password"
                name="cPassword"
                value={values.cPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Password"
                className="w-full"
              />
              {errors.cPassword && touched.cPassword && (
                <small className="text-rose-500">{errors.cPassword}</small>
              )}
            </div>

            <Button type="submit">
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <AiOutlineLoading3Quarters className="animate-spin" />
                  <span>Loading</span>
                </div>
              ) : (
                "Register"
              )}
            </Button>
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
