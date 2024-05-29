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
        <div className=" flex flex-col xl:flex-row xl:gap-x-6">
          <div className="xl:w-[25%]">
            <NameList />
          </div>
          <div className="xl:w-[55%]">
            {" "}
            <History />
          </div>
          <div className="xl:w-[20%]">
            <Profile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
