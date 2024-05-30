import React from "react";
import { heartHistory } from "../../../utils";
import { ArrowUp } from "../../../utils";

const HeartHistory = ({ activeUser }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-x-5 gap-y-4 items-center">
        {heartHistory.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.color }}
            className="text-defaultTextColor w-full lg:w-1/3 rounded-[1rem] flex flex-col items-center justify-center lg:items-start lg:justify-start px-4 py-2 ">
            <img src={item.img} alt="item-img" />
            <p className="text-base ">{item.label}</p>
            <p className="text-[1rem] lg:text-[1.875rem] font-Manrope font-[800] mt-[-0.2rem]">
              {item.label === "Temperature" ? `${item.value}°F` : item.value}
            </p>
            <p className="text-defaultText flex items-baseline gap-x-1 mt-3">
              {item.comment !== "Normal" && (
                <img src={ArrowUp} alt="item-img" />
              )}
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeartHistory;