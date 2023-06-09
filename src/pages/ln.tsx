import { useState, useEffect } from "react";
import Toggle from "@/components/Toggle";
import LindungNowProtection from "@/components/LindungNowProtection";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import { updateUserValue } from "@/utils";
import { fetchUser } from "@/utils";

const ProtectPage = () => {
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState(5);
  const [amount, setAmount] = useState(0);

  const handleSliderChange = (event: any) => {
    setValue(Number(event.target.value));
    // Store values into local storage
    localStorage.setItem("value", value.toString());
  };

  useEffect(() => {
    const storedEnabled = localStorage.getItem("enable");
    const storedValue = localStorage.getItem("value");
    if (storedEnabled) {
      const isTrueSet = storedEnabled === "true";
      setEnabled(isTrueSet);
    }
    if (storedValue) {
      setValue(parseInt(storedValue));
      if (parseInt(storedValue) < value) {
        setValue(parseInt(storedValue) - 5);
      } else if (parseInt(storedValue) > value) {
        setValue(parseInt(storedValue) + 5);
      }
    }
  }, []);

  return (
    <div className="relative">
      <Link href="/">
        <IoChevronBack className="absolute ml-[30px]" size={40} />
      </Link>
      <div className="font-bold text-4xl text-center mt-10 bold">
        Lindung
        <span className="text-[#2f5597]">Now</span>
      </div>
      <div className="flex justify-between pl-10 pr-10 pt-5 mt-5">
        <div className="text-xl font-medium">
          Opt into LindungNow Protection
        </div>
        <Toggle enabled={enabled} setEnabled={setEnabled} />
      </div>
      <div className="mr-10 ml-10 mt-2 text-gray-500 italic">
        LindungNow shields you against financial fraud with comprehensive
        coverage, including reimbursement for losses, legal assistance, identity
        theft resolution, proactive monitoring, and educational resources. Gain
        peace of mind and secure your financial well-being with this essential
        safeguard.
      </div>
      {enabled ? (
        <div className="flex w-100 justify-center">
          <input
            id="minmax-range"
            type="range"
            min="5"
            max="100"
            step="5"
            value={value}
            onChange={handleSliderChange}
            className="w-4/5 h-3 bg-gray-500 rounded-lg appearance-none cursor-pointer mt-9"
          />
          <style jsx>{`
            input[type="range"]::-webkit-slider-thumb {
              width: 24px; /* Adjust the width of the thumb */
              height: 24px; /* Adjust the height of the thumb */
              border-radius: 50%;
              background-color: #2f5597;
              cursor: pointer;
              -webkit-appearance: none;
              appearance: none;
            }

            input[type="range"]::-moz-range-thumb {
              width: 24px; /* Adjust the width of the thumb */
              height: 24px; /* Adjust the height of the thumb */
              border-radius: 50%;
              background-color: #2f5597;
              cursor: pointer;
            }

            input[type="range"]::-ms-thumb {
              width: 24px; /* Adjust the width of the thumb */
              height: 24px; /* Adjust the height of the thumb */
              border-radius: 50%;
              background-color: #2f5597;
              cursor: pointer;
            }
          `}</style>
        </div>
      ) : (
        <div className="flex w-100 justify-center">
          <input
            id="minmax-range"
            type="range"
            min="5"
            max="100"
            step="5"
            value={value}
            onChange={handleSliderChange}
            className="w-4/5 h-3 bg-gray-400 rounded-lg appearance-none cursor-pointer mt-9"
            disabled
          />
          <style jsx>{`
            input[type="range"]::-webkit-slider-thumb {
              width: 24px; /* Adjust the width of the thumb */
              height: 24px; /* Adjust the height of the thumb */
              border-radius: 50%;
              background-color: gray;
              cursor: pointer;
              -webkit-appearance: none;
              appearance: none;
            }

            input[type="range"]::-moz-range-thumb {
              width: 24px; /* Adjust the width of the thumb */
              height: 24px; /* Adjust the height of the thumb */
              border-radius: 50%;
              background-color: gray;
              cursor: pointer;
            }

            input[type="range"]::-ms-thumb {
              width: 24px; /* Adjust the width of the thumb */
              height: 24px; /* Adjust the height of the thumb */
              border-radius: 50%;
              background-color: gray;
              cursor: pointer;
            }
          `}</style>
        </div>
      )}
      {enabled ? (
        <div className="flex w-100 justify-center p-5">
          <p className="text-2xl">Maximum value: {value}</p>
        </div>
      ) : (
        <div className="flex w-100 justify-center p-5">
          <p className="text-2xl text-gray-500">Maximum value: {value}</p>
        </div>
      )}

      {enabled ? (
        <LindungNowProtection
          categoriesNames={["Current Balance", "Monthly Balance"]}
        />
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default ProtectPage;
