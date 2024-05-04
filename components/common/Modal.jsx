"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Modal = ({ children }) => {
  const dialoagRef = useRef(null);
  const router = useRouter();

  const onHide = () => {
    router.back();
  };

  useEffect(() => {
    if (!dialoagRef.current?.open) {
      dialoagRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <dialog
      ref={dialoagRef}
      onClose={onHide}
      className="w-screen min-h-[97vh] absolute top-0 left-0 z-40 bg-brand bg-opacity-15 backdrop-blur-3xl flex justify-center items-center rounded-2xl border"
    >
      <Button onClick={onHide} className="absolute right-6 top-6">
        <MdOutlineClose />
      </Button>
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
