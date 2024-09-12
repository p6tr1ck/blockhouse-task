"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import fetchData from "../utils/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

export default function LineChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    async function loadData() {
      const result = await fetchData("line-chart-data");
      setChartData({
        labels: result.labels,
        datasets: [
          {
            label: "Dynamic Data",
            data: result.data,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
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
      <h2 className="text-center py-[20px]">Dynamic Line Chart Example</h2>
      <Line data={chartData} />
    </div>
  );
}
