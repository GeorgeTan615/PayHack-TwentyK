import { useState } from "react";
import { Tab } from "@headlessui/react";
import CurrentProgress from "./CurrentProgress";
import MonthyChart from "./MonthyChart";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ChartDashboard({
  categoriesNames,
}: {
  categoriesNames: any;
}) {
  const [categories, setCategories] = useState(() => {
    const initialCategories = {};

    categoriesNames.forEach((name) => {
      initialCategories[name] = [];
    });
    return initialCategories;
  });

  return (
    <div className="absolute bg-teal-500 w-full h-screen mt-[250px]">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.keys(categories).map((category) =>
            category === categoriesNames[0] ? (
              <CurrentProgress category={category} />
            ) : (
              <MonthyChart />
            )
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
