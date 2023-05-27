import { useState } from "react";
import Toggle from "@/components/Toggle";
import ChartDashboard from "@/components/ChartDashboard";

const ProtectPage = () => {
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState(50);
  const handleSliderChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="relative">
      <div className="flex justify-between pl-8 pr-8 pt-5 mt-5">
        <div className="text-xl font-medium">Protection</div>
        <Toggle enabled={enabled} setEnabled={setEnabled} />
      </div>
      {enabled ? (
        <input
          id="minmax-range"
          type="range"
          min="5"
          max="100"
          step="5"
          value={value}
          onChange={handleSliderChange}
          className="w-4/5 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-20"
          disabled
        />
      ) : (
        <input
          id="minmax-range"
          type="range"
          min="5"
          max="100"
          step="5"
          value={value}
          onChange={handleSliderChange}
          className="w-4/5 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-20"
        />
      )}
      <p className="text-md">Maximum value: {value}</p>

      {enabled ? (
        <ChartDashboard
          categoriesNames={["Current Progress", "Monthy Progress Chart"]}
        />
      ) : (
        <div className="hidden"></div>
      )}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          width: 24px; /* Adjust the width of the thumb */
          height: 24px; /* Adjust the height of the thumb */
          border-radius: 50%;
          background-color: teal;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px; /* Adjust the width of the thumb */
          height: 24px; /* Adjust the height of the thumb */
          border-radius: 50%;
          background-color: teal;
          cursor: pointer;
        }

        input[type="range"]::-ms-thumb {
          width: 24px; /* Adjust the width of the thumb */
          height: 24px; /* Adjust the height of the thumb */
          border-radius: 50%;
          background-color: teal;
          cursor: pointer;
        }
      `}</style>
      <div className="m-10">
      Your savings for insurance have a significant impact on your financial well-being. By building a substantial savings balance, you gain control and preparedness, allowing you to afford necessary coverage and providing a safety net for unexpected expenses. This empowers you with peace of mind, knowing that you have the means to protect yourself and navigate any challenges that may arise.
      </div>
    </div>
  );
};

export default ProtectPage;
