import Newslist from "@/components/News-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

const ArchiveSpecificYear = ({ params }) => {
  const filter = params.filter;
  console.log(filter);
  const getyear = getNewsForYear(filter);
  const Links = getAvailableNewsYears();
  return (
    <>
      {/* <h1>specific archive year </h1> */}
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
      <Newslist news={getyear} />
    </>
  );
};

export default ArchiveSpecificYear;
