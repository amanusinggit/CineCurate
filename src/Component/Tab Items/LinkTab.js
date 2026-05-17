import { IMDB_URL } from "../../Constants/constants";

const LinkTab = ({ movie }) => {
  return (
    <div className="">
      {movie?.imdb_id && (
        <a
          href={IMDB_URL + movie.imdb_id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative overflow-hidden w-4/12 border-2 border-l-8 border-gold-bright rounded-lg px-6 py-4 my-4 text-gold-bright group cursor-pointer">
            <span className="absolute inset-0 bg-gold-bright origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-void">
              IMDB
            </span>
          </div>
        </a>
      )}
      {movie.homepage && (
        <a href={movie?.homepage} target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden w-4/12 border-2 border-l-8 border-gold-bright rounded-lg px-6 py-4 my-4 text-gold-bright group cursor-pointer">
            <span className="absolute inset-0 bg-gold-bright origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-void">
              HOMEPAGE
            </span>
          </div>
        </a>
      )}
    </div>
  );
};

export default LinkTab;
