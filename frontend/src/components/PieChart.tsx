"use client";

import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import fetchData from "../utils/data";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

export default function PieChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    async function loadData() {
      const result = await fetchData("pie-chart-data");
      setChartData({
        labels: result.labels,
        datasets: [
          {
            label: "Dynamic Data",
            data: result.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    }

    loadData();
  }, []);

  return (
    <div
      className="flex flex-col justify-center flex-wrap lg:mx-[30px] md:mx-[20px] sm:mx-[10px]
    bg-slate-100 rounded-[20px] px-[30px] pb-[20px] mb-[50px]"
    >
      <h2 className="text-center py-[30px]">Dynamic Pie Chart Example</h2>
      <Pie data={chartData} />
    </div>
  );
}
