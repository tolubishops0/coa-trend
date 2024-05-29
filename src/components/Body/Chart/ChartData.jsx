import React from "react";
import { ArrowUp } from "../../../utils";

const ChartData = ({ avgData }) => {
  return (
    <div className="flex justify-between xl:flex-col gap-y-3 ">
      <div className="flex flex-col gap-y-1 justify-start">
        <span className="flex items-center justify-start gap-x-2">
          <p className="rounded-full bg-[#E66FD2] w-2 h-2"></p>
          <p className="text-defaultColorText text-[0.875rem] font-semibold lg:font-bold">
            {" "}
            Systolic
          </p>
        </span>
        <p className="text-defaultColorText text-[0.875rem]  font-semibold lg:font-bold">
          {avgData.avgSys}
        </p>
        <span className="flex items-center justify-start gap-x-2">
          <img src={ArrowUp} alt="ArrowUp" className="hidden lg:block" />
          <p className="text-defaultColorText text-[0.875rem] font-normal lg:font-medium">
            Higher than Average
          </p>
        </span>
      </div>
      <hr className="bg-bgColor" />
      <div className="flex flex-col gap-y-1 justify-start">
        <span className="flex items-center justify-start gap-x-2">
          <p className="rounded-full bg-[#8C6FE6] w-2 h-2"></p>
          <p className="text-defaultColorText text-[0.875rem] font-bold">
            Diastolic
          </p>
        </span>
        <p className="text-defaultColorText text-[0.875rem] font-bold">
          {avgData.avgDia}
        </p>
        <span className="flex items-center justify-start gap-x-2">
          <img src={ArrowUp} alt="ArrowUp" className="hidden lg:block" />
          <p className="text-defaultColorText text-[0.875rem] font-semibold">
            Lower than Average
          </p>
        </span>
      </div>
    </div>
  );
};

export default ChartData;
