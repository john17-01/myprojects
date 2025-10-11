import { Outlet, useLocation } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <NavBar />}
      <Outlet />
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default Layout;
