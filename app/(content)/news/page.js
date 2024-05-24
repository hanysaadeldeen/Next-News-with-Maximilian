import Newslist from "@/components/News-list";
const Newspage = async () => {
  const response = await fetch("http://localhost:8080/news");

  const news = await response.json();

  if (!response.ok) {
    throw new Error("Faled to fetch news");
  }

  return (
    <>
      <h1>News Page</h1>
      <Newslist news={news} />
    </>
  );
};

export default Newspage;
