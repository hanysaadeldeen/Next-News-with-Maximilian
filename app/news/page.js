import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Newslist from "@/components/News-list";
const Newspage = () => {
  return (
    <>
      <h1>News Page</h1>
      <Newslist news={DUMMY_NEWS} />
    </>
  );
};

export default Newspage;
