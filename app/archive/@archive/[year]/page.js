import Newslist from "@/components/News-list";
import { getNewsForYear } from "@/lib/news";
import React from "react";

const ArchiveSpecificYear = ({ params }) => {
  const yearLink = params.year;
  const getyear = getNewsForYear(yearLink);
  return (
    <>
      <h1>specific archive year </h1>
      <Newslist news={getyear} />
    </>
  );
};

export default ArchiveSpecificYear;
