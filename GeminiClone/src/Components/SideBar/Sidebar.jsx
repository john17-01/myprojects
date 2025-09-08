import React from "react";
import { assets } from "../../../assets/assets";
import { useState, useContext } from "react";
import { Context } from "../../Context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, newChat } =
    useContext(Context);
  const toggleSideBar = () => {
    setExtended(!extended);
  };

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div
      className={`sideBar p-3  transition-all duration-100 ease-in-out ${
        extended ? "w-40" : "w-20"
      } bg-gray-200 min-h-screen inline-flex flex-col justify-between items-center cursor-pointer
      `}
    >
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="menu_icon"
          className="h-8 m-2"
          onClick={toggleSideBar}
        />
        <div
          className="newChat flex mt-7 p-2 hover:bg-gray-100 justify-center items-center rounded-2xl"
          onClick={()=>newChat()}
        >
          <img src={assets.plus_icon} alt="addicon" className="h-8 mr-3" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent mt-5">
            <p className="text-xl font-bold">Recent</p>
            {previousPrompt.map((item) => {
              return (
                <div
                  className="recentEntry flex  items-center hover:bg-gray-100 p-2 rounded-xl"
                  onClick={() => loadPrompt(item)}
                >
                  <img
                    src={assets.message_icon}
                    alt="message_icon"
                    className="h-8"
                  />
                  <p>{item.slice(0, 20) + "..."}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col">
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-100">
          <img
            src={assets.question_icon}
            alt="question_icon"
            className="h-5 mr-2"
          />
          {extended ? <p className="text-lg">Help</p> : null}
        </div>
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-100">
          <img
            src={assets.history_icon}
            alt="question_icon"
            className="h-5 mr-2"
          />
          {extended ? <p className="text-lg">Activity</p> : null}
        </div>
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-100">
          <img
            src={assets.setting_icon}
            alt="question_icon"
            className="h-5 mr-2"
          />
          {extended ? <p className="text-lg">Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
