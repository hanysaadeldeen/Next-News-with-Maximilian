import React from "react";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

const SpecifcNews = ({ params }) => {
  const newItemsId = params.slug;
  const item = DUMMY_NEWS.find((item) => item.slug === newItemsId);

  if (!item) {
    notFound();
  }
  return (
    <article>
      <header className="news-article">
        <Link href={`/news/${item.slug}/image`}>
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </Link>
        <h1>{item.title}</h1>
        <time dateTime={item.date}>{item.date}</time>
      </header>
      <p>{item.content}</p>
    </article>
  );
};

export default SpecifcNews;
