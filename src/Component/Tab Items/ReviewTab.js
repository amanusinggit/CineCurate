import Review from "../Card/Review";

const ReviewsTab = ({ reviews }) => {
  return (
    <div>
      {reviews?.total_results > 0 ? (
        reviews?.results.map((review) => <Review review={review} />)
      ) : (
        <div className="text-ash text-xl flex justify-center">
          No Reviews To Show
        </div>
      )}
    </div>
  );
};

export default ReviewsTab;
