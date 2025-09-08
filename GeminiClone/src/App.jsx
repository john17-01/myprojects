import React from "react";
import SideBar from "./Components/SideBar/Sidebar";
import Hero from "./Components/Main/Hero";
const App = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Hero />
      </div>
    </>
  );
};

export default App;
