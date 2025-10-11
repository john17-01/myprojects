import { useState } from "react";
import { Link } from "react-router";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, XIcon } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 flex flex-row items-center justify-between w-full px-6 py-3">
      <Link to="/">
        <img src={assets.logo} className="w-40 h-auto" />
      </Link>
      <div
        className={`flex md:flex-row items-center gap-8 backdrop-blur bg-black/70 md:bg-white/10 transition-[width] duration-300 z-50 px-8 py-3 mt-2  
      min-md:rounded-full border border-gray-300/20 overflow-hidden max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg
      max-md:flex-col max-md:justify-center max-md:h-screen ${
        isOpen ? "max-md:w-full" : "max-md:hidden"
      }`}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0), setIsOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to="/movies"
          onClick={() => {
            scrollTo(0, 0), setIsOpen(false);
          }}
        >
          Movies
        </Link>
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0), setIsOpen(false);
          }}
        >
          Theaters
        </Link>
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0), setIsOpen(false);
          }}
        >
          Releases
        </Link>
        <Link
          to="/favourites"
          onClick={() => {
            scrollTo(0, 0), setIsOpen(false);
          }}
        >
          Favourites
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <SearchIcon className="w-6 h-6 cursor-pointer max-md:hidden" />
        <button className="rounded-full font-medium cursor-pointer px-4 py-1 sm:px-7 sm:py-2 backdrop-blur bg-white/10 border border-bg-gray/30">
          Login
        </button>
      </div>
      <MenuIcon
        className="md:hidden max-md:ml-4 w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
};
export default NavBar;
