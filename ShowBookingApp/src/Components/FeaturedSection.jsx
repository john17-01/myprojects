import React from "react";
import BlurBackground from "./BlurBackground";
import { ArrowRight } from "lucide-react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "./MovieCard";

const FeaturedSection = () => {
  return (
    <div>
      <BlurBackground top="0" right="-80" />
      <div className="flex justify-between px-10 py-2 mt-10">
        <p className="font-semibold">Now Showing</p>
        <div className="flex items-center gap-1">
          <p>View All</p>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
      <div>
        <MovieCard showData={dummyShowsData} />
      </div>

      <button className="flex items-center gap-1 justify-center rounded-lg bg-white/10 mx-auto w-50 px-10 py-5 group text-sm tranform transition-transform hover:scale-110 duration-500 ease-in-out">
        Show More
        <ArrowRight className="w-4.5 h-4.5 tranform transition-transform duration-500 group-hover:translate-x-2" />
      </button>
    </div>
  );
};

export default FeaturedSection;
