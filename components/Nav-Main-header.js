"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navheader = ({ href, children }) => {
  const urlParam = usePathname();
  return (
    <Link
      href={`${href}`}
      className={urlParam.startsWith(href) ? "active" : ""}
    >
      {children}
    </Link>
  );
};

export default Navheader;
