import React, {useContext } from "react";
import NameList from "../Body/NameList/NameList";
import { DataContext } from "../../Context/DataContext";
import Loader from "../Loader/Loader";
import Chart from "./Chart/Chart";

const Body = () => {
  const { peopleData, isLoading } = useContext(DataContext);
  const activeName = peopleData.find(
    (person) => person.name === "Jessica Taylor"
  );

  return (
    <div>
      {isLoading && <Loader />}
      <div className="">
        <NameList peopleData={peopleData} />
        <Chart activeName={activeName} />
      </div>
    </div>
  );
};

export default Body;
