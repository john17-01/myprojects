import React, { useContext } from "react";
import { assets } from "../../../assets/assets";
import { Context } from "../../Context/Context";

const Hero = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-between m-5 items-center">
        <h1 className="text-3xl">Gemini</h1>
        <img src={assets.user_icon} className="rounded-full h-10 w-10" />
      </div>
      <div className="max-w-[900px] mx-20">
        {!showResult ? (
          <>
            <div className="greet mt-[30px] mb-[20px] text-[56px] font-medium p-[20px]">
              <p className="text-[60px]">
                <span>Hello John</span>
              </p>
              <p className="text-[30px]">How can I help you today?</p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 p-4">
              <div
                className="card border-4 border-indigo-600 text-center h-[200px] p-4 rounded-lg flex flex-col justify-between cursor-pointer"
                onClick={() =>
                  setInput("Briefly summarize this concept: urban planning")
                }
              >
                <p className="text-[17px] mb-2">
                  Briefly summarize this concept: urban planning
                </p>
                <img
                  src={assets.bulb_icon}
                  className="mx-[70%] w-10 h-10 bg-gray-500 p-2 rounded-full"
                />
              </div>

              <div className="card border-4 border-indigo-600 text-center h-[200px] p-4 rounded-lg flex flex-col justify-between cursor-pointer">
                <p className="text-[17px] mb-2">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  src={assets.compass_icon}
                  className="mx-[70%] w-10 h-10 bg-gray-500 p-2 rounded-full"
                />
              </div>

              <div className="card border-4 border-indigo-600 text-center h-[200px] p-4 rounded-lg flex flex-col justify-between cursor-pointer">
                <p className="text-[17px] mb-2">
                  Tell me about React js and React native
                </p>
                <img
                  src={assets.code_icon}
                  className="mx-[70%] w-10 h-10 bg-gray-500 p-2 rounded-full"
                />
              </div>

              <div className="card border-4 border-indigo-600 text-center h-[200px] p-4 rounded-lg flex flex-col justify-between cursor-pointer">
                <p className="text-[17px] mb-2">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  src={assets.message_icon}
                  className="mx-[70%] w-10 h-10 bg-gray-500 p-2 rounded-full"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result m-5 flex flex-col h-[65vh] overflow-y-scroll">
            <div className="inputText flex flex-col items-end mb-5">
              <img
                src={assets.user_icon}
                className="rounded-full h-10 w-10 mb-5"
              />
              <p className="bg-gray-200 p-2 rounded-lg w-auto">
                {recentPrompt}
              </p>
            </div>
            <div className="result flex flex-col items-start">
              {loading ? (
                <div className="Loader w-full flex flex-col">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <div>
                  <img src={assets.gemini_icon} className="w-13 h-13" />
                  <p
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="bg-gray-200 p-2 rounded-lg w-auto"
                  ></p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="main_bottom border border-indigo-600 mx-23 my-5 rounded-lg p-2 max-w-[900px]">
        <div className="searchtext flex justify-between">
          <input
            type="text"
            placeholder="Enter Your Prompt Here"
            className="w-[90%] border-none outline-none"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className="searchImages flex mr-2 cursor-pointer">
            <img
              src={assets.gallery_icon}
              alt="gallery_icon"
              className="h-5 mr-3"
            />
            <img src={assets.mic_icon} alt="mic_icon" className="h-5 mr-3" />
            <img
              src={assets.send_icon}
              alt="send_icon"
              className="h-5"
              onClick={() => onSent()}
            />
          </div>
        </div>
      </div>
      <div className="footer flex justify-center mx-20 max-w-[900px] text-sm">
        <p>
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Hero;
