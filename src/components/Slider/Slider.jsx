import React from "react";
import { rightIcon } from "../../utils";

const Slider = ({ showNameList, handleNameListSm }) => {
  return (
    <div
      onClick={() => handleNameListSm()}
      className={`absolute top-[50%] z-50 xl:hidden bg-[rgb(90,89,89)] transition-all duration-500 ease-in  p-3 rounded-full ${
        showNameList ? "left-[85%]" : "left-[2%]"
      }`}>
      <img src={rightIcon} alt="sliding-icon" />
    </div>
  );
};

export default Slider;
