"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

const ImageIntercept = ({ params }) => {
  const router = useRouter();
  const newItemsId = params.slug;
  const item = DUMMY_NEWS.find((item) => item.slug === newItemsId);

  if (!item) {
    notFound();
  }
  return (
    <>
      <div
        className="modal-backdrop"
        onClick={router.back}
        style={{ cursor: "pointer" }}
      />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
      </dialog>
    </>
  );
};

export default ImageIntercept;
