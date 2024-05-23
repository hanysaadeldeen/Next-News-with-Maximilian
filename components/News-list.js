import Link from "next/link";
import React from "react";

const Newslist = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/news/${item.slug}`}>
              <img
                src={`/images/news/${item.image}`}
                alt={`fffff${item.title}`}
                fill
              />
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Newslist;
