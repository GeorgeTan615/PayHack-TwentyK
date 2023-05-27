import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          size: 15, // Set the desired font size for legend labels
        },
      },
    },
  },
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

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export const data = {
  labels,
  datasets: [
    {
      label: "Monthy Contributions",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
