import { Outlet } from "react-router";

const MovieLayout = () => {
  return (
    <div>
      <h1>Movie Layout</h1>
      <Outlet />
    </div>
  );
};

export default MovieLayout;
