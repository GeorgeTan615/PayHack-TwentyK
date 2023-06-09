import { Tab } from "@headlessui/react";
import { BarChart } from "./BarChart";

export default function MonthyChart(category: any) {
  return (
    <Tab.Panel
      key={category}
      className={
        "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 m-10"
      }
    >
      <div className="m-5">
        <BarChart />
      </div>
    </Tab.Panel>
  );
}
