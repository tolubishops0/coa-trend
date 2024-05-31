import React from "react";
import { heartHistory } from "../../../utils";
import { ArrowDown } from "../../../utils";

const HeartHistory = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-x-5 gap-y-4 items-center">
        {heartHistory.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.color }}
            className="text-defaultTextColor w-full lg:w-1/3 rounded-[1rem] flex flex-col items-center justify-center lg:items-start lg:justify-start px-4 xl:py-2 py-4">
            <img src={item.img} alt="item-img" className="w-[3rem] xl:hidden" />
            <img src={item.img} alt="item-img" className="hidden xl:block" />
            <p className="text-base font-medium mt-2">{item.label}</p>
            <p className="text-[1rem] lg:text-[1.875rem] font-[800] mt-[-0.2rem]">
              {item.label === "Temperature" ? `${item.value}°F` : item.value}
            </p>
            <p className="text-defaultText font-medium flex items-baseline gap-x-1 mt-2">
              {item.comment !== "Normal" && (
                <img src={ArrowDown} alt="item-img" />
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
