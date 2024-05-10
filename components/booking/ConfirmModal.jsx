import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaCalendarCheck } from "react-icons/fa6";

const ConfirmModal = () => {
  return (
    <div className="md:w-1/2 md:h-1/2 p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-brand bg-opacity-35 backdrop-blur-3xl flex flex-col justify-center items-center rounded-2xl border">
      <div className="p-3 bg-green-500 bg-opacity-40 border border-green-500 rounded-md">
        <FaCalendarCheck className="text-green-400 text-xl" />
      </div>
      <h2 className="mt-3 text-white">
        A new packages is booked on your account.
      </h2>
      <div className="flex gap-3 mt-6">
        <Button variant="default">
          <Link href="/profile">Check on your account</Link>
        </Button>
        <Button variant="outline">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModal;
