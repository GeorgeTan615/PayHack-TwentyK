import { Switch } from "@headlessui/react";

export default function Toggle({
  enabled,
  setEnabled,
}: {
  enabled: any;
  setEnabled: any;
}) {
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled(!enabled);
          localStorage.setItem("enable", (!enabled).toString());
        }}
        className={`${enabled ? "bg-[#2f5597]" : "bg-gray-500"}
            relative inline-flex h-[26px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-6" : "translate-x-0"}
              pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
