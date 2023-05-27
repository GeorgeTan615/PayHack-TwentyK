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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const LineChart = ({
  title,
  chartLabels,
  chartData,
}: {
  title: string;
  chartLabels: string[];
  chartData: number[];
}) => {
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "USD",
        data: chartData,
        borderColor: "#C36CEC",
      },
    ],
  };

  const options = {
    plugins: {
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
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[280px]">
      {chartLabels.length > 0 ? (
        <Line options={options} data={data} />
      ) : (
        <div className="flex flex-col h-full items-center justify-center text-lg text-[#898989]">
          No {title.toLowerCase()} made
        </div>
      )}
    </div>
  );
};

export default LineChart;
