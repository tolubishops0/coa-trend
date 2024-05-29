import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../Context/DataContext";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { monthMapping } from "../../../utils";

const Chart = () => {
  const { peopleData } = useContext(DataContext);
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    const activeName = peopleData.find(
      (person) => person.name === "Jessica Taylor"
    );
    const blooadPressuredata = activeName.diagnosis_history.map((record) => ({
      month: `${monthMapping[record.month]} ${record.year}`,
      diastolic: record.blood_pressure.diastolic.value,
      systolic: record.blood_pressure.systolic.value,
    }));
    setChartData(blooadPressuredata);
  }, [peopleData]);

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={350} data={chartData}>
          <CartesianGrid strokeDasharray="3 3 " />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="diastolic" stroke="#8C6FE6" />
          <Line type="monotone" dataKey="systolic" stroke="#E66FD2" />
        </LineChart>{" "}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
