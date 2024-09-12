"use client";

import { useState, useEffect } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import "chartjs-adapter-date-fns";
import "chartjs-chart-financial";
import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";
import fetchData from "../utils/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  CandlestickElement,
  CandlestickController
);

interface CandlestickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export default function CandlestickChart() {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: "Candlestick Data",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });

  useEffect(() => {
    async function loadData() {
      const result = await fetchData("candlestick-data");
      const formattedData = result.data.map((item: CandlestickData) => ({
        x: item.x,
        o: item.open,
        h: item.high,
        l: item.low,
        c: item.close,
      }));
      setChartData({
        datasets: [
          {
            label: "Candlestick Data",
            data: formattedData,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
          },
        ],
      });
    }

    loadData();
  }, []);

  const options: ChartOptions<"candlestick"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Candlestick Chart Example",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div
      className="flex flex-col justify-center flex-wrap lg:mx-[30px] md:mx-[20px] sm:mx-[10px]
    bg-slate-100 rounded-[20px] px-[30px] pb-[20px] mb-[50px]"
    >
      <h2 className="text-center py-[20px]">
        Dynamic Candlestick Chart Example
      </h2>
      <Chart type="candlestick" data={chartData} options={options} />
    </div>
  );
}
