import Archivelinks from "@/components/Archive-links";
import Newslist from "@/components/News-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

const ArchiveSpecificYear = ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news;

  let Links = getAvailableNewsYears();
  // console.log(Links);

  let LinksMonth;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    LinksMonth = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    LinksMonth = getAvailableNewsMonths(selectedYear);
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Failed to Delete Invoice");
  }

  let newsContent = <p>there is no news for choose news year</p>;

  if (news && news.length > 0) {
    newsContent = <Newslist news={news} />;
  }

  return (
    <>
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
              LinksMonth.map((year, index) => {
                let href = selectedYear
                  ? `/archive/${selectedYear}/${year}`
                  : `/archive/${year}`;
                return (
                  <span key={index}>
                    <Archivelinks href={href}>{year}</Archivelinks>
                  </span>
                );
              })}
          </li>
        </ul>
      </header>
      {newsContent}
    </>
  );
};

export default ArchiveSpecificYear;
