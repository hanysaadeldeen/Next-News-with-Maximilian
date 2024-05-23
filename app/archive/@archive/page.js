import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
import React from "react";

const ArchivePage = () => {
  const Links = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <ul>
        {Links.map((year) => {
          return (
            <li>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default ArchivePage;
