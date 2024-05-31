import React, { useContext } from "react";
import NameList from "../Body/NameList/NameList";
import { DataContext } from "../../Context/DataContext";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";
import History from "./History/History";
import Profile from "./Profile/Profile";
import { ToastContainer } from "react-toastify";

const Body = () => {
  const { isLoading, peopleList } = useContext(DataContext);

  return (
    <>
      <ToastContainer />
      {isLoading && !peopleList ? (
        <Loader />
      ) : (
        <div className="bg-bgColor">
          <div className="w-[90%] lg:w-[98%] mx-auto py-[1rem]">
            <NavBar />
            <div className="flex flex-col xl:flex-row xl:gap-x-6 xl:items-start ">
              <div className="xl:w-[22%] mt-6 ">
                <NameList />
              </div>
              <div className="xl:w-[55%] mt-6 ">
                <History />
              </div>
              <div className="xl:w-[23%] mt-6 xl:mt-[.7rem]">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
