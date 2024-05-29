import React from "react";
import { Line } from "react-chartjs-2";
import { ArrowUp } from "../../../utils";
import { Chart, registerables, defaults } from "chart.js";
Chart.register(...registerables);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
// defaults.plugins.title.size = "2";
defaults.plugins.title.padding = "20";
defaults.plugins.title.font = "700";
defaults.plugins.title.color = "#072635";

const LineChart = ({ chartData }) => {
  return (
    <div className="relative h-[15rem] xl:h-[18rem] w-full">
      <span className="absolute right-[10%] top-[6.5%] lg:top-[6%] flex items-baseline justify-center gap-x-1">
        <p className=" text-black font-bold text-[0.7rem] sm:text-[.9rem]">
          Last Month
        </p>
        <img src={ArrowUp} alt="ArrowUp" />
      </span>
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
              font: (context) => {
                const width = context.chart.width;
                if (width < 350) {
                  return { size: 11, weight: 800 };
                } else {
                  return { size: 12, weight: 700 };
                }
              },
            },
            legend: {
              display: false,
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
              console.log(width);
              if (width < 350) {
                return { size: 8 };
              } else {
                return { size: 10 };
              }
            },
          },
          animation: {
            duration: 100,
          },
        }}
      />
    </div>
  );
};

export default LineChart;
