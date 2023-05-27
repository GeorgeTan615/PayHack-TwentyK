import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        font: {
          size: 15, // Set the desired font size for x-axis ticks
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 15, // Set the desired font size for y-axis ticks
        },
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Monthy Contributions",
      data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
      backgroundColor: "#2f5597",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} height={302} />;
}
