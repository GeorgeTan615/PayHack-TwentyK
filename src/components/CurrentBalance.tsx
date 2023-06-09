import { Tab } from "@headlessui/react";
import { fetchUser } from "@/utils";
import { useState, useEffect } from "react";

export default function CurrentBalance(category: any) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUser("123");
        setAmount(response.result.amount);
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };

    fetchData();
  }, [amount]);

  return (
    <Tab.Panel
      key={category}
      className={
        "rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 m-10"
      }
    >
      <div className="flex w-100 justify-center mt-5">
        <div className="w-4/5 bg-gray-300 rounded-full h-10 mt-5 overflow-hidden">
          <div
            style={{ width: `${amount}%` }}
            className={"h-full bg-[#2f5597] rounded-full"}
          ></div>
        </div>
      </div>
      <div className="flex justify-between pt-3">
        <span className="text-base font-small text-black-700 ml-10">RM0</span>
        <span className="text-black-700 bold text-3xl">RM{amount}</span>
        <span className="text-base font-small text-back-700 mr-10">RM100</span>
      </div>
      <div className="mt-5 mb-10 ml-5 mr-5 text-gray-500 italic">
        Your savings for insurance have a significant impact on your financial
        well-being. By building a substantial savings balance, you gain control
        and preparedness, allowing you to afford necessary coverage and
        providing a safety net for unexpected expenses. This empowers you with
        peace of mind, knowing that you have the means to protect yourself and
        navigate any challenges that may arise.
      </div>
    </Tab.Panel>
  );
}
