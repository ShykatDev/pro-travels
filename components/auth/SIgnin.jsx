"use client";

import { header2, sylhet } from "@/public";
import Image from "next/image";
import Logo from "../common/Logo";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useFormik } from "formik";
import { signInSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const initialValues = {
  email: "",
  password: "",
};

const SIgnin = () => {
  const router = useRouter();
  const [regData, setRegData] = useState(null);
  const [signData, setSignData] = useLocalStorage("signInData", {});

  useEffect(() => {
    if (window !== undefined) {
      setRegData(JSON.parse(localStorage.getItem("registerData")));
    }
  }, []);

  console.log(regData);

  const {
    values,
    setSubmitting,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        setSubmitting(false);
        const findUser = regData.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );

        if (findUser !== undefined) {
          setSignData(findUser);
          resetForm();
          toast.success("Sign in Successfully");
          router.push("/");
        }
      }, 2000);
    },
  });
  return (
    <div className="container pt-10 pb-20 flex justify-between min-h-[90vh]">
      <div className="w-2/5 flex flex-col justify-center items-start">
        <div className="w-full">
          <h2 className="text-2xl">Sign in</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Enter your original credentials to login
          </p>
          <form className="w-full mt-10" onSubmit={handleSubmit}>
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
                placeholder="Enter Password"
                className="w-full"
              />

              {errors.password && touched.password && (
                <small className="text-rose-500">{errors.password}</small>
              )}
            </div>

            <Button type="submit">
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <AiOutlineLoading3Quarters className="animate-spin" />
                  <span>Loading</span>
                </div>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <p className="text-neutral-600 dark:text-neutral-400 mt-6">
            {"Don't have an account? "}
            <Link href="/register" className="text-brandText underline">
              Register
            </Link>{" "}
            here
          </p>
        </div>
        {/* <div className="mt-20 flex items-center gap-6 dark:text-neutral-400 text-neutral-600">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div> */}
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
