import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import {
  ChevronLeft,
  HeartIcon,
  PlayCircle,
  PlayIcon,
  StarIcon,
} from "lucide-react";
import timeFormat from "../lib/timeFormat";
import DateSelect from "../Components/DateSelect";
import MovieCard from "../Components/MovieCard";
import Loading from "../Components/Loading";

const MovieDetails = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getShow = async () => {
    const showDetails = dummyShowsData.find((movie) => movie._id === id);
    if (showDetails) {
      setShow(showDetails);
    } else {
      <Loading />;
    }
  };
  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="pt-30 md:pt-50 px-6 md:px-16 lg:px-40">
      <div className="flex flex-col md:flex-row gap-8 mx-auto">
        <img
          src={show.poster_path}
          alt="movie_image"
          className="max-md:mx-auto rounded-lg h-104 max-w-70 object-cover"
        />
        <div className="flex flex-col gap-3">
          <p className="text-lg ">English</p>
          <h1 className="text-4xl font-semibold text-balance max-w-96">
            {show.title}
          </h1>
          <div className="flex gap-3 items-center">
            <StarIcon className="text-white fill-white h-4.5 w-4.5" />
            <p className="text-gray-300">
              {show.vote_average.toFixed(1)} User Rating
            </p>
          </div>
          <p className="text-sm text-gray-300 max-w-xl">{show.overview}</p>
          <p>
            {timeFormat(show.runtime)} •{" "}
            {show.genres.map((genre) => genre.name).join(", ")} •{" "}
            {show.release_date.split("-")[0]}
          </p>
          <div className="flex flex-wrap gap-5 mt-2 items-center ">
            <button className="bg-white/10 backdrop-blur px-8 py-3 rounded-lg cursor-pointer flex gap-2 items-center active:scale-95 transition">
              {" "}
              <PlayCircle className="h-5 w-5" />
              Watch Trailer
            </button>
            <a
              href="#dateSelect"
              className=" active:scale-95 transition bg-white/10 backdrop-blur px-8 py-3 rounded-lg cursor-pointer"
            >
              Buy Tickets
            </a>
            <button className=" active:scale-95 transition p-3 rounded-full bg-white/10 backdrop-blur">
              <HeartIcon className="h-5 w-5 hover:fill-white text-black cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold mt-20">Movie Cast</p>
        <div className="mt-5 flex items-center gap-3 w-max px-4">
          {show.casts.slice(0, 11).map((cast, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <img
                src={cast.profile_path}
                alt="cast_image"
                className="rounded-full h-20 object-cover aspect-square"
              />
              <p className="text-xs  mt-3 font-medium">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <DateSelect dateTime={show.release_date} movieId={id} />
        <p className="font-semibold mt-20 mb-8 text-xl ">You May Also Like</p>
        <div className="flex gap-8  max-sm:justify-center">
          {dummyShowsData.slice(0, 4).map((movie, index) => (
            <MovieCard key={index} showData={movie} />
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <button
            className="font-medium cursor-pointer bg-white/50 backdrop-blur 
        text-black py-3 px-10 rounded-lg transition hover:scale-110 active:scale-95 
        duration-300"
            onClick={() => navigate("/movies")}
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
};

export default MovieDetails;
