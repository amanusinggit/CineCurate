const Rating = ({ movieRating }) => {
  return (
    <div class="flex gap-2 items-center">
      {Array.from({ length: Math.round(movieRating / 2) }, (_, index) => (
        <i key={index} className="fa-solid fa-star text-gold-bright"></i>
      ))}
      {Array.from({ length: 5 - Math.round(movieRating / 2) }, (_, index) => (
        <i key={index} className="fa-solid fa-star"></i>
      ))}
    </div>
  );
};

export default Rating;
