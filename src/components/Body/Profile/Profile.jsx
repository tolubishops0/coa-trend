import React, { useContext } from "react";
import { DataContext } from "../../../Context/DataContext";

const Profile = () => {
  const { peopleData } = useContext(DataContext);

  return (
    <div className="bg-white rounded-[1rem] w-full h-full">
      <div>
        <img />
      </div>
    </div>
  );
};

export default Profile;
