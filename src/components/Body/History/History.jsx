import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../Context/DataContext";
import LineChart from "../Chart/Chart";
import { monthMapping } from "../../../utils";

const History = () => {
  const { peopleData } = useContext(DataContext);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const activeName = peopleData?.find(
      (person) => person.name === "Jessica Taylor"
    );
    const blooadPressuredata = activeName?.diagnosis_history.map((record) => ({
      month: `${monthMapping[record.month]} ${record.year}`,
      diastolic: record.blood_pressure.diastolic.value,
      systolic: record.blood_pressure.systolic.value,
    }));
    setChartData(blooadPressuredata?.slice(0, 6));
  }, [peopleData]);

  return (
    <div className="bg-white rounded-[1rem]">
      <div className="w-[95%] mx-auto">
        <p
          id="nameListTitle"
          className="font-bold text-[1rem] lg:text-headerText p-[1rem]">
          Diagnosis History
        </p>
        <div className="bg-[#F4F0FE] ">
          <LineChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default History;
