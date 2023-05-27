import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CurrentBalance(category: any) {
  return (
    <Tab.Panel
      key={category}
      className={classNames(
        "rounded-xl bg-white p-3",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 m-10"
      )}
    >
      <div className="flex w-100 justify-center mt-5">
        <div className="w-4/5 bg-gray-300 rounded-full h-10 mt-5">
          <div className="bg-[#2f5597] h-10 rounded-full w-1/3"></div>
        </div>
      </div>
      <div className="flex justify-between pt-3">
        <span className="text-base font-small text-black-700 ml-10">RM0</span>
        <span className="text-black-700 bold text-3xl">RM50.00</span>
        <span className="text-base font-small text-back-700 mr-10">RM100</span>
      </div>
      <div className="mt-5 mb-10 ml-5 mr-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        suscipit, harum molestiae corporis eum animi alias consequuntur nostrum
        consectetur voluptas hic recusandae accusamus quibusdam eos enim
        perferendis dolore, quisquam ipsam.
      </div>
    </Tab.Panel>
  );
}
