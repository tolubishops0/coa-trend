import React, { useContext } from "react";
import NameList from "../Body/NameList/NameList";
import { DataContext } from "../../Context/DataContext";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";
import History from "./History/History";
import Profile from "./Profile/Profile";

const Body = () => {
  const { isLoading, peopleData } = useContext(DataContext);

  return (
    <>
      {isLoading || !peopleData ? (
        <Loader />
      ) : (
        <div className="bg-bgColor">
          <div className="w-[90%] lg:w-[98%] mx-auto ">
            <NavBar />
            <div className="flex flex-col xl:flex-row xl:gap-x-6">
              <div className="xl:w-[25%] mt-6">
                <NameList />
              </div>
              <div className="xl:w-[55%] mt-6">
                {" "}
                <History />
              </div>
              <div className="xl:w-[20%]  mt-4">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      )}
    </>

    //  <div className="bg-bgColor">
    //     <div className="w-[90%] lg:w-[98%] mx-auto ">
    //       <div>
    //         <NavBar />
    //       </div>
    //       <main>
    //         <Body />
    //       </main>
    //     </div>
    //   </div>
  );
};

export default Body;
