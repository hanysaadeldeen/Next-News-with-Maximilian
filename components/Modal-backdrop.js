"use client";
import { useRouter } from "next/navigation";

import React from "react";

const Modalbackdrop = () => {
  const router = useRouter();

  return (
    <div
      className="modal-backdrop"
      onClick={router.back}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Modalbackdrop;
