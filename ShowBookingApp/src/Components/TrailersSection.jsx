import React, { useState } from "react";
import ReactPlayer from "react-player";
import { dummyTrailers } from "../assets/assets";
import { PlayCircleIcon } from "lucide-react";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[1]);
  return (
    <div className="py-20 mt-10 px-10">
      <p className="text-lg font-medium text-gray-300 mx-auto">Trailers</p>
      <div className="mt-6">
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={true}
          width="960px"
          height="540px"
          playing={false}
          className="mx-auto"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 md:gap-8 mt-8 place-content-center">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="group-hover:not-hover:opacity-50 hover:-translate-y-1 cursor-pointer duration-300 transition max-md:h-60 md:max-h-60 relative"
            onClick={()=>setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailerImage"
              className="w-full h-full rounded-lg object-cover"
            />
            <PlayCircleIcon className="absolute top-1/2 right-1/2 w-5 h-5 md:w-8 md:h-12" />

          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
