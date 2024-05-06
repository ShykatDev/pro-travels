import React from "react";
import { Checkbox } from "../ui/checkbox";

const FilterOption = ({ label, reg, setFilterKey }) => {
  const handleChange = (e) => {
    if (e) {
      setFilterKey((prev) => [...prev, label]);
    } else {
      setFilterKey((prev) => prev.filter((item) => item !== label));
    }
  };
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={reg} onCheckedChange={handleChange} />
      <label
        htmlFor={reg}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-neutral-400"
      >
        {label}
      </label>
    </div>
  );
};

export default FilterOption;
