import Newslist from "@/components/News-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

const Latestpage = () => {
  const latest = getLatestNews();
  return (
    <>
      <h2>Latest page</h2>
      <Newslist news={latest} />
    </>
  );
};

export default Latestpage;
