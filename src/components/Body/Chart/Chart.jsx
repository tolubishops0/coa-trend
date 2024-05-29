import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, defaults } from "chart.js";
Chart.register(...registerables);

defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.size = "2rem";
defaults.plugins.title.font = "700";
defaults.plugins.title.color = "#072635";

const LineChart = ({ chartData }) => {
  return (
    <div>
      <Line
        data={{
          labels: chartData.map((item) => item.month),
          datasets: [
            {
              label: "diastolic",
              data: chartData.map((item) => item.diastolic),
              backgroundColor: "#8C6FE6",
              borderColor: "#8C6FE6",
            },
            {
              label: "systolic",
              data: chartData.map((item) => item.systolic),
              backgroundColor: "#E66FD2",
              borderColor: "#E66FD2",
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: {
            title: {
              text: "Blood Pressure",
              font: {
                weight: "bold",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
