import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../Context/DataContext";
import LineChart from "../Chart/Chart";
import ChartData from "../Chart/ChartData";
import { monthMapping } from "../../../utils";
import HeartHistory from "../Chart/HeartHistory";
import Diagonistics from "../Chart/Diagonistics";

const History = () => {
  const { peopleData } = useContext(DataContext);
  const [chartData, setChartData] = useState([]);
  const [activeUser, setActiveUser] = useState();
  const [avgData, setAvgData] = useState({
    avgDia: "",
    avgSys: "",
  });

  useEffect(() => {
    const activeName = peopleData?.find(
      (person) => person.name === "Jessica Taylor"
    );
    setActiveUser(activeName);
    const blooadPressuredata = activeName?.diagnosis_history.map((record) => ({
      month: `${monthMapping[record.month]} ${record.year}`,
      diastolic: record.blood_pressure.diastolic.value,
      systolic: record.blood_pressure.systolic.value,
    }));
    setChartData(blooadPressuredata?.slice(0, 6));

    const totalSystolic = blooadPressuredata?.reduce(
      (acc, cur) => acc + cur.systolic,
      0
    );
    const totalDiastolic = blooadPressuredata?.reduce(
      (acc, cur) => acc + cur.diastolic,
      0
    );

    setAvgData({
      avgDia: (totalDiastolic / chartData?.length).toFixed(0),
      avgSys: (totalSystolic / chartData?.length).toFixed(0),
    });
  }, [peopleData]);

  return (
    <div>
      <div className="bg-white rounded-[1rem]">
        <div className="w-[100%] px-3 mx-auto">
          <p
            id="nameListTitle"
            className="font-bold text-[1rem] lg:text-headerText pt-3 pb-6">
            Diagnosis History
          </p>
          <div className="bg-[#F4F0FE] rounded-[12px] pb-6 xl:pb-3 px-2 xl:px-2 gap-y-4 xl:gap-x-[1rem] flex flex-col xl:flex-row items-start">
            <div className="xl:w-[70%] w-[100%] ">
              <LineChart chartData={chartData} />
            </div>
            <div className="xl:w-[30%] w-[100%] mt-2 xl:mt-4">
              <ChartData avgData={avgData} chartData={chartData} />
            </div>
          </div>
          <div className="py-4">
            <HeartHistory activeUser={activeUser} />
          </div>
        </div>
      </div>
      <div className="my-4">
        <Diagonistics activeUser={activeUser} />
      </div>
    </div>
  );
};

export default History;
