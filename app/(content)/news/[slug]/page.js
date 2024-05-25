import React from "react";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

const SpecifcNews = async ({ params }) => {
  const newItemsId = params.slug;
  const item = await getNewsItem(newItemsId);

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
