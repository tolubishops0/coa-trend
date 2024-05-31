import React from "react";

const Diagonistics = ({ personData }) => {
  return (
    <div className="bg-white rounded-[1rem] px-3 h-[20rem]">
      <div className="w-[100%]mx-auto">
        <p
          id="nameListTitle"
          className="font-bold text-[1rem] lg:text-headerText pt-3 pb-6">
          Diagnosis List
        </p>
      </div>
      <div className="overflow-x-auto ">
        <div className="min-w-[32rem] xl:min-w-[30rem] flex justify-between items-center bg-[#f6f7f8] rounded-[4.375rem] font-bold  px-3 py-[0.8rem]">
          <p className=" w-1/3 flex items-center justify-start text-defaultText text-defaultColorText ">
            Problem/Diagnosis
          </p>
          <p className="w-1/2 flex items-center justify-start  text-defaultText text-defaultColorText ">
            Description
          </p>
          <p className="w-1/6 text-defaultText text-defaultColorText ">
            Status
          </p>
        </div>
        <div className="max-h-[12rem] overflow-y-auto min-w-[32rem] xl:min-w-[30rem] px-3 py-3 flex flex-col gap-y-[.85rem] justify-between mb-1">
          {personData?.diagnostic_list.map((item, index) => (
            <React.Fragment key={index}>
              <div className="h-[4rem] flex items-center justify-between">
                <p className="flex items-center justify-start w-1/3 text-defaultText text-defaultColorText font-semibold">
                  {item.name}
                </p>
                <p className="flex items-center justify-start w-1/2 text-defaultText text-defaultColorText font-semibold">
                  {item.description}
                </p>
                <p className="w-1/6 text-defaultText text-defaultColorText font-semibold">
                  {item.status}
                </p>
              </div>
              {index !== personData?.diagnostic_list?.length - 1 && (
                <hr className="w-full border-bgColor" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diagonistics;
