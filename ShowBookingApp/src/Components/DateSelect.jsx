import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const DateSelect = ({ dateTime }) => {
  return (
    <div
      id="dateSelect"
      className="mt-20 w-auto border bg-white/10 p-10 rounded-md"
    >
      <p className="text-lg font-semibold">Choose Date</p>
      <div className="flex mt-5 justify-between items-center">
        <div className="flex gap-4 items-center">
          <ChevronLeft className="h-7 w-7 cursor-pointer" />
          <span className="flex gap-4">
            {Object.keys(dateTime).map((date) => (
              <button
                key={date}
                className="flex flex-col p-2 px-3 text-md rounded-lg border border-white cursor-pointer transform hover:scale-110"
              >
                <span>{new Date(date).getDate()}</span>
                <span>
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>
              </button>
            ))}
          </span>
          <ChevronRight className="h-7 w-7 cursor-pointer" />
        </div>
        <div>
          <button className="text-sm bg-white/10  backdrop-blur border border-white px-8 py-3 rounded-md transition-all duration-150 hover:scale-105 cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;
