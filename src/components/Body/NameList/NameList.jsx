import React, { useContext, useState } from "react";
import { docNav, search, moreshor } from "../../../utils";
import { DataContext } from "../../../Context/DataContext";
import Slider from "../../Slider/Slider";

const NameList = ({ peopleData }) => {
  const [name, setName] = useState("Jessica Taylor");
  const [showNameList, setShowNameList] = useState(false);
  function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
  }
  const handleNameListSm = () => {
    setShowNameList(!showNameList);
    console.log("clicked");
  };

  return (
    <div className="px-4 xl:p-0">
      <Slider handleNameListSm={handleNameListSm} showNameList={showNameList} />
      <div
        className={`fixed w-[100%] xl:w-[20%] bg-white rounded-[1rem] transition-all duration-500 ease-in h-full ${
          showNameList ? "left-[0]" : "left-[-100%]"
        }`}>
        <div className=" flex flex-col gap-y-2 ">
          <div className="flex justify-between item-center p-3">
            <p className="font-bold text-base  lg:text-headerText ">Patients</p>
            <img src={search} alt="searc icon" className="w-[1rem]" />
          </div>
          <div className="patient-list flex flex-col w-full">
            {peopleData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` cursor-pointer ${
                    name === item.name &&
                    "bg-[#D8FCF7] transition duration-1000 ease-in-out"
                  }`}>
                  <div
                    onClick={() => setName(item.name)}
                    className="flex justify-between item-center p-4">
                    <div className="flex justify-center item-center gap-x-2">
                      <img
                        src={docNav}
                        alt="searc icon"
                        className="w-[2.5rem] h-[2.5rem]"
                      />
                      <div className="text-defaultText">
                        <p className="text-defaultColorText font-bold capitalize">
                          {item.name}
                        </p>
                        <p className="text-subTextColor font-medium capitalize">
                          {item.sex}, {calculateAge(item.date_of_birth)}
                        </p>
                      </div>
                    </div>
                    <img src={moreshor} alt="searc icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameList;
