import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables, defaults } from "chart.js";
Chart.register(...registerables);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.size = "2rem";
defaults.plugins.title.font = "700";
defaults.plugins.title.color = "#072635";

const LineChart = ({ chartData }) => {
  return (
    <div className="h-[15rem] xl:h-[18rem] w-full">
      <Line
        data={{
          labels: chartData?.map((item) => item.month),
          datasets: [
            {
              label: "diastolic",
              data: chartData?.map((item) => item.diastolic),
              backgroundColor: "#8C6FE6",
              borderColor: "#8C6FE6",
            },
            {
              label: "systolic",
              data: chartData?.map((item) => item.systolic),
              backgroundColor: "#E66FD2",
              borderColor: "#E66FD2",
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
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
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: true,
              },
            },
          },
          ticks: {
            font: (context) => {
              const width = context.chart.width;
              if (width < 500) {
                return { size: 8 };
              } else {
                return { size: 10 };
              }
            },
          },
          animation: {
            duration: 500, 
          },
        }}
      />
    </div>
  );
};

export default LineChart;
