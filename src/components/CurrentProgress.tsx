import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CurrentProgress(category: any) {
  return (
    <Tab.Panel
      key={category}
      className={classNames(
        "rounded-xl bg-white p-3",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 m-10"
      )}
    >
      <div className="flex w-100 justify-center mt-10">
        <div className="w-4/5 bg-gray-200 rounded-full h-10 dark:bg-gray-700 mt-5">
          <div className="bg-blue-600 h-10 rounded-full w-1/3"></div>
        </div>
      </div>
      <div className="flex justify-between mb-1 pt-3">
        <span className="text-base font-small text-black-700 ml-10">0%</span>
        <span className="text-base font-small text-back-700 mr-10">Limit</span>
      </div>
      <div className="mt-20 mb-20 ml-5 mr-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        suscipit, harum molestiae corporis eum animi alias consequuntur nostrum
        consectetur voluptas hic recusandae accusamus quibusdam eos enim
        perferendis dolore, quisquam ipsam.
      </div>
    </Tab.Panel>
  );
}
