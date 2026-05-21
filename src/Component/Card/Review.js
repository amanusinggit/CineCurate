import { useEffect, useRef, useState } from "react";
import Profile from "../Profile/Profile";

const Review = ({ review }) => {
  const reviewBox = useRef();
  const [enabled, setEnabled] = useState(true);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  useEffect(() => {
    const valueEightVH = Math.floor((window.innerHeight * 8) / 100);
    const reviewBoxHeight = reviewBox.current.offsetHeight;
    if (reviewBoxHeight < valueEightVH) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, []);
  return (
    <div className="relative px-4 py-8 m-5 border-b border-ash/50">
      {enabled && (
        <button
          className="absolute bottom-0 right-0 text-ash py-2 text-xs"
          onClick={() => {
            handleClick();
          }}
        >
          {active ? "See Less" : "See More"}
          <i className="fa-solid fa-arrow-right-long mx-3"></i>
        </button>
      )}
      <div className="flex gap-3">
        <Profile name={review.author} needHover={false} />
        <div className="w-full">
          <div className="font-bold text-xl text-celluloid pb-1">
            {review?.author}
          </div>
          <div className="flex text-ash text-xs gap-2">
            <span>{review?.author_details?.username}</span>
            <span>•</span>
            <span>{review?.created_at.split("-")[0]}</span>
          </div>
        </div>
      </div>
      <div
        ref={reviewBox}
        className={`my-2 h-auto max-h-[8vh] overflow-hidden ${active && "max-h-none"}`}
      >
        <p>{review.content}</p>
      </div>
    </div>
  );
};

export default Review;
