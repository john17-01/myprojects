import { dummyShowsData } from "../assets/assets";
import MovieCard from "../Components/MovieCard";

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="mt-30 p-10">
      <p className="text-lg font-semibold text-gray-300">Movies in Theatres</p>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {dummyShowsData.map((data) => (
          <MovieCard key={data._id} showData={data} />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h1 className="text-xl text-center font-semibold mt-40">
        No Shows Available
      </h1>
    </div>
  );
};

export default Movies;
