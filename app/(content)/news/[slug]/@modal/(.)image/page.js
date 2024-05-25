import Modalbackdrop from "@/components/Modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const ImageIntercept = async ({ params }) => {
  const newItemsId = params.slug;
  const item = await getNewsItem(newItemsId);

  if (!item) {
    notFound();
  }
  return (
    <>
      <Modalbackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
      </dialog>
    </>
  );
};

export default ImageIntercept;
