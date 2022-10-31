import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Lượt truy cập",
      backgroundColor: "blue",
      borderColor: "blue",
      data: [10, 27, 56, 34, 24, 53],
      tension: 0.4,
    },
    {
      label: "Người đăng nhập",
      backgroundColor: "red",
      borderColor: "red",
      data: [0, 34, 32, 23, 2, 82],
      tension: 0.4,
    },
    {
      label: "Lượt người offline",
      backgroundColor: "yellow",
      borderColor: "yellow",
      data: [0, 2, 6, 3, 2, 0],
      tension: 0.4,
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
