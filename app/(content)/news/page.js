import Newslist from "@/components/News-list";
import { getAllNews } from "@/lib/news";
const Newspage = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <Newslist news={news} />
    </>
  );
};

export default Newspage;
