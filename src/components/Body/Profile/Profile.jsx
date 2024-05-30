import React, { useState, useContext } from "react";
import { DataContext } from "../../../Context/DataContext";
import {
  PhoneIcon,
  FemaleIcon,
  InsuranceIcon,
  BirthIcon,
  formatDate,
  downloadIcon,
  labHistory,
} from "../../../utils";

const Profile = () => {
  const { personData } = useContext(DataContext);
  const [activeResultIndex, setActiveResultIndex] = useState(2);
  console.log(personData?.lab_results);

  const profileData = [
    {
      label: "date of birth",
      value: "formatDate",
      // value: formatDate(personData?.date_of_birth),
      icon: BirthIcon,
    },
    {
      label: "gender",
      value: personData?.gender,
      icon: FemaleIcon,
    },
    {
      label: "contact info",
      value: personData?.phone_number,
      icon: PhoneIcon,
    },
    {
      label: "emergency contacts",
      value: personData?.emergency_contact,
      icon: PhoneIcon,
    },
    {
      label: "insurance provider",
      value: personData?.insurance_type,
      icon: InsuranceIcon,
    },
  ];

  return (
    <div>
      <div className="bg-white rounded-[1rem] w-full ">
        <div className=" flex flex-col gap-y-8 py-7">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <img className="w-[50%]" src={personData?.profile_picture} />
            <p
              id="nameListTitle"
              className="font-bold text-[1rem] lg:text-headerText">
              {personData?.name}
            </p>
          </div>
          <div className="flex flex-col gap-y-5 items-start justify-left px-3">
            {profileData?.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-x-3">
                <img src={item.icon} />
                <div className="text-defaultColorText text-defaultText font-medium capitalize flex flex-col gap-y-1">
                  <p className="font-medium ">{item.label}</p>
                  <p className=" font-bold ">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="w-[70%] bg-[#01F0D0] text-defaultColorText text-defaultText font-semibold rounded-[4.375rem] h-10 capitalize">
              show all information
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[1rem] w-full mt-4">
        <div className=" px-3">
          <p
            id="nameListTitle"
            className="font-bold text-[1rem] lg:text-headerText pt-3 pb-6 capitalize">
            lab results
          </p>
          <div className="flex flex-col max-h-[10rem] overflow-y-auto ">
            {personData?.lab_results?.map((item, index) => (
              <div
                onClick={() => setActiveResultIndex(index)}
                key={index}
                className={`py-3 px-2 cursor-pointer h-[4rem] flex justify-between items-center transition duration-1000 ease-in-out ${
                  index === activeResultIndex && "bg-bgColor"
                }`}>
                <p className="text-defaultText text-defaultColorText font-semibold capitalize">
                  {item}
                </p>
                <img src={downloadIcon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
