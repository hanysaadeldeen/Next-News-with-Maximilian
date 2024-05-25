import { getNewsItem } from "@/lib/news";

const ImageFull = async ({ params }) => {
  const newItemsId = params.slug;
  const item = await getNewsItem(newItemsId);

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
