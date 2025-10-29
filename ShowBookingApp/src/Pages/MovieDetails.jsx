import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import { HeartIcon, StarIcon } from "lucide-react";
import timeFormat from "../lib/timeFormat";

const MovieDetails = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  const getShow = async () => {
    const showDetails = dummyShowsData.find((movie) => movie._id === id);
    setShow(showDetails);
  };
  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="pt-30 md:pt-50 px-6 md:px-16 lg:px-40">
      <div className="flex flex-col gap-8 mx-auto">
        <img
          src={show.poster_path}
          alt="movie_image"
          className="max-md:mx-auto rounded-lg h-104 max-w-70 object-cover"
        />
        <div>
          <p>English</p>
          <h1>{show.title}</h1>
          <div>
            <StarIcon className="text-white fill-white h-4.5 w-4.5" />
            <p>{show.vote_average.toFixed(1)} User Rating</p>
          </div>
          <p>{show.overview}</p>
          <p>
            {timeFormat(show.runtime)} •{" "}
            {show.genres.map((genre) => genre.name).join(", ")} •{" "}
            {show.release_date.split("-")[0]}
          </p>
          <div>
            <button>Watch Trailer</button>
            <button>Buy Tickets</button>
            <HeartIcon />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default MovieDetails;
