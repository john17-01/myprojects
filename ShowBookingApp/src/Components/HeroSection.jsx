import { ArrowRight, Calendar, Clock } from "lucide-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate=useNavigate();
  return (
    <div
      className='flex flex-col items-start justify-center gap-4 bg-[url("./assets/backgroundImage.png")] h-screen bg-cover bg-center
    px-6 md:px-16 lg:px-36'
    >
      <img
        src={assets.marvelLogo}
        alt="marvel Logo"
        className="max-h-11 mt-20 lg:h-11"
      />
      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        Guardians <br />
        Of the Galaxy
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Scifi</span>
        <div className="flex items-center gap-1">
          <Calendar className="w-4.5 h-4.5" />
          2018
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4.5 h-4.5" />
          2h 28min
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        In a post-apocalyptic world where cities ride on wheels and consume each
        other to survive, two people meet in London and try to stop a
        conspiracy.
      </p>
      <button
        className="group flex items-center gap-1 py-3 px-6 backdrop-blur bg-white/10 hover:border border-bg-gray/30 
       rounded-lg font-medium cursor-pointer transform transition-transform hover:scale-110 duration-600 ease-in-out"
      onClick={() => {
          navigate("/movies");
          scrollTo(0, 0);
        }}
      >
        Explore Movies
        <ArrowRight className="w-5 h-5 transform transition-transform duration-600 group-hover:translate-x-2 " />
      </button>
    </div>
  );
};

export default HeroSection;
