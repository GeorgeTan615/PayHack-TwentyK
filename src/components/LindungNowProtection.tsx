import { useState } from "react";
import { Tab } from "@headlessui/react";
import CurrentProgress from "./CurrentBalance";
import MonthyChart from "./MonthyBalance";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LindungNowProtection({
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
    <div className="absolute bg-[#66cc99] w-full h-max mt-3">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-lg bg-blue-900/20 p-1 h-[60px]">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-xl leading-5 text-blue-700 bold",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "bg-white/[0.12] text-white hover:bg-white/[0.12] hover:text-white"
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
