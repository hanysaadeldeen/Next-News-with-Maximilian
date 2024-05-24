import { DUMMY_NEWS } from "@/dummy-news";

const ImageFull = ({ params }) => {
  const newItemsId = params.slug;
  const item = DUMMY_NEWS.find((item) => item.slug === newItemsId);

  if (!item) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${item.image}`} alt={item.title} />
    </div>
  );
};

export default ImageFull;
