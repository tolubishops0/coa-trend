import React, { useContext } from "react";
import NameList from "../Body/NameList/NameList";
import { DataContext } from "../../Context/DataContext";
import Loader from "../Loader/Loader";
import History from "./History/History";
import Profile from "./Profile/Profile";

const Body = () => {
  const { isLoading } = useContext(DataContext);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="xl:flex justify-between">
          <div className="w-[22%]">
            <NameList />
          </div>
          <div className="w-[50%]">
            {" "}
            <History />
          </div>
          <div className="w-[22%]">
            <Profile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
