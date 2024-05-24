import Link from "next/link";
import React from "react";
import Navheader from "./Nav-Main-header";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Navheader href="/news">News</Navheader>
          </li>
          <li>
            <Navheader href="/archive">Archive</Navheader>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
