import Home from "./Pages/Home";
import { Routes, Route } from "react-router";
import Layout from "./Components/Layout";
import MovieLayout from "./Components/MovieLayout";
import MovieDetails from "./Pages/MovieDetails";
import Movies from "./Pages/Movies";
import MyBookings from "./Pages/MyBookings";
import Favourites from "./Pages/Favourites";
import SeatLayout from "./Pages/SeatLayout";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MovieLayout />}>
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetails />} />
            <Route path=":id/:date" element={<SeatLayout />} />
          </Route>
          <Route path="favourites" element={<Favourites />} />
          <Route path="myBookings" element={<MyBookings />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
