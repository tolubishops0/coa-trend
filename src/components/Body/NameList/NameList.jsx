import React, { useState, useContext } from "react";
import { docNav, search, moreshor } from "../../../utils";
import Slider from "../../Slider/Slider";
import { DataContext } from "../../../Context/DataContext";

const NameList = () => {
  const { peopleData } = useContext(DataContext);
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
  };

  return (
    <div className="px-4 xl:p-0">
      <div className="xl:hidden">
        <Slider
          handleNameListSm={handleNameListSm}
          showNameList={showNameList}
        />
      </div>
      <div
        className={`fixed w-[100%] xl:static bg-white rounded-[1rem] transition-all duration-500 ease-in h-full ${
          showNameList ? "left-[0]" : "left-[-100%] xl:left-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="nameListTitle">
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between item-center p-3">
            <p
              id="nameListTitle"
              className="font-bold text-[1rem] lg:text-headerText">
              Patients
            </p>
            <button aria-label="Search">
              <img src={search} alt="Search icon" className="w-[1rem]" />
            </button>
          </div>
          <div className="patient-list flex flex-col w-full mb-2" role="list">
            {peopleData.map((item, index) => {
              const isActive = name === item.name;
              return (
                <div
                  key={index}
                  role="listitem"
                  aria-current={isActive ? "true" : "false"}
                  className={`cursor-pointer ${
                    isActive &&
                    "bg-[#D8FCF7] transition duration-1000 ease-in-out"
                  }`}>
                  <div
                    onClick={() => setName(item.name)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setName(item.name);
                      }
                    }}
                    tabIndex="0"
                    className="flex justify-between item-center p-4">
                    <div className="flex justify-center items-center gap-x-2">
                      <img
                        src={item.profile_picture}
                        alt={`${item.name}'s avatar`}
                        className="w-[2rem] h-[2rem]"
                      />
                      <div className="text-defaultText">
                        <p className="text-defaultColorText font-bold capitalize">
                          {item.name}
                        </p>
                        <p className="text-subTextColor font-medium capitalize">
                          {item.gender}, {calculateAge(item.date_of_birth)}
                        </p>
                      </div>
                    </div>
                    <button aria-label={`More options for ${item.name}`}>
                      <img src={moreshor} alt="More options icon" />
                    </button>
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
