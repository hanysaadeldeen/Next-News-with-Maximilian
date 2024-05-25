import Archivelinks from "@/components/Archive-links";
import Newslist from "@/components/News-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { Suspense } from "react";

const FilterdNews = async ({ year, month }) => {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>there is no news for choose news year</p>;

  if (news && news.length > 0) {
    newsContent = <Newslist news={news} />;
  }
  return newsContent;
};

const FilterHeader = async ({ year, month }) => {
  let availablemoths = await getAvailableNewsYears();
  let Links = availablemoths;

  let LinksMonth;
  if (year && !month) {
    LinksMonth = getAvailableNewsMonths(year);
  }

  if (
    (year && !availablemoths.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Failed to Delete Invoice");
  }

  return (
    <header id="archive-header">
      <ul>
        <li>
          {Links.map((year, index) => {
            return (
              <span key={index}>
                <Archivelinks href={`/archive/${year}`}>{year}</Archivelinks>
              </span>
            );
          })}
        </li>
        <li>
          {LinksMonth &&
            LinksMonth.map((month, index) => {
              let href = year
                ? `/archive/${year}/${month}`
                : `/archive/${month}`;
              return (
                <span key={index}>
                  <Archivelinks href={href}>{month}</Archivelinks>
                </span>
              );
            })}
        </li>
      </ul>
    </header>
  );
};

const ArchiveSpecificYear = async ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilterdNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default ArchiveSpecificYear;
